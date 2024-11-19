import { Link } from "react-router-dom";
import Hamburger from "./Hamburger"
const FormComponent = ({ title, fields, buttonLabel, onSubmit }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-36">
      <Hamburger />
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg shadow-white border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field: any, index: any) => (
          <div key={index} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-2 text-sm font-medium text-gray-600"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-black rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          {buttonLabel}
        </button>
      </form>
    {
        title == "Signup"? <p className="text-center">Already have an account? <Link className="text-blue-600 hover:underline" to="/login">Login</Link></p> :
        <p className="text-center">Don't have an account? <Link className="text-blue-600 hover:underline" to="/signup">Signup</Link></p>
    }
    </div>
    </div>
  );
};

export default FormComponent;
