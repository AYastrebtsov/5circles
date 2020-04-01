// SvgSprite compiler
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/icons/', true, /\.svg$/));


// LIBS
import SwiperSCSS from 'swiper/swiper.scss'


// UTILS
import UTILS from './utils/utils.scss'
import MAIN from './utils/main.scss'
import FONTS from './utils/fonts.scss'


//------------------------------------------------------------


// JS
import burgerJS from './blocks/burger/burger.js'
import formJS from './blocks/form/form.js'
import headerJS from './blocks/header/header.js'
import whiteSliderJS from './blocks/whiteSlider/whiteSlider.js'
import stepsSliderJS from './blocks/stepsSlider/stepsSlider.js'
import messageJS from './blocks/message/message.js'


// SCSS
import burgerSCSS from './blocks/burger/burger.scss'
import formSCSS from './blocks/form/form.SCSS'
import footerSCSS from './blocks/footer/footer.scss'
import headerSCSS from './blocks/header/header.scss'
import languagesSCSS from './blocks/languages/languages.scss'
import metaSCSS from './blocks/meta/meta.scss'
import loginSCSS from './blocks/login/login.scss'
import logoSCSS from './blocks/logo/logo.scss'
import navigationSCSS from './blocks/navigation/navigation.scss'
import contactsSCSS from './blocks/contacts/contacts.scss'
import listSCSS from './blocks/list/list.scss'
import socialSCSS from './blocks/social/social.scss'
import introductionSCSS from './blocks/introduction/introduction.scss'
import whiteSliderSCSS from './blocks/whiteSlider/whiteSlider.scss'
import stepsSliderSCSS from './blocks/stepsSlider/stepsSlider.scss'
import messageSCSS from './blocks/message/message.scss'
