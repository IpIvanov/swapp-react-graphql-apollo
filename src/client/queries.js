import gql from 'graphql-tag';

export const AUTH_QUERY = gql`
query AuthQuery {
  authenticated @client
}
`;

export const SIGN_IN = gql`
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
`;

export const GET_EPISODES = gql`
query getEpisodes($first: Int!) {
  allEpisodes(first: $first) {
    edges{
      node{
        id
        image
        title
        openingCrawl
      }
    }
  }
}
`;

export const GET_CHARACTER_DETAILS = gql`
query getCharacterDetails($id: ID!) {
  person(id: $id) {
    name
    height
    image
    homeworld {
      name
    }
    species {
      name
    }
    starships {
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
}
`;

export const GET_CHARACTERS = gql`
query getCharacters($first: Int!, $after: String!) {
  allPeople(first: $first, after: $after) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        name
        image
      }
    }
  }
}
`;

export const GET_EPISODE_DETAILS = gql`
query getEpisodeDetails($id: ID!, $first: Int!, $after: String!) {
  episode(id: $id){
    title
    image
    openingCrawl
    director
    releaseDate
    people(first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          image
        }
      }
    }
  }
}
`;

export const GET_STARSHIP_DETAILS = gql`
  query getStarshipDetails($id: ID!) {
    starship(id: $id) {
      name
      image
      starshipClass
      cost
      crew
      maxAtmosphericSpeed
      hyperdriveRating
    }
  }
`;
