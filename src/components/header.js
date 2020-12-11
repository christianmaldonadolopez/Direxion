import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo.png";
import fbHead from "../images/fb-icon-head.png";
import instaHead from "../images/insta-icon-head.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white"> 
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-2 md:pt-6 md:pb-6 mx-auto">
        <Link className="md:w-2/12  md:pl-4" to="/">
          <h1 className="flex items-center text-black no-underline p-2">
            <img
              className="fill-current  w-40" 
              viewBox="0 0 54 54" 
              alt={site.siteMetadata.title}
              src={logo}
            />  
          </h1>
        </Link>

        <button 
          className="items-center block px-3 py-2 text-black border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center md:w-8/12 w-full justify-between px-8`}
             
        >
          {[
            {
              route: `/nosotros`,
              title: `QUIENES SOMOS`,
            },
            {
              route: `/nosotros#quehacemos`,
              title: `QUE HACEMOS`,
            },
            {
              route: `/proyectos`,
              title: `PROYECTOS`,
            },
            {
              route: `/contacto`,
              title: `CONTACTO`,
            },
          ].map((link) => (
            <Link
              className="block text-black pt-1 no-underline md:inline-block md:w-3/12 md:text-center text-right text-xs font-semibold pl-1 pr-1"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="hidden md:w-2/12 md:block pr-8" to="/">
          <Link className="" to="#">
            <img
                className="float-right  ml-4"  
                src={instaHead}
              />
          </Link>
          <Link className="" to="#">
            <img
                className="float-right ml-4"  
                src={fbHead}
              />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
