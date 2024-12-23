import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import axios from 'axios';
import { useRef, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_BACKEND_URL
const Sidebar = () => {
  const { isOpen, setIsOpen, logout } = useAppContext();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/logout`, { withCredentials: true });
      if (response.data.success) {
        logout()
        navigate("/login");
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-fit py-4 w-28 lg:w-56 bg-transparent text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-60'} transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="absolute top-3 left-3 p-2 text-white" onClick={() => setIsOpen(false)}>
            <AiOutlineClose size={24} />
          </div>

          <nav className="flex flex-col items-start pl-5 mt-10">
            <Link to="/" className="py-1 lg:text-lg border-black text-sm hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/areas" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>Areas</Link>
            <Link to="/apply" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>Apply</Link>
            <Link to="/checkStatus" className="py-1 text-sm lg:text-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>Status</Link>
            <button onClick={handleLogout} className="py-1 hover:bg-gray-700">Logout</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
