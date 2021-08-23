export const isAuthenticated = () => {
  const isAuthenticated = JSON.parse(localStorage.user);
  if(isAuthenticated.access_token){
    return true;
  }
  return false;
};
;