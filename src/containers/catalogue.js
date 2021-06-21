import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Category from '../components/category';
import { fetchCategories, changeFilter } from '../actions/index';

// import filterChange from '../actions';

const Catalogue = ({ changeFilter }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const renderCategories = () => {
    if (state.categories.loading) {
      return <h1>loading...</h1>;
    }

    return state.categories.items.map((category) => (
      <Category
        name={category.strCategory}
        image={category.strCategoryThumb}
        recipes={5}
        key={category.idCategory}
        handleFilterChange={() => changeFilter(category.strCategory)}
      />
    ));
  };

  return (
    <div>{ renderCategories() }</div>
  );
};

Catalogue.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (category) => dispatch(changeFilter(category)),
});

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
