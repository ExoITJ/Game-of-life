import React, { FC, SelectHTMLAttributes } from 'react';
import s from './vp-selector.module.css';
import clsx from 'clsx';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  className?: string;
};

const VpSelector: FC<Props> = ({
  children,
  label,
  error,
  className,
  ...restProps
}) => (
  <div className={clsx(s.vpSelectBlock, className)}>
    {label && <label className={s.vpSelectLabel}>{label}</label>}
    <select className={s.vpSelect} {...restProps}>
      {children}
    </select>
    {error && <pre className={s.vpSelectError}>{error}</pre>}
  </div>
);

export default VpSelector;
