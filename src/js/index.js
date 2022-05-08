import '../modules/slider_3d/slider_3d.scss';
import Slider3D from '../modules/slider_3d/slider_3d.js';
import '../modules/scroll_bar_top/scroll_bar_top.scss';
import ScrollBarTop from '../modules/scroll_bar_top/scroll_bar_top.js';
import '../styles/style.scss';

const slider3d = new Slider3D();
slider3d.init();

const scrollBarTop = new ScrollBarTop();
scrollBarTop.init();
