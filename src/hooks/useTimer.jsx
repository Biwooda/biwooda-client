import { useCallback, useEffect, useState } from 'react';

export default function useTimer(value = 0) {
  const [time, setTime] = useState(value);
  const [timerId, setTimerId] = useState();

  const clearTimer = useCallback(() => {
    if (timerId) {
      clearInterval(timerId);
    }
  }, [timerId]);

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

  useEffect(() => {
    if (time === 0) {
      clearTimer();
    }
  }, [time, clearTimer]);

  return [time, startTimer, clearTimer];
}
