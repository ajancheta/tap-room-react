import React from 'react';
import BeerList from './BeerList';
import PropTypes from 'prop-types';

const DeleteBeer = props => {
  return (
    <div>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onClickDelete={props.onClickDelete}
      />
    </div>
  );
};

DeleteBeer.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onClickDelete: PropTypes.func
};
export default DeleteBeer;