import React, { Component } from "react";
import { Divider, Button, Message, Icon, Dropdown, Popup, Label } from "semantic-ui-react";
import Map from "../SvgMap/SvgMap";
import ListItem from "../Common/ListItem/ListItem";
import CardItem from "../Common/CardItem/CardItem";

import marsMap from "../../assets/marsMap.json";
import colonyOwnerList from "../../assets/colonyOwnerList.json";
import COLOR_LIST from "../../assets/colorList.js";
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
    customFilteredMapPoints: [],
    topItemsHoveredMapPoints: [],
    sortType: "none"
    // activeFilterButton: "all"
  };

  ownerListDataTransform() {
    const transformedOwnerList = {};

    colonyOwnerList.ownerList.forEach((item, id) => {
      transformedOwnerList[item.owner_id] = {
        total: 0,
        color: COLOR_LIST[id],
        username: item.owner_username,
        colonies: []
      };
    });

    if (!transformedOwnerList[""]) {
      transformedOwnerList[""]["color"] = "gray";
    }

    colonyOwnerList.ownerList.forEach((item, id) => {
      transformedOwnerList[item.owner_id]["total"] = transformedOwnerList[item.owner_id]["total"] + item.current_price;
      transformedOwnerList[item.owner_id]["colonies"].push({
        colony_id: item.colony_id,
        current_price: item.current_price,
        next_price: item.next_price
      });
    });

    return transformedOwnerList;
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

  filterMapPointsByRegion(region) {
    let filteredMapPoints = [];

    // if (region === "all") {
    //   return this.setState({
    //     filteredMapPoints: this.state.mapPoints
    //   });
    // }
    if (region === "all") {
      filteredMapPoints = this.state.mapPoints.filter((item) => {
        return true;
      });
    } else {
      filteredMapPoints = this.state.mapPoints.filter((item) => {
        if (item.region === region) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.setState({
      filteredMapPoints
    });
  }

  sortMapPointsByType(type) {
    const { filteredMapPoints, ownerListOri } = this.state;
    // console.log(filteredMapPoints, ownerListOri);
    let sortedMapPoints = [];

    // function findOwnerDetails(item) {
    //   ownerListOri.find((ownerItem) => {
    //     console.log(item, ownerItem);
    //     return ownerItem.colony_id === item.id;
    //   });
    // }

    sortedMapPoints = filteredMapPoints.map((mapPoint) => {
      let owner = ownerListOri.find((owner) => {
        return owner.colony_id === mapPoint.id;
      });

      mapPoint["next_price"] = owner.next_price;

      return mapPoint;
    });

    switch (type) {
      case "alpha": {
        sortedMapPoints.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        });
        break;
      }
      case "priceAsc": {
        // sortedMapPoints = filteredMapPoints.sort((a, b) => {
        //   let x = ownerListOri.find((ownerItem) => {
        //     return ownerItem.colony_id === a.id;
        //   }).current_price;

        //   let y = ownerListOri.find((ownerItem) => {
        //     return ownerItem.colony_id === b.id;
        //   }).current_price;

        //   return x > y ? 0 : 1;
        // });

        // sortedMapPoints = temp1.sort((a, b) => {
        //   let x = temp2.find((c) => {
        //     return c.colony_id === a.id;
        //   }).next_price;

        //   let y = temp2.find((c) => {
        //     return c.colony_id === b.id;
        //   }).next_price;

        //   return x > y ? 1 : 0;
        // });
        // console.log(sortedMapPoints);

        sortedMapPoints.sort((a, b) => {
          return b.next_price - a.next_price;
        });
        break;
      }
      case "priceDec": {
        sortedMapPoints.sort((a, b) => {
          return a.next_price - b.next_price;
        });
        break;
      }
      case "default": {
      }
    }

    this.setState({
      filteredMapPoints: sortedMapPoints
    });

    // filteredMap.sort((a,b)=>{
    //   x =  ownerDetails.find((c)=>{
    //     return c.colony_id === a.id
    //   })

    //   y=   ownerDetails.find((c)=>{
    //     return c.colony_id === b.id
    //   })

    //   return x>y ? 0 : 1

    // console.log(x.current_price, y.current_price )
    // })
  }

  statusRendering() {
    const { connectStatus } = this.props;

    if (connectStatus === "pending") {
      return (
        <Message icon info>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Loading</Message.Header>
            Reading Mars State From Blockchain!
          </Message.Content>
        </Message>
      );
    } else if (connectStatus === "false") {
      return (
        <Message icon negative>
          <Icon name="close" />
          <Message.Content>
            <Message.Header>Not Connected</Message.Header>
            Crypto Mars requires Web3 Browser to use like MetaMask or Mist.
          </Message.Content>
        </Message>
      );
    }
  }

  handleTopItemsHovered(item) {
    const topItemsHoveredMapPoints = item[1].colonies.map((i) => i.colony_id);
    this.setState({ topItemsHoveredMapPoints: topItemsHoveredMapPoints });
  }

  clearHandleTopItemsHovered(item) {
    this.setState({ topItemsHoveredMapPoints: [] });
  }

  addCustomFilteredMapPoint(point) {
    if (
      !this.state.customFilteredMapPoints.find((i) => {
        return i.title === point.title;
      })
    ) {
      const customFilteredMapPoints = [...this.state.customFilteredMapPoints, point];
      this.setState({
        customFilteredMapPoints: customFilteredMapPoints
      });
    }
  }

  render() {
    const {
      mainMapDimensions,
      individualMapDimensions,
      mapPoints,
      ownerList,
      ownerListOri,
      filteredMapPoints,
      customFilteredMapPoints,
      topItemsHoveredMapPoints,
      addCustomFilteredMapPoint
    } = this.state;

    const { connectStatus } = this.props;

    let topOwnerList = Object.entries(ownerList);
    const excludeIndex = topOwnerList.findIndex((i) => {
      return i[0] == "";
    });
    topOwnerList.splice(excludeIndex, 1);
    topOwnerList = topOwnerList
      .sort((a, b) => {
        return b[1].total - a[1].total;
      })
      .slice(0, 10);

    const selectedMapPoints = customFilteredMapPoints.length > 0 ? customFilteredMapPoints : filteredMapPoints;

    return (
      <div className="MapPage">
        <div className="pageWrapper MapPage__wrapper">
          <h1>MARKETPLACE</h1>
          {this.statusRendering()}

          <div className="MapPage__mapSection">
            {connectStatus === "true" ? (
              <div className="MapPage__userlist">
                {topOwnerList.map((item, id) => {
                  return (
                    <Popup
                      key={id}
                      trigger={
                        <div
                          onMouseEnter={() => {
                            this.handleTopItemsHovered.bind(this, item)();
                          }}
                          onMouseLeave={() => {
                            this.clearHandleTopItemsHovered.bind(this)();
                          }}
                        >
                          <ListItem
                            number={(id < 9 ? "0" : "") + (id + 1)}
                            name={
                              item[1].username
                                ? titleCase(item[1].username).toUpperCase()
                                : titleCase(item[0].substr(-5)).toUpperCase()
                            }
                            color={item[1].color}
                          />
                        </div>
                      }
                      content={
                        <div>
                          {`Colonies : ${item[1].colonies.length}`} <br /> {`Total : ${item[1].total.toFixed(2)} ETH`}
                        </div>
                      }
                      on="hover"
                      position="top left"
                    />
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <div className="MapPage__map">
              <Map
                mapDimensions={mainMapDimensions}
                mapPoints={mapPoints}
                connectStatus={connectStatus}
                ownerListOri={ownerListOri}
                ownerList={ownerList}
                topItemsHoveredMapPoints={topItemsHoveredMapPoints}
                addCustomFilteredMapPoint={this.addCustomFilteredMapPoint.bind(this)}
              />
            </div>
            <Divider horizontal>COLONIES DETAILS</Divider>
            <div className="MapPage__coloniesSection" />
            <div className="coloniesSection__buttons">
              <Button onClick={this.filterMapPointsByRegion.bind(this, "all")}>ALL</Button>
              <Button onClick={this.filterMapPointsByRegion.bind(this, "central")}>CENTRAL</Button>
              <Button onClick={this.filterMapPointsByRegion.bind(this, "north")}>NORTH&nbsp;POLE</Button>
              <Button onClick={this.filterMapPointsByRegion.bind(this, "south")}>SOUTH&nbsp;POLE</Button>
              <Button.Group color="brown">
                <Dropdown text="SORT" icon="filter" labeled button className="icon">
                  <Dropdown.Menu>
                    <Dropdown.Header content="Sort Cur. Selection By " />
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={this.sortMapPointsByType.bind(this, "alpha")}
                      icon="font"
                      text="Alphabatically"
                    />
                    <Dropdown.Item
                      onClick={this.sortMapPointsByType.bind(this, "priceAsc")}
                      icon="arrow up"
                      text="Price Acending"
                    />
                    <Dropdown.Item
                      onClick={this.sortMapPointsByType.bind(this, "priceDec")}
                      icon="arrow down"
                      text="Price Decending"
                    />
                    <Dropdown.Item onClick={this.sortMapPointsByType.bind(this, "newest")} icon="add" text="Newest" />
                    <Dropdown.Item onClick={this.sortMapPointsByType.bind(this, "oldest")} icon="minus" text="Oldest" />
                  </Dropdown.Menu>
                </Dropdown>
              </Button.Group>
            </div>

            {customFilteredMapPoints.length > 0 ? (
              <div className="coloniesSection__customSelectedLabels">
                {customFilteredMapPoints.map((item, id) => {
                  return (
                    <Label key={id} as="a">
                      {item.title}
                      <Icon
                        name="delete"
                        onClick={() => {
                          const result = [...this.state.customFilteredMapPoints];
                          result.splice(id, 1);

                          this.setState({
                            customFilteredMapPoints: result
                          });
                        }}
                      />
                    </Label>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            <div className="coloniesSection__cards">
              {selectedMapPoints.map((item, id) => {
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
      </div>
    );
  }
}

export default MapPage;
