import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header, ListItems } from '../components';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 50,
  },
}));

const GET_CHARACTERS = gql`
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

const Characters = () => {
  const classes = useStyles();

  const { loading, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { first: 12, after: '' },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  const loadMoreData = () => {
    const lastElmCursor = data.allPeople.edges[data.allPeople.edges.length - 1].cursor;

    fetchMore({
      variables: { first: 12, after: lastElmCursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => ({
        allPeople: {
          ...allPeople,
          edges: [
            ...prev.allPeople.edges,
            ...allPeople.edges,
          ],
        },
      }),
    });
  };

  const allCharacters = data.allPeople.edges.map(({ node: { id, name, image } }) => ({
    id,
    name,
    image,
  }));
  const loadMoreIsVisible = data.allPeople.pageInfo.hasNextPage;

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <ListItems
          listItems={allCharacters}
          loadMoreIsVisible={loadMoreIsVisible}
          loadMoreHandler={loadMoreData}
          linkTo="characters"
          mdColumns={4}
        />
      </Container>
    </div>
  );
};

export default Characters;
