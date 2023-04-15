import React, { FC, ChangeEvent } from 'react';
import clsx from 'clsx';
import s from './vp-input.module.css';

type Props = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const VpInput: FC<Props> = (props) => {
  const { value, onChange, disabled, className } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={clsx(s.vpInput, className)}
    />
  );
};

export default VpInput;
