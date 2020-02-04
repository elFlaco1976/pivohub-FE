import React from "react";
import "./index.scss";
import Beer from "../../types/beer";

interface Props {
  beer: Beer;
}

const BeerElement: React.FC<Props> = (props: Props) => {
  const { beer } = props;
  return (
    <div className="item-wrap">
      <div className="item-image-container">
        <img className="item-image" src={beer.imageUrl} alt={beer.name} />
        <div className="item-image-metadata">
          {beer.score && (
            <div className="item-score">
              {beer.score}
            </div>
          )}
          <div className="item-score">
            {`${beer.percentage}%`}
          </div>
        </div>
      </div>
      {beer.name}
    </div>
  );
};

export default BeerElement;
