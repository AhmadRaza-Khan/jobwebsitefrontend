
const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-6">
            Have any questions or want to discuss your next project? Reach out to us!
          </p>
          <div className="max-w-lg mx-auto">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default Contact  