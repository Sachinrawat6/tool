import React from "react";

import { FaTools, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tools from "./components/Tools";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r hero from-blue-600  mx-auto relative  h-160 to-blue-800 text-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <a 
              href="#features" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </a> */}
            <Link
              to="/tool" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300 shadow-lg"
            >
              Explore Tools
            </Link>
           
          </div>
        </div>
      </header>



       {/* Tools Section */}
       <section id="tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Productivity Suite</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Browse our collection of specialized tools designed to optimize your daily operations.
          </p>
          <Tools />
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Qurvii Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTools className="text-4xl text-blue-600 mb-4" />,
                title: "Comprehensive Toolkit",
                description: "All essential productivity tools in one place for seamless workflow management."
              },
              {
                icon: <FaRocket className="text-4xl text-blue-600 mb-4" />,
                title: "Efficiency Boost",
                description: "Automate repetitive tasks and focus on what really matters for your business."
              },
              {
                icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
                title: "Data-Driven",
                description: "Tools designed with analytics to help you make informed decisions."
              },
              {
                icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
                title: "User-Centric",
                description: "Intuitive interfaces built with the end-user experience in mind."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-xl mb-8">
            Start using Qurvii Tools today and experience the difference in productivity.
          </p>
          <Link
            to="/tool" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Qurvii Tools</h3>
            <p className="text-gray-400">Productivity solutions for modern businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Qurvii Tools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;