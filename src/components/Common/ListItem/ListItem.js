import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    const { number, name, color } = this.props;

    return (
      <div className="ListItem">
        <div className="ListItem__number" style={{ background: color }}>
          {number}
        </div>
        <div className="ListItem__name">{name}</div>
      </div>
    );
  }
}

export default ListItem;
