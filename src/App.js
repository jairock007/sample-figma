import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([
    "Book Cover natural 03.jpg",
    "Book Cover natural 03.jpg",
    "Book Cover natural 03.jpg",
  ]);

  const addImage = () => {
    setImages([...images, "Book Cover natural 03.jpg"]);
  };

  return (
    <div className="min-h-screen flex bg-gray-800">
      {/* Left side empty space */}
      <div className="hidden md:block w-1/2"></div>

      {/* Right side (widgets) */}
      <div className="w-full md:w-1/2 p-4 space-y-6">
        {/* First Widget (Tabs) */}
        <div className="bg-gray-700 p-4 rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="flex justify-between bg-black rounded-lg p-1 head">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                activeTab === "about"
                  ? "bg-gray-700 text-white shadow-lg"
                  : "bg-transparent text-gray-400"
              } hover:bg-gray-600 hover:text-white hover:shadow-md`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                activeTab === "experience"
                  ? "bg-gray-700 text-white shadow-lg"
                  : "bg-transparent text-gray-400"
              } hover:bg-gray-600 hover:text-white hover:shadow-md`}
            >
              Experiences
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                activeTab === "recommended"
                  ? "bg-gray-700 text-white shadow-lg"
                  : "bg-transparent text-gray-400"
              } hover:bg-gray-600 hover:text-white hover:shadow-md`}
            >
              Recommended
            </button>
          </div>

          {/* Content Section with Fade-in Effect */}
          <div className="mt-4 p-4 bg-gray-900 rounded-lg text-gray-300 h-48 overflow-y-auto">
            <div className="animate-fadeIn">
              {activeTab === "about" && (
                <div>
                  <p>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                    been working at this awesome company for 3 years now.
                  </p>
                  <p className="mt-2">
                    I was born and raised in Albany, NY & have been living in
                    Santa Carla for the past 10 years with my wife Tiffany and
                    my 4-year-old twin daughters- Emma and Ella. Both of them
                    are just starting school, so my calendar is usually blocked
                    between 9–10 AM.
                  </p>
                </div>
              )}
              {activeTab === "experience" && (
                <div>
                  <p>I've been working in sales for over 10 years...</p>
                  <p className="mt-2">
                    My expertise lies in CRM systems, sales management, and
                    customer relations.
                  </p>
                </div>
              )}
              {activeTab === "recommended" && (
                <div>
                  <p>
                    I recommend Salesforce for its robust solutions,
                    scalability, and fantastic support for businesses of all
                    sizes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second Widget (Gallery) */}
        <div className="bg-gray-900 rounded-xl p-4">
          {/* Gallery Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-white text-lg bg-gray-700 px-4 py-2 rounded-lg">
              Gallery
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={addImage}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
              >
                + Add Image
              </button>
              <button className="bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Thumbnails with Hover Effect */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-gray-800 p-2 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-lg grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
