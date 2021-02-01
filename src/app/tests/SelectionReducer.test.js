import rewardsReducer from "../redux/reducers/rewardsReducer/index";
import expect from "expect";
import {
  ACCEPT
} from "../redux/constants";


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

const msg = {
  msg: "Dave has rejected your request!",
  emoji: 2,
};


const mockResult = {
     count: 8,
     notifications: [
        {
         emoji: 2,
         msg: "Dave has rejected your request!",
       },
     {
         emoji: 1,
         msg: "A friend visited your link, but didn't earn you a reward!",
       },
        {
         emoji: 1,
         msg: "Your friend Mikey earned you a reward!",
       },
     ],
   }
describe("test rewardsReducer", () => {
  it("should return the initial state", () => {
    expect(rewardsReducer(undefined, {})).toEqual(initialState);
  });
 it("should handle SET_SELECTION", () => {
    const eventStateUpdate = {
      type: ACCEPT,
      payload: msg,
    };
    expect(rewardsReducer(initialState, eventStateUpdate)).toEqual(mockResult);
  });
});
