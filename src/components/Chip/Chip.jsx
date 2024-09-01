import { useAuthContext } from '@/contexts/AuthContext.jsx';

import { Icon } from '@/components/Icon';

import styles from './Chip.module.css';

export default function Chip() {
  const { ticket } = useAuthContext();
  if (!ticket || !ticket?.rentalState) return null;
  const { overdue } = ticket;

  return (
    <div className={`${styles.tag} ${overdue && styles.overdue}`}>
      <Icon
        id={overdue ? 'waterdropFull' : 'symbol'}
        fill='#ffffff'
        width={18}
        height={18}
      />
      {overdue ? '미반납중' : '대여중'}
    </div>
  );
}
