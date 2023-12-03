import React from "react";
import "./header-component.scss";

// function Header() {
//   return (
//     <div className="header">
//       <div className="header-item">Home</div>
//       <div className="header-item">Product</div>
//       <div className="header-item">Services</div>
//     </div>
//   );
// }


class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <div className="header-item">Home</div>
      <div className="header-item">Product</div>
      <div className="header-item">Services</div>
    </div>
    )
  }
}


export default Header;
