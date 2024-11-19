import axios from "axios";
import FormComponent from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
const apiUrl = import.meta.env.VITE_BACKEND_URL
const Login = () => {
  const navigate = useNavigate();
  const { setIsToken } = useAppContext();
  const loginFields = [
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password", required: true },
  ];

  const handleLogin = async (data: any) => {
    try {
      const response = await axios.post(`${apiUrl}/api/v1/login`, data,
        { withCredentials: true }
      );
      if (response.data.success) {
        const token = response.data.token;

        localStorage.setItem('auth_token', token);
        setIsToken(token);
        navigate("/areas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <FormComponent title="Login" fields={loginFields} buttonLabel="Login" onSubmit={handleLogin} />;
};

export default Login;
