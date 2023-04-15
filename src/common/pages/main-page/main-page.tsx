import React from 'react';
import { useAppDispatch } from '@/app/store';
import { logout } from '@/features/system/system-slice';
import c from '../../../styles/common.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <div className={c.centeredItem}>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default MainPage;
