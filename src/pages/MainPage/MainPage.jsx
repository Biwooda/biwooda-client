import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useRentalStore } from '@/store';

import { useDrawerContext } from '@/contexts/DrawerContext';
import { useAuthContext } from '@/contexts/AuthContext';

import { Animation } from '@/components/Loading';
import { BottomSheet } from '@/components/BottomSheet';
import { CTAButton } from '@/components/CTAButton';
import { Drawer } from '@/components/Drawer';
import { Icon } from '@/components/Icon';
import { Navbar } from '@/components/Navbar';
import { NaverMapWithMarker } from '@/components/NaverMap';

import { GUIDE } from '@/constants';

import lego from '@/assets/lego.json';

export default function MainPage() {
  const { user, ticket } = useAuthContext();
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [focusedMarker, setFocusedMarker] = useState();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState();
  const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    localStorage.setItem('accessToken', 'aa');
  }, []);

  // if (isLoading) return <Animation animationData={lego} />;

  return (
    <section>
      <Navbar toggleDrawer={toggleDrawer} />
      <NaverMapWithMarker
        setFocusedMarker={setFocusedMarker}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      />
      {isOpen && <Drawer />}
      <BottomSheet isOpen={user && ticket?.rentalState} setIsOpen={() => {}}>
        <CTAButton type='white'>반납하기</CTAButton>
      </BottomSheet>
      <BottomSheet isOpen={isBottomSheetOpen} setIsOpen={setIsBottomSheetOpen}>
        <BottomSheet.Title>
          숙명여대 {focusedMarker?.label} 앞
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
          {focusedMarker?.amount}개
        </BottomSheet.Label>
        <BottomSheet.Description to='/rental-history'>
          {GUIDE}
        </BottomSheet.Description>
        <Link to='qr-scan'>
          <BottomSheet.Button>스캔하고 대여하기</BottomSheet.Button>
        </Link>
      </BottomSheet>
    </section>
  );
}
