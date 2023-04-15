import React from 'react';
import { useAppDispatch } from '@/app/store';
import { login } from '@/features/system/system-slice';
import { AuthenticationData } from '@/features/system/system-types';
import c from '../../../styles/common.module.scss';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleAuth = async () => {
    const data: AuthenticationData = {
      name: 'Vlad',
      password: '123',
    };
    await dispatch(login(data));
  };

  return (
    <div className={c.centeredItem}>
      <button onClick={handleAuth}>Войти</button>
    </div>
  );
};

export default LoginPage;
