import '../modules/slider_3d/slider_3d.scss';
import Slider3D from '../modules/slider_3d/slider_3d.js';
import '../modules/scroll_bar_top/scroll_bar_top.scss';
import ScrollBarTop from '../modules/scroll_bar_top/scroll_bar_top.js';
import { pauseDecorator } from './common';
import '../styles/style.scss';

const timePause = 700;

const slider3d = new Slider3D();
slider3d.scroll = pauseDecorator(slider3d.scroll, timePause);
slider3d.init();

const scrollBarTop = new ScrollBarTop();
scrollBarTop.scrollSlide = pauseDecorator(scrollBarTop.scrollSlide, timePause);
scrollBarTop.init();
