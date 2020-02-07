import React from 'react';
import "./index.scss";
import { sortTypes, SortType } from '../../tools/sort';

interface Props {
  sortType: SortType;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const sortTypesArray = Object.values(sortTypes);

const SortBeers: React.FC<Props> = (props: Props) => {
  const { sortType, handleSortChange } = props;
  return (
    <div className="sort-beer-container">
      <span>Order by:</span>
      <select
        className="sort-beer-select"
        value={sortType.sortTypeEnum}
        onChange={handleSortChange}
      >
        {sortTypesArray.map((sortOption: SortType) => (
          <option
            className="sort-beer-select-options"
            value={sortOption.sortTypeEnum}
          >
            {sortOption.sortTypeLabel}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBeers;
