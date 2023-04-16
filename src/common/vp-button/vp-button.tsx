import React, { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from 'clsx';
import ClipLoader from 'react-spinners/ClipLoader';
import s from './vp-button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const SPINNER_TEST_ID = 'vp-button-spinner';

const VpButton: FC<Props> = ({
  children,
  loading,
  className,
  ...restProps
}) => (
  <button className={clsx(s.vpButton, className)} {...restProps}>
    {loading && (
      <ClipLoader
        size={15}
        className={s.loader}
        color="white"
        data-testid={SPINNER_TEST_ID}
      />
    )}
    {children}
  </button>
);

export default VpButton;
