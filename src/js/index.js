// import Slider_3D
import '../modules/slider_3d/slider_3d.scss';
import Slider3D from '../modules/slider_3d/slider_3d.js';

// import Scroll_Bar_Top
import '../modules/scroll_bar_top/scroll_bar_top.scss';
import ScrollBarTop from '../modules/scroll_bar_top/scroll_bar_top.js';

// import Bacgkround_Music
import '../modules/background_music/background_music.scss';
import BackgroundMusic from '../modules/background_music/background_music';

// import Welcome Screen
import '../modules/welcome_screen/welcome_screen.scss';
import WelcomeScreen from '../modules/welcome_screen/welcome_screen';

// import Accordion
import '../modules/accordion/accordion.scss';
import Accordion from '../modules/accordion/accordion.js';

// import Tabs
import '../modules/tabs/tabs.scss';
import Tabs from '../modules/tabs/tabs.js';

// import Stopwatch
import '../modules/stopwatch/stopwatch.scss';
import Stopwatch from '../modules/stopwatch/stopwatch';

// import Common
import { pauseDecorator } from './common';
import '../styles/style.scss';

const timePause = 700;

const slider3d = new Slider3D();
slider3d.scroll = pauseDecorator(slider3d.scroll, timePause);
slider3d.init();

const scrollBarTop = new ScrollBarTop();
scrollBarTop.scrollSlide = pauseDecorator(scrollBarTop.scrollSlide, timePause);
scrollBarTop.init();

const backgroundMusic = new BackgroundMusic();
backgroundMusic.init();

const welcomeScreen = new WelcomeScreen();
welcomeScreen.init();

const accordion = new Accordion();
accordion.init();

const tabs = new Tabs();
tabs.init();

const stopwatch = new Stopwatch();
stopwatch.init();