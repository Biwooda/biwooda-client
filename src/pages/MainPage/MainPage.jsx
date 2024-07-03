import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDrawerContext } from 'contexts/DrawerContext';
import { useUserContext } from 'contexts/UserContext';

import useBottomSheet from 'components/BottomSheet/BottomSheet';
import CTAButton from 'components/CTAButton/CTAButton';
import Drawer from 'components/Drawer/Drawer';
import Icon from 'components/Icon/Icon';
import Animation from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import NaverMapWithMarker from 'components/NaverMap/NaverMap';

import lego from 'assets/lego.json';
import { GUIDE } from 'constants';

import styles from './MainPage.module.css';

export default function MainPage() {
  const { user } = useUserContext();
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [isLoading, setIsLoading] = useState();
  const [focusedMarker, setFocusedMarker] = useState();
  const { BottomSheetWrapper } = useBottomSheet(focusedMarker);
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
        <BottomSheetWrapper>
          <CTAButton type='white'>반납하기</CTAButton>
        </BottomSheetWrapper>
      )}
      {focusedMarker && (
        <BottomSheetWrapper>
          <div className={styles.info}>
            <div className={styles.location}>
              숙명여대 {focusedMarker.label} 앞
            </div>
            <div className={styles.amount}>
              <Icon id='symbol' fill='#1CAFFF' width={18} height={18} />
              현재 대여 가능한 우산
              <div className={styles.longArrow}>
                <Icon
                  id='rightArrowLong'
                  fill='#1CAFFF'
                  width={95}
                  height={11}
                />
              </div>
              {focusedMarker.amount}개
            </div>
          </div>
          <div className={styles.guide}>
            <pre className={styles.guideText}>{GUIDE}</pre>
            <Link to='/rental-history' className={styles.guideButton}>
              <Icon id='rightArrow' stroke='#92A5B3' width={18} height={18} />
            </Link>
          </div>
          <Link to='qr-scan'>
            <CTAButton>스캔하고 대여하기</CTAButton>
          </Link>
        </BottomSheetWrapper>
      )}
    </section>
  );
}
