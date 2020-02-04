import React from "react";
import "./index.scss";
import BeerElement from "../BeerElement/index";
import Beer from "../../types/beer";

interface Props {
  beers: Beer[];
}

const BeerList: React.FC<Props> = (props: Props) => {
  const { beers } = props;
  return (
    <div className="beer-list-wrapper">
      {beers.map(beer => {
        return (<BeerElement beer={beer} key={beer.id} />);
      })}
    </div>
  );
};

export default BeerList;
