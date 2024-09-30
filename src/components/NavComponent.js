import React from "react";
import Logo from "../components/Logo";

function NavComponent() {
  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <Logo color={"white"} />
      {/* Add margin between the logo and the nav items */}
      <div className=" menu d-flex ms-3 gap-4 ">
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Sign In</a>
        </li>
      </div>
    </div>
  );
}

export default NavComponent;
