/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconPlusAlt(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z\'/><path d=\'M11.75 8a.75.75 0 01-.75.75H8.75V11a.75.75 0 01-1.5 0V8.75H5a.75.75 0 010-1.5h2.25V5a.75.75 0 011.5 0v2.25H11a.75.75 0 01.75.75z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M11.999 3a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z\'/><path d=\'M17.999 12a1 1 0 01-1 1h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4V7a1 1 0 112 0v4h4a1 1 0 011 1z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconPlusAlt is deprecated and will be archived soon. Use IconPlusAlt instead.
 */

export function Experimental__IconPlusAlt(props) {
  return /*#__PURE__*/React.createElement(IconPlusAlt, props);
}