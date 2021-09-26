export interface Country {
  code: string;
  name: string;
  currency: string;
  continent: {
    code: string;
    name: string;
  };
  languages: {
    code: string;
    name: string;
    length: number;  // To fix Array.from
  };
  capital: string;
  emoji: string;
}

export interface CountriesData {
  countries: Country[];
}

export interface CountryData {
  country: Country;
}

export interface Languages {
  code: string;
  name: string;
}

export interface Option {
  value: string;
  name: string;
}

export interface Params {
  countryCode: string;
}
