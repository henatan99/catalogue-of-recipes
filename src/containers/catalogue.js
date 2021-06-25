import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Category from '../components/category';
import { fetchCategories, changeFilter } from '../actions/index';

const Catalogue = ({ changeFilter }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const renderCategories = () => {
    if (state.categories.loading) {
      return <h1>loading...</h1>;
    }

    if (state.categories.items) {
      return state.categories.items.map((category, index) => (
        <Category
          name={category.strCategory}
          image={category.strCategoryThumb}
          recipes={5}
          key={category.idCategory || index}
          handleFilterChange={() => changeFilter(category.strCategory)}
        />
      ));
    }

    return <h1>Error</h1>;
  };

  return (
    <div>{ renderCategories() }</div>
  );
};

Catalogue.defaultProps = {
  changeFilter: null,
};

Catalogue.propTypes = {
  changeFilter: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (category) => dispatch(changeFilter(category)),
});

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
