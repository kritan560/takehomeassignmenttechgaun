/**
 * This hook will check for the isAuth key in localStorage and return true if key is found else false
 * @returns boolean
 */
export const useAuth = () => {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth == "true") {
    return true;
  }
  return false;
};
