import React, { useState } from 'react';
import camera from '../../../assets/camera.svg';
import styles from './Contact.module.css';

export default function Contact() {
  const [files, setFiles] = useState([]);
  const handleImage = ({ target }) => {
    if (target.files.length > 10) {
      alert('최대 10개까지 업로드 가능합니다.');
      return;
    }
    setFiles(Array.from(target.files));
  };

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.fileInput}>
          <label htmlFor='inputFileCustom'>
            <img src={camera} alt='camera' />
            <span className={styles.amount}>{files.length}/10</span>
          </label>
          <input
            id='inputFileCustom'
            type='file'
            accept='image/*'
            multiple
            onChange={handleImage}
          />
        </div>
        {files.map((file) => (
          <div key={file.name} className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
