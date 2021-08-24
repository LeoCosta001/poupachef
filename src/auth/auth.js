export const isAuthenticated = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (user.expires_in > Date.now() / 1000) {
    localStorage.removeItem('user');
    return false;
  }

  return true;
};
;