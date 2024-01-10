import { useNavigate } from "react-router";
function useLogin() {
  const navigate = useNavigate();
  const checkStatus = ({ username, password }) => {
    if (username === "tracom" && password === "tracom") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      localStorage.setItem("isLoggedIn", false);
      navigate("/login");
    }
  };
  const logoutUser = () => {
    localStorage.setItem("isLoggedIn", false);
  };
  return {
    checkStatus,
    logoutUser,
  };
}

export default useLogin;
