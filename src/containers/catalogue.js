import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Category from '../components/category';
import fetchCategories from '../actions/index';

const Catalogue = () => {
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
      />
    ));
  };

  return (
    <div>{ renderCategories() }</div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Catalogue);
