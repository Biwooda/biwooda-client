import { useCallback, useEffect, useState } from 'react';

export default function useTimer(value = 0) {
  const [time, setTime] = useState(value);
  const [timerId, setTimerId] = useState();

  const startTimer = () => {
    setTime(value);
    clearTimer();
    setTimerId(
      setInterval(() => {
        if (time === 0) {
          clearTimer();
        }
        setTime((prev) => prev - 1);
      }, 1000)
    );
  };

  const clearTimer = useCallback(() => {
    if (timerId) {
      clearInterval(timerId);
    }
  }, [timerId]);

  useEffect(() => {
    if (time === 0) {
      clearTimer();
    }
  }, [time, clearTimer]);

  return [time, startTimer, clearTimer];
}
