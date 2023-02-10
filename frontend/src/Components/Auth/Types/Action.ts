import { State } from './type';

type Action =
  | {
      type: 'REG_USER';
      payload: State;
    }
  | {
      type: 'LOG_USER';
      payload: State;
    }
  | {
      type: 'LOGOUT';
    };

export default Action;
