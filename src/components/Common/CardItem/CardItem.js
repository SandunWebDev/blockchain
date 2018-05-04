import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import "./CardItem.css";

class CardItem extends Component {
  render() {
    const { mapDetail, mapPoint } = this.props;

    return (
      <div className="CardItem">
        <div className="CardItem__image">
          <svg
            viewBox={`0 0 ${mapDetail.width} ${mapDetail.height}`}
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
        <div className="CardItem__owner">OWNER : {mapPoint.owner}</div>
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
              <div>{mapPoint.origin}</div>
            </div>
            <div className="CardItem__details__item">
              <div className="CardItem__details__item__header">Ethnicity</div>
              <div>{mapPoint.ethnicity}</div>
            </div>
          </div>
        </div>
        <div className="CardItem__footer">
          <Input
            fluid
            action={{ color: "teal", labelPosition: "right", icon: "cart", content: "BUY" }}
            actionPosition="right"
            placeholder="Enter A Amount"
            defaultValue="52.03"
          />
        </div>
      </div>
    );
  }
}

export default CardItem;
