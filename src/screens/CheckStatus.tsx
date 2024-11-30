import axios from "axios";
import { useState } from "react";
import BackNavigation from "../components/BackButton";
const apiUrl = import.meta.env.VITE_BACKEND_URL
interface Application {
  name: string;
  email: string;
  frontend: string;
  backend: string;
  devOps: string;
  databases: string;
  cloud: string;
  engineering: string;
  experience: string;
  status: string;
}

const ApplicationStatus = () => {
  const [email, setEmail] = useState<string>("");
  const [applicationData, setApplicationData] = useState<Application | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);
    setApplicationData(null);

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/application`, {email}, 
      {withCredentials: true}
      );
      setApplicationData(response.data.data);
      setEmail("");
    } catch (err: any) {
      setError("Application not found or error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-10">
      <BackNavigation />
      <div className="container mt-36 mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-2xl font-bold text-blue-600">Application Status</h1>
          <p className="text-md text-gray-600 mt-2">
            Enter your email to view the status of your application.
          </p>
        </header>

        {/* Email Input Form */}
        <div className="flex justify-center mb-8">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Check
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin text-blue-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-600 mt-10">
            <p>{error}</p>
          </div>
        )}

        {/* Application Data Display */}
        {applicationData && !loading && !error && (
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-700">Full Name</p>
                <p className="mt-1 text-gray-800">{applicationData.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Email Address</p>
                <p className="mt-1 text-gray-800">{applicationData.email}</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-blue-600 my-6">Skills & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-700">Frontend Technologies</p>
                <p className="mt-1 text-gray-800">{applicationData.frontend}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Backend Technologies</p>
                <p className="mt-1 text-gray-800">{applicationData.backend}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">DevOps Tools</p>
                <p className="mt-1 text-gray-800">{applicationData.devOps}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Databases</p>
                <p className="mt-1 text-gray-800">{applicationData.databases}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Cloud Computing</p>
                <p className="mt-1 text-gray-800">{applicationData.cloud}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Engineering Principles</p>
                <p className="mt-1 text-gray-800">{applicationData.engineering}</p>
              </div>
            </div>

            <div className="my-6">
              <p className="text-sm font-medium text-gray-700">Tell us about your experience</p>
              <p className="mt-1 text-gray-800">{applicationData.experience}</p>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mt-6">Application Status: Pending</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;
