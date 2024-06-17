import React, { useEffect, useState } from 'react';
import lego from '../../assets/lego.json';
import biwoodaLogo from '../../assets/logo.svg';
import longArrow from '../../assets/long_arrow.svg';
import menu from '../../assets/menu.svg';
import mypageIcon from '../../assets/mypage.svg';
import rightArrowGrey from '../../assets/right_arrow_grey.svg';
import symbolSm from '../../assets/symbol_sm.svg';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import CTAButton from '../../components/CTAButton/CTAButton';
import Drawer from '../../components/Drawer/Drawer';
import Animation from '../../components/Loading/Loading';
import NaverMapWithMarker from '../../components/NaverMap/NaverMap';
import { GUIDE } from '../../constants';
import { useDrawerContext } from '../../contexts/DrawerContext';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [focusedMarker, setFocusedMarker] = useState();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) return <Animation animationData={lego} />;

  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.menu} onClick={toggleDrawer}>
          <img src={menu} alt='menu_icon' />
        </div>
        <div className={styles.logo}>
          <img src={biwoodaLogo} alt='logo' />
        </div>
        <div className={styles.mypage}>
          <img src={mypageIcon} alt='mypage_icon' />
        </div>
      </nav>
      <NaverMapWithMarker setFocusedMarker={setFocusedMarker} />
      {isOpen && (
        <Drawer isLogin={isLogin} nickname='비우다' setIsLogin={setIsLogin} />
      )}
      {focusedMarker && (
        <BottomSheet>
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
        </BottomSheet>
      )}
      {/* <BottomSheet>
        <CTAButton type='white'>반납하기</CTAButton>
      </BottomSheet> */}
    </section>
  );
}
