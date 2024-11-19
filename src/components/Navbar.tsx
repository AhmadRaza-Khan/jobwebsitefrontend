import { VscThreeBars } from "react-icons/vsc";
import { useAppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const { isToken, setIsOpen, isOpen } = useAppContext();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full">
      <div className="flex items-center font-bold justify-between m-7">
        <Link to="/" className="text-base lg:text-2xl text-white">GetEmployed</Link>
        {
          isToken?
          <VscThreeBars
          onClick={handleClick}
          className="text-lg lg:text-2xl text-white font-bold"
        /> :
        <button className="text-md lg:text-xl font-thin text-white" onClick={() => navigate("/login")}>Login</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
