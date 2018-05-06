import React, { Component } from "react";
import { Input, Button, Header, Image, Modal, Icon } from "semantic-ui-react";

import { titleCase } from "../../../helpers/commonFunctions";
import "./CardItem.css";

class CardItem extends Component {
  render() {
    const { mapDimensions, mapPoint, owner, connectStatus } = this.props;

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
              fill={"#F47C6D"}
              fillOpacity={1}
              stroke="#ffffff"
              strokeWidth="0"
              strokeMiterlimit="10"
              d={mapPoint.individualPathOutline}
            />
            {/* <rect width={400} height={400} fill="none" stroke="black" strokeWidth="8" /> */}
          </svg>
          <span className="CardItem__image__title">{mapPoint.title}</span>
          <span className="CardItem__image__logo">X</span>
        </div>
        {connectStatus === "true" ? (
          <div
            className="CardItem__owner"
            style={{ backgroundColor: this.props.ownerList[this.props.owner.owner_id].color }}
          >
            OWNER :{" "}
            {!owner.owner_id
              ? "NOT YET"
              : owner.owner_username.toUpperCase() || owner.owner_id.substr(-5).toUpperCase()}
          </div>
        ) : (
          ""
        )}
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
        {connectStatus === "true" ? (
          <div className="CardItem__footer">
            <Input className="CardItem__footer__input" placeholder="Search..." value={owner.next_price + " ETH"} />
            <Modal
              size="tiny"
              className="CardItem__footer__modal"
              trigger={
                <Button
                  className="CardItem__footer__button"
                  icon
                  fluid
                  attached="left"
                  color="teal"
                  labelPosition="right"
                >
                  <Icon name="cart" />
                  BUY
                </Button>
              }
            >
              <Modal.Header>{mapPoint.title}</Modal.Header>
              <div className="footer__modal__content">
                <svg
                  width="300"
                  viewBox={`0 0 ${mapDimensions.width} ${mapDimensions.height}`}
                  style={{
                    backgroundColor: "#3E222E"
                  }}
                >
                  <path
                    fill={"#F47C6D"}
                    fillOpacity={1}
                    stroke="#ffffff"
                    strokeWidth="0"
                    strokeMiterlimit="10"
                    d={mapPoint.individualPathOutline}
                  />
                  {/* <rect width={400} height={400} fill="none" stroke="black" strokeWidth="8" /> */}
                </svg>
                <div>
                  <p>
                    You can purchase <span>{mapPoint.title}</span> for <span>{owner.current_price} ETH </span> from{" "}
                    <span>
                      {owner.owner_username.toUpperCase() || owner.owner_id.substr(-5).toUpperCase()}
                    </span>.
                  </p>
                  <p>
                    The next price someone can purchase this country for is <span>{owner.next_price} ETH </span>
                  </p>
                  <p>
                    You may bid higher than the current country price to ensure that you get a buy. If your bid is over
                    the current price, you will get refunded the difference.
                  </p>
                  <p>Your transaction may fail if the price has moved above your bid price.</p>
                  {/* <p>This information was updated x seconds ago.</p> */}
                  <p style={{ fontStyle: "italic" }}>
                    DISCLAIMER: Countries are collectibles, there is no guarantee that other players or anyone else will
                    buy this collectible from you.
                  </p>
                </div>
              </div>
              <div className="footer__modal__footer">
                <div>
                  <Input
                    className="CardItem__footer__input"
                    placeholder="Search..."
                    value={owner.next_price + " ETH"}
                  />
                  <Button
                    className="CardItem__footer__input"
                    icon
                    fluid
                    attached="left"
                    color="teal"
                    labelPosition="right"
                  >
                    <Icon name="cart" />
                    BUY
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CardItem;
