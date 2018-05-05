/**
 * This is the base component to render maps. This map need mapDimensions and mapPoints as props.
 */

import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

import { titleCase } from "../../helpers/commonFunctions";
import "./SvgMap.css";

class SvgMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: {
        display: "none",
        position: "relative",
        top: 500,
        left: 0
      },
      hoverPopup: {
        display: "none",
        position: "relative",
        top: 500,
        left: 0
      },
      selectedItem: {}
      // ownerListOri: props.ownerListOri
      // backgroundUrl: this.props.mapDimensions.backgroundUrl[0]
    };
    console.log(this.props.ownerListOri);
  }

  // Handle hiding popup when close button clicked.
  popupHide(e) {
    this.setState({
      popup: {
        display: "none"
      }
    });
  }

  hoverPopupHide(e) {
    this.setState({
      hoverPopup: {
        display: "none"
      }
    });
  }

  // Set postiion for popup to appear when click on mapPoint.
  popupToggle(e, item) {
    this.setState({
      popup: {
        display: "initial",
        position: "absolute",
        top: e.pageY + "px",
        left: e.pageX + "px"
      },
      selectedItem: item
    });
  }

  // Set postiion for popup to appear when hover on map.
  hoverPopupToggle(e, item) {
    this.setState({
      hoverPopup: {
        display: "initial",
        position: "absolute",
        top: e.pageY + 3 + "px",
        left: e.pageX + 3 + "px"
      },
      selectedItem: item
    });
  }

  // Generate SVG Text element according to how mnay words it have.
  titleRender(item) {
    const words = item.title.split(" ");

    if (words.length === 1) {
      return (
        <text
          textAnchor="middle"
          fontSize="24"
          y={item.cy + 5}
          x={item.cx + 10}
          strokeWidth="0"
          stroke="#000"
          fill="#000000"
        >
          {item.title}
        </text>
      );
    } else {
      return (
        <text
          textAnchor="middle"
          fontSize="24"
          y={item.cy + 5}
          x={item.cx + 10}
          strokeWidth="0"
          stroke="#000"
          fill="#000000"
        >
          {words[0]}
          <tspan textAnchor="middle" y={item.cy + 35} x={item.cx + 10}>
            {words[1]}
          </tspan>
        </text>
      );
    }
  }

  test(item) {
    this.props.ownerListOri.find((ownerItem) => {
      return ownerItem.colony_id === item.id;
    });
  }

  render() {
    /** Getting mapDimensions and mapPoints from recived props.
     *
     *  mapDimensions must contain backgroundUrl and viewBox size.
     *  Both background image and viewBox dimensions should be same for best compatibility.
     *
     *  mapPoints must be a array of objects with following properties. (id, title, cx, cy)
     *  cx and cy dimention values should be compatible with viewBox dimentions.
     *
     *  (Simply use Illustrator to easily match dimentions)
     **/
    const { mapDimensions, mapPoints, connectStatus } = this.props;
    const { selectedItem } = this.state;

    // Generating SVG elements for each mapPoint.
    const allMapPoints = mapPoints.map((item, id) => {
      return (
        <g
          id={item.id}
          key={id}
          onClick={(e) => {
            this.popupToggle(e, item);
          }}
          onMouseMove={(e) => {
            this.hoverPopupToggle(e, item);
          }}
          onMouseOut={(e) => {
            this.hoverPopupHide();
          }}
        >
          <path
            onMouseOver={(e) => {
              // e.target.style.fillOpacity = "0.7";
              e.target.style.fill = "red";
              // this.hoverPopupToggle(e, item);
            }}
            onMouseOut={(e) => {
              // e.target.style.fillOpacity = "1.0";
              e.target.style.fill = connectStatus === "true" ? item.fill : "gray";
              // this.hoverPopupHide();
            }}
            ref="boundry"
            fill={connectStatus === "true" ? item.fill : "gray"}
            fillOpacity={1}
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            d={item.pathOutline}
          />

          {this.titleRender(item)}
        </g>
      );
    });

    // Returning full svg map
    return (
      <div className="svgMap">
        <div className="svgMap__popup" style={this.state.popup}>
          <Card>
            <Card.Content>
              <Card.Header>{selectedItem.title}</Card.Header>
              <Card.Meta>This Belongs To {titleCase(selectedItem.region)} Region</Card.Meta>
              <Card.Description>
                <p>Name : {selectedItem.title} </p>
                <p>Latitude : {selectedItem.latitude}</p>
                <p>Longtitude : {selectedItem.longtitude}</p>
                <p>Region : {titleCase(selectedItem.region)} </p>
                <p>Area(Sq.M.): {selectedItem.area} </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={(e) => {
                    window.open("http://nasa.gov", "_blank");
                    this.popupHide(e);
                  }}
                >
                  More Info
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    this.popupHide(e);
                  }}
                >
                  Close
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className="svgMap__hoverPopup" style={this.state.hoverPopup}>
          <div>{selectedItem.title}</div>
        </div>
        <svg
          viewBox={`0 0 ${mapDimensions.width} ${mapDimensions.height}`}
          style={{
            backgroundColor: "white"
          }}
        >
          {/* All Map Areas Get Generated Here */}
          {allMapPoints}
          <rect width={mapDimensions.width} height={mapDimensions.height} fill="none" stroke="black" strokeWidth="8" />
        </svg>
      </div>
    );
  }
}

export default SvgMap;
