import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './CustomCalendar.css';
import styles from './CustomCalendar.module.css';

export default function CustomCalendar() {
  const today = new Date(); // 오늘 날짜
  today.setHours(0, 0, 0, 0);
  const [endDate, setEndDate] = useState(today); // 종료 날짜 상태

  const handleSelect = (ranges) => {
    // 사용자가 종료 날짜를 선택했을 때 호출되는 함수
    const { startDate, endDate } = ranges.selection;
    console.log(ranges);
    if (today > endDate) {
      return;
    }

    const diffTime = Math.abs(endDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 4) {
      return;
    }

    setEndDate(endDate); // 종료 날짜 업데이트
  };

  return (
    <div className={styles.canlendar}>
      <DateRangePicker
        ranges={[
          {
            startDate: today,
            endDate: endDate,
            key: 'selection',
          },
        ]}
        onChange={handleSelect}
        showSelectionPreview={true}
        // months={2}
        direction='horizontal' // 캘린더의 방향 설정
      />
    </div>
  );
}
