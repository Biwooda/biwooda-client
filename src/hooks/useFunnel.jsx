import React, { useState } from 'react';

export default function useFunnel(start) {
  const [step, setStep] = useState(start);

  const Step = ({ children }) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }) => {
    const targetStep = children.find(
      (childrenStep) => childrenStep.props.name === step
    );
    return targetStep;
  };

  Funnel.Step = Step;

  return [Funnel, setStep];
}
