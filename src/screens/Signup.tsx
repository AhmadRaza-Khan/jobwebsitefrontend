import axios from "axios";
import FormComponent from "../components/Form";
import { useNavigate } from "react-router-dom";
// const apiUrl = import.meta.env.VITE_BACKEND_URL
const Signup = () => {
  const navigate = useNavigate() 
    const signupFields = [
      { name: "name", label: "Name", type: "text", placeholder: "Enter your name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "Enter your email", required: true },
      { name: "phone", label: "Phone", type: "phone", placeholder: "Enter your Phone", required: true },
      { name: "password", label: "Password", type: "password", placeholder: "Enter your password", required: true },
    ];
  
    const handleSignup = async(data: any) => {
      try {
        const response = await axios.post(`/api/v1/signup`, data)
        if(response.data.success){
          navigate("/login")
        }
      } catch (error) {
        console.log(error)
      }
    };
  
    return <FormComponent title="Signup" fields={signupFields} buttonLabel="Signup" onSubmit={handleSignup} />;
  };
  
  export { Signup };