import React, { useCallback, useState } from 'react';

export default function useFunnel(start) {
  const [step, setStep] = useState(start);

  const Funnel = useCallback(
    ({ children }) => {
      const targetStep = children.find(
        (childrenStep) => childrenStep.props.name === step
      );
      return targetStep;
    },
    [step]
  );

  const Step = useCallback(({ children }) => {
    return <>{children}</>;
  }, []);

  Funnel.Step = Step;

  return [Funnel, setStep];
}
