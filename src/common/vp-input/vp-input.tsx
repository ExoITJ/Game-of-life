import React, { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './vp-input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  className?: string;
};

const VpInput: FC<Props> = ({ label, error, className, ...restProps }) => (
  <div className={clsx(s.vpInputBlock, className)}>
    {label && <label className={s.vpInputLabel}>{label}</label>}
    <input {...restProps} className={s.vpInput} />
    {error && <pre className={s.vpInputError}>{error}</pre>}
  </div>
);

export default VpInput;
