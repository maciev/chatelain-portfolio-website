import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between px-5 py-4">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">
          {siteTitle}
        </span>
      </div>
      <div className="block lg:hidden md:hidden">
        <button
          //onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
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
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow  md:flex md:w-auto lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-row justify-end text-sm lg:flex-grow md:flex-grow ">
          <b className="flex flex-row">
            <Link
              to={`/`}
              href="#responsive-Header"
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={`/blog`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Blog
            </Link>
          </b>
        </div>
        <div></div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
