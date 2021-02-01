
const initialState = {
  userData: {},
  user: {
    userId: "9e1f1a55-3d4f-4bca-b1ef-b39da10cb",
    profile_pic_url:
    "https://org-photos-dev.s3.eu-west-2.amazonaws.com/defaultAvatars/avatar_eight.png",
    userName: "Mike",
    email: "mike@gmail.com"
  },
  user2: {
    userId: "9e1f1a55-3d4f-4bca-b1ef-b39da10cb",
    profile_pic_url:
    "https://org-photos-dev.s3.eu-west-2.amazonaws.com/defaultAvatars/avatar_eleven.png",
    userName: "Mike",
  },
  authenticated: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
 

    default: {
      return state;
    }
  }
};

export default authReducer;
