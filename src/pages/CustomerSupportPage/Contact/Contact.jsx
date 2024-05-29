import React, { useState } from 'react';
import camera from '../../../assets/camera.svg';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import Select from '../../../components/Select/Select';
import styles from './Contact.module.css';

const options = [
  '우산을 잃어버렸어요',
  '우산이 고장났어요',
  '패널티 요금 관련',
  '보관함 오류',
  '웹사이트에 오류가 있어요',
  '기타 문제',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    title: '',
    category: undefined,
    text: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      <Select
        id='select'
        value={formData.category}
        setValue={setFormData}
        options={options}
      />
      <div>
        <div>
          <label className={styles.label} htmlFor='textarea'>
            글 본문
          </label>
          <textarea
            id='textarea'
            className={styles.textarea}
            name='text'
            value={formData.text}
            placeholder='500자 이내로 작성해주세요'
            maxLength='500'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <div className={styles.cancleButton}>
            <DefaultButton.Grey text='취소' />
          </div>
          <div className={styles.inquiryButton}>
            <DefaultButton text='문의하기' />
          </div>
        </div>
      </div>
    </section>
  );
}
