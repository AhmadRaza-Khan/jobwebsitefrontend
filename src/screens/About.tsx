

const About = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
          <p className="text-xl text-gray-700 mb-6">
            We connect top-tier programmers with companies seeking developers for all kinds of tech stacks, frameworks, and libraries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
              <p className="text-gray-600 mt-3">
                To empower businesses by connecting them with the best developers worldwide, ensuring success through technology.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
              <p className="text-gray-600 mt-3">
                To become the leading platform for hiring developers across all programming languages and technologies.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">What We Do</h3>
              <p className="text-gray-600 mt-3">
                We match clients with highly skilled developers specializing in various stacks, frameworks, and libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default About;  