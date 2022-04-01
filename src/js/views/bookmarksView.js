import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  parentElement = document.querySelector('.bookmarks__list');
  errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  generateMarkup() {
    return this.data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
