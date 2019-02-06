export class Volume {
    value: number;
    unit: string;
}

export class BoilVolume {
    value: number;
    unit: string;
}

export class Temp {
    value: number;
    unit: string;
}

export class MashTemp {
    temp: Temp;
    duration: number;
}

export class Temp2 {
    value: number;
    unit: string;
}

export class Fermentation {
    temp: Temp2;
}

export class Method {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist?: any;
}

export class Amount {
    value: number;
    unit: string;
}

export class Malt {
    name: string;
    amount: Amount;
}

export class Amount2 {
    value: number;
    unit: string;
}

export class Hop {
    name: string;
    amount: Amount2;
    add: string;
    attribute: string;
}

export class Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}

export class Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: BoilVolume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
    favorite: boolean = false;
    similar: Beer[];
}

export class BeerFilterRequest {
  search: string = '';
  minIBU: number= null;
  maxIBU: number= null;
  minABV: number= null;
  maxABV: number= null;
  brewedBefore: Date = null;
  brewedAfter: Date = null;
  advanced = false;

  constructor(){
    this.search = '';
  }
}
