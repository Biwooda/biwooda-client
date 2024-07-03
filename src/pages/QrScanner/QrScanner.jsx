/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import QrScanner from 'qr-scanner';

import styles from './QrScanner.module.css';

export default function ReadCode() {
  const divRef = useRef();
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const { current: videoElem } = videoRef;
    const QrOptions = {
      // 핸드폰의 경우, 외부 카메라인지 셀프카메라인지
      preferredCamera: 'environment',
      // 1초당 몇번의 스캔을 할 것인지? ex) 1초에 5번 QR 코드 감지한다.
      maxScansPerSecond: 5,
      // QR 스캔이 일어나는 부분을 표시해줄 지 (노란색 네모 테두리가 생긴다.)
      highlightScanRegion: true,
      overlay: divRef.current,
    };

    if (videoElem) {
      const qrScanner = new QrScanner(
        videoElem,
        (result) => navigate('/rental/calendar', { state: result.data }),
        QrOptions
      );
      qrScanner.start();

      return () => qrScanner.destroy();
    }
  }, [navigate]);

  return (
    <section className={styles.container}>
      <div>
        <video ref={videoRef} className={styles.video} />
      </div>
      <div ref={divRef} className={styles.div} />
    </section>
  );
}
