import React, { Component } from "react";
import { Divider, Button } from "semantic-ui-react";
import Map from "../SvgMap/SvgMap";
import ListItem from "../Common/ListItem/ListItem";
import CardItem from "../Common/CardItem/CardItem";

import marsMap from "../../assets/marsMap.json";
import colonyOwnerList from "../../assets/colonyOwnerList.json";
import "./MapPage.css";
import { titleCase } from "./../../helpers/commonFunctions";

class MapPage extends Component {
  state = {
    mainMapDimensions: {
      width: 1920,
      height: 1080
    },
    individualMapDimensions: {
      width: 400,
      height: 400
    },
    mapPoints: [],
    ownerList: {},
    ownerListOri: [],
    filteredMapPoints: [],
    activeFilterButton: "all"
  };

  ownerListDataTransform() {
    const COLOR_LIST = [
      "red",
      "green",
      "blue",
      "orange",
      "red",
      "green",
      "blue",
      "orange",
      "red",
      "green",
      "blue",
      "orange",
      "red",
      "green",
      "blue",
      "orange"
    ];

    const transformedOwnerList = {};

    colonyOwnerList.ownerList.forEach((item, id) => {
      transformedOwnerList[item.owner_username] = { total: 0, color: COLOR_LIST[id], colonies: [] };
    });

    colonyOwnerList.ownerList.forEach((item, id) => {
      transformedOwnerList[item.owner_username]["total"] =
        transformedOwnerList[item.owner_username]["total"] + item.current_price;
      transformedOwnerList[item.owner_username]["colonies"].push({
        colony_id: item.colony_id,
        current_price: item.current_price,
        next_price: item.next_price
      });
    });

    return transformedOwnerList;
  }

  colonyDetail(id) {
    const { ownerList } = this.state;

    ownerList;
  }

  componentDidMount() {
    this.setState({
      mainMapDimensions: marsMap.mainMapDimensions,
      individualMapDimensions: marsMap.individualMapDimensions,
      mapPoints: marsMap.mapPoints,
      ownerListOri: colonyOwnerList.ownerList,
      ownerList: this.ownerListDataTransform(),
      filteredMapPoints: marsMap.mapPoints
    });
  }

  filterMapPoints(region) {
    if (region === "all") {
      return this.setState({
        filteredMapPoints: this.state.mapPoints
      });
    }

    const filteredMapPoints = this.state.mapPoints.filter((item) => {
      if (item.region === region) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      filteredMapPoints
    });
  }

  render() {
    const {
      mainMapDimensions,
      individualMapDimensions,
      mapPoints,
      ownerList,
      ownerListOri,
      filteredMapPoints,
      activeFilterButton
    } = this.state;

    console.log(ownerList);
    const topOwnerList = Object.entries(ownerList)
      .sort((a, b) => {
        return a[1].total - b[1].total;
      })
      .slice(0, 10);

    return (
      <div className="MapPage">
        <div className="pageWrapper MapPage__wrapper">
          <h1>MARKETPLACE</h1>
          <div className="MapPage__mapSection">
            <div className="MapPage__userlist">
              {topOwnerList.map((item, id) => {
                return (
                  <ListItem
                    key={id}
                    number={(id < 9 ? "0" : "") + (id + 1)}
                    name={titleCase(item[0])}
                    color={item[1].color}
                  />
                );
              })}
            </div>
            <div className="MapPage__map">
              <Map mapDimensions={mainMapDimensions} mapPoints={mapPoints} />
            </div>
            <Divider horizontal>COLONIES DETAILS</Divider>
            <div className="MapPage__coloniesSection" />
            <div className="coloniesSection__buttons">
              <Button onClick={this.filterMapPoints.bind(this, "all")}>ALL</Button>
              <Button onClick={this.filterMapPoints.bind(this, "central")}>CENTRAL</Button>
              <Button onClick={this.filterMapPoints.bind(this, "north")}>NORTH&nbsp;POLE</Button>
              <Button onClick={this.filterMapPoints.bind(this, "south")}>SOUTH&nbsp;POLE</Button>
            </div>
            <div className="coloniesSection__cards">
              {filteredMapPoints.map((item, id) => {
                return (
                  <CardItem
                    key={id}
                    mapDimensions={individualMapDimensions}
                    mapPoint={item}
                    owner={ownerListOri.find((ownerItem) => {
                      return ownerItem.colony_id === item.id;
                    })}
                    ownerList={ownerList}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapPage;
