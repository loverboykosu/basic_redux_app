const isLogin = (state = 0, action) => {
  switch (action.type) {
    case "ISLOGIN":
      return !state;
    default:
      return state;
  }
};
export default isLogin;
