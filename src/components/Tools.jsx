import React from "react";

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
  return (
    <div className="md:container  mx-auto md:max-w-7xl flex flex-col justify-center  px-10 mb-15">
      <h1 className="mt-4 text-4xl mb-4">Qurvii tools</h1>
      <hr className="text-gray-200" />

      {header_with_url.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-xl items-center text-gray-700 gap-2 px-2 py-4 border border-gray-200  mt-2 rounded hover:bg-gray-100"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.header}</span>
        </a>
      ))}
    </div>
  );
};

export default Tools;
