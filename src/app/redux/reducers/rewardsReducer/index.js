import { INCREMENT, DECREMENT, ACCEPT, REJECT, SELF_MESSAGE } from "../../constants";

const initialState = {
  count: 3,
  notifications: [
    {
      emoji: 1,
      msg: "A friend visited your link, but didn't earn you a reward!",
    },
    {
      emoji: 1,
      msg: "Your friend Mikey earned you a reward!",
    },
    {
      emoji: 3,
      msg: "You tried to refer yourself! Whopps!",
    },
  ],
};

const rewardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      case REJECT:
        return {
          ...state,
      
          notifications: [action.payload, ...state.notifications.slice(0, -1)],
       
        };
    case ACCEPT:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications.slice(0, -1)],
        count: state.count + 5,
      };
case SELF_MESSAGE:
  return {
    ...state,
    notifications: [action.payload, ...state.notifications.slice(0, -1)],

  }
 
    default: {
      return state;
    }
  }
};

export default rewardsReducer;
