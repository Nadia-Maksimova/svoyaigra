import Action from './Types/Action';
import { State } from './Types/type';

const initUserState: State = {
  user: {},
  message: '',
};

const userReducer = (state: State = initUserState, action: Action): State => {
  switch (action.type) {
    case 'REG_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case 'LOG_USER':
      return {
        ...state,
        user: action.payload,
        message: action.payload.message,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        message: '',
      };
    default:
      return state;
  }
};

export default userReducer;
