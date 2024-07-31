export const useLocalStorage = () => {
  const saveUser = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
  };

  const getUser = (email) => {
    return JSON.parse(localStorage.getItem(email));
  };

  return { saveUser, getUser };
};
