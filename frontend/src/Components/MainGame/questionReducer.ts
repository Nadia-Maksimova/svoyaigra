import { TopicAction, TopicsState } from './questionTypes';

export const initTopicState: TopicsState = {
  topics: [],
  error: null,
};

const questionReducer = (
  state: TopicsState = initTopicState,
  action: TopicAction
): TopicsState => {
  switch (action.type) {
    case 'GET_TOPIC':
      return {
        ...state,
        topics: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
