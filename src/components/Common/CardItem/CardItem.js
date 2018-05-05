import React, { Component } from "react";
import { Input } from "semantic-ui-react";

import { titleCase } from "../../../helpers/commonFunctions";
import "./CardItem.css";

class CardItem extends Component {
  render() {
    const { mapDimensions, mapPoint, owner } = this.props;

    return (
      <div className="CardItem">
        <div className="CardItem__image">
          <svg
            viewBox={`0 0 ${mapDimensions.width} ${mapDimensions.height}`}
            style={{
              backgroundColor: "#3E222E"
            }}
          >
            <path
              fill={"#ffffff"}
              fillOpacity={1}
              stroke="#ffffff"
              strokeWidth="2"
              strokeMiterlimit="10"
              d={mapPoint.individualPathOutline}
            />
            {/* <rect width={400} height={400} fill="none" stroke="black" strokeWidth="8" /> */}
          </svg>
          <span className="CardItem__image__title">{mapPoint.title}</span>
          <span className="CardItem__image__logo">X</span>
        </div>
        <div
          className="CardItem__owner"
          style={{ backgroundColor: this.props.ownerList[this.props.owner.owner_username].color }}
        >
          OWNER : {owner.owner_username.toUpperCase()}
        </div>
        <div className="CardItem__details">
          <div className="CardItem__details__left">
            <div className="CardItem__details__item">
              <div className="CardItem__details__item__header">Latitude</div>
              <div>{mapPoint.latitude}</div>
            </div>
            <div className="CardItem__details__item">
              <div className="CardItem__details__item__header">Longtitude</div>
              <div>{mapPoint.longtitude}</div>
            </div>
          </div>
          <div className="CardItem__details__right">
            <div className="CardItem__details__item">
              <div className="CardItem__details__item__header">Origin</div>
              <div>{titleCase(mapPoint.region)}</div>
            </div>
            <div className="CardItem__details__item">
              <div className="CardItem__details__item__header">Area (Sq.M)</div>
              <div>{mapPoint.area}</div>
            </div>
          </div>
        </div>
        <div className="CardItem__footer">
          <Input
            fluid
            action={{ color: "teal", labelPosition: "right", icon: "cart", content: "BUY" }}
            actionPosition="left"
            placeholder="Enter A Amount"
            defaultValue={owner.next_price}
          />
        </div>
      </div>
    );
  }
}

export default CardItem;
