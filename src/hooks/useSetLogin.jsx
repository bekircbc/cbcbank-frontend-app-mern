const setLogin = function (accounInfo) {
  let userObject = {
    _id: accounInfo.id,
    isLogin: true,
  };
  console.log("userObject", userObject);
  // Info als string zu Browser schicken
  localStorage.setItem("currentUser", JSON.stringify(userObject));

  // um die Information als normales Objekt aus localStorage zuholen
  let userInfo = JSON.parse(localStorage.getItem("currentUser"));
};

const verifyUser = function (user) {
  accounts.find((acc) => {
    if (acc.id === user.id) {
      return true;
    }
  });
};
