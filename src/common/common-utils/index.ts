import { RootState } from '@/app/store';
import { LocalStorageKeys } from '../common-consts';

export const getStateFromLocalStorage = (): Partial<RootState> => ({
  system: {
    version: null,
    isAuth: !!localStorage.getItem(LocalStorageKeys.Authenticate) || false,
  },
});
