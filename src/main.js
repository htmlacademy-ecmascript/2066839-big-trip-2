import { render } from './render.js';
import { RenderPosition } from './render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/info-trip-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const filters = document.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter({ container: siteMainElement });

render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), filters);

boardPresenter.init();
