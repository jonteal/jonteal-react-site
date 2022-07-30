import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
      <Fragment>
          <div className="navigation-container">
              <Link className="logo-container" to='/'>
                  <img src="" className='' alt="" />
              </Link>
              <div className="nav-links">
                  <Link className="nav-link" to='about'>
                      ABOUT
                  </Link>
                  <Link className="nav-link" to='contact'>
                    CONTACT
                  </Link>
                  <Link className="nav-link" to='music'>
                    MUSIC
                  </Link>
                  <Link className="nav-link" to='shop/'>
                    SHOP
                  </Link>

              </div>
          </div>

          <Outlet />
      </Fragment>
  );
}
 
export default Navigation;