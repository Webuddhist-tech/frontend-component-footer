function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGooglePlay, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL', 'SITE_NAME', 'CATALOG_MICROFRONTEND_URL', 'EXTENSION_BASE_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=org.sherab.app';
var APP_STORE_URL = 'https://apps.apple.com/us/app/sherab/id6747565399';
var SiteFooter = /*#__PURE__*/function (_React$Component) {
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _callSuper(this, SiteFooter, [props]);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_this);
    _this.handleNarrowChange = _this.handleNarrowChange.bind(_this);
    _this.narrowQuery = null;
    _this.state = {
      isLogoHovered: false,
      isNarrow: false,
      // Below the mobile breakpoint the link columns collapse
      openColumns: {} // Which columns are expanded while narrow
    };
    return _this;
  }
  _inherits(SiteFooter, _React$Component);
  return _createClass(SiteFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Track the mobile breakpoint so link columns can act as accordions.
      if (typeof window !== 'undefined' && window.matchMedia) {
        this.narrowQuery = window.matchMedia('(max-width: 600px)');
        this.setState({
          isNarrow: this.narrowQuery.matches
        });
        this.narrowQuery.addEventListener('change', this.handleNarrowChange);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.narrowQuery) {
        this.narrowQuery.removeEventListener('change', this.handleNarrowChange);
      }
    }
  }, {
    key: "handleNarrowChange",
    value: function handleNarrowChange(event) {
      this.setState({
        isNarrow: event.matches
      });
    }
  }, {
    key: "isColumnOpen",
    value: function isColumnOpen(columnId) {
      // Above the breakpoint every column is always open.
      return !this.state.isNarrow || !!this.state.openColumns[columnId];
    }
  }, {
    key: "toggleColumn",
    value: function toggleColumn(columnId) {
      if (!this.state.isNarrow) {
        return;
      }
      this.setState(function (prev) {
        return {
          openColumns: _objectSpread(_objectSpread({}, prev.openColumns), {}, _defineProperty({}, columnId, !prev.openColumns[columnId]))
        };
      });
    }
  }, {
    key: "renderColumnTitle",
    value: function renderColumnTitle(columnId, messageKey) {
      var _this2 = this;
      var intl = this.props.intl;
      var open = this.isColumnOpen(columnId);
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "ft-col-title",
        "aria-expanded": open,
        "aria-controls": "ft-col-".concat(columnId),
        onClick: function onClick() {
          return _this2.toggleColumn(columnId);
        }
      }, intl.formatMessage(messages[messageKey]), /*#__PURE__*/React.createElement("svg", {
        className: "ft-col-chev",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("polyline", {
        points: "6 9 12 15 18 9"
      })));
    }
  }, {
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        logo = _this$props.logo,
        intl = _this$props.intl;
      var isLogoHovered = this.state.isLogoHovered;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;
      var startCampusUrl = "".concat(config.EXTENSION_BASE_URL, "/start-campus");
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        className: "site-footer",
        "aria-label": "Site footer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ft-grid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ft-brand"
      }, /*#__PURE__*/React.createElement("a", {
        className: "logo-link ".concat(isLogoHovered ? 'logo-link-hover' : ''),
        href: config.LMS_BASE_URL,
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel']),
        onMouseEnter: function onMouseEnter() {
          return _this3.setState({
            isLogoHovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.setState({
            isLogoHovered: false
          });
        }
      }, /*#__PURE__*/React.createElement("img", {
        className: "logo-image",
        src: logo || config.LOGO_TRADEMARK_URL,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      }), /*#__PURE__*/React.createElement("span", {
        className: "ft-brand-name"
      }, config.SITE_NAME), /*#__PURE__*/React.createElement("div", {
        className: "custom-tooltip ".concat(isLogoHovered ? 'custom-tooltip-visible' : ''),
        role: "tooltip",
        "aria-hidden": !isLogoHovered
      }, intl.formatMessage(messages['footer.logo.hoverText']))), /*#__PURE__*/React.createElement("p", {
        className: "ft-tagline"
      }, intl.formatMessage(messages['footer.brand.tagline']))), /*#__PURE__*/React.createElement("div", {
        className: "ft-col ".concat(this.isColumnOpen('knowmore') ? 'is-open' : '')
      }, this.renderColumnTitle('knowmore', 'footer.column.knowmore'), /*#__PURE__*/React.createElement("nav", {
        className: "ft-col-body",
        id: "ft-col-knowmore"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/about"),
        onClick: this.externalLinkClickHandler,
        className: "footer-link"
      }, intl.formatMessage(messages['footer.colophon.about'])), /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/contact"),
        onClick: this.externalLinkClickHandler,
        className: "footer-link"
      }, intl.formatMessage(messages['footer.colophon.contact'])), /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/privacy"),
        onClick: this.externalLinkClickHandler,
        className: "footer-link"
      }, intl.formatMessage(messages['footer.colophon.privacy'])))), /*#__PURE__*/React.createElement("div", {
        className: "ft-col ".concat(this.isColumnOpen('learn') ? 'is-open' : '')
      }, this.renderColumnTitle('learn', 'footer.column.learn'), /*#__PURE__*/React.createElement("nav", {
        className: "ft-col-body",
        id: "ft-col-learn"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/courses"),
        onClick: this.externalLinkClickHandler,
        className: "footer-link"
      }, intl.formatMessage(messages['footer.learn.exploreCourses'])), /*#__PURE__*/React.createElement("a", {
        href: "".concat((config.CATALOG_MICROFRONTEND_URL || '').replace(/\/$/, ''), "/#partner-carousel-title"),
        className: "footer-link"
      }, intl.formatMessage(messages['footer.learn.campuses'])), /*#__PURE__*/React.createElement("a", {
        href: startCampusUrl,
        className: "footer-link"
      }, intl.formatMessage(messages['footer.learn.startCampus'])))), /*#__PURE__*/React.createElement("div", {
        className: "ft-col ft-col-app ".concat(this.isColumnOpen('app') ? 'is-open' : '')
      }, this.renderColumnTitle('app', 'footer.column.app'), /*#__PURE__*/React.createElement("div", {
        className: "ft-col-body footer-badges",
        id: "ft-col-app"
      }, /*#__PURE__*/React.createElement("a", {
        className: "ft-store",
        href: GOOGLE_PLAY_URL,
        rel: "noopener"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faGooglePlay,
        className: "ft-store-icon"
      }), /*#__PURE__*/React.createElement("span", {
        className: "ft-store-text"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ft-store-prefix"
      }, intl.formatMessage(messages['footer.app.googlePlay.prefix'])), /*#__PURE__*/React.createElement("span", {
        className: "ft-store-name"
      }, intl.formatMessage(messages['footer.app.googlePlay.name'])))), /*#__PURE__*/React.createElement("a", {
        className: "ft-store",
        href: APP_STORE_URL,
        rel: "noopener"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faApple,
        className: "ft-store-icon"
      }), /*#__PURE__*/React.createElement("span", {
        className: "ft-store-text"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ft-store-prefix"
      }, intl.formatMessage(messages['footer.app.appStore.prefix'])), /*#__PURE__*/React.createElement("span", {
        className: "ft-store-name"
      }, intl.formatMessage(messages['footer.app.appStore.name']))))))), /*#__PURE__*/React.createElement("div", {
        className: "ft-bottom"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ft-copy"
      }, intl.formatMessage(messages['footer.copyright'], {
        year: new Date().getFullYear(),
        siteName: config.SITE_NAME
      })), /*#__PURE__*/React.createElement("div", {
        className: "footer-social-icons"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://www.facebook.com/profile.php?id=61580184195837",
        className: "social-icon",
        "aria-label": "Facebook"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faFacebook
      })), /*#__PURE__*/React.createElement("a", {
        href: "https://www.instagram.com/webuddhist_academy/",
        className: "social-icon",
        "aria-label": "Instagram"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faInstagram
      })), /*#__PURE__*/React.createElement("a", {
        href: "https://x.com/WB_Academy_",
        className: "social-icon",
        "aria-label": "X"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faXTwitter
      })), /*#__PURE__*/React.createElement("a", {
        href: "https://www.youtube.com/@webuddhistacademy",
        className: "social-icon",
        "aria-label": "YouTube"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faYoutube
      })))), showLanguageSelector && /*#__PURE__*/React.createElement("div", {
        className: "language-selector-wrapper"
      }, /*#__PURE__*/React.createElement(LanguageSelector, {
        options: supportedLanguages,
        onSubmit: onLanguageSelected
      }))));
    }
  }]);
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map