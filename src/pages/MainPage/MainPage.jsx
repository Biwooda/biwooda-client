import React, { useEffect, useState } from 'react';
import lego from '../../assets/lego.json';
import biwoodaLogo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import mypageIcon from '../../assets/mypage.svg';
import Drawer from '../../components/Drawer/Drawer';
import Animation from '../../components/Loading/Loading';
import NaverMapWithMarker from '../../components/NaverMap/NaverMap';
import { useDrawerContext } from '../../contexts/DrawerContext';
import styles from './MainPage.module.css';

export default function MainPage() {
  const { isOpen, toggleDrawer } = useDrawerContext();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
      <NaverMapWithMarker />
      {isOpen && (
        <Drawer isLogin={isLogin} nickname='비우다' setIsLogin={setIsLogin} />
      )}
    </section>
  );
}
