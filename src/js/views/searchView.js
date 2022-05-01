import View from './Views';

class SearchView extends View {
  _parent = document.querySelector('.search');

  getQuery() {
    const query = this._parent.querySelector('.search-field').value;

    return query;
  }

  addEventListener(handleEvent) {
    this._parent.addEventListener('submit', function (e) {
      e.preventDefault();
      handleEvent(e);
    });
  }
}

export default new SearchView();
