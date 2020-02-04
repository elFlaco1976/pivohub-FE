import React from "react";
import "./index.scss";

interface Props {
  handleSeeMoreButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SeeMoreButton: React.FC<Props> = (props: Props) => {
  const { handleSeeMoreButtonClick } = props;
  return (
    <div className="see-more-wrapper">
      <button className="see-more-button" type="button" onClick={handleSeeMoreButtonClick}>See more!</button>
    </div>
  );
};

export default SeeMoreButton;
