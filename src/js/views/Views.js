class View {
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();

    this._parent.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parent.innerHTML = '';
  }

  renderSpinner() {
    this._parent.innerHTML = `<h1>Loading...</h1>`;
  }
}

export default View;
