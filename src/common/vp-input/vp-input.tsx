import React, { FC, ChangeEvent } from 'react';
import clsx from 'clsx';
import s from './vp-input.module.css';

type Props = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
};

const VpInput: FC<Props> = (props) => {
  const { value, onChange, name, label, error, disabled, className } = props;

  return (
    <div className={clsx(s.vpInputBlock, className)}>
      {label && <label className={s.vpInputLabel}>{label}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={s.vpInput}
      />
      {error && <pre className={s.vpInputError}>{error}</pre>}
    </div>
  );
};

export default VpInput;
