import React, { useRef, useState } from 'react';
import camera from '../../../assets/camera.svg';
import downArrow from '../../../assets/down_arrow.svg';
import DefaultButton from '../../../components/DefaultButton/DefaultButton';
import InputField from '../../../components/InputField/InputField';
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

  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef();
  const arrowRef = useRef();

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
      <InputField.Text
        label='제목'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='제목을 15자 이내로 작성해주세요'
        maxLength='15'
      />
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
            <DefaultButton.Grey>취소</DefaultButton.Grey>
          </div>
          <div className={styles.inquiryButton}>
            <DefaultButton>문의하기</DefaultButton>
          </div>
        </div>
      </div>
      <div className={styles.caution}>
        <div className={styles.cautionTitleDiv}>
          <div className={styles.cautionTitle}>분실/훼손 신고 주의사항</div>
          <img
            ref={arrowRef}
            className={styles.arrow}
            src={downArrow}
            alt='arrow icon'
            onClick={() => {
              setIsOpen((prev) => !prev);
              arrowRef.current.style = `transform: ${
                isOpen ? 'rotate(0deg) translateY(-1px)' : 'rotate(180deg)'
              }`;
              boxRef.current.style = `opacity: ${isOpen ? 0 : 1}`;
            }}
          />
        </div>
        <div ref={boxRef} className={styles.description}>
          <p>
            1) 분실/훼손이 발생한 경위를 자세히 작성해주세요. <br />
            (날짜, 장소, 분실/훼손 사유 등)
          </p>
          <p>
            2) 훼손 신고의 경우 사진 첨부 시 훼손 부위가 명확히 보이도록
            찍어주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
