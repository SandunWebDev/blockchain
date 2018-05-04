import React, { Component } from "react";
import { Divider, Card, Icon, Image, Button } from "semantic-ui-react";
import Map from "../SvgMap/SvgMap";
import ListItem from "../Common/ListItem/ListItem";
import CardItem from "../Common/CardItem/CardItem";

import a from "../../assets/mainSection_image1.png";
import marsMap from "../../assets/marsMap.json";
import "./MapPage.css";

class MapPage extends Component {
  render() {
    const mapDetails = marsMap.mapDetails;

    return (
      <div className="MapPage">
        <div className="pageWrapper MapPage__wrapper">
          <h1>MARKETPLACE</h1>
          <div className="MapPage__mapSection">
            <div className="MapPage__userlist">
              <ListItem number="01" name="Gayan" color="red" />
              <ListItem number="02" name="Rayan" color="green" />
              <ListItem number="03" name="Mayan" color="blue" />
              <ListItem number="04" name="Tayan " color="yellow" />
              <ListItem number="05" name="Sayan" color="orange" />
              <ListItem number="06" name="Layans" color="pink" />
              <ListItem number="07" name="Bayan" color="teal" />
              <ListItem number="08" name="Kayan" color="violet" />
              <ListItem number="09" name="Sayan" color="blue" />
              <ListItem number="10" name="Qayan" color="red" />
            </div>
            <div className="MapPage__map">
              <Map mapDetails={marsMap.mapDetails.main} mapPoints={marsMap.mapPoints} />
            </div>
            <Divider horizontal>COLONIES DETAILS</Divider>
            <div className="MapPage__coloniesSection" />
            <div className="coloniesSection__buttons">
              <Button>ALL</Button>
              <Button>CENTRAL</Button>
              <Button>NORTH POLE</Button>
              <Button>SOUTH POLE</Button>
            </div>
            <div className="coloniesSection__cards">
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[0]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[1]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
              <CardItem mapDetail={marsMap.mapDetails.individual} mapPoint={marsMap.mapPoints[2]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapPage;
