import { useNavigate } from "react-router-dom";

const BackNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="absolute top-20 left-4 bg-blue-500 text-white px-2 py-1 text-xs rounded shadow-lg hover:bg-blue-600 transition"
    >
      Go Back
    </button>
  );
};

export default BackNavigation;
