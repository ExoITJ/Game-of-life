import React, { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import ClipLoader from 'react-spinners/ClipLoader';
import s from './vp-button.module.css';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  dataTestid?: string;
};

const VpButton: FC<Props> = (props) => {
  const { children, onClick, loading, disabled, className, dataTestid } = props;
  return (
    <button
      className={clsx(s.vpButton, className)}
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestid}
    >
      {loading && <ClipLoader size={15} className={s.loader} color="white" />}
      {children}
    </button>
  );
};

export default VpButton;
