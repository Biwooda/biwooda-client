import React, { useEffect, useRef, useState } from 'react';
import lego from '../../assets/lego.json';
import longArrow from '../../assets/long_arrow.svg';
import rightArrowGrey from '../../assets/right_arrow_grey.svg';
import symbolSm from '../../assets/symbol_sm.svg';
import useBottomSheet from '../../components/BottomSheet/BottomSheet';
import CTAButton from '../../components/CTAButton/CTAButton';
import Drawer from '../../components/Drawer/Drawer';
import Animation from '../../components/Loading/Loading';
import Navbar from '../../components/Navbar/Navbar';
import NaverMapWithMarker from '../../components/NaverMap/NaverMap';
import { GUIDE } from '../../constants';
import { useDrawerContext } from '../../contexts/DrawerContext';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [isLogin, setIsLogin] = useState(false);
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

    const mainElement = mainRef.current;

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('click', handleBottomSheet);
      }
    };
  }, []);

  if (isLoading) return <Animation animationData={lego} />;

  return (
    <section ref={mainRef} onClick={handleBottomSheet}>
      <Navbar toggleDrawer={toggleDrawer} />
      <NaverMapWithMarker setFocusedMarker={setFocusedMarker} />
      {isOpen && (
        <Drawer isLogin={isLogin} nickname='비우다' setIsLogin={setIsLogin} />
      )}
      {focusedMarker && (
        <BottomSheetWrapper>
          <div className={styles.info}>
            <div className={styles.location}>
              숙명여대 {focusedMarker.label} 앞
            </div>
            <div className={styles.amount}>
              <img className={styles.symbol} src={symbolSm} alt='symbol' />
              현재 대여 가능한 우산
              <img
                className={styles.longArrow}
                src={longArrow}
                alt='long arrow'
              />{' '}
              {focusedMarker.amount}개
            </div>
          </div>
          <div className={styles.guide}>
            <pre className={styles.guideText}>{GUIDE}</pre>
            <button className={styles.guideButton}>
              <img src={rightArrowGrey} alt='right arrow' />
            </button>
          </div>
          <CTAButton>스캔하고 대여하기</CTAButton>
        </BottomSheetWrapper>
      )}
    </section>
  );
}
