import { useState } from 'react';

import { DateRangePicker } from 'react-date-range';

import { addMonths, format, subMonths } from 'date-fns';

import { Icon } from '@/components/Icon';

import styles from './CustomCalendar.module.css';
import './CustomCalendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function CustomCalendar({ selectEndDate }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [endDate, setEndDate] = useState(today);

  const handleSelect = ({ selection }) => {
    const { endDate: rangeEndDate } = selection;

    if (today > rangeEndDate) {
      return;
    }

    const diffTime = Math.abs(rangeEndDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 4) {
      return;
    }

    selectEndDate([today, rangeEndDate]);
    setEndDate(rangeEndDate);
  };

  return (
    <div className={styles.canlendar}>
      <DateRangePicker
        ranges={[
          {
            startDate: today,
            endDate,
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
        showSelectionPreview
      />
    </div>
  );
}

function CustomNavigator({ date, onNext, onPrev }) {
  return (
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
}
