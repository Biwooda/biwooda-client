import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../../components/CTAButton/CTAButton';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import { RENTAL_RETURN_IMAGE } from '../../constants';
import styles from './RentalReturnGuidePage.module.css';

const CAROUSEL_LENGTH = RENTAL_RETURN_IMAGE.length - 1;

export default function RentalReturnGuidePage() {
  const carouselRef = useRef();
  const navigatorRef = useRef();
  const navigate = useNavigate();
  let current = 0;

  const nextEvent = () => {
    const dots = Array.from(navigatorRef.current.children);
    dots[current].classList.toggle(styles.active);
    if (current !== CAROUSEL_LENGTH) {
      carouselRef.current.style.transform = `translateX(${
        (current + 1) * -(document.documentElement.clientWidth - 23 * 2)
      }px)`;
      current += 1;
      dots[current].classList.toggle(styles.active);
    } else {
      current = 0;
      carouselRef.current.style.transform = `translateX(0px)`;
      dots[current].classList.toggle(styles.active);
    }
  };

  return (
    <section className={styles.container}>
      <BackToolbar title='대여&반납 방법' onPrev={() => navigate(-1)} />
      <div className={styles.content}>
        <div className={styles.carousel} ref={carouselRef}>
          {RENTAL_RETURN_IMAGE.map((src) => (
            <div key={src} className={styles.cell}>
              <img src={src} alt='guide' />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigator} ref={navigatorRef}>
        {RENTAL_RETURN_IMAGE.map((img, index) => (
          <div
            key={img}
            className={`${styles.dot} ${index === 0 && styles.active}`}
          ></div>
        ))}
      </div>
      <CTAButton onClick={nextEvent}>다음</CTAButton>
    </section>
  );
}
