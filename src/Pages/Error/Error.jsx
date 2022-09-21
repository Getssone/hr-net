import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";
import "../../ReactComponents/Components/Boutton/boutton.css"

/**
 * Represents Error.
 * @constructor
 * @return {HTML} the Error page with Link to other functional page
 */

export default function Error() {
  return (
    <div>
      <div className="employees">
              <div className="error">
                <p>Error, this page doesn't exit!</p>
              </div>
        <div className="btn-position">
          <div className="btn-link">
          <Link to="/"> Home </Link>
        </div>
        <div className="btn-link">
          <Link to="/employees">
           Current Employees
          </Link>
        </div>
       </div>
       </div>
    </div>
  );
}
