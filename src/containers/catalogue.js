/* eslint-disable */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/category';
import { fetchAPI, apiActions } from '../API/apiHandler';

const Catalogue = ({ filter }) => {
  const categoryObj = apiActions.LIST_ALL_MEAL_CATEGORIES;
  const result = categoryObj();
  console.log(result);
  const categories = result.data.categories;
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
