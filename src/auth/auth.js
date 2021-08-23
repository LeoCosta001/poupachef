export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if(user){
    // const isAuthenticated = JSON.parse(user.access_token)

    const expirationTime = (Date.now() >= user.expires_in * 1000000000)
    
    if(expirationTime) {
      console.log("sessão expirada");
      return false;
    }

    console.log("sessão iniciada");
    return true;  
  }
  
};
;