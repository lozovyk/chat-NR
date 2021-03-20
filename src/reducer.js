/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'IS_AUTHORISED':
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};
