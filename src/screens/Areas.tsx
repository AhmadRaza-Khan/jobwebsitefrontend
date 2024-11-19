import { Link } from "react-router-dom";
const Areas = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Explore Our Programmer Job Roles</h1>
        <p className="text-lg text-gray-700 mb-12">Join our growing team and make an impact with your skills in a variety of exciting technologies!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Frontend */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Frontend Development</h2>
            <p className="text-gray-600 mb-4">We are looking for passionate frontend developers to build user interfaces that provide a smooth and engaging experience for our users.</p>
            <ul className="text-left text-gray-700">
              <li>React.js</li>
              <li>Vue.js</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Tailwind CSS, Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Backend Development</h2>
            <p className="text-gray-600 mb-4">Backend developers are at the heart of building scalable and secure web applications. Work with APIs, databases, and server-side technologies.</p>
            <ul className="text-left text-gray-700">
              <li>Node.js, Express.js</li>
              <li>Django, Flask</li>
              <li>Ruby on Rails</li>
              <li>Java, Spring Boot</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">DevOps</h2>
            <p className="text-gray-600 mb-4">DevOps engineers work on streamlining the development lifecycle through automation, continuous integration, and deployment.</p>
            <ul className="text-left text-gray-700">
              <li>Docker, Kubernetes</li>
              <li>CI/CD (Jenkins, GitLab)</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>Linux/Unix Systems</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Databases & Data Engineering</h2>
            <p className="text-gray-600 mb-4">Join our data engineering team to manage databases, design ETL pipelines, and work with big data technologies.</p>
            <ul className="text-left text-gray-700">
              <li>MySQL, PostgreSQL</li>
              <li>MongoDB, NoSQL</li>
              <li>Apache Kafka, Spark</li>
              <li>ETL Processes</li>
            </ul>
          </div>

          {/* Cloud Computing */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cloud Computing</h2>
            <p className="text-gray-600 mb-4">Work with cutting-edge cloud technologies to build, manage, and scale applications on various cloud platforms.</p>
            <ul className="text-left text-gray-700">
              <li>AWS, Google Cloud</li>
              <li>Azure</li>
              <li>Cloud Architecture</li>
              <li>Serverless Applications</li>
            </ul>
          </div>

          {/* Engineering Principles */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Engineering & Software Architecture</h2>
            <p className="text-gray-600 mb-4">Help us create scalable and efficient software systems while applying best engineering principles.</p>
            <ul className="text-left text-gray-700">
              <li>Software Design Patterns</li>
              <li>Agile Methodology</li>
              <li>Microservices Architecture</li>
              <li>Systems Design</li>
            </ul>
          </div>

          {/* Stacks and Frameworks */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Stacks & Frameworks</h2>
            <p className="text-gray-600 mb-4">Explore our diverse tech stack and frameworks for building cutting-edge software solutions.</p>
            <ul className="text-left text-gray-700">
              <li>Full Stack Development</li>
              <li>React, Angular, Vue</li>
              <li>Node.js, Django, Flask</li>
              <li>Express.js, Ruby on Rails</li>
            </ul>
          </div>
       <div className="flex gap-10 justify-center h-fit items-center">
       <Link className="bg-orange-600 mt-3 animate-gradual-bounce lg:mt-10 py-1 lg:py-2 px-3 lg:px-5 rounded-md text-md lg:text-xl" to={"/apply"}>Let's apply!</Link>
       <Link className="bg-orange-600 mt-3 animate-gradual-bounce lg:mt-10 py-1 lg:py-2 px-3 lg:px-5 rounded-md text-md lg:text-xl" to={"/checkStatus"}>Check Status</Link>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Areas;
