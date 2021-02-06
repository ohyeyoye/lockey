export const AUTHENTICATE = "AUTHENTICATE";
export const DEAUTHENTICATE = "DEAUTHENTICATE";

export const authenticate = msp => ({
  type: AUTHENTICATE,
  msp,
});
export const deauthenticate = () => ({
  type: DEAUTHENTICATE,
});

const initialState = {
  authenticated: false,
  msp: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
        msp: action.msp,
      };
    case DEAUTHENTICATE:
      return {
        ...state,
        authenticated: false,
        msp: "",
      };
    default:
      return state;
  }
}
