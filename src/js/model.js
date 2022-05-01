export const state = {
  recipe: null,
  search: {
    query: '',
    results: [],
    page: null,
  },
};

export const loadRecipe = async (id) => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    if (!res.ok) throw new Error(res.statusText);

    const recipe = await res.json();

    state.recipe = recipe.data.recipe;
  } catch (error) {
    console.error(error);
  }
};

export const searchRecipe = async (query) => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
    );

    if (!res.ok) throw new Error(res.statusText);

    const recipes = await res.json();

    console.log('recipes', recipes);

    // state.recipe = recipe.data.recipe;
  } catch (error) {
    console.error(error);
  }
};
