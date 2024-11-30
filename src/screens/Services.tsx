import BackNavigation from "../components/BackButton";

const Services = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12">
        <BackNavigation />
        <div className="container mt-16 mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Our Services</h1>
          <p className="text-md text-gray-700 mb-6">
            Discover the range of services we offer to help businesses grow with expert developers for every tech stack and framework.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Full-Stack Development</h3>
              <p className="text-gray-600 mt-3">From frontend to backend, our developers are experts in building end-to-end solutions.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Mobile App Development</h3>
              <p className="text-gray-600 mt-3">We create seamless mobile applications for both iOS and Android platforms.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">UI/UX Design</h3>
              <p className="text-gray-600 mt-3">Our designers ensure intuitive and user-friendly designs for web and mobile applications.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Cloud Solutions</h3>
              <p className="text-gray-600 mt-3">We help businesses scale with cloud-based infrastructure and DevOps solutions.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Custom Solutions</h3>
              <p className="text-gray-600 mt-3">Our developers create bespoke solutions tailored to meet your business needs.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Consulting & Strategy</h3>
              <p className="text-gray-600 mt-3">Our consultants assist with project strategies, tech stack decisions, and implementation.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Services  