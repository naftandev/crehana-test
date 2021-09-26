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

export interface State {
  filterValues: {
    name: string;
    continent: string;
    currency: string;
  }
}

export interface Action {
  type: string;
  payload: string;
}

export interface Context {
  state: State;
  dispatch: (value: Action) => void;
}

export interface ContextProvider {
  children: JSX.Element | JSX.Element[];
}
