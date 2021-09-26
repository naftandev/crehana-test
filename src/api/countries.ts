import endpoints from '../constants/endpoints'
import {
  ApolloClient,
  InMemoryCache,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: endpoints.countries,
  cache: new InMemoryCache()
})

const ALL_COUNTRIES_QUERY = gql`
  query getAllCountries {
    countries {
      code
      name
      currency
      continent {
        code
        name
      }
      emoji
    }
  }
`

const COUNTRY_QUERY = gql`
  query getCountry($countryCode: ID!) {
    country(code: $countryCode) {
      code
      name
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      capital
      emoji
    }
  }
`

export { client, ALL_COUNTRIES_QUERY, COUNTRY_QUERY }
