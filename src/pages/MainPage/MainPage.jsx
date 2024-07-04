import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDrawerContext } from 'contexts/DrawerContext';
import { useUserContext } from 'contexts/UserContext';

import BottomSheet from 'components/BottomSheet/BottomSheet';
import CTAButton from 'components/CTAButton/CTAButton';
import Drawer from 'components/Drawer/Drawer';
import Icon from 'components/Icon/Icon';
import Animation from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import NaverMapWithMarker from 'components/NaverMap/NaverMap';

import lego from 'assets/lego.json';
import { GUIDE } from 'constants';

export default function MainPage() {
  const { user } = useUserContext();
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [isLoading, setIsLoading] = useState();
  const [focusedMarker, setFocusedMarker] = useState();
  const mainRef = useRef(null);
  const handleBottomSheet = () => {
    setFocusedMarker(null);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const { current: mainElement } = mainRef;

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('click', handleBottomSheet);
      }
    };
  }, []);

  if (isLoading) return <Animation animationData={lego} />;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section ref={mainRef} onClick={handleBottomSheet}>
      <Navbar toggleDrawer={toggleDrawer} />
      <NaverMapWithMarker setFocusedMarker={setFocusedMarker} />
      {isOpen && <Drawer />}
      {user?.rentalState && (
        <BottomSheet>
          <CTAButton type='white'>반납하기</CTAButton>
        </BottomSheet>
      )}
      {focusedMarker && (
        <BottomSheet>
          <BottomSheet.Title>
            숙명여대 {focusedMarker.label} 앞
          </BottomSheet.Title>
          <BottomSheet.Label>
            <Icon
              id='symbol'
              fill='#1CAFFF'
              width={18}
              height={18}
              style={{ marginRight: '0.25rem' }}
            />
            현재 대여 가능한 우산
            <Icon
              id='rightArrowLong'
              fill='#1CAFFF'
              width={95}
              height={11}
              style={{ margin: '0 0.5rem' }}
            />
            {focusedMarker.amount}개
          </BottomSheet.Label>
          <BottomSheet.Description hasArrowButton to='/rental-history'>
            {GUIDE}
          </BottomSheet.Description>
          <Link to='qr-scan'>
            <BottomSheet.Button>스캔하고 대여하기</BottomSheet.Button>
          </Link>
        </BottomSheet>
      )}
    </section>
  );
}
