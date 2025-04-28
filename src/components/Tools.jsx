import React from "react";
import { Link,useLocation  } from "react-router-dom";

import {
  FaSearch,
  FaBoxes,
  FaWarehouse,
  FaFileInvoice,
  FaShopify,
  FaShoppingBag,
  FaUserTie,
  FaTruck,
  FaUserCircle,
} from "react-icons/fa";
import { ImQrcode } from "react-icons/im";

export const header_with_url = [
  {
    header: "Product Finder",
    url: "https://whatisproduct.netlify.app/",
    icon: <FaSearch />,
  },

  {
    header: "Inventory management",
    url: "https://sachinrawat6.github.io/test/",
    icon: <FaBoxes />,
  },
  {
    header: "RackSpace Finder",
    url: "https://rackspaceupdater.netlify.app/",
    icon: <FaWarehouse />,
  },
  {
    header: "QrCode Generator",
    url: "https://sachinrawat6.github.io/QrCode/",
    icon: <ImQrcode/>,
  },
  {
    header: "PickList to MRP Label",
    url: "https://mrplabel.netlify.app/",
    icon: <FaFileInvoice />,
  },
  {
    header: "Shopify Picklist",
    url: "https://shopifypick.netlify.app//",
    icon: <FaShopify />,
  },
  {
    header: "ShoppersStop Picklist",
    url: "https://sspicklist.netlify.app/",
    icon: <FaShoppingBag />,
  },
  {
    header: "Tailor Management",
    url: "https://newtailor.netlify.app",
    icon: <FaUserTie />,
  },
  {
    header: "Shopify Order Tracker",
    url: "https://qurviitrack.netlify.app/",
    icon: <FaTruck />,
  },
  {
    header: "Employee Dashboard",
    url: "https://tailordashboard.netlify.app/",
    icon: <FaUserCircle />,
  },
 
];
const Tools = () => {
  const location = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
   <div>
      {location.pathname !== "/" && (
        <Link 
          to="/" 
          className="bg-gray-200 py-2 px-4 rounded shadow hover:bg-gray-100 transition-colors duration-200"
        >
          Back
        </Link>
      )}
    </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Qurvii Tools</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of productivity tools to streamline your workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {header_with_url.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative z-10 flex items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {item.header}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {item.url.replace(/^https?:\/\//, '').split('/')[0]}
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-6 flex justify-end">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                Open tool
                <svg className="ml-1 -mr-0.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tools;
