import React, { Component } from "react";
import CardItem from "../Common/CardItem/CardItem";

import marsMap from "../../assets/marsMap.json";
import colonyOwnerList from "../../assets/colonyOwnerList.json";
import COLOR_LIST from "../../assets/colorList.js";
import "./MyAssetsPage.css";

class MyAssetsPage extends Component {
  state = {
    individualMapDimensions: {
      width: 400,
      height: 400
    },
    mapPoints: [],
    ownerList: {},
    ownerListOri: [],
    userMapPoints: []
  };

  ownerListDataTransform() {
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

  componentDidMount() {
    this.setState({
      ownerListOri: colonyOwnerList.ownerList,
      ownerList: this.ownerListDataTransform(),
      userMapPoints: marsMap.mapPoints
    });
  }

  render() {
    const { ownerList, ownerListOri, userMapPoints, individualMapDimensions } = this.state;

    const { connectStatus } = this.props;

    return (
      <div className="MyAssetsPage">
        <div className="pageWrapper MyAssetsPage__wrapper">
          <h1>MY ASSETS</h1>
          <div className="coloniesSection__cards">
            {userMapPoints.map((item, id) => {
              return (
                <CardItem
                  key={id}
                  mapDimensions={individualMapDimensions}
                  mapPoint={item}
                  owner={ownerListOri.find((ownerItem) => {
                    return ownerItem.colony_id === item.id;
                  })}
                  ownerList={ownerList}
                  connectStatus={connectStatus}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MyAssetsPage;
