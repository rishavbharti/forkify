import { state, loadRecipe, searchRecipe } from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

const loadRecipeController = async () => {
  const id = window.location.hash.split('#')[1];

  if (!id) return null;

  recipeView.renderSpinner();

  await loadRecipe(id);

  recipeView.render(state.recipe);
};

const searchRecipeController = async () => {
  const query = searchView.getQuery();

  if (!query) return null;
  console.log('query => ', query);

  searchView.renderSpinner();

  searchRecipe(query);
};

(function init() {
  recipeView.addEventListener(loadRecipeController);
  searchView.addEventListener(searchRecipeController);
})();
