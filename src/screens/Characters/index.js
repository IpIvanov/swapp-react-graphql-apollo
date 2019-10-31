import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { Header, ListItems } from '../../components';
import { GET_CHARACTERS } from '../../client/queries';
import styles from './styles';

const Characters = () => {
  const classes = makeStyles(styles)();

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
    <div className={classes.wrapper}>
      <Header />
      <Container fluid="true" className={classes.container}>
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
