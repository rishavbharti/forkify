import View from './Views';

class RecipeView extends View {
  _parent = document.querySelector('.recipe-view');

  addEventListener(handleEvent) {
    ['load', 'hashchange'].forEach((event) =>
      window.addEventListener(event, handleEvent)
    );
  }

  _generateMarkup() {
    return `
      <div class="recipe-header">
            <figure>
              <img src=${this._data.image_url} alt=${
      this._data.title
    } class="recipe-image">
            </figure>

            <h3 class="recipe-title">${this._data.title}</h3>
          </div>
          <div class="recipe-details">
            <p class="preparation-time">${this._data.cooking_time} minutes</p>
            <p class="servings"> ${this._data.servings} person</p>
          </div>
          <div class="recipe-ingredients">
            <h4>RECIPE INGREDIENTS</h4>
            <ul class="ingredients">
            ${this._data.ingredients
              .map((ingredient) => this._generateIngredients(ingredient))
              .join('')}
            </ul>
          </div>
      </div>
      `;
  }

  _generateIngredients(ingredient) {
    return `<li>${ingredient?.quantity || ''} ${ingredient.unit} ${
      ingredient.description
    }</li>`;
  }
}

export default new RecipeView();
