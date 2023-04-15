import React, { FC } from 'react';
import VpButton from '../vp-button';
import s from './app-header.module.css';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { selectUserName } from '@/features/system/system-selectors';
import { logout } from '@/features/system/system-slice';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes';

const AppHeader: FC = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.appHeaderBlock}>
      <Link to={AppRoutes.Index}>
        <VpButton>Играть</VpButton>
      </Link>
      <label className={s.appHeaderUserName}>{userName}</label>
      <div className={s.appHeaderSettingsBlock}>
        <Link to={AppRoutes.Rules}>
          <VpButton>Правила</VpButton>
        </Link>
        <VpButton onClick={handleLogout}>Выход</VpButton>
      </div>
    </div>
  );
};

export default AppHeader;
