import BeerDescription from "./beerDescription.ts";
import BeerLabel from "./beerLabel.ts";

export default class Beer {
  id = "";

  name = "";

  brewerId = "";

  description: BeerDescription = new BeerDescription();

  style = "";

  percentage = 0;

  imageUrl = "";

  label: BeerLabel = new BeerLabel();

  createdAt: Date = new Date();

  score? = "";
}
