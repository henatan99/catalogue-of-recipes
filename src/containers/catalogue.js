/* eslint-disable */
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/category';
import { useEffect } from 'react';
import { fetchCategories } from '../actions/index';

const Catalogue = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state);
  useEffect(()=> {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Category
          name={category.strCategory}
          image={category.strCategoryThumb}
          recipes={5}
          key={filter}
        />
      ))}
    </div>
  );
};

Catalogue.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  filter: state.filter,
});

export default connect(mapStateToProps)(Catalogue);
