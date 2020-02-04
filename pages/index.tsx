import React, { Component, Props } from "react";
import Layout from "../components/Layout/index";
import { requestBeers } from "../tools/api";
import Beer from "../types/beer";
import BeerList from "../components/BeerList/index";
import SeeMoreButton from "../components/SeeMoreButton/index";

interface State {
  beers: Beer[];
  page: number;
  totalPages: number;
  pageLoading: boolean;
}

class Home extends Component<object, State> {

  allBeers: Beer[];

  elementsPerPage: 20;

  constructor(props: object) {
    super(props);
    this.state = {
      beers: [],
      page: 0,
      totalPages: 1,
      pageLoading: false,
    };
    this.allBeers = [];
    this.elementsPerPage = 20;
  }

  componentDidMount() {
    requestBeers(this.handleResponse);
  }

  handleResponse = (beers: Beer[]) => {
    this.allBeers = beers;
    this.loadNewPage();
  };

  loadNewPage = () => {
    this.setState((prevState: State) => {
      const indexBegin = prevState.page * this.elementsPerPage;
      const indexEnd = indexBegin + this.elementsPerPage;
      const beersPageToAdd = this.allBeers.slice(indexBegin, indexEnd);
      const beersToBeDisplayed = prevState.beers.concat(beersPageToAdd);
      return {
        beers: beersToBeDisplayed,
        page: prevState.page + 1,
      };
    });
  };

  handleSeeMoreButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.loadNewPage();
  };

  render() {
    const { beers } = this.state;
    return (
      <>
        <Layout>
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
