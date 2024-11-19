import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ApplyForProgrammer = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frontend: '',
    backend: '',
    devOps: '',
    databases: '',
    cloud: '',
    engineering: '',
    experience: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/apply", formData, 
        {withCredentials: true}
      );
        if (response.data.success) {
          navigate("/checkStatus");
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-10">
      <div className="container mx-auto my-32 px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Apply for Programmer</h1>
          <p className="text-lg text-gray-600 mt-2">Join our team and showcase your skills in a variety of technologies!</p>
        </header>

        <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-blue-600 my-6">Skills & Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="frontend" className="block text-sm font-medium text-gray-700">Frontend Technologies</label>
              <input
                type="text"
                id="frontend"
                name="frontend"
                value={formData.frontend}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="React, Vue.js, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="backend" className="block text-sm font-medium text-gray-700">Backend Technologies</label>
              <input
                type="text"
                id="backend"
                name="backend"
                value={formData.backend}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Node.js, Django, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="devOps" className="block text-sm font-medium text-gray-700">DevOps Tools</label>
              <input
                type="text"
                id="devOps"
                name="devOps"
                value={formData.devOps}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Docker, Kubernetes, Jenkins, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="databases" className="block text-sm font-medium text-gray-700">Databases</label>
              <input
                type="text"
                id="databases"
                name="databases"
                value={formData.databases}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="MySQL, MongoDB, PostgreSQL, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="cloud" className="block text-sm font-medium text-gray-700">Cloud Computing</label>
              <input
                type="text"
                id="cloud"
                name="cloud"
                value={formData.cloud}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="AWS, Google Cloud, Azure, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="engineering" className="block text-sm font-medium text-gray-700">Engineering Principles</label>
              <input
                type="text"
                id="engineering"
                name="engineering"
                value={formData.engineering}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Software Engineering, Agile, etc."
                required
              />
            </div>
          </div>

          <div className="my-6">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Tell us about your experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe your past work, projects, or any relevant experiences."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForProgrammer;
