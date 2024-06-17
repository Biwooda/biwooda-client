import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './CustomCalendar.css';
import styles from './CustomCalendar.module.css';

export default function CustomCalendar({ selectEndDate }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [endDate, setEndDate] = useState(today);

  const handleSelect = (ranges) => {
    const { endDate } = ranges.selection;

    if (today > endDate) {
      return;
    }

    const diffTime = Math.abs(endDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 4) {
      return;
    }

    selectEndDate([today, endDate]);
    setEndDate(endDate);
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
      />
    </div>
  );
}
