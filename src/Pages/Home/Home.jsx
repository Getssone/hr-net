import { Link } from "react-router-dom";

import Form from "../../ReactComponents/Components/Form/Form.jsx";
import "./Home.css";
import "../../ReactComponents/Components/Boutton/boutton.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="all-forms">
          <div className="form-header">
            <div className="form-link"></div>
          </div>
          <Form />
        </div>
        <div className="btn-position">
          <div className="btn-link">
            <Link to="/employees">View Current Employees</Link>
          </div>
        </div>
      </div>
    </>
  );
}
