export const baseAPI = 'https://www.themealdb.com/api/json/v1/1';

// const searchMealByName = (mealName) => fetchAPI(`${baseAPI}/search.php?s=${mealName}`).then((value) => value);
// const listAllMealsByFirstLetter = (firstLetter) => fetchAPI(`${baseAPI}/search.php?f=${firstLetter}`);
// const fullMealDetailsById = (mealId) => () => fetchAPI(`${baseAPI}/lookup.php?i=${mealId}`);
// const singleRandomMeal = () => fetchAPI(`${baseAPI}/1/random.php`);
export const listAllMealCategories = () => fetchAPI(`${baseAPI}/categories.php`);
// const listAllCategories = () => fetchAPI(`${baseAPI}/list.php?c=list`);
// const listAllAreas = () => fetchAPI(`${baseAPI}/list.php?a=list`);
// const listAllIngredients = () => fetchAPI(`${baseAPI}/list.php?i=list`);
// const filterByMainIngredient = (mainIngredient) => fetchAPI(`${baseAPI}/filter.php?i=${mainIngredient}`);
// const filterByCategory = (category) => fetchAPI(`${baseAPI}/filter.php?c=${category}`);
// const filterByArea = (area) => fetchAPI(`${baseAPI}/filter.php?a=${area}`);
