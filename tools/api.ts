/* eslint-disable import/prefer-default-export */
import axios from "axios";
import Beer from "../types/beer";

const apiUrl = 'http://localhost:3000';

export const requestBeers = (handleResponse: (beers: Beer[]) => void) => {
  const url = `${apiUrl}/beers`;

  axios.get(url)
    .then(response => {
      handleResponse(response.data);
    })
    .catch(error => {
      // TODO
      console.log(error);
    });
};
