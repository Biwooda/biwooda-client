import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import { useRentalStore } from '@/store';

import { addMonths, format, subMonths } from 'date-fns';

import { Icon } from '@/components/Icon';

import { FEE } from '@/constants';
import { getDaysDifference, isBeforeToday } from '@/utils';

import styles from './CustomCalendar.module.css';
import './CustomCalendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function CustomCalendar() {
  const { updateRentalInfo, updatePass } = useRentalStore(
    (state) => state.actions
  );
  const [endDate, setEndDate] = useState(today);

  const handleSelect = ({ selection }) => {
    const { endDate: rangeEndDate } = selection;

    if (isBeforeToday(rangeEndDate)) {
      return;
    }

    const diffDays = getDaysDifference(today, rangeEndDate);
    if (diffDays > 5) {
      return;
    }

    updateRentalInfo({ diffDays, rentalPeriod: [today, rangeEndDate] });
    updatePass({
      price: FEE[diffDays - 1],
      itemName: `${diffDays}days`,
    });
    setEndDate(rangeEndDate);
  };

  useEffect(() => {
    updateRentalInfo({ diffDays: 1, rentalPeriod: [today, today] });
  }, []);

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
