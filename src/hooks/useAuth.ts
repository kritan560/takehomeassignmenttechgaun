export const useAuth = () => {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth == "true") {
    return true;
  }
  return false;
};
