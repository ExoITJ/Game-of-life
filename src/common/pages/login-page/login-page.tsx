import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../app/store';
import { login } from '../../../features/system/system-slice';
import { AuthenticationData } from '@/features/system/system-types';
import VpButton from '../../vp-button/vp-button';
import VpInput from '../../vp-input/vp-input';
import { ValidationErrors } from '../../common-consts';
import s from './login-page.module.css';

const enum FieldsNames {
  Name = 'login',
  Password = 'password',
}

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loadAuth, setLoadAuth] = useState(false);

  const handleChangeInputValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === FieldsNames.Name) {
      setName(value);
      setNameError('');
    }
    if (name === FieldsNames.Password) {
      setPassword(value);
      setPasswordError('');
    }
  };

  const handleAuth = () => {
    const nameTrimmed = name.trim();
    const passwordTrimmed = password.trim();
    let isInvalid = false;

    if (!nameTrimmed) {
      isInvalid = true;
      setNameError(ValidationErrors.FieldRequired);
    }
    if (!passwordTrimmed) {
      isInvalid = true;
      setPasswordError(ValidationErrors.FieldRequired);
    }

    if (isInvalid) return;

    setLoadAuth(true);
    const data: AuthenticationData = {
      name: nameTrimmed,
      password: passwordTrimmed,
    };
    setTimeout(async () => {
      await dispatch(login(data));
      setLoadAuth(false);
    }, 2000);
  };

  return (
    <div className={s.loginPage}>
      <div className={s.loginPageCard}>
        <VpInput
          name={FieldsNames.Name}
          label="Логин"
          error={nameError}
          value={name}
          onChange={handleChangeInputValues}
          className={s.loginPageCardComponent}
        />
        <VpInput
          name={FieldsNames.Password}
          label="Пароль"
          type="password"
          error={passwordError}
          value={password}
          onChange={handleChangeInputValues}
          className={s.loginPageCardComponent}
        />
        <VpButton
          className={s.loginPageCardComponent}
          onClick={handleAuth}
          loading={loadAuth}
        >
          Войти
        </VpButton>
      </div>
    </div>
  );
};

export default LoginPage;
