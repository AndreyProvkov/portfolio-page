import Slider3D from '../modules/slider_3d/slider_3d'
import ScrollBarTop from '../modules/scroll_bar_top/scroll_bar_top'
import BackgroundMusic from '../modules/background_music/background_music'
import WelcomeScreen from '../modules/welcome_screen/welcome_screen'
import Accordion from '../modules/accordion/accordion'
import Tabs from '../modules/tabs/tabs'
import Stopwatch from '../modules/stopwatch/stopwatch'
import Timer from '../modules/timer/timer'
import ContactMe from '../modules/contact_me/contact_me'
import Calculator from '../modules/calculator/calculator'
import Description from '../modules/description/description'

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

const timer = new Timer();
timer.init();

const contactMe = new ContactMe();
contactMe.init();

const calculator = new Calculator();
calculator.init();

const description = new Description();
description.init();