import React from "react";

class Item extends React.Component {
  render() {
    console.log("Item props: ", this.props);
    return (
      <div
        onClick={this.props.onClick}
        className={"item "}
        style={{ color: this.props.textColor }}
        key={this.props.id}
      >
        {this.props.displayText}
      </div>
    );
  }
}

export default Item;