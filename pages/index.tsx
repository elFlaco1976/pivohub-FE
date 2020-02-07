import React, { Component, Props } from "react";
import Layout from "../components/Layout/index";
import { requestBeers } from "../tools/api";
import Beer from "../types/beer";
import BeerList from "../components/BeerList/index";
import SeeMoreButton from "../components/SeeMoreButton/index";
import SortBeers from "../components/SortBeers/index";
import { SortTypeEnum, SortType, sortTypes } from "../tools/sort";

interface State {
  beers: Beer[];
  page: number;
  totalPages: number;
  pageLoading: boolean;
  sortType: SortType;
}

class Home extends Component<object, State> {
  allBeers: Beer[];

  sortedBeers: Beer[];

  elementsPerPage: 20;

  constructor(props: object) {
    super(props);
    this.state = {
      beers: [],
      page: 0,
      totalPages: 1,
      pageLoading: false,
      sortType: sortTypes[SortTypeEnum.Default],
    };
    this.allBeers = [];
    this.sortedBeers = [];
    this.elementsPerPage = 20;
  }

  componentDidMount() {
    requestBeers(this.handleResponse);
  }

  handleResponse = (beers: Beer[]) => {
    this.allBeers = beers;
    this.sortedBeers = [...this.allBeers];
    this.loadNewPage();
  };

  handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortType = sortTypes[e.target.value];
    this.sortBeers(newSortType);
    this.setState({
      sortType: newSortType,
      page: 1,
      beers: this.sortedBeers.slice(0, this.elementsPerPage)
    });
  };

  sortBeers = (sortType: SortType) => {
    if (sortType.sortFunction == null) {
      this.sortedBeers = [...this.allBeers];
    } else {
      this.sortedBeers.sort(sortType.sortFunction);
    }
  };

  loadNewPage = () => {
    this.setState((prevState: State) => {
      const indexBegin = prevState.page * this.elementsPerPage;
      const indexEnd = indexBegin + this.elementsPerPage;
      const beersPageToAdd = this.sortedBeers.slice(indexBegin, indexEnd);
      const beersToBeDisplayed = prevState.beers.concat(beersPageToAdd);
      return {
        beers: beersToBeDisplayed,
        page: prevState.page + 1,
      };
    });
  };

  handleSeeMoreButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>) => {
    this.loadNewPage();
  };

  render() {
    const { beers, sortType } = this.state;
    return (
      <>
        <Layout>
          <SortBeers
            sortType={sortType}
            handleSortChange={this.handleSortChange}
          />
          <BeerList beers={beers} />
          <SeeMoreButton
            handleSeeMoreButtonClick={this.handleSeeMoreButtonClick}
          />
        </Layout>
      </>
    );
  }
}

export default Home;
