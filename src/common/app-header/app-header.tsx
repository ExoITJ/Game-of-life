import React, { FC } from 'react';
import VpButton from '../vp-button';
import s from './app-header.module.css';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectUserName } from '../../features/system/system-selectors';
import { logout } from '../../features/system/system-slice';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes';
import { AppHeaderDataTestIds } from './app-header.utils';
import { SiGithub } from 'react-icons/si';

const AppHeader: FC = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.appHeaderBlock}>
      <div className={s.appHeaderSettingsBlock}>
        <label
          className={s.appHeaderUserName}
          data-testid={AppHeaderDataTestIds.UserNameLabel}
        >
          {userName}
        </label>
        <Link to={AppRoutes.Index}>
          <VpButton data-testid={AppHeaderDataTestIds.GameButtonLink}>
            Играть
          </VpButton>
        </Link>
      </div>
      <div className={s.appHeaderSettingsBlock}>
        <Link to={AppRoutes.About}>
          <VpButton data-testid={AppHeaderDataTestIds.AboutButtonLink}>
            О проекте
          </VpButton>
        </Link>
        <Link to={AppRoutes.Rules}>
          <VpButton data-testid={AppHeaderDataTestIds.RulesButtonLink}>
            Правила
          </VpButton>
        </Link>
        <VpButton
          onClick={handleLogout}
          data-testid={AppHeaderDataTestIds.LogoutButton}
        >
          Выход
        </VpButton>
      </div>
      <VpButton
        data-testid={AppHeaderDataTestIds.LogoutButton}
        className={s.gitHubButton}
      >
        <a href="https://github.com/ExoITJ/Game-of-life" target="_blank">
          <SiGithub size={23} />
        </a>
      </VpButton>
    </div>
  );
};

export default AppHeader;
