export const fetchAPI = (key) => {
  const obj = {};
  const fetchApi = async () => {
    const response = await fetch(key, { mode: 'cors' });
    if (response.status === 200) {
      const data = await response.json();
      obj.data = data;
    }
    throw Error(404);
  };
  fetchApi();
  return obj;
};

const baseAPI = 'https://www.themealdb.com/api/json/v1/1';
const searchMealByName = (mealName) => fetchAPI(`${baseAPI}/search.php?s=${mealName}`).then((value) => value);
const listAllMealsByFirstLetter = (firstLetter) => fetchAPI(`${baseAPI}/search.php?f=${firstLetter}`);
const fullMealDetailsById = (mealId) => () => fetchAPI(`${baseAPI}/lookup.php?i=${mealId}`);
const singleRandomMeal = () => fetchAPI(`${baseAPI}/1/random.php`);
const listAllMealCategories = () => fetchAPI(`${baseAPI}/categories.php`);
const listAllCategories = () => fetchAPI(`${baseAPI}/list.php?c=list`);
const listAllAreas = () => fetchAPI(`${baseAPI}/list.php?a=list`);
const listAllIngredients = () => fetchAPI(`${baseAPI}/list.php?i=list`);
const filterByMainIngredient = (mainIngredient) => fetchAPI(`${baseAPI}/filter.php?i=${mainIngredient}`);
const filterByCategory = (category) => fetchAPI(`${baseAPI}/filter.php?c=${category}`);
const filterByArea = (area) => fetchAPI(`${baseAPI}/filter.php?a=${area}`);

// apiActions with category

export const apiActions = {
  SEARCH_MEAL_BY_NAME: searchMealByName,
  LIST_BY_FIRST_LETTER: listAllMealsByFirstLetter,
  DETAILS_BY_ID: fullMealDetailsById,
  RANDOM_MEAL: singleRandomMeal,
  LIST_ALL_MEAL_CATEGORIES: listAllMealCategories,
  LIST_ALL_CATEGORIES: listAllCategories,
  LIST_ALL_AREAS: listAllAreas,
  LIST_ALL_INGREDIENTS: listAllIngredients,
  FILTER_BY_INGREDIENTS: filterByMainIngredient,
  FILTER_BY_CATEGORY: filterByCategory,
  FILTER_BY_AREA: filterByArea,
};
