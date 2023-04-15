import React, { ChangeEvent, FC, ReactNode } from 'react';
import s from './vp-selector.module.css';
import clsx from 'clsx';

type Props = {
  value: string;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  dataTestid?: string;
};

const VpSelector: FC<Props> = (props) => {
  const {
    value,
    children,
    onChange,
    name,
    label,
    error,
    disabled,
    className,
    dataTestid,
  } = props;

  return (
    <div className={clsx(s.vpSelectBlock, className)}>
      {label && <label className={s.vpSelectLabel}>{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={s.vpSelect}
        data-testid={dataTestid}
      >
        {children}
      </select>
      {error && <pre className={s.vpSelectError}>{error}</pre>}
    </div>
  );
};

export default VpSelector;
