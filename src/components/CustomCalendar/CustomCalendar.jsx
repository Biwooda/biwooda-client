import { addMonths, format, subMonths } from 'date-fns';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Icon from 'components/Icon/Icon';
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
        navigatorRenderer={(focusedDate, changeShownDate) => (
          <CustomNavigator
            date={focusedDate}
            onNext={() => changeShownDate(addMonths(focusedDate, 1))}
            onPrev={() => changeShownDate(subMonths(focusedDate, 1))}
          />
        )}
        weekdayDisplayFormat='E'
        showSelectionPreview={true}
      />
    </div>
  );
}

const CustomNavigator = ({ date, onNext, onPrev }) => (
  <div className={styles.customNavigator}>
    <button className={styles.monthButton} onClick={onPrev}>
      <Icon id='leftArrow' stroke='#516875' width={18} height={18} />
    </button>
    <span className={styles.shownDate}>{format(date, 'yyyy년 M월')}</span>
    <button className={styles.monthButton} onClick={onNext}>
      <Icon id='rightArrow' stroke='#516875' width={18} height={18} />
    </button>
  </div>
);
