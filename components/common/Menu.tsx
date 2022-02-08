import React, { ReactNode, useState } from "react";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  handleMenuTrigger: any;
};

const Menu = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-right">
        <div
          className={`menu-main ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(true)}
        >
          <span>Menu</span>
        </div>

        <div className="menu-mav">
          <div className="menu-inner">
            <button className="menu-trigger" onClick={() => setMenuOpen(false)}>
              <i className="fa fa-times"></i>
            </button>
            <ul className="ul-nav">
              <li>
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>

            <ul className="ul-once">
              <li>
                <div>
                  <p className="txt-a">514-222-3461</p>
                  <p className="txt-a">jomor@jomordesign.com</p>

                  <div className="sc-icon">
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
