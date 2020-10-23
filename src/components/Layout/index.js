import PropTypes from "prop-types"; 
import React from "react"; 
import Footer from '../Footer'

import Header from "../header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header /> 
      <main className="flex-1 w-full max-w-ull mx-auto">
        {children}
      </main> 
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
