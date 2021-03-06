/*!
* ff-editor
* https://attrs.github.io/ff-editor/
*
* Copyright attrs and others
* Released under the MIT license
* https://github.com/attrs/ff-editor/blob/master/LICENSE
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ff", [], factory);
	else if(typeof exports === 'object')
		exports["ff"] = factory();
	else
		root["ff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Context = __webpack_require__(60);

__webpack_require__(61)(Context);

var def = Context(document);
var lib = module.exports = function(doc) {
  if( doc instanceof Document ) {
    if( doc === document ) return def(doc);
    return doc.__tinyselector__ = doc.__tinyselector__ || Context(doc);
  }
  
  return def.apply(def, arguments);
};

lib.fn = Context.fn;
lib.util = Context.util;
lib.each = Context.each;
lib.create = Context.create;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(46);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

function Items(arr) {
  this._ = {};
  if( $.util.isArrayLike(arr) ) {
    var self = this;
    [].forEach.call(arr, function(item) {
      self.add(item);
    });
  }
}

var proto = Items.prototype = [];

proto.push = function() {
  var self = this;
  [].forEach.call(arguments, function(item) {
    if( item && item.id ) self._[item.id] = item;
  });
  
  return [].push.apply(this, arguments);
};

proto.add = function(item) {
  if( $.util.isArrayLike(item) ) {
    var self = this;
    [].forEach.call(item, function(item) {
      self.push(item);
    });
  } else {
    this.push(item);
  }
  
  return this;
};

proto.get = function(id) {
  return this._[id];
};

proto.remove = function(item) {
  if( ~['string', 'number'].indexOf(typeof item) ) item = this._[item];
  if( !item ) return this;
  for(var pos;~(pos = this.indexOf(item));) this.splice(pos, 1);
  return this;
};

proto.clear = function() {
  this.splice(0, this.length);
  return this;
};

module.exports = Items;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var context = __webpack_require__(6);

function rangeitem(id, text, tooltip, selector, fn) {
  return {
    id: id,
    text: text,
    tooltip: tooltip,
    onupdate: function(btn) {
      var range = this.range();
      if( !range ) return btn.enable(false);
    
      btn.enable(true);
      btn.active(range.iswrapped(selector));
    },
    fn: fn || function(btn) {
      var part = this;
      var range = part.range();
      if( !range ) return;
      
      range.togglewrap(selector);
      part.history().save();
    }
  };
}

module.exports = {
  insert: {
    heading: {
      id: 'insert.heading',
      text: '<i class="fa fa-header"></i>',
      tooltip: 'Heading',
      fn: function(e) {
        var placeholder = $(this.dom()).attr('placeholder');
        this.insert(new context.Heading().placeholder(placeholder));
      }
    },
    paragraph: {
      id: 'insert.paragraph',
      text: '<i class="fa fa-font"></i>',
      tooltip: '문단',
      fn: function(e) {
        var placeholder = $(this.dom()).attr('placeholder');
        this.insert(new context.Paragraph().placeholder(placeholder));
      }
    },
    imagefile: {
      id: 'insert.imagefile',
      text: '<i class="fa fa-picture-o"></i>',
      tooltip: '이미지 파일',
      fn: function(e) {
        var part = this;
        part.context().selectFiles(function(err, files) {
          if( err ) return context.error(err);
          if( !files.length ) return;
          
          part.insert(files);
        }, {
          upload: false,
          type: 'image'
        });
      }
    },
    image: {
      id: 'insert.image',
      text: '<i class="fa fa-instagram"></i>',
      tooltip: '이미지',
      fn: function(e) {
        var part = this;
        
        context.prompt('Please enter the image URL.', function(src) {
          src && part.insert(new context.Image(src));
        });
      }
    },
    video: {
      id: 'insert.video',
      text: '<i class="fa fa-youtube-square"></i>',
      tooltip: '동영상',
      fn: function(e) {
        var part = this;
        
        context.prompt('Please enter the video URL', function(src) {
          src && part.insert(new context.Video(src));
        });
      }
    },
    separator: {
      id: 'insert.separator',
      text: '<i class="fa fa-minus"></i>',
      tooltip: '구분선',
      fn: function(e) {
        this.insert(new context.Separator());
      }
    },
    link: {
      id: 'insert.link',
      text: '<i class="fa fa-link"></i>',
      tooltip: '링크',
      fn: function(e) {
        var part = this;
    
        context.prompt('Please enter the anchor URL', function(src) {
          src && part.insert(new context.Link(src));
        });
      }
    },
    attach: {
      id: 'insert.attach',
      text: '<i class="fa fa-paperclip"></i>',
      tooltip: '첨부파일',
      fn: function(e) {
        var part = this;
        
        part.context().selectFile(function(err, file) {
          if( err ) return context.error(err);
          
          part.insert(new context.Link(file));
        });
      }
    }
  },
  clear: {
    id: 'clear',
    text: '<i class="fa fa-eraser"></i>',
    tooltip: '내용 삭제',
    fn: function(e) {
      this.clear();
    }
  },
  heading: {
    id: 'heading',
    type: 'list',
    text: '<i class="fa fa-header"></i>',
    tooltip: 'Select Heading',
    onselect: function(item, i, btn) {
      var part = this;
      var dom = part.dom();
      
      if( dom.tagName.toLowerCase() !== item.tag ) {
        var el = $(part.dom());
        var parentpart = part.parent();
        
        var newpart = new context.Heading({
          tag: item.tag,
          html: el.html()
        });
        
        el.after(newpart.dom()).remove();
        
        newpart.focus();
        parentpart && parentpart.history().save();
      }
    },
    items: [
      { text: '<h1>Title</h1>', tag: 'h1' },
      { text: '<h2>Title</h2>', tag: 'h2' },
      { text: '<h3>Title</h3>', tag: 'h3' },
      { text: '<h4>Title</h4>', tag: 'h4' },
      { text: '<h5>Title</h5>', tag: 'h5' },
      { text: '<h6>Title</h6>', tag: 'h6' }
    ]
  },
  align: {
    id: 'align',
    text: '<i class="fa fa-align-justify"></i>',
    tooltip: '정렬',
    onupdate: function(btn) {
      if( btn.align == 'center' ) btn.text('<i class="fa fa-align-center"></i>');
      else if( btn.align == 'right' ) btn.text('<i class="fa fa-align-right"></i>');
      else if( btn.align == 'justify' ) btn.text('<i class="fa fa-align-justify"></i>');
      else btn.text('<i class="fa fa-align-left"></i>');
    },
    fn: function(btn) {
      var part = this;
      var el = $(part.dom());
    
      if( btn.align == 'center' ) {
        el.css('text-align', 'right');
        btn.align = 'right';
      } else if( btn.align == 'right' ) {
        el.css('text-align', 'justify');
        btn.align = 'justify';
      } else if( btn.align == 'justify' ) {
        el.css('text-align', '');
        btn.align = '';
      } else {
        el.css('text-align', 'center');
        btn.align = 'center';
      }
      part.history().save();
    }
  },
  draggable: {
    id: 'draggable',
    text: '<i class="fa fa-hand-pointer-o"></i>',
    tooltip: '요소이동',
    onupdate: function(btn) {
      var part = this;
      var el = $(part.dom());
      
      if( el.ha('draggable') ) btn.active(true);
      else btn.active(false);
    },
    fn: function() {
      var part = this;
      part.dragmode(!part.dragmode());
    }
  },
  clearfix: {
    id: 'clearfix',
    text: '<i class="fa fa-asterisk"></i>',
    tooltip: '클리어픽스',
    onupdate: function(btn) {
      btn.active($(this.dom()).hc('f_clearfix'));
    },
    fn: function() {
      $(this.dom()).tc('f_clearfix');
      this.history().save();
    }
  },
  remove: {
    id: 'remove',
    text: '<i class="fa fa-remove"></i>',
    onupdate: function(btn) {
      if( this.removable() ) btn.show();
      else btn.hide();
    },
    fn: function() {
      this.remove();
    }
  },
  target: {
    id: 'target',
    text: '<i class="fa fa-external-link"></i>',
    tooltip: '새창으로',
    onupdate: function(btn) {
      var el = $(this.dom());
      if( el.find('a').attr('target') ) btn.active(true);
      else btn.active(false);
    },
    fn: function() {
      this.target(!this.target() ? '_blank' : null);
    }
  },
  separator: {
    shape: {
      id: 'separator.shape',
      text: '<i class="fa fa-chevron-up"></i>',
      tooltip: '모양',
      onupdate: function(btn) {
        var part = this;
        var shape = part.shape();
        if( shape == 'dotted' ) btn.text('<i class="fa fa-ellipsis-h"></i>');
        else if( shape == 'dashed' ) btn.text('<i class="fa fa-ellipsis-h"></i>');
        else if( shape == 'zigzag' ) btn.text('<i class="fa fa-chevron-up"></i>');
        else if( shape == 'line' ) btn.text('<i class="fa fa-minus"></i>');
        else btn.text('<i class="fa fa-minus"></i>');
      },
      fn: function(btn) {
        var part = this;
        var shape = part.shape();
      
        if( shape == 'dotted' ) part.shape('dashed');
        else if( shape == 'dashed' ) part.shape('zigzag');
        else if( shape == 'zigzag' ) part.shape('line');
        else if( shape == 'line' ) part.shape(false);
        else part.shape('dotted');
        part.history().save();
      }
    },
    width: {
      id: 'separator.width',
      text: '<i class="fa fa-arrows-h"></i>',
      tooltip: '너비',
      onupdate: function(btn) {
        var part = this;
        var el = $(part.dom());
      
        if( part.shape() === false ) return btn.hide();
        btn.show();
        if( el.hc('f_sep_narrow') ) btn.text('<i class="fa fa-minus"></i>');
        else btn.text('<i class="fa fa-arrows-h"></i>');
      },
      fn: function(e) {
        var part = this;
        var el = $(part.dom());
        
        el.tc('f_sep_narrow');
        this.history().save();
      }
    }
  },
  row: {
    valign: {
      id: 'row.valign',
      text: '<i class="fa fa-align-justify"></i>',
      tooltip: '정렬',
      onupdate: function(btn) {
        var part = this;
        var valign = part.valign();
        
        if( valign == 'middle' ) btn.text('<i class="fa fa-align-center ff-vert"></i>');
        else if( valign == 'bottom' ) btn.text('<i class="fa fa-align-left ff-vert"></i>');
        else if( valign == 'justify' ) btn.text('<i class="fa fa-align-justify ff-vert"></i>');
        else btn.text('<i class="fa fa-align-right ff-vert"></i>');
      },
      fn: function(btn) {
        var part = this;
        var valign = part.valign();
        
        if( valign == 'middle' ) part.valign('bottom');
        else if( valign == 'bottom' ) part.valign('justify');
        else if( valign == 'justify' ) part.valign(false);
        else part.valign('middle');
        part.history().save();
      }
    }
  },
  image: {
    floatleft: {
      id: 'image.floatleft',
      text: '<i class="fa fa-dedent"></i>',
      tooltip: '좌측플로팅',
      fn: function(btn) {
        this.floating('left').history().save();
      }
    },
    floatright: {
      id: 'image.floatright',
      text: '<i class="fa fa-dedent ff-flip"></i>',
      tooltip: '우측플로팅',
      fn: function(btn) {
        this.floating('right').history().save();
      }
    },
    size: {
      id: 'image.size',
      text: '<i class="fa fa-circle-o"></i>',
      tooltip: '크기변경',
      onupdate: function(btn) {
        var part = this;
        
        var blockmode = part.blockmode();
        if( blockmode == 'natural' ) btn.text('<i class="fa fa-square-o"></i>');
        else if( blockmode == 'medium' ) btn.text('<i class="fa fa-arrows-alt"></i>');
        else if( blockmode == 'full' ) btn.text('<i class="fa fa-circle-o"></i>');
        else btn.text('<i class="fa fa-align-center"></i>');
      },
      fn: function(btn) {
        var part = this;
        
        var blockmode = part.blockmode();
        if( blockmode == 'natural' ) part.blockmode('medium');
        else if( blockmode == 'medium' ) part.blockmode('full');
        else if( blockmode == 'full' ) part.blockmode(false);
        else part.blockmode('natural');
        
        part.history().save();
      }
    },
    upload: {
      id: 'image.upload',
      text: '<i class="fa fa-file-image-o"></i>',
      tooltip: '사진변경(업로드)',
      fn: function() {
        var part = this;
        context.selectFile(function(err, file) {
          if( err ) return context.error(err);
          if( !file ) return;
      
          part.src(file.src).title(file.name);
          part.history().save();
        });
      }
    },
    change: {
      id: 'image.change',
      text: '<i class="fa fa-instagram"></i>',
      tooltip: '사진변경',
      fn: function() {
        var part = this;
        context.prompt('Please enter the image URL.', function(src) {
          src && part.src(src).title(null);
          part.history().save();
        });
      }
    },
    align: {
      id: 'image.align',
      text: '<i class="fa fa-align-justify"></i>',
      tooltip: '정렬',
      onupdate: function(btn) {
        var part = this;
        var el = $(part.figcaption());
        var align = el.css('text-align');
    
        if( part.isFigure() ) btn.show();
        else btn.hide();
    
        if( align == 'right' ) btn.text('<i class="fa fa-align-right"></i>');
        else if( align == 'left' ) btn.text('<i class="fa fa-align-left"></i>');
        else btn.text('<i class="fa fa-align-center"></i>');
      },
      fn: function(btn) {
        var part = this;
        var el = $(part.figcaption());
        var align = el.css('text-align');
    
        if( align == 'right' ) {
          el.css('text-align', 'left');
        } else if( align == 'left' ) {
          el.css('text-align', null);
        } else {
          el.css('text-align', 'right');
        }
        part.history().save();
      }
    },
    caption: {
      id: 'image.caption',
      text: '<i class="fa fa-text-width"></i>',
      onupdate: function(btn) {
        if( this.isFigure() ) btn.active(true);
        else btn.active(false);
      },
      tooltip: '캡션',
      fn: function() {
        this.caption(!this.isFigure());
      }
    }
  },
  video: {
    size: {
      id: 'video.size',
      text: '<i class="fa fa-circle-o"></i>',
      tooltip: '크기변경',
      onupdate: function(btn) {
        var el = $(this.dom());
        if( el.hc('f_video_fit') ) btn.text('<i class="fa fa-circle-o"></i>');
        else btn.text('<i class="fa fa-arrows-alt"></i>');
      },
      fn: function() {
        var el = $(this.dom());
    
        if( el.hc('f_video_fit') ) el.rc('f_video_fit').ac('f_video_narrow');
        else el.rc('f_video_narrow').ac('f_video_fit');
      }
    }
  },
  paragraph: {
    font: {
      id: 'paragraph.font',
      type: 'list',
      text: '<i class="fa fa-font"></i>',
      tooltip: 'Select Font',
      onupdate: function(btn) {
        var range = this.range();
        
        range && btn.active(range.iswrapped('span.f_txt_font'));
      },
      onselect: function(item, i, btn) {
        var part = this;
        var dom = part.dom();
        var range = part.range();
        
        if( !range ) {
          dom.style.fontFamily = item.font || '';
          part.history().save();
          return;
        }
        
        range.unwrap('span.f_txt_font');
        var node = range.wrap('span.f_txt_font');
        node.style.fontFamily = item.font || '';
        
        part.history().save();
      },
      items: function() {
        return context.fonts();
      }
    },
    fontsize: {
      id: 'paragraph.fontsize',
      type: 'list',
      text: '<i class="fa fa-text-height"></i>',
      tooltip: 'Select Font Size',
      onupdate: function(btn) {
        var range = this.range();
        range && btn.active(range.iswrapped('span.f_txt_fontsize'));
      },
      onselect: function(item, i, btn) {
        var part = this;
        var dom = part.dom();
        var range = part.range();
        
        if( !range ) {
          dom.style.fontSize = item.size || '';
          part.history().save();
          return;
        }
        
        range.unwrap('span.f_txt_fontsize');
        var node = range.wrap('span.f_txt_fontsize');
        node.style.fontSize = item.size || '';
        
        part.history().save();
      },
      items: [
        { text: 'Default' },
        { text: '<span style="font-size:11px;">11px</span>', size: '11px' },
        { text: '<span style="font-size:12px;">12px</span>', size: '12px' },
        { text: '<span style="font-size:14px;">14px</span>', size: '14px' },
        { text: '<span style="font-size:16px;">16px</span>', size: '16px' },
        { text: '<span style="font-size:18px;">18px</span>', size: '18px' },
        { text: '<span style="font-size:20px;">20px</span>', size: '20px' }
      ]
    },
    color: {
      id: 'paragraph.color',
      type: 'list',
      text: '<i class="fa fa-square"></i>',
      tooltip: 'Select Color',
      onupdate: function(btn) {
        var range = this.range();
        range && btn.active(range.iswrapped('span.f_txt_color'));
      },
      onselect: function(item, i, btn) {
        var part = this;
        var dom = part.dom();
        var range = part.range();
        
        var change = function(color) {
          if( !range ) {
            dom.style.color = color || '';
            return;
          }
          
          range.unwrap('span.f_txt_color');
          var node = range.wrap('span.f_txt_color');
          node.style.color = color || '';
        }
        
        if( item.id == 'picker' ) {
          $('<input type="color">').on('change', function() {
            if( this.value ) change(this.value);
          }).click();
        } else {
          change(item.color);
          part.history().save();
        }
      },
      items: function() {
        var colors = context.colors().slice();
        colors.push({
          id: 'picker',
          text: 'Select Color'
        });
        return colors;
      }
    },
    bold: rangeitem('paragraph.bold', '<i class="fa fa-bold"></i>', '굵게', 'b'),
    underline: rangeitem('paragraph.underline', '<i class="fa fa-underline"></i>', '밑줄', 'u'),
    italic: rangeitem('paragraph.italic', '<i class="fa fa-italic"></i>', '이탤릭', 'i'),
    strike: rangeitem('paragraph.strike', '<i class="fa fa-strikethrough"></i>', '가로줄', 'strike'),
    anchor: rangeitem('paragraph.anchor', '<i class="fa fa-link"></i>', '링크', 'a', function(e) {
      var part = this;
      var range = part.range();
      if( !range || range.iswrapped('a') ) return range.unwrap('a');
      
      context.prompt('Please enter the anchor URL.', function(href) {
        if( !href ) return;
        var a = range.wrap('a');
        a.href = href;
        a.target = '_blank';
        part.history().save();
      });
    })
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Toolbar = __webpack_require__(28);

Toolbar.Button = __webpack_require__(8);
Toolbar.Separator = __webpack_require__(13);
Toolbar.ListButton = __webpack_require__(12);

Toolbar.update = function() {
  $('.ff-toolbar').each(function(i, el) {
    var toolbar = el.toolbar;
    toolbar && toolbar.update();
  });
};

module.exports = Toolbar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var types = __webpack_require__(14);
var Items = __webpack_require__(3);
var RangeEditor = __webpack_require__(11);
var history = __webpack_require__(25);
var RangeEditor = __webpack_require__(11);

var win = window,
    doc = document,
    editmode = false,
    data = {},
    uploader,
    fonts = new Items(),
    colors = new Items(),
    fileinput = $('<input type="file">'),
    filechangeevent;

var context = {
  scan: function(fn, all) {
    context.parts.apply(context, arguments);
    return context;
  },
  parts: function(fn, all) {
    if( fn === true ) all = fn;
    
    return $(all ? '.ff [ff-id], [ff], [ff-type]' : '[ff-id], [ff], [ff-type]').reverse().each(function(i, el) {
      var id = el.getAttribute('ff-id');
      var type = el.getAttribute('ff-type') || el.getAttribute('ff') || 'default';
      var part = el._ff;
      
      if( !part ) {
        var Type = types.get(type);
        if( !Type ) return console.warn('[ff] not found type: ' + type);
        part = el._ff = new Type(el);
        id && data[id] && part.data(data[id]);
      }
      
      part.id = id;
      typeof fn == 'function' && fn.call(context, part);
    }).slice();
  },
  data: function(newdata, all) {
    if( !arguments.length ) {
      newdata = {};
      context.parts(function(part) {
        if( part.id ) newdata[part.id] = part.data();
      });
      return newdata;
    }
    
    data = newdata || {};
    
    $('[ff-id]').reverse().each(function(i, el) {
      var id = el.getAttribute('ff-id');
      var type = el.getAttribute('ff-type') || el.getAttribute('ff') || 'default';
      var part = el._ff;
      
      if( !part ) {
        var Type = types.get(type);
        if( !Type ) return console.warn('[ff] not found type: ' + type);
        part = new Type(el);
      }
      
      if( data[id] ) part.data(data[id]);
      else if( all === true ) part.data(null);
    });
    
    context.fire('ff-data', {
      data: newdata
    });
    
    return context;
  },
  clear: function() {
    context.data(null, true).fire('ff-clear');
    return context;
  },
  reset: function() {
    console.warn('[ff] ff.reset is deprecated, use ff.data instead');
    return context.data.apply(context, arguments);
  },
  get: function() {
    console.warn('[ff] ff.get is deprecated, use ff.partof instead');
    return context.partof.apply(context, arguments);
  },
  part: function(id) {
    var el = $('[ff-id="' + id + '"]');
    return el[0] && el[0]._ff;
  },
  partof: function(node) {
    var found = $(node).parent(function() {
      return this._ff;
    }, true)[0];
    return found && found._ff;
  },
  partsof: function(node) {
    var parents = [];
    $(node).parent(function() {
      var part = this._ff;
      if( part ) parents.push(part);
    }, true);
    return parents;
  },
  editmode: function(b) {
    if( !arguments.length ) return editmode;
    if( editmode === !!b ) return context;
    
    editmode = !!b;
    
    context.parts(function(part) {
      part.editmode(editmode);
    }, true);
    
    context.fire('ff-modechange', {
      editmode: editmode
    });
    
    return context;
  },
  
  // event
  fire: function(type, detail, cancellable, bubble) {
    return !!$(doc).fire(type, detail, cancellable, bubble)[0];
  },
  on: function(type, fn) {
    fn._wrapper = function() {
      return fn.apply(context, arguments);
    };
    
    $(doc).on(type, fn._wrapper);
    return this;
  },
  once: function(type, fn) {
    fn._wrapper = function() {
      return fn.apply(context, arguments);
    };
    
    $(doc).once(type, fn._wrapper);
    return this;
  },
  off: function(type, fn) {
    $(doc).off(type, fn._wrapper || fn);
    return this;
  },
  
  // part type
  types: function() {
    return types;
  },
  type: function(name, cls) {
    if( arguments.length <= 1 ) return types.get(name);
    types.define(name, cls);
    
    return context;
  },
  
  // uploader
  uploader: function(fn) {
    if( !fn || typeof fn !== 'function' ) throw new TypeError('uploader must be a function');
    uploader = fn;
    return context;
  },
  upload: function(file, done) {
    uploader.call(context, file, function(err, result) {
      if( err ) context.fire('ff-upload-error', {error: err});
      if( err ) return done && done(err);
      
      context.fire('ff-upload', {result:result});
      done && done(null, result);
    });
    return context;
  },
  selectFiles: function(done, options) {
    options = options || {};
    if( typeof options == 'boolean'  ) options = {upload:options};
    if( typeof options == 'string'  ) options = {type:options};
    if( typeof options == 'number'  ) options = {limit:options};
    
    var type = options.type;
    var upload = options.upload === false ? false : true;
    var limit = options.limit;
    var prevfilechangeevent = filechangeevent
    
    filechangeevent = function() {
      var files = [].slice.call(this.files);
      
      if( limit && files.length ) files = files.slice(0, limit);
      
      if( type ) {
        var tmp = [];
        files.forEach(function(file) {
          if( file.type && !file.type.indexOf(type) ) tmp.push(file);
        });
        //console.log('files', files, tmp);
        files = tmp;
      }
      
      if( !upload ) return done(null, files);
      
      var srcs = [];
      $(files).async(function(file, done) {
        context.upload(file, function(err, src) {
          if( err ) return done(err);
          srcs.push(src);
          done();
        });
      }, function(err) {
        if( err ) return done(err);
        done(null, srcs);
      });
    };
    
    fileinput.value('').attr('multiple', limit === 1 ? null : '')
    .off('change', prevfilechangeevent)
    .on('change', filechangeevent).click();
    
    return context;
  },
  selectFile: function(done, options) {
    options = options || {};
    options.limit = 1;
    return context.selectFiles(function(err, arr) {
      if( err ) return done(err);
      done(null, arr && arr[0]);
    }, options);
  },
  
  // alert
  prompt: function(message, callback, options) {
    if( context.fire('ff-prompt', {
      message: message,
      callback: callback,
      options: options
    }, true) ) {
      callback && callback.call(context, prompt(message));
    }
    
    return context;
  },
  confirm: function(message, callback, options) {
    if( context.fire('ff-prompt', {
      message: message,
      callback: callback,
      options: options
    }, true) ) {
      callback && callback.call(context, confirm(message));
    }
    
    return context;
  },
  alert: function(message, callback, options) {
    if( context.fire('ff-alert', {
      message: message,
      callback: callback,
      options: options
    }, true) ) {
      callback && callback.call(context);
      alert(message);
    }
    
    return context;
  },
  error: function(error, callback, options) {
    if( typeof error == 'string' ) error = new Error(error);
    
    if( context.fire('ff-error', {
      error: error,
      message: error.message,
      callback: callback,
      options: options
    }, true) ) {
      callback && callback.call(context);
      console.error(error);
      alert(error.message);
    }
    
    return context;
  },
  
  // undo/redo
  history: function(fn) {
    if( !arguments.length ) return history;
    
    history.add(fn);
    return this;
  },

  // range
  ranges: function(node, collapsed) {
    var selection = win.getSelection();
    var ranges = [];
    if( selection.rangeCount )
      for(var i=0; i < selection.rangeCount; i++)
        ranges.push(selection.getRangeAt(i));
  
    if( !arguments.length ) return ranges;
  
    return ranges.filter(function(range) {
      if( !collapsed && range.collapsed ) return;
      return range && node.contains(range.startContainer) && node.contains(range.endContainer) && RangeEditor(range);
    });
  },
  range: function(node, collapsed) {
    var ranges = context.ranges(node, collapsed);
    return ranges && ranges.length && RangeEditor(ranges[ranges.length - 1]);
  },
  
  // defaults
  fonts: function(arr) {
    if( !arguments.length ) return fonts;
    fonts = new Items(arr);
    return context;
  },
  colors: function(arr) {
    if( !arguments.length ) return colors;
    colors = new Items(arr);
    return context;
  }
};

$(doc).on('mousedown', function(e) {
  if( !editmode ) return;
  
  var target = e.target || e.srcElement;
  var part = context.partof(target);
  var focused = context.focused;
  
  if( part ) part.focus();
  else focused && focused.blur();
});

module.exports = context;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Types = __webpack_require__(14);
var Toolbar = __webpack_require__(5);
var $ = __webpack_require__(0);
var context = __webpack_require__(6);
var Items = __webpack_require__(3);
var tools = __webpack_require__(4);

function Part(arg) {
  var dom = arg;
  if( dom && dom._ff ) return dom._ff;
  if( !(this instanceof Part) ) return null;
  
  if( !dom || !$.util.isElement(dom) ) dom = this.create.apply(this, arguments);
  if( !$.util.isElement(dom) ) throw new TypeError('illegal arguments: dom');
  
  var self = dom._ff = this;
  var el = $(self._n = dom).ac('ff')
  .on('ff-data ff-focus ff-blur ff-modechange mouseenter mouseleave mouseup mousedown dragstart dragend', self);
  
  // regist event in prototypes
  (function() {
    var o = self, prototypes = [];
    do {
      if( o === Part.prototype ) break;
      prototypes.push(o);
    } while(o = Object.getPrototypeOf(o));
    
    prototypes.reverse().forEach(function(o) {
      Object.getOwnPropertyNames(o).forEach(function(name) {
        if( !~['on', 'once'].indexOf(name) && !name.indexOf('on') )
          self.on('ff-' + name.substring(2), self[name]);
      });
    });
  })();
  
  if( dom !== arg ) self.removable(true);
  
  var toolbar = self.toolbar();
  Part.toolbar.forEach(function(item) {
    toolbar.last(item);
  });
  
  var toolbarposition = el.attr('ff-toolbar');
  if( toolbarposition === 'true' ) toolbarposition = null;
  if( toolbarposition === 'false' ) toolbar.enable(false);
  else if( toolbarposition ) toolbar.position(toolbarposition);
  
  self.fire('ff-init');
  if( context.editmode() ) self.editmode(true);
  context.fire('ff-detect', {part:self});
  
  self.history().init();
}

Part.prototype = {
  handleEvent: function(e) {
    if( e.defaultPrevented ) return;
    
    var type = e.type;
    var self = this;
    var editmode = self.editmode();
    var toolbar = self.toolbar();
    var target = e.target || e.srcElement;
    var dom = self.dom();
    var el = $(dom);
    
    if( type == 'ff-data' ) {
      self.fire('ff-render', {
        type: 'data',
        originalEvent: e
      });
    } else if( type == 'ff-modechange' ) {
      if( editmode ) {
        if( toolbar.always() ) toolbar.show();
        el.ac('ff-edit-state');
        self.fire('ff-editmode');
      } else {
        toolbar.hide(true);
        el.rc('ff-edit-state').rc('ff-focus-state').rc('ff-enter-state').rc('ff-dragging');
        self.fire('ff-viewmode');
        self.blur();
      }
      
      self.fire('ff-render', {
        type: 'modechange',
        originalEvent: e
      });
    } 
    
    if( editmode ) {
      if( type == 'ff-focus' ) {
        el.attr('draggable', true);
        toolbar.show();
      } else if( type == 'ff-blur' ) {
        el.attr('draggable', null);
        toolbar.hide();
      } else if( type == 'mouseenter' ) {
        toolbar.update();
        el.ac('ff-enter-state');
      } else if( ~['mousedown', 'mouseup'].indexOf(type) ) {
        setTimeout(function() {
          toolbar.update();
        }, 0);
      } else if( type == 'mouseleave' ) {
        el.rc('ff-enter-state');
      } else if( type == 'dragstart' ) {
        if( target === dom ) {
          toolbar.hide();
          context.dragging = dom;
          e.dataTransfer.setDragImage(dom, 0, 0);
          e.dataTransfer.setData('text', dom.outerHTML);
          el.ac('ff-dragging');
          self.history().init();
        }
      } else if( type == 'dragend' ) {
        if( target === dom ) {
          toolbar.show();
          context.dragging = null;
          el.rc('ff-dragging');
        }
      }
    }
  },
  context: function() {
    return context;
  },
  createToolbar: function() {
    return new Toolbar(this);
  },
  toolbar: function() {
    return this._t || (this._t = this.createToolbar());
  },
  removable: function(removable) {
    if( !arguments.length ) return this._rm;
    this._rm = !!removable;
    return this;
  },
  dom: function() {
    return this._n;
  },
  create: function(arg) {
    return $('<div/>').html(arg)[0];
  },
  html: function(html) {
    var part = this;
    var dom = part.dom();
    if( !arguments.length ) {
      var editmode = part.editmode();
      part.editmode(false);
      var html = dom.innerHTML;
      part.editmode(editmode);
      var tmp = $('<div/>').html(html);
      tmp
      .find('.ff, .ff-edit-state, .ff-enter-state, .ff-focus-state, .ff-dragging, [draggable], [contenteditable]')
      .rc('ff ff-edit-state ff-enter-state ff-focus-state ff-dragging')
      .attr('draggable', null)
      .attr('contenteditable', null);
      
      tmp.find('.ff-acc').remove();
      
      return tmp.html();
    }
    
    dom.innerHTML = html || '';
    part.history().init();
    return part;
  },
  parent: function() {
    var p = this.dom().parentNode;
    return p && context.partof(p);
  },
  parents: function() {
    var p = this.dom().parentNode;
    return p && context.partsof(p);
  },
  remove: function() {
    var part = this;
    part.blur();
    part.toolbar().hide();
    part.fire('ff-remove');
    $(part.dom()).remove();
    return part;
  },
  editmode: function(b) {
    var part = this;
    if( !arguments.length ) return !!part._md;
    var prev = part._md;
    var editmode = part._md = !!b;
    
    if( editmode !== prev ) part.fire('ff-modechange', {editmode: editmode});
    return part;
  },
  data: function(data) {
    var part = this;
    if( !arguments.length ) {
      if( part.getData ) return part.getData();
      return part._d || null;
    }
    
    if( part.setData ) part.setData(data);
    else part._d = data;
    
    part.fire('ff-data', {old: part._d, data: data});
    part.history().init();
    return part;
  },
  fire: function(type, detail, cancellable, bubble) {
    return !!$(this.dom()).fire(type, detail, cancellable, bubble)[0];
  },
  on: function(type, fn) {
    var part = this;
    fn._wrapper = function() {
      return fn.apply(part, arguments);
    };
    
    $(this.dom()).on(type, fn._wrapper);
    return this;
  },
  once: function(type, fn) {
    var part = this;
    fn._wrapper = function() {
      return fn.apply(part, arguments);
    };
    
    $(this.dom()).once(type, fn._wrapper);
    return this;
  },
  off: function(type, fn) {
    $(this.dom()).off(type, fn._wrapper || fn);
    return this;
  },
  clear: function() {
    this.data(null).fire('ff-clear');
    return this;
  },
  click: function() {
    this.dom().click();
    return this;
  },
  focus: function() {
    var part = this;
    var dom = part.dom();
    
    if( part.editmode() && part !== context.focused && document.body.contains(dom) ) {
      if( context.focused && typeof context.focused.blur == 'function' ) context.focused.blur();
      $(dom).ac('ff-focus-state');
      part.fire('ff-focus');
      context.focused = part;
    }
    
    return part;
  },
  blur: function() {
    var part = this;
    if( part.editmode() && part === context.focused ) {
      $(part.dom()).rc('ff-focus-state');
      part.fire('ff-blur');
      context.focused = null;
    }
    return part;
  },
  ranges: function(collapsed) {
    return context.ranges(this.dom(), collapsed);
  },
  range: function(collapsed) {
    return context.range(this.dom(), collapsed);
  },
  
  // history
  createHistory: function() {
    var part = this;
    var dom = part.dom();
    
    return (function(cls, css) {
      return function() {
        dom.className = cls || '';
        dom.style.cssText = css || '';
        part.focus();
      };
    })(dom.className, dom.style.cssText);
  },
  history: function() {
    var part = this;
    var history = context.history();
    var def;
    
    return part._history = part._history || {
      init: function(b) {
        if( b === false ) {
          def = null;
          return this;
        }
        
        if( typeof b == 'function' ) def = b;
        else def = part.createHistory();
        
        return this;
      },
      save: function(fn) {
        if( typeof fn != 'function' ) fn = null;
        
        if( def ) history.add(def), def = null;
        history.add(fn || part.createHistory());
        
        return this;
      }
    };
  }
};

Part.toolbar = new Items([tools.clearfix, tools.remove]);

module.exports = Part;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

__webpack_require__(48);

function Button(options) {
  if( typeof options == 'string' ) options = {text:options};
  
  var self = this;
  self.options(options);
  self._el = $('<div class="ff-toolbar-btn"></div>')
  .ac(options.cls)
  .on('click', self)
  .on('mousemove', self)
  .on('mousedown', self);
  
  setTimeout(function() {
    self.text(options.text);
  }, 0);
}

Button.prototype = {
  handleEvent: function(e) {
    e.preventDefault();
    e.stopPropagation();
      
    if( e.type == 'click' ) {
      this.click(e);
      
      var toolbar = this.toolbar();
      toolbar && toolbar.update(e);
    }
  },
  options: function(options) {
    var o = this._options = this._options || options || {};
    
    if( !arguments.length ) return o;
    
    this.id = o.id;
    this._scope = o.scope || this._scope;
    this._toolbar = o.toolbar || this._toolbar;
    return this;
  },
  dom: function() {
    return this._el[0];
  },
  scope: function(scope) {
    if( !arguments.length ) return this._scope;
    this._scope = scope;
    return this;
  },
  toolbar: function(toolbar) {
    if( !arguments.length ) return this._toolbar;
    this._toolbar = toolbar;
    return this;
  },
  cls: function(cls) {
    this._el.cc().ac('ff-toolbar-btn').ac(cls);
    return this;
  },
  active: function(b) {
    if( !arguments.length ) return this._el.hc('ff-toolbar-btn-active');
    this._el.tc('ff-toolbar-btn-active', b);
    return this;
  },
  hide: function() {
    this._el.hide();
    return this;
  },
  show: function() {
    this._el.show();
    return this;
  },
  enable: function(b) {
    if( !arguments.length ) return !this._el.hc('ff-toolbar-btn-disabled');
    this._el.tc('ff-toolbar-btn-disabled', !b);
    return this;
  },
  update: function(a, b, c, d) {
    var o = this.options();
    var fn = o.onupdate;
    fn && fn.call(this.scope(), this, a, b, c, d);
    return this;
  },
  click: function(a, b, c, d) {
    var o = this.options();
    var fn = o.onclick || o.fn;
    fn && fn.call(this.scope(), this, a, b, c, d);
    return this;
  },
  text: function(text) {
    if( !arguments.length ) return this._el.html();
    this._el.html(text);
    return this;
  },
  appendTo: function(parent, index) {
    $(parent).append(this._el[0], index);
    return this;
  },
  remove: function() {
    this._el.remove();
    return this;
  }
};

module.exports = Button;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var context = __webpack_require__(6);
var Items = __webpack_require__(3);
var tools = __webpack_require__(4);
var autoflush = __webpack_require__(10);
var win = window;
var doc = document;

__webpack_require__(56);

function ParagraphPart() {
  Part.apply(this, arguments);
}

var proto = ParagraphPart.prototype = Object.create(Part.prototype);

ParagraphPart.toolbar = new Items([
  tools.paragraph.font,
  tools.paragraph.fontsize,
  tools.paragraph.color,
  tools.align,
  '-',
  tools.paragraph.bold,
  tools.paragraph.underline,
  tools.paragraph.italic,
  tools.paragraph.strike,
  tools.paragraph.anchor,
  '-',
  tools.draggable
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(ParagraphPart.toolbar.position).add(ParagraphPart.toolbar);
};

proto.oninit = function(e) {
  var part = this;
  var dom = part.dom();
  var flush = autoflush(function(items) {
    part.history().save();
  }, 200);
  
  var el = $(dom)
  .ac('f_txt')
  .on('paste', function(e) {
    if( part.multiline() ) return;
    
    e.preventDefault();
    
    var selection = win.getSelection();
    var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    var clipboard = e.clipboardData || win.clipboardData;
    var text = clipboard.getData('Text');
    
    if( text && range ) {
      var node = doc.createTextNode(text);
      range.deleteContents();
      range.insertNode(node);
      
      var newrange = doc.createRange();
      newrange.selectNode(node);
      
      selection.removeAllRanges();
      selection.addRange(newrange);
      dom.normalize();
    }
  })
  .on('keydown', function(e) {
    if( part.editmode() && !e.metaKey && !e.ctrKey ) flush();
    if( e.keyCode === 13 && !part.multiline() ) e.preventDefault();
  })
  .on('dblclick', function(e) {
    part.dragmode(false);
  })
  .on('drop', function(e) {
    e.preventDefault();
  });
  
  var placeholder = part._placeholder = (function() {
    var node = $('<div class="ff-placeholder ff-acc"/>'), text, minWidthWrited = false;
    
    return {
      text: function(o) {
        if( !arguments.length ) return text;
        text = o;
        node.html(text);
        return this;
      },
      show: function() {
        if( !part.editmode() ) {
          this.hide();
          return this;
        }
        
        node.html(text).remove();
        var t = el.text().split('\n').join().trim();
        
        if( !t ) el.empty().append(node);
        
        var display = window.getComputedStyle(dom, null).display;
        if( ~['inline', 'inline-block'].indexOf(display) && node[0].clientWidth ) {
          dom.style.minWidth = node[0].clientWidth + 'px';
          minWidthWrited = true;
        }
        
        return this;
      },
      hide: function() {
        if( minWidthWrited ) dom.style.minWidth = '';
        
        node.remove();
        return this;
      }
    };
  })();
  
  placeholder.text(el.attr('placeholder') || ParagraphPart.placeholder || this.context().placeholder);
};

proto.multiline = function(b) {
  if( !('_multiline' in this) ) {
    this._multiline = $(this.dom()).attr('ff-multiline') == 'false' ? false : true;
  }
  
  if( !arguments.length ) return this._multiline;
  
  el.attr('ff-multiline', b === false ? false : null);
  this._multiline = !!b;
  return this;
};

proto.dragmode = function(b) {
  var el = $(this.dom());
  if( !arguments.length ) return el.ha('draggable');
  
  if( !this.editmode() ) return this;
  el.attr('draggable', b ? true : null).attr('contenteditable', b ? null : true);
  return this;
};

proto.onchildlist = function() {
  if( this.editmode() ) this.placeholder().show();
};

proto.text = function(text) {
  var el = $(this.dom());
  if( !arguments.length ) {
    var editmode = this.editmode();
    this.editmode(false);
    var text = el.text().split('\n').join().trim();
    this.editmode(editmode);
    return text;
  }
  
  el.text($('<div/>').html(text).text());
  return this;
};

proto.onfocus = function(e) {
  if( !this.editmode() ) return;
  
  e.stopImmediatePropagation();
  
  var dom = this.dom();
  this.toolbar().show();
  this.placeholder().hide();
  $(dom).attr('draggable', null);
  
  dom.focus();
};

proto.onblur = function() {
  if( this.editmode() )
    this.placeholder().show();
};

proto.oneditmode = function(e) {
  $(this.dom()).attr('contenteditable', true).attr('draggable', null).ac('ff-paragraph');
  this.placeholder().show();
};

proto.onviewmode = function(e) {
  $(this.dom()).attr('contenteditable', null).attr('draggable', null).rc('ff-paragraph');
  this.placeholder().hide();
};

proto.create = function(arg) {
  var html = typeof arg == 'string' ? arg : '';
  return $('<div/>').html(html)[0];
};

proto.placeholder = function(placeholder) {
  if( !arguments.length ) return this._placeholder;
  this._placeholder.text(placeholder);
  return this;
};

proto.getData = function() {
  this.placeholder().hide();
  var html = this.dom().innerHTML;
  if( this.editmode() ) this.placeholder().show();
  
  return {
    html: html
  };
};

proto.setData = function(data) {
  var html = (!data || typeof data == 'string') ? data : data.html;
  this.html(html);
  this.placeholder().show();
  return this;
};

proto.createHistory = function() {
  var part = this;
  var dom = part.dom();
  
  return (function(html, cls, css) {
    return function() {
      dom.innerHTML = html || '';
      dom.className = cls || '';
      dom.style.cssText = css || '';
      part.focus();
    };
  })(dom.innerHTML, dom.className, dom.style.cssText);
};

module.exports = ParagraphPart;




/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(flushfn, timeout) {
  if( typeof flushfn != 'function' || typeof timeout != 'number' || timeout < 0 )
    return console.error('illegal arguments');
  
  var tid;
  var buffer = [];
  var flush = function() {
    if( tid ) window.clearTimeout(tid);
    var items = buffer;
    buffer = [];
    flushfn(items);
  };
  
  var pusher = function(item) {
    buffer.push(item);
    if( tid ) window.clearTimeout(tid);
    tid = window.setTimeout(function() {
      flush();
    }, timeout);
  };
  
  pusher.flush = flush;
  return pusher;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var win = window;
var doc = document;

function nextnode(node, skip){
  if( node.firstChild && !skip ) return node.firstChild;
  if( !node.parentNode ) return null;
  
  return node.nextSibling || nextnode(node.parentNode, true);
}

function rangelist(range){
  var start = range.startContainer.childNodes[range.startOffset] || range.startContainer;
  var end = range.endContainer.childNodes[range.endOffset] || range.endContainer;
  
  if( start === end ) return [start];
  
  var nodes = [], current = start;
  do {
    nodes.push(current);
  } while ((current = nextnode(current)) && (current != end));
  
  return nodes;
}

function wrap(range, selector) {
  if( !range ) return null;
  if( typeof selector != 'string' || !selector ) selector = 'div';
  
  var node = range.cloneContents();
  var asm = $.util.assemble(selector);
  var wrapper = doc.createElement(asm.tag);
  if( asm.id ) wrapper.id = id;
  if( asm.classes ) wrapper.className = asm.classes;
  
  wrapper.appendChild(node);
  wrapper.normalize();
  range.deleteContents();
  range.insertNode(wrapper);
  
  // select new node
  var range = doc.createRange();
  range.selectNodeContents(wrapper);
  var selection = win.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  return wrapper;
};

function unwrap(range, selector) {
  if( !range || !selector ) return this;
  
  var common = $(range.commonAncestorContainer);
  var node = range.cloneContents();
  var tmp = $('<div/>').append(node);
  
  //console.log('tmp', tmp.html());
  tmp.nodes().each(function() {
    var el = $(this);
    
    el.find(selector).nodes().unwrap();
    if( el.is(selector) ) el.nodes().unwrap();
  });
  
  var nodes = tmp.normalize().nodes();
  //console.log('nodes', tmp.html());
  if( !nodes.length ) return this;
  
  var start = nodes[0];
  var end = nodes[nodes.length - 1];
  
  range.deleteContents();
  
  nodes.reverse().each(function() {
    range.insertNode(this);
  });
  
  range = doc.createRange();
  range.selectNodeContents(start);
  var startoffset = range.startOffset;
  
  range = doc.createRange();
  range.selectNodeContents(end);
  var endoffset = range.endOffset;
  
  range = doc.createRange();
  range.setStart(start, startoffset);
  range.setEnd(end, endoffset);
  
  var selection = win.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  start.parentNode.normalize();
  
  return this;
};

function iswrapped(range, selector) {
  if( !range ) return false;
  
  var wrapped = false;
  $(rangelist(range)).each(function() {
    if( wrapped ) return false;
    var el = $(this);
    wrapped = el.is(selector) || el.parent(selector).length || el.find(selector).length;
  });
  
  return wrapped;
};

function togglewrap(range, selector) {
  if( !range ) return this;
  if( iswrapped(range, selector) ) unwrap(range, selector);
  else wrap(range, selector);
  
  return this;
};

function RangeEditor(range) {
  return {
    range: function() {
      return range;
    },
    iswrapped: function(selector) {
      return iswrapped(range, selector);
    },
    togglewrap: function(selector) {
      return togglewrap(range, selector);
    },
    unwrap: function(selector) {
      return unwrap(range, selector);
    },
    wrap: function(selector) {
      return wrap(range, selector);
    }
  };
}

module.exports = RangeEditor;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Button = __webpack_require__(8);

__webpack_require__(49);

function ListButton(options) {
  Button.apply(this, arguments);
  
  var dropdown = this._dropdown = $('<ul/>').ac('ff-toolbar-list-dropdown').html('dropdown');
  $(this.dom()).ac('ff-toolbar-list-btn').append(dropdown);
  
  options && options.items && this.items(options.items);
}

var proto = ListButton.prototype = Object.create(Button.prototype);

proto.dropdown = function() {
  return this._dropdown[0];
};

proto.handleEvent = function(e) {
  if( e.type == 'click' && !this.dropdown().contains(e.target) ) this.toggleList();
  Button.prototype.handleEvent.call(this, e);
};

proto.enable = function(b) {
  var result = Button.prototype.enable.apply(this, arguments);
  
  if( !arguments.length ) return result;
  
  if( !b ) $(this.dropdown()).rc('open');
  return this;
},

proto.toggleList = function() {
  var el = $(this.dropdown());
  $('.ff-toolbar-list-dropdown').rc('open');
  if( !this.enable() ) el.rc('open');
  else el.tc('open');
  return this;
};

proto.text = function(txt) {
  this._el.html(txt).append(this.dropdown());
  return this;
};

proto.select = function(item) {
  $('.ff-toolbar-list-dropdown').rc('open');
  var items = this.items();
  var index = items.indexOf(item);
  var o = this.options();
  var fn = o.onselect;
  fn && fn.call(this.scope(), item, index, this);
  return this;
};

proto.items = function(items) {
  if( !arguments.length ) return this._items;
  if( !items ) items = [];
  if( typeof items == 'function' ) items = items.call(this.scope(), this);
  
  var self = this;
  var dropdown = $(this.dropdown()).empty()[0];
  this._items = $.each(items, function(i, item) {
    var html = (typeof item == 'string' ? item : item.text) || item;
    $('<li/>').html(html).appendTo(dropdown).on('click', function(e) {
      self.select(item);
    });
  });
  
  return this;
};

$(document).ready(function() {
  $(document.body).on('click', function() {
    $('.ff-toolbar-list-dropdown').rc('open');
  });
});


module.exports = ListButton;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Button = __webpack_require__(8);

__webpack_require__(50);

function Separator() {
  Button.apply(this, arguments);
  $(this.dom()).ac('ff-toolbar-separator-btn');
}

var proto = Separator.prototype = Object.create(Button.prototype);

proto.handleEvent = function(e) {};

module.exports = Separator;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var types = {};

module.exports = {
  get: function(id) {
    return types[id];
  },
  define: function(id, handler) {
    if( !id ) throw new TypeError('missing id');
    if( typeof id !== 'string' ) throw new TypeError('id must be a string');
    if( typeof handler !== 'function' ) throw new TypeError('type plugin must be a function');
    
    types[id] = handler;
    return this;
  },
  exists: function(id) {
    return !!types[id];
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var matches = Element.prototype.matches || 
  Element.prototype.matchesSelector || 
  Element.prototype.mozMatchesSelector ||
  Element.prototype.msMatchesSelector || 
  Element.prototype.oMatchesSelector || 
  Element.prototype.webkitMatchesSelector ||
  function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
  };

var lib = module.exports = {
  isNull: function(value) {
    return value === null || value === undefined;
  },
  isArrayLike: function(o) {
    var type = typeof o;
    if( !o || type == 'string' || type != 'object' || o === window || typeof o.length != 'number' ) return false;
    if( o instanceof Array || (Array.isArray && Array.isArray(o)) ) return true;
    
    var str = Object.prototype.toString.call(o);
    return /^\[object (HTMLCollection|NodeList|Array|FileList|Arguments)\]$/.test(str);
  },
  create: function(html) {
    if( !html || typeof html != 'string' ) return null;
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    
    var arr = [];
    [].forEach.call(div.childNodes, function(node) {
      var p = node.parentNode;
      p && p.removeChild(node);
      arr.push(node);
    });
    
    return arr;
  },
  accessor: function(el) {
    var tag = el.tagName.toLowerCase();
    var id = el.id;
    var cls = el.className.split(' ').join('.');
    id = id ? ('#' + id) : '';
    cls = cls ? ('.' + cls) : '';
    
    return tag + id + cls;
  },
  assemble: function(selector) {
    if( !selector || typeof(selector) !== 'string' ) return console.error('invalid selector', selector);
    
    var arr = selector.split(':');
    var accessor = arr[0];
    var pseudo = arr[1];
    
    arr = accessor.split('.');
    var tag = arr[0];
    var id;
    var classes = arr.splice(1).join(' ').trim();
    
    if( ~tag.indexOf('#') ) {
      var t = tag.split('#');
      tag = t[0];
      id = t[1];
    }
    
    return {
      selector: selector,
      accessor: accessor,
      tag: tag && tag.toLowerCase() || '',
      id: id || '',
      classes: classes || '',
      pseudo: pseudo || ''
    };
  },
  isHTML: function(html) {
    return (typeof html === 'string' && html.match(/(<([^>]+)>)/ig) ) ? true : false;
  },
  matches: function(el, selector) {
    try {
      if( typeof selector == 'function' )
        return !!selector.call(el);
      
      return !!(el && matches.call(el, selector));
    } catch(e) {
      return false;
    }
  },
  each: function(arr, fn, force) {
    if( !arr ) return arr;
    if( !lib.isArrayLike(arr) ) arr = [arr];
    [].every.call(arr, function(item) {
      if( force !== true && (item === null || item === undefined) ) return false;
      return ( fn && fn.apply(item, [arr.indexOf(item), item]) === false ) ? false : true;
    });
    return arr;
  },
  chunk: function(arr, size) {
    return [].concat.apply([],
      arr.map(function(item,i) {
        return i % size ? [] : [arr.slice(i, i + size)];
      })
    );
  },
  async: function(arr, iterator, done) {
    if( arr && !lib.isArrayLike(arr) ) arr = [arr];
    
    if( !arr || !arr.length || typeof iterator != 'function' ) {
      done && done.call(arr);
      return arr;
    }
    
    var index = 0;
    var next = function() {
      iterator.call(arr, arr[index], function(err) {
        if( err ) return done && done.call(arr, err);
        
        ++index;
        if( index >= arr.length ) done && done.call(arr);
        else setImmediate(next);
      });
    };
    next();
    
    return arr;
  },
  offset: function(el, abs) {
    if( !el || typeof el.offsetTop != 'number' ) return {top:null,left:null};
    
    var top = el.offsetTop, left = el.offsetLeft;
    if( abs ) {
      while( el = el.offsetParent ) {
        if( !el || el.tagName === 'BODY' ) break;
        top += el.offsetTop - (el.scrollTop || 0);
        left += el.offsetLeft - (el.scrollLeft || 0);
      }
    }
    
    return {
      top: top,
      left: left
    };
  },
  isElement: function(o) {
    return (
      typeof HTMLElement === 'object' ? o instanceof HTMLElement : 
      o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string'
    );
  },
  isNode: function(o) {
    return (
      typeof Node === "object" ? o instanceof Node : 
      o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
  },
  computed: function(el, name) {
    return window.getComputedStyle(el, null);
  },
  number: function(o) {
    if( !o || typeof o == 'number' ) return o;
    
    o = o + '';
    (['px', 'em', 'pt', '%', 'in', 'deg'].every(function(c) {
      if( o.endsWith(c) ) {
        o = o.split(c).join('');
        return false;
      }
      return true;
    }));
    return +o;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var context = __webpack_require__(6);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);
var Part = context.Part;
var Toolbar = context.Toolbar;
var Marker = __webpack_require__(31);
var DnD = __webpack_require__(30);

__webpack_require__(51);

function ArticlePart() {
  Part.apply(this, arguments);
}

var proto = ArticlePart.prototype = Object.create(Part.prototype);

ArticlePart.toolbar = new Items([
  tools.clear,
  '-',
  tools.insert.heading,
  tools.insert.paragraph,
  tools.insert.imagefile,
  tools.insert.image,
  tools.insert.video,
  tools.insert.separator,
  tools.insert.link,
  tools.insert.attach
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(ArticlePart.toolbar.position || 'vertical top right outside')
  .add(ArticlePart.toolbar)
  .always(true);
};

proto.oninit = function(e) {
  var part = this;
  var dom = this.dom();
  
  part.toolbar().remove('clearfix');
  
  $(dom).ac('ff-article')
  .on('click', function(e) {
    var target = e.target || e.srcElement;
    if( part.editmode() && target === part.dom() ) {
      part.validate();
      
      var children = part.children();
      if( children.length ) {
        var p = Part(children[children.length - 1]);
        p && p.focus();
      }
    }
  });
  
  if( window.MutationObserver ) {
    var observer = this._observer = new MutationObserver(function() {
      part.scan();
    });
    
    observer.observe(dom, {
      childList: true
    });
  } else {
    dom.addEventListener('DOMNodeInserted', function() {
      part.scan();
    });
  }
  
  this.scan();
};

proto.scan = function() {
  var dom = $(this.dom());
  var editmode = this.editmode();
  
  context.scan();
  
  dom.find('figure').each(function() {
    if( $(this).hc('ff-acc') ) return;
    if( !this._ff ) new context.Image(this);
  });
  
  dom.find('img').each(function() {
    if( $(this).hc('ff-acc') || this.parentNode.tagName == 'FIGURE' ) return;
    if( !this._ff ) new context.Image(this);
  });
  
  dom.find('blockquote').each(function() {
    if( $(this).hc('ff-acc') ) return;
    if( !this._ff ) new context.Paragraph(this);
  });
  
  dom.find('h1, h2, h3, h4, h5, h6').each(function() {
    if( $(this).hc('ff-acc') ) return;
    if( !this._ff ) new context.Heading(this);
  });
  
  dom.find('hr').each(function() {
    if( $(this).hc('ff-acc') ) return;
    if( !this._ff ) new context.Separator(this);
  });
  
  dom.children().each(function() {
    if( $(this).hc('ff-acc') ) return;
    if( !this._ff ) new context.Paragraph(this);
  });
  
  var placeholder = $(this.dom()).attr('placeholder');
  dom.find('.ff').each(function() {
    var part = Part(this);
    if( part ) {
      part.removable(true);
      if( part.editmode() !== editmode ) part.editmode(editmode);
      if( part instanceof context.Paragraph ) part.placeholder(placeholder);
    }
  });
  
  if( !dom.nodes().length ) {
    dom.append(new context.Paragraph().placeholder(placeholder).dom());
  }
};

proto.validate = function() {
  var part = this;
  var dom = part.dom();
  var el = $(dom);
  var editmode = part.editmode();
  
  if( part.editmode() ) {
    if( !part._mk ) part._mk = Marker(part, dom);
    if( !part._dnd ) part._dnd = DnD(part, dom);
  } else {
    if( part._mk ) part._mk.destroy();
    if( part._dnd ) part._dnd.destroy();
    delete part._mk;
    delete part._dnd;
  }
  
  part.scan();
  
  return part;
};

proto.onmodechange = function(e) {
  this.validate();
};

proto.marker = function() {
  return this._mk;
};

proto.oninsert = function() {
  this.validate();
};

proto.clear = function() {
  this.dom().innerHTML = '';
  this.validate();
  return this;
};

proto.get = function(index) {
  return this.children()[index];
};

proto.find = function(selector) {
  return $(this.dom()).find(selector);
};

proto.indexOf = function(node) {
  if( !node ) return -1;
  node = node.dom() || node;
  return $(this.dom()).indexOf(node);
};

proto.children = function() {
  return $(this.dom()).children().filter(function() {
    return !($(this).hc('ff-acc'));
  });
};

proto.insert = function(node, ref) {
  var context = this.context();
  var part = this;
  var target = $(this.dom());
  var marker = this.marker();
  var children = this.children();
  
  if( arguments.length <= 1 && marker.isExpanded() ) {
    ref = marker.getRef();
    marker.collapse();
  } else if( typeof ref == 'number' ) {
    ref = children[ref];
  }
  
  var insert = function(node, ref) {
    if( ref ) ref.parentNode && ref.parentNode.insertBefore(node, ref);
    else target.append(node);
    
    node._ff && node._ff.focus();
  };
  
  var images = [];
  $(node).reverse().async(function(item, done) {
    var el = (item.dom && item.dom()) || item;
    
    if( window.File && item instanceof File ) {
      return (function(type) {
        context.upload(item, function(err, result) {
          if( err ) return done(err);
          
          if( type.indexOf('image/') !== 0 ) {
            insert(new context.Link(result).dom(), ref);
          } else {
            images.push(new context.Image(result));
          }
        
          done();
        });
      })(item.type);
    } else {
      insert(el, ref);
    }
    
    done();
  }, function(err) {
    if( err ) return context.error(err);
    
    if( images.length === 1 ) {
      insert(images[0].dom(), ref);
    } else if( images.length ) {
      var chunksize = +target.attr('ff-row-chunk-size');
      
      images.reverse();
      
      if( !chunksize || chunksize < 1 ) chunksize = 5;
      $.util.chunk(images, chunksize).forEach(function(arr) {
        var row = new context.Row().valign('justify');
        arr.forEach(function(image) {
          row.add(image);
          image.on('load', function() {
            row.validate();
          });
        });
        insert(row.dom(), ref);
      });
    }
    
    part.fire('ff-insert', {
      node: node,
      ref: ref,
      target: target
    });
    
    part.history().save();
  });
  
  return this;
};

proto.getData = function() {
  return {
    html: this.html()
  };
};

proto.setData = function(data) {
  this.html(data && data.html);
  return this;
};

proto.createHistory = function() {
  var part = this;
  var dom = part.dom();
  var children = part.children().slice();
  
  return (function(children, cls, css) {
    return function() {
      $(dom).empty().append(children);
      dom.className = cls || '';
      dom.style.cssText = css || '';
      part.focus();
    };
  })(children, dom.className, dom.style.cssText);
};


ArticlePart.Marker = Marker;
ArticlePart.DnD = DnD;

module.exports = ArticlePart;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var tools = __webpack_require__(4);
var $ = __webpack_require__(0);
var Toolbar = __webpack_require__(5);
var ParagraphPart = __webpack_require__(9);
var Items = __webpack_require__(3);

function HeadingPart() {
  ParagraphPart.apply(this, arguments);
}

var proto = HeadingPart.prototype = Object.create(ParagraphPart.prototype);

HeadingPart.toolbar = new Items([
  tools.heading,
  tools.align,
  tools.draggable
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(HeadingPart.toolbar.position).add(HeadingPart.toolbar);
};

proto.create = function(arg) {
  var tag = 'h1';
  var html = typeof arg == 'string' ? arg : '';
  
  if( arg && typeof arg == 'object' ) {
    tag = arg.tag || 'h1';
    html = arg.html;
  }
  
  return $('<' + tag + '/>').html(html)[0];
};

module.exports = HeadingPart;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var context = __webpack_require__(6);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(54);

function translatesrc(src) {
  if( src && ~src.indexOf('instagram.com') ) {
    var vid = src.split('//')[1];
    vid = vid && vid.split('/p/')[1];
    vid = vid && vid.split('/')[0];
    
    if( vid ) src = 'https://www.instagram.com/p/' + vid + '/media';
  }
  
  return src;
}

function ImagePart(el) {
  Part.apply(this, arguments);
}

ImagePart.placeholder = 'Caption Here';

var proto = ImagePart.prototype = Object.create(Part.prototype);
ImagePart.toolbar = new Items([
  tools.image.floatleft,
  tools.image.floatright,
  tools.image.size,
  tools.image.upload,
  tools.image.change,
  tools.image.align,
  tools.image.caption
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(ImagePart.toolbar.position || 'inside top center').add(ImagePart.toolbar);
};

proto.oninit = function() {
  var part = this;
  var dom = part.dom();
  
  var el = $(dom)
  .ac('f_img')
  .on('click', function(e) {
    if( !part.editmode() ) context.fire('ff-imageshow', {
      originalEvent: e,
      image: img[0] || dom,
      src: (img[0] || dom).src,
      part: part
    });
  });
  
  var img = el.find('img')
  .on('load', function(e) {
    part.fire(e.type);
  });
  
  var placeholder = part._placeholder = $('<div class="ff-placeholder ff-acc"/>')
  .attr('contenteditable', false)
  .html(el.attr('placeholder') || ImagePart.placeholder || '');
  
  var placeholderlistener = function(e) {
    var figcaption = el.find('figcaption');
    placeholder.remove();
    
    if( e.type == 'mousedown' ) return figcaption[0].click();
    
    setTimeout(function() {
      var caption = figcaption.html();
      if( !caption ) {
        placeholder.appendTo(figcaption);
      }
    }, 10);
  };
  
  part.on('ff-modechange', function() {
    var el = $(part.dom());
    var figcaption = el.find('figcaption');
  
    figcaption
    .off('mousedown', placeholderlistener)
    .off('keydown', placeholderlistener)
    .off('keyup', placeholderlistener);
    
    placeholder.off('mousedown', placeholderlistener);
    part.off('ff-blur', placeholderlistener);
    
    if( part.editmode() ) {
      if( !figcaption.length ) figcaption = $('<figcaption/>').appendTo(el);
      
      var caption = figcaption.html();
      if( !caption ) {
        placeholder.appendTo(figcaption);
      }
      
      figcaption
      .on('mousedown', placeholderlistener)
      .on('keydown', placeholderlistener)
      .on('keyup', placeholderlistener);
      
      placeholder.on('mousedown', placeholderlistener);
      part.on('ff-blur', placeholderlistener);
      
      figcaption.attr('contenteditable', true);
    } else {
      placeholder.remove();
      
      figcaption.attr('contenteditable', null);
    }
  });
};

proto.create = function(arg) {
  var src;
  var title;
  var caption;
  
  if( typeof arg === 'object' ) {
    src = arg.src;
    title = arg.name || arg.title;
    caption = arg.caption;
  } else {
    src = arg;
  }
  
  var el = $('<img/>')
  .attr('title', title)
  .src(translatesrc(src));
  
  if( caption ) {
    if( typeof caption !== 'string' ) caption = '';
    el = $('<figure/>').append(el).append($('<figcaption/>').html(caption));
  } else {
    el.ac('f_img_block');
  }
  
  return el[0];
};

proto.img = function() {
  var dom = this.dom();
  if( dom.tagName == 'IMG' ) return dom;
  return $(dom).find('img')[0];
};

proto.figcaption = function() {
  return $(this.dom()).find('figcaption')[0];
};

proto.src = function(src) {
  if( !arguments.length ) return this.img().src;
  
  src = translatesrc(src);
  if( src ) this.img().src = src;
  
  return this;
};

proto.title = function(title) {
  var el = $(this.img());
  if( !arguments.length ) return el.attr('title');
  el.attr('title', title);
  return this;
};

proto.isFigure = function() {
  var dom = this.dom();
  return dom.tagName == 'FIGURE' ? true : false;
};

proto.caption = function(caption) {
  var part = this;
  var dom = part.dom();
  
  if( !arguments.length ) return $(dom).find('figcaption').html();
  
  var el = $(part.dom());
  var parentpart = part.parent();
  var floating = part.floating();
  var blockmode = part.blockmode();
  
  var newpart = new ImagePart({
    src: part.src(),
    title: part.title(),
    caption: caption
  }).blockmode(blockmode).floating(floating);
  
  el.after(newpart.dom()).remove();
  
  return this;
};

proto.floating = function(direction) {
  var el = $(this.dom());
  if( !arguments.length ) return el.hc('f_pullleft') ? 'left' : el.hc('f_pullright') ? 'right' : false;
  
  el.rc('f_pullleft f_pullright')
  if( direction == 'left' ) el.ac('f_pullleft');
  else if( direction == 'right' ) el.ac('f_pullright');
  
  return this;
};

proto.blockmode = function(mode) {
  var el = $(this.dom());
  if( !arguments.length ) return el.hc('f_img_block') ? 'natural' : 
    el.hc('f_img_full') ? 'full' : 
    el.hc('f_img_medium') ? 'medium' : false;
  
  el.rc('f_img_block f_img_medium f_img_full');
  if( mode == 'natural' ) el.ac('f_img_block');
  else if( mode == 'medium') el.ac('f_img_medium');
  else if( mode == 'full') el.ac('f_img_full');
  else el.rc('f_pullleft f_pullright');
  
  return this;
};

proto.createHistory = function() {
  var part = this;
  var dom = part.dom();
  return (function(src, cls, css) {
    return function() {
      dom.src = src;
      dom.className = cls || '';
      dom.style.cssText = css || '';
      part.focus();
    };
  })(dom.src, dom.className, dom.style.cssText);
};

module.exports = ImagePart;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var autoflush = __webpack_require__(10);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(55);

function Link() {
  Part.apply(this, arguments);
}

var proto = Link.prototype = Object.create(Part.prototype);

Link.toolbar = new Items([
  tools.align,
  tools.target
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(Link.toolbar.position).add(Link.toolbar);
};

proto.oninit = function() {
  var part = this;
  var dom = this.dom();
  var flush = autoflush(function(items) {
    part.history().save();
  }, 200);
  
  var el = $(dom).ac('f_link')
  .on('keydown', function(e) {
    if( part.editmode() && !e.metaKey && !e.ctrKey && e.target.tagName == 'A' ) flush();
  });
}

proto.create = function(arg) {
  var def = Link.defaultLabel;
  var href = arg && (arg.src || arg.href) || arg;
  var label = arg && (arg.name || arg.title || arg.label) || arg || def;
  var target = arg && arg.target;
  
  if( !href.indexOf('data:') ) href = null;
  if( !href || typeof href !== 'string' ) href = 'javascript:;';
  if( !label || typeof label !== 'string' ) label = def;
  
  return $('<div ff-type="link"/>').append($('<a href="' + href + '" />').attr('target', target).html(label))[0];
};

proto.label = function(label) {
  $(this.dom()).children('a').html(label || Link.defaultLabel);
  this.history().save();
  return this;
};

proto.target = function(target) {
  var el = $(this.dom());
  if( !arguments.length ) return el.find('a').attr('target');
  el.find('a').attr('target', target);
  this.history().save();
  return this;
};

proto.href = function(href) {
  var el = $(this.dom());
  if( !arguments.length ) return el.find('a').attr('href');
  el.find('a').attr('href', href);
  this.history().save();
  return this;
};

proto.oneditmode = function() {
  $(this.dom()).children('a').attr('contenteditable', true);
};

proto.onviewmode = function() {
  $(this.dom()).children('a').attr('contenteditable', null);
};

proto.createHistory = function() {
  var part = this;
  var dom = part.dom();
  
  return (function(html, cls, css) {
    return function() {
      dom.innerHTML = html || '';
      dom.className = cls || '';
      dom.style.cssText = css || '';
      part.focus();
    };
  })(dom.innerHTML, dom.className, dom.style.cssText);
};

Link.defaultLabel = 'Link';

module.exports = Link;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var context = __webpack_require__(6);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(57);

function isedge(dom, y) {
  var top = $.util.offset(dom).top;
  var height = dom.offsetHeight;
  
  if( y < top + 30 || y > top + height - 30 ) return true;
  return false;
}

function getcellindex(dom, target, x) {
  if( !dom.contains(target) ) return -1;
  var cells = $(dom).children('.f_row_cell').each(function(i, el) {
    el.style.borderLeft = el.style.borderRight = null;
  });
  var cell = $(target).parent('.f_row_cell')[0];
  var index = cells.indexOf(cell);
  
  if( !~index ) return index;
  if( x > $.util.offset(cell).left + (cell.offsetWidth / 2) ) {
    index = index + 1;
    cell.style.borderRight = '2px solid #2796DD';
  } else {
    cell.style.borderLeft = '2px solid #2796DD';
  }
  
  return index;
}

function RowPart(el) {
  Part.call(this, el);
}

var proto = RowPart.prototype = Object.create(Part.prototype);

RowPart.toolbar = new Items([
  tools.row.valign
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(RowPart.toolbar.position).add(RowPart.toolbar);
};

proto.oninit = function() {
  var part = this;
  var dom = part.dom();
  
  var release = function() {
    //dom.style.opacity = null;
    el.children('.f_row_cell').each(function(i, el) {
      el.style.borderLeft = el.style.borderRight = null;
    });
  };
  
  var el = $(dom)
  .ac('f_row')
  .on('mouseleave dragend', function() {
    release();
  })
  .on('dragover', function(e) {
    if( !part.editmode() ) return;
    if( isedge(dom, e.pageY) ) return release();
    //else dom.style.opacity = 0.9;
    
    var target = e.target || e.srcElement;
    var dragging = part.context().dragging;
    var cellindex = getcellindex(dom, target, e.pageX);
    
    if( dragging ) {
      e.stopPropagation();
      e.preventDefault();
    } else if( e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length ) {
      e.stopPropagation();
      e.preventDefault();
    }
  })
  .on('drop', function(e) {
    if( !part.editmode() ) return;
    if( isedge(dom, e.pageY) ) return;
    
    var target = e.target || e.srcElement;
    var dragging = part.context().dragging;
    var cellindex = getcellindex(dom, target, e.pageX);
    
    release();
    
    if( dragging ) {
      e.stopPropagation();
      e.preventDefault();
      
      if( target === dragging || dragging.contains(target) ) return;
      part.add(dragging, cellindex);
    } else if( e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length ) {
      e.stopPropagation();
      e.preventDefault();
      
      $(e.dataTransfer.files).each(function() {
        var type = this.type;
        if( type ) {
          context.upload(this, function(err, result) {
            if( type.indexOf('image/') === 0 ) {
              part.add(new context.Image(result), cellindex);
              part.validate();
            }
          });
        }
      });
    }
  });
};

proto.oneditmode = function() {
  if( window.MutationObserver ) {
    var part = this;
    var observer = this._observer = new MutationObserver(function(){
      part.validate();
    });
    
    observer.observe(this.dom(), {
      childList: true,
      subtree: true
    });
  }
};

proto.onviewmode = function() {
  var observer = this._observer;
  if( observer ) {
    observer.disconnect();
    delete this._observer;
  }
};

proto.create = function(arg) {
  return $('<div ff-type="row" />').ac('f_clearfix')[0];
};

proto.cols = function(cols) {
  var el = $(this.dom());
  if( !arguments.length ) return +el.attr('cols') || 0;
  el.attr('cols', +cols || null);
  return this;
};

proto.validate = function() {
  var part = this;
  var dom = part.dom();
  var el = $(dom);
  
  el.find('.f_row_cell').each(function(i, el) {
    var el = this;
    if( !el.children.length ) el.parentNode.removeChild(el);
  });
  
  var cells = el.children('.f_row_cell');
  var cols = part.cols() || cells.length;
  
  if( el.hc('f_row_justify') ) {
    var totalwidth = 0;
    var warr = [];
    cells
    .children(':first-child')
    .each(function(i, el) {
      if( el.tagName == 'FIGURE' ) {
        el = $(el).find('img')[0];
      }
      
      var width = el.naturalWidth;
      var height = el.naturalHeight;
      
      if( width ) {
        width = 100 * (width / height);
        totalwidth += width;
        warr.push(width);
      } else {
        el.style.width = '100px';
        height = el.offsetHeight;
        width = 100 * (100 / height);
        totalwidth += width;
        warr.push(width);
        el.style.width = null;
      }
      //console.log(i, this, width);
    });
    
    cells.each(function(i, el) {
      //console.log(i, this, ((warr[i] / totalwidth) * 100) + '%');
      $(el).css('width', ((warr[i] / totalwidth) * 100) + '%');
    });
  } else {
    cells.each(function(i, el) {
      $(el).css('width', (100 / cols) + '%');
    });
  }
  
  return part;
};

proto.add = function(arg, index) {
  var part = this;
  var dom = part.dom();
  var cells = $(dom).children('.f_row_cell');
  
  $(arg).each(function(i, item) {
    var cell = $('<div class="f_row_cell" />')
    .append(function() {
      return (item && item.dom && item.dom()) || item;
    });
    
    if( ~index ) {
      var ref = cells[index++];
      if( ref ) return cell.insertBefore(ref);
    }
    
    cell.appendTo(dom);
  });
  
  part.validate().history().save();
  
  return part;
};

proto.valign = function(align) {
  var part = this;
  var el = $(part.dom());
  if( !arguments.length ) return el.hc('f_row_middle') ? 'middle' : 
    el.hc('f_row_bottom') ? 'bottom' : el.hc('f_row_justify') ? 'justify' : false;
  
  el.rc('f_row_middle f_row_bottom f_row_justify');
  
  if( align == 'middle') el.ac('f_row_middle');
  else if( align == 'bottom' ) el.ac('f_row_bottom');
  else if( align == 'justify' ) el.ac('f_row_justify');
  
  part.validate().history().save();
  
  return part;
};

proto.createHistory = function() {
  var part = this;
  var dom = part.dom();
  var html = dom.innerHTML;
  
  return (function(html, cls, css) {
    return function() {
      dom.className = cls || '';
      dom.style.cssText = css || '';
      dom.innerHTML = html;
      part.focus();
    };
  })(html, dom.className, dom.style.cssText);
};

module.exports = RowPart;



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(58);

function Separator() {
  Part.apply(this, arguments);
}

var proto = Separator.prototype = Object.create(Part.prototype);

Separator.toolbar = new Items([
  tools.separator.shape,
  tools.separator.width
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(Separator.toolbar.position).add(Separator.toolbar);
};

proto.create = function(arg) {
  return $('<hr/>').ac('f_sep')[0];
};

proto.shape = function(shape) {
  var el = $(this.dom());
  if( !arguments.length ) return !el.hc('f_sep') ? false : el.hc('f_sep_dotted') ? 'dotted' : 
    el.hc('f_sep_dashed') ? 'dashed' : 
    el.hc('f_sep_zigzag') ? 'zigzag' : 'line';
  
  el.ac('f_sep').rc('f_sep_dotted f_sep_dashed f_sep_zigzag');
  
  if( shape === false ) el.rc('f_sep');
  else if( shape == 'dotted' ) el.ac('f_sep_dotted');
  else if( shape == 'dashed') el.ac('f_sep_dashed');
  else if( shape == 'zigzag') el.ac('f_sep_zigzag');
  
  return this;
};


module.exports = Separator;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var ParagraphPart = __webpack_require__(9);

function TextPart() {
  ParagraphPart.apply(this, arguments);
  this.toolbar().enable(false);
}

var proto = TextPart.prototype = Object.create(ParagraphPart.prototype);

proto.create = function(arg) {
  var html = typeof arg == 'string' ? arg : '';
  return $('<span/>').html(html)[0];
};

proto.html = ParagraphPart.prototype.text;

proto.multiline = function() {
  if( !arguments.length ) return false;
  return this;
};

module.exports = TextPart;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var context = __webpack_require__(6);
var Part = __webpack_require__(7);
var Toolbar = __webpack_require__(5);
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(59);

function translatesrc(src) {
  if( ~src.indexOf('youtube.com') ) {
    var vid = src.split('v=')[1];
    vid = vid && vid.split('&')[0];
    vid = vid && vid.split('#')[0];
    
    if( vid ) src = 'https://www.youtube.com/embed/' + vid;
  } else if( ~src.indexOf('vimeo.com') ) {
    var vid = src.split('//')[1];
    vid = vid && vid.split('/')[1];
    vid = vid && vid.split('?')[0];
    vid = vid && vid.split('&')[0];
    vid = vid && vid.split('#')[0];
    
    if( vid ) src = 'https://player.vimeo.com/video/' + vid;
  }
  
  return src;
}

function VideoPart() {
  Part.apply(this, arguments);
}

var proto = VideoPart.prototype = Object.create(Part.prototype);

VideoPart.toolbar = new Items([
  tools.video.size
]);

proto.createToolbar = function() {
  return new Toolbar(this).position(VideoPart.toolbar.position).add(VideoPart.toolbar);
};

proto.create = function(arg) {
  var src = translatesrc((arg && arg.src) || arg) || 'about:blank';
  
  return $('<div ff-type="video" />').ac('f_video_fit f_video_16by9').html('<div class="f_video_container"><iframe src="' + src + '" frameborder="0" nwebkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>')[0];
};

proto.src = function(src) {
  var el = $(this.dom());
  if( !arguments.length ) return el.find('iframe').src;
  
  src = translatesrc(src) || 'about:blank';
  if( src ) el.find('iframe').src = src;
  
  return this;
};

proto.oninit = function() {
  $(this.dom()).ac('f_video');
};

proto.onmodechange = function() {
  var el = $(this.dom());
  if( this.editmode() ) {
    if( !el.find('.ff-mask').length ) $('<div class="ff-mask"></div>').appendTo(el[0]);
    el.find('.ff-mask').show();
  } else {
    el.find('.ff-mask').hide();
  }
};

module.exports = VideoPart;



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./index.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

var win = window;
var timeoutid, timeoutfn;
var list = [];
var size = 50;
var index = -1;
var processing = false;

var redo = function() {
  processing = true;
  var action =  next();
  if( action ) {
    //console.log('redo', index);
    action.call(scope, redo);
  }
  processing = false;
  return scope;
};

var undo = function() {
  processing = true;
  var action =  prev();
  if( action ) {
    //console.log('undo', index);
    action.call(scope, undo);
  }
  processing = false;
  return scope;
};

var prev = function() {
  index = index - 1;
  if( index < 0 ) index = -1;
  return list[index];
};

var next = function() {
  index = index + 1;
  if( index > list.length ) index = list.length;
  return list[index];
};

var add = function(action) {
  if( typeof action != 'function' ) return console.error('[ff] illegal argument, action must be a function');
  
  if( processing ) return;
  
  list.push(action);
  if( list.length > size )
    list = list.slice(list.length - size);
  
  index = list.length;
  //console.error('add', list.length);
  
  return scope;
};

var remove = function(action) {
  if( typeof action === 'number' ) action = list[action];
  for(var index;(index = list.indexOf(action)) >= 0;)
    list.splice(index, 1);
  
  return scope;
};

var scope = module.exports = {
  add: add,
  remove: remove,
  undo: undo,
  redo: redo,
  size: function(size) {
    if( !arguments.length ) return size;
    size = Math.abs(+size) || 50;
    return scope;
  },
  list:  function() {
    return list;
  },
  index: function() {
    return index;
  },
  clear: function() {
    list = [];
    index = -1;
    return this;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var win = window,
    doc = document,
    ctx = __webpack_require__(6),
    Toolbar = __webpack_require__(5),
    Part = __webpack_require__(7),
    Items = __webpack_require__(3)
    $ = __webpack_require__(0),
    tools = __webpack_require__(4);
    
__webpack_require__(24);

ctx.Part = Part;
ctx.Toolbar = Toolbar;
ctx.Items = Items;
ctx.tools = tools;

var ArticlePart = __webpack_require__(16);
var ParagraphPart = __webpack_require__(9);
var SeparatorPart = __webpack_require__(21);
var ImagePart = __webpack_require__(18);
var VideoPart = __webpack_require__(23);
var RowPart = __webpack_require__(20);
var LinkPart = __webpack_require__(19);
var TextPart = __webpack_require__(22);
var HeadingPart = __webpack_require__(17);

ctx.Article = ArticlePart;
ctx.Paragraph = ParagraphPart;
ctx.Separator = SeparatorPart;
ctx.Image = ImagePart;
ctx.Video = VideoPart;
ctx.Row = RowPart;
ctx.Link = LinkPart;
ctx.Text = TextPart;
ctx.Heading = HeadingPart;

ctx.type('default', ParagraphPart);
ctx.type('article', ArticlePart);
ctx.type('paragraph', ParagraphPart);
ctx.type('text', TextPart);
ctx.type('separator', SeparatorPart);
ctx.type('image', ImagePart);
ctx.type('video', VideoPart);
ctx.type('row', RowPart);
ctx.type('link', LinkPart);
ctx.type('heading', HeadingPart);

ctx.fonts([
  {id: 'default', text:'Default Font'},
  {id: 'helvetica', text:'<span style="font-family: Helvetica;">Helvetica</span>', font: 'Helvetica'},
  {id: 'times', text:'<span style="font-family: Times New Roman;">Times New Roman</span>', font: 'Times New Roman'},
  {id: 'courier', text:'<span style="font-family: Courier New;">Courier New</span>', font: 'Courier New'}
]);

ctx.colors([
  {id: 'default', text:'Default Color'},
  {id: 'primary', text:'<span style="color: #3498db;">Text Color</span>', color: '#3498db'},
  {id: 'info', text:'<span style="color: #3bafda;">Text Color</span>', color: '#3bafda'},
  {id: 'danger', text:'<span style="color: #e9573f;">Text Color</span>', color: '#e9573f'},
  {id: 'warning', text:'<span style="color: #f6bb42;">Text Color</span>', color: '#f6bb42'},
  {id: 'success', text:'<span style="color: #70AB4F;">Text Color</span>', color: '#70AB4F'},
  {id: 'dark', text:'<span style="color: #3b3f4f;">Text Color</span>', color: '#3b3f4f'},
  {id: 'system', text:'<span style="color: #6E5DA8;">Text Color</span>', color: '#6E5DA8'}
]);

ctx.uploader(function(file, done) {
  if( !window.FileReader ) return done(new Error('use context.uploader(fn) to set up your custom uploader'));
  
  var reader = new FileReader(); // NOTE: IE10+
  reader.onload = function(e) {
    done(null, {
      src: e.target.result,
      name: file.name
    });
  };
  reader.onerror = function(err) {
    done(err);
  };
  reader.readAsDataURL(file);
});

ctx.placeholder = 'Please enter the text.';

module.exports = ctx;


(function() {
  var readyfn;
  
  doc.addEventListener('DOMContentLoaded', function() {
    ctx.scan();
    readyfn && readyfn();
    
    /*if( window.MutationObserver ) {
      var observer = new MutationObserver(function(mutations) {
        console.log('scan');
        ctx.scan();
      });
    
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }*/
  });

  ctx.ready = function(fn) {
    if( doc.body ) fn();
    else readyfn = fn;
  };
  
  ctx.on('ff-data ff-clear ff-modechange', function(e) {
    Toolbar.update();
  });
  
  // bind undo/redo shortcut listener
  var platform = win.navigator.platform;
  var mac = !!~platform.toLowerCase().indexOf('mac');
  var history = ctx.history();
  
  $(win).on('keydown', function(e) {
    if( !ctx.editmode() ) return;
    
    if( mac ) {
      if( e.metaKey && e.key == 'z' ) history.undo();
      else if( e.metaKey && e.shiftKey && e.key == 'Z' ) history.redo();
      else return;
    } else {
      if( e.ctrlKey && e.key == 'z' ) history.undo();
      else if( e.ctrlKey && e.key == 'y' ) history.redo();
      else return;
    }
  
    e.preventDefault();
  }, true);
})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Button = __webpack_require__(29);

function Buttons(toolbar) {
  var self = this;
  self._toolbar = toolbar;
  self._el = $(toolbar.dom());
  self._first = [];
  self._buttons = [];
  self._last = [];
}

Buttons.prototype = {
  toolbar: function() {
    return this._toolbar;
  },
  update: function() {
    var self = this;
    var toolbar = self.toolbar();
    var scope = toolbar.scope();
    var el = self._el.empty()[0];
    var list = self._list = [];
    var append = function(btns) {
      btns.forEach(function(btn) {
        btn.scope(scope).toolbar(toolbar).appendTo(el).update();
        list.push(btn);
        if( btn.id ) list[btn.id] = btn;
      });
    };
    
    append(self._first);
    append(self._buttons);
    append(self._last);
    return self;
  },
  get: function(id) {
    return this._list && this._list[id];
  },
  add: function(btn, index) {
    var self = this;
    if( !btn ) return self;
    
    var btns = self._buttons;
    $.each(btn, function() {
      var btn = Button.eval(this);
      if( !btn ) return;
      
      if( index >= 0 ) btns.splice(index++, 0, btn);
      else btns.push(btn);
    });
    
    self.update();
    return self;
  },
  first: function(btn, index) {
    var self = this;
    if( !btn ) return this;
    
    var btns = self._first;
    
    $.each(btn, function() {
      var btn = Button.eval(this);
      if( !btn ) return;
      
      if( index >= 0 ) btns.splice(index++, 0, btn);
      else btns.push(btn);
    });
    
    self.update();
    return self;
  },
  last: function(btn, index) {
    var self = this;
    if( !btn ) return self;
    
    var btns = self._last;
    
    $.each(btn, function() {
      var btn = Button.eval(this);
      if( !btn ) return;
      
      if( index >= 0 ) btns.splice(index++, 0, btn);
      else btns.push(btn);
    });
    
    self.update();
    return self;
  },
  remove: function(target) {
    var self = this;
    if( ~['string', 'number'].indexOf(typeof target) ) target = self.get(target);
    if( !target ) return self;
    
    var remove = function(btns) {
      btns.forEach(function(btn) {
        if( btn === target ) btns.splice(btns.indexOf(btn), 1);
      });
    };
    
    remove(self._first);
    remove(self._buttons);
    remove(self._last);
    
    self.update();
    return self;
  },
  clear: function() {
    var self = this;
    self._first = [];
    self._buttons = [];
    self._last = [];
    self.update();
    return self;
  }
};

module.exports = Buttons;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Buttons = __webpack_require__(27);
var doc = document;
var win = window;

__webpack_require__(47);

var supportsPassive = (function() {
  var support = false;
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function() {
        support = true;
      }
    }));
  } catch (e) {}
  
  return support;
})();

function clone(o) {
  var result = {};
  for(var k in o) result[k] = o[k];
  return result; 
}

function Toolbar(scope, options) {
  this._el = $('<div/>').ac('ff-toolbar ff-acc');
  this._buttons = new Buttons(this);
  this.options(options);
  this.scope(scope);
  
  this._el[0].toolbar = this;
}

Toolbar.DEFAULT_GAP = 10;
Toolbar.DEFAULT_LIMIT_Y = 15;

Toolbar.prototype = {
  dom: function() {
    return this._el[0];
  },
  scope: function(scope) {
    if( !arguments.length ) return this._scope || this;
    this._scope = scope;
    if( scope && scope.dom && scope.dom() ) this.tracker(scope.dom());
    return this;
  },
  options: function(o) {
    if( !arguments.length ) return this._options;
    o = this._options = clone(o);
    
    this.enable(o.enable === false ? false : true);
    this.always(o.always === true ? true : false);
    this.tracker(o.tracker);
    this.position(o.position);
    
    var dom = this.dom();
    if( o.cls ) dom.className = o.cls;
    if( o.style ) dom.style = o.style;
    
    return this;
  },
  gap: function(gap) {
    if( !arguments.length ) return this._gap || Toolbar.DEFAULT_GAP;
    this._gap = +gap;
    this.update();
    return this;
  },
  tracker: function(tracker) {
    if( !arguments.length ) return this._tracker;
    this._tracker = tracker;
    this.update();
    return this;
  },
  enable: function(b) {
    if( !arguments.length ) return this._enable;
    this._enable = !!b;
    this.update();
    return this;
  },
  always: function(b) {
    if( !arguments.length ) return this._always;
    this._always = !!b;
    this.update();
    return this;
  },
  position: function(position) {
    if( !arguments.length ) return this._position || 'top center outside';
    this._position = position;
    this.update();
    return this;
  },
  buttons: function() {
    return this._buttons;
  },
  add: function(btn, index) {
    this.buttons().add(btn, index);
    return this;
  },
  get: function(id) {
    return this.buttons().get(id);
  },
  first: function(btn) {
    this.buttons().first(btn);
    return this;
  },
  last: function(btn) {
    this.buttons().last(btn);
    return this;
  },
  clear: function(btn) {
    this.buttons().clear();
    return this;
  },
  remove: function(btn) {
    this.buttons().remove(btn);
    return this;
  },
  handleEvent: function(e) {
    this.update();
  },
  show: function(b) {
    if( !this.enable() ) return this;
    
    var tracker = this.tracker();
    var offsetparent = tracker.offsetParent || doc.body;
    if( offsetparent ) $(this.dom()).appendTo(offsetparent).css('opacity', 1);
    this.update();
    return this;
  },
  hide: function(force) {
    if( !force && this.always() ) return this;
    
    $(this.dom()).css('opacity', null).remove();
    return this;
  },
  update: function() {
    var tracker = this.tracker();
    if( !tracker ) return this;
    
    var dom = this.dom();
    var el = $(dom);
    var enable = this.enable();
    var offsetparent = tracker.offsetParent || doc.body;
    
    $(win).off('scroll resize wheel', this);
    
    if( !enable || !offsetparent || !offsetparent.contains(dom) || !offsetparent.contains(tracker) ) {
      el.remove();
      return this;
    }
    
    if( !tracker ) return this;
    
    var scope = this.scope();
    var position = this.position();
    var gap = this.gap();
    var limitY = Toolbar.DEFAULT_LIMIT_Y;
    var scopeposition = $(tracker).position();
    var posarr = position.split(' ');
    var inside = ~posarr.indexOf('inside');
    var vertical = ~posarr.indexOf('vertical');
    var nomargin = ~posarr.indexOf('nomargin');
    if( vertical ) el.ac('ff-toolbar-vertical');
    
    var width = tracker.clientWidth;
    var height = tracker.clientHeight;
    var tbarwidth = dom.clientWidth;
    var tbarheight = dom.clientHeight;
    var top = 0, left = 0, margin = nomargin ? 0 : gap;
    
    posarr.forEach(function(pos) {
      if( vertical ) {
        if( pos === 'top' ) {
          top = scopeposition.top;
          if( inside ) top += margin;
        } else if( pos == 'middle' ) {
          top = scopeposition.top + (height - tbarheight) / 2;
        } else if( pos == 'bottom' ) {
          top = scopeposition.top + height - tbarheight;
          if( inside ) top -= margin;
        } else if( pos == 'left' ) {
          if( inside ) left = scopeposition.left + margin;
          else left = scopeposition.left - tbarwidth - margin;
        } else if( pos == 'right' ) {
          if( inside ) left = scopeposition.left + width - tbarwidth - margin;
          else left = scopeposition.left + width + margin;
        }
        
      } else {
        if( pos === 'top' ) {
          if( inside ) top = scopeposition.top + margin;
          else top = scopeposition.top - tbarheight - margin;
        } else if( pos == 'bottom' ) {
          if( inside ) top = scopeposition.top + height - tbarheight - margin;
          else top = scopeposition.top + height + margin;
        } else if( pos == 'left' ) {
          left = scopeposition.left;
          if( inside ) left += margin;
        } else if( pos == 'center' ) {
          left = scopeposition.left + (width - tbarwidth) / 2;
        } else if( pos == 'right' ) {
          left = scopeposition.left + width - tbarwidth;
          if( inside ) left -= margin;
        }
      }
    });
    
    if( offsetparent === doc.body ) {
      if( top <= 5 ) top = 5;
      if( left <= 5 ) left = 5;
    }
    
    if( vertical ) {
      //console.log('vertical', scopeposition, top);
      var scrolltop = (offsetparent && offsetparent.scrollTop) ? offsetparent.scrollTop : (doc.documentElement.scrollTop || doc.body.scrollTop);
      
      if( scrolltop + limitY > scopeposition.top ) top = scrolltop + limitY;
      if( top > scopeposition.top + height - tbarheight ) top = scopeposition.top + height - tbarheight;
    }
    
    dom.style.top = top + 'px';
    dom.style.left = left + 'px';
    
    if( supportsPassive ) {
      win.addEventListener('scroll', this, { passive: true });
      win.addEventListener('resize', this, { passive: true });
      win.addEventListener('wheel', this, { passive: true });
    } else {
      $(win).on('scroll resize wheel', this);
    }
    
    this.buttons().update();
    return this;
  }
};


module.exports = Toolbar;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Button = __webpack_require__(8);
var Separator = __webpack_require__(13);
var ListButton = __webpack_require__(12);

Button.eval = function(o) {
  if( !o ) return null;
  if( o instanceof Button ) return o;
  
  if( o == '-' || o.type == 'separator' ) return new Separator(o);
  else if( o.type == 'list' ) return new ListButton(o);
  
  return new Button(o);
};

Button.Separator = Separator;
Button.ListButton = ListButton;

module.exports = Button;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

__webpack_require__(52);

function DnD(part, dom) {
  var el = $(dom);
  var marker = $('<div class="ff-dnd-marker ff-acc"></div>');
  
  function move(target, y) {
    if( !target ) return;
    
    if( y < $.util.offset(target, true).top + (target.offsetHeight / 2) ) {
      marker.insertBefore(target);
    } else {
      marker.insertAfter(target);
    }
  }
  
  function hide() {
    marker.remove();
  }
  
  function current(target) {
    if( target === el || target === marker ) return;
    var children = el.children();
    var current;
    children.each(function() {
      if( this.contains(target) ) current = this;
    });
    
    return current;
  }
  
  function ondragover(e) {
    e.stopPropagation();
    e.preventDefault();
    
    move(current(e.target || e.srcElement), e.pageY);
  }
  
  function ondragend(e) {
    hide();
    part.history().save();
  }
  
  function ondrop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    var target = e.target || e.srcElement;
    var dragging = part.context().dragging;
    var ref = marker[0].nextSibling;
    
    if( dragging ) {
      if( !dom.contains(marker[0]) ) return;
      part.insert(dragging, ref);
    } else if( e.dataTransfer && e.dataTransfer.files ) {
      part.insert(e.dataTransfer.files, ref);
    }
    
    hide();
  }
  
  el.on('dragover', ondragover)
  .on('dragend', ondragend)
  .on('drop', ondrop);
  
  return {
    move: move,
    hide: hide,
    destroy: function() {
      el.off('dragover', ondragover)
      .off('dragend', ondragend)
      .off('drop', ondrop);
      
      marker.remove();
    }
  };
}

module.exports = DnD;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var Button = __webpack_require__(5).Button;
var tools = __webpack_require__(4);
var Items = __webpack_require__(3);

__webpack_require__(53);

function Marker(part, dom) {
  var el = $(dom);
  var marker = $('<div class="ff-marker ff-acc"><div class="ff-marker-head"></div><div class="ff-marker-tools"></div></div>');
  var lastref;
  
  function update() {
    var tools = marker.find('.ff-marker-tools').empty();
    items.forEach(function(item) {
      if( !item || !item.text ) return;
      
      new Button(item).cls('ff-marker-tools-btn').scope(part).appendTo(tools);
    });
  }
  
  function show(ref) {
    if( marker.hc('ff-marker-open') ) return this;
    ref = (typeof ref == 'number' ? el.children()[ref] : ref);
    
    if( lastref === ref || ref === marker[0] ) return this;
    lastref = ref;
    
    collapse();
    if( ref ) marker.insertBefore(ref);
    else marker.appendTo(el);
    
    return this;
  }
  
  function hide() {
    collapse();
    marker.remove();
    return this;
  }
  
  function expand() {
    marker.ac('ff-marker-open');
    return this;
  }
  
  function collapse() {
    marker.rc('ff-marker-open');
    return this;
  }
  
  function onclick(e) {
    var target = e.target || e.srcElement;
    if( !marker[0].contains(target) ) marker.rc('ff-marker-open');
  }
  
  function onmousemove(e) {
    var target = e.target || e.srcElement;
    var y = e.pageY;
    
    if( target === el || target === marker ) return;
    var children = el.children();
    var current;
    children.each(function() {
      if( this.contains(target) ) current = this;
    });
    
    if( !current ) return;
    
    var index = children.indexOf(current);
    if( y > $.util.offset(current, 1).top + (current.offsetHeight / 2) ) index = index + 1;
    show(index);
  }
  
  marker.find('.ff-marker-head').on('click', function() {
    update();
    marker.tc('ff-marker-open');
  });
  
  el.on('click', onclick).on('mousemove', onmousemove);
  
  return {
    show: show,
    hide: hide,
    expand: expand,
    collapse: collapse,
    getIndex: function() {
      return el.children().indexOf(marker[0]);
    },
    getRef: function() {
      return marker[0].nextSibling;
    },
    isExpanded: function() {
      return marker.hc('ff-marker-open')
    },
    destroy: function() {
      el.off('click', onclick).off('mousemove', onmousemove);
      marker.remove();
    }
  };
}

var items = Marker.toolbar = new Items([
  tools.insert.heading,
  tools.insert.paragraph,
  tools.insert.imagefile,
  tools.insert.image,
  tools.insert.video,
  tools.insert.separator,
  tools.insert.link,
  tools.insert.attach
]);

module.exports = Marker;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-focus-state {\n  background-color: #eee;\n}\n.ff[contenteditable] {\n  outline: none;\n}\n.ff[draggable] {\n  cursor: pointer;\n}\n.ff-placeholder {\n  display: inline-block;\n  color: #ccc;\n  font-weight: normal;\n  font-size: inherit;\n  user-select: none;\n}\n.ff-flip {\n  transform: scale(-1, 1);\n}\n.ff-vert {\n  transform: rotate(90deg);\n}\n.f_clearfix {\n  clear: both;\n}\n.f_pullleft {\n  float: left;\n}\n.f_pullright {\n  float: right;\n}\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-toolbar {\n  position: absolute;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 110;\n  opacity: 0;\n  transition: opacity .35s;\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n}\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-toolbar-btn {\n  display: table-cell;\n  cursor: pointer;\n  font-size: 14px;\n  vertical-align: middle;\n  line-height: 20px;\n  background-color: transparent;\n  color: white;\n  padding: 15px 15px;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  position: relative;\n}\n.ff-toolbar-btn:hover,\n.ff-toolbar-btn.ff-toolbar-btn-active {\n  color: #2796DD;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.ff-toolbar-btn.ff-toolbar-btn-disabled {\n  color: #777;\n  background-color: transparent;\n}\n.ff-toolbar-btn.ff-toolbar-btn-disabled:hover {\n  color: #777;\n}\n.ff-toolbar-btn i {\n  font-size: 14px;\n  min-width: 16px;\n  text-align: center;\n}\n.ff-toolbar-vertical .ff-toolbar-btn {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-toolbar-list-btn .ff-toolbar-list-dropdown {\n  display: none;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #eee;\n  background-color: #fff;\n  color: #333;\n}\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li {\n  list-style: none;\n  padding: 8px 15px;\n  margin: 0;\n  white-space: nowrap;\n}\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h1,\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h2,\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h3,\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h4,\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h5,\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li h6 {\n  margin: 3px 0;\n}\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown > li:hover {\n  background-color: #efefef;\n}\n.ff-toolbar-list-btn .ff-toolbar-list-dropdown.open {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-toolbar-separator-btn {\n  letter-spacing: -99999;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 0;\n}\n.ff-toolbar-vertical .ff-toolbar-separator-btn {\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  height: 1px;\n}\n", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-article.ff-focus-state {\n  background-color: initial;\n}\n.ff-article.ff-edit-state {\n  border: 1px dotted #ccc;\n}\n.f_article_view {\n  clear: both;\n}\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-dnd-marker {\n  height: 1px;\n  background-color: #2796DD;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-marker {\n  display: block;\n  position: relative;\n  margin: 0;\n  user-select: none;\n}\n.ff-marker * {\n  box-sizing: border-box;\n}\n.ff-marker .ff-marker-head {\n  position: absolute;\n  left: -30px;\n  top: -13px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KKS7NPQAAA6ZJREFUSA2l1s9uVkUYBnDaKqCJbgkS6ILehm1smrBwpbfQEmEBt+AlmLhx0/YSNC5MXJgmpd6CrOiimEq6I7hQlLY8v3POS4f2fP0aeJLnzLx/5nln5syZ75u5dHHMJHUu1B6FxyGwZ0P24dCmeX8Q/jDUTsOFc6eJWaGVWCFY2Xx4I/wkhL/D/XAvbPNo24FRnFfYKv8fRl1L+3W4FF4PTaBi8hR8Fm6HP4YHIbQavWd4TircDlhL7mr4X7gVPgp3wxchfBreDhfD5fByuBGuh9Bq9Z4JT4nwcbgZ/hF+E34QToOce+Hj0FgaUJq9NfKsBAN+Dq3uZpMnju0k9MtfqbfS2QlpTC3eipmtgVdC0M51vZPHnXRXTsyuJ6cdQ4NW4bTGm29Rwlpoe2ulH3EOcKgKP6TzXRlp21iNsXLbThPkdOeqkq32KHR6V8Pvwz9Ds/8nHMO/cb4cC8RnjLFPQ1o0aauh1psZvGIEPhmnt05k+cXAN92itdu+nBpLiyZt4J+xYvtukP5SuBUehg6Mlh9tkbbQ2tWvVl5pKESTNr9acyWYfncjuRweMRrYHjRAW2AjVKzaNk98J6Q9zwi6FVeSa9BEdkWCEu2t/tn6bF/7jttYjSnfkzhofzYEjrzoCrp7ib0YgrZoJfwyVECewSbqulwO5YCDZJvFtOxfwt9CoEnbLQfH3Qnr+6NP8atNhGhNwNkAcddkxcpXcfYZEDYA/MoQMKvnodivA9OMwif17Wikd9KwKzRp125279j2wX5oq24zgppQb519EsLzUBoLSaL915A8q2i9470hsDgEq5GDRNrtY9ekK1a+8ielw+d5KrrXm5eOJfjeDDCj7XA5tEUOkEL8aILaQmtXv1p5xtKgRZM2v1qHCksWhJ9CF8caIyh/b53dfiKFts9XY++m75XQBv5uxQwHwCT8c9gIH4a3Qp9RXfjpvgWn2WczBmOMnQ8fhOshbTXUegvt+1N8J6xPSYE2buCdcEWngZyajLG/h5un4o150rXNYMZ+xBW38oI41jby65efDcYoSqN2rLTjGkclGGC2fk/vhW2xmKOQcz+svz4Ti54+EKWmuBMJqwPZW6FdeBLWZeByWAgXwy9CY70qhFar9+Q5qfDpAX7EvwqXQhe9Q+LuBSf2KPSdbodO70EIo0UFziss7rDUt8mW76TeCK0UrHw/3AvlgonJPWS8KwiYuXYaLpx7EbEqJtcOaG1trY5thWwrLH+6k/EazMPI1WuoPt4AAAAASUVORK5CYII=');\n  background-size: 26px auto;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: all .35s;\n}\n.ff-marker .ff-marker-head:hover {\n  opacity: 1;\n  transform: rotate(-180deg);\n}\n.ff-marker .ff-marker-tools {\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  padding-left: 15px;\n  transition: all 0.25s;\n}\n.ff-marker .ff-marker-tools .ff-marker-tools-btn {\n  display: inline-block;\n  cursor: pointer;\n  height: 36px;\n  line-height: 34px;\n  padding: 0 12px;\n  margin: 10px 0;\n  margin-right: 8px;\n  border: 1px solid #ccc;\n}\n.ff-marker.ff-marker-open .ff-marker-head {\n  top: 15px;\n}\n.ff-marker.ff-marker-open .ff-marker-tools {\n  height: 56px;\n}\n.ff-marker-tools-btn {\n  color: #232323;\n}\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".f_img img {\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.f_img figcaption {\n  margin: 8px 0;\n  text-align: center;\n  outline: none;\n}\n.f_img.f_img_medium img,\n.f_img.f_img_full img {\n  width: 100%;\n}\n.f_img_block {\n  display: block;\n  margin: 0 auto;\n}\n.f_img_medium {\n  display: block;\n  width: 50%;\n  margin: 0 auto;\n}\n.f_img_full {\n  display: block;\n  width: 100%;\n}\n.f_img.f_pullleft {\n  float: left;\n  margin-right: 25px;\n  max-width: 40%;\n}\n.f_img.f_pullright {\n  float: right;\n  margin-left: 25px;\n  max-width: 40%;\n}\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".f_link {\n  margin: 15px 0;\n}\n.f_link a {\n  display: inline-block;\n  cursor: pointer;\n  color: #53abe4;\n  border: 1px solid #53abe4;\n  text-decoration: none;\n  padding: 6px 20px;\n  border-radius: 34px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  text-align: center;\n  vertical-align: middle;\n}\n.f_link a:hover,\n.f_link a:active {\n  color: #2796DD;\n  border-color: #2796DD;\n  outline: 0;\n  text-decoration: none;\n}\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".ff-paragraph.ff-edit-state {\n  min-height: 1em;\n}\n.ff-paragraph.ff-focus-state {\n  background-color: initial;\n  outline: #ccc dotted 1px;\n}\n.ff-paragraph[draggable] {\n  background-color: #eee;\n}\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".f_row {\n  display: table;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 5px;\n  padding: 15px 0;\n}\n.f_row.f_clearfix {\n  width: 100%;\n}\n.f_row .f_row_cell {\n  display: table-cell;\n  vertical-align: top;\n}\n.f_row.f_row_top .f_row_cell {\n  vertical-align: top;\n}\n.f_row.f_row_middle .f_row_cell {\n  vertical-align: middle;\n}\n.f_row.f_row_bottom .f_row_cell {\n  vertical-align: bottom;\n}\n.f_row img {\n  display: block;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "hr.ff-edit-state {\n  display: block;\n  min-height: 1px;\n  margin: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.f_sep {\n  display: block;\n  margin: 0 !important;\n  padding: 0 !important;\n  height: auto !important;\n  border-top: 0 !important;\n}\n.f_sep:before {\n  content: \"\";\n  display: block;\n  border-bottom: 1px solid #ccc;\n  padding-top: 20px;\n  margin: 0 auto;\n  max-width: 100%;\n}\n.f_sep:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 20px;\n}\n.f_sep.f_sep_narrow:before {\n  max-width: 180px;\n}\n.f_sep.f_sep_dashed:before {\n  border-bottom: 1px dashed #ccc;\n}\n.f_sep.f_sep_dotted:before {\n  border-bottom: 1px dotted #ccc;\n}\n.f_sep.f_sep_zigzag:before {\n  position: relative;\n  top: 5px;\n  border: 0;\n  background-image: url('data:image/false;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAYAAAC5Sw6hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAtiABQAAAUNJREFUKBWNUj1LxEAQnegpYmWR43KTnc3Gys4i2AjCFlfbCbbaibU/wMbO3lZbWytBEMFKReEQxMrqfoLVceebvWy0iTqQzMeb93YyG6IWq6pqQSHJZMOJ3Nleb1XzWNf4T4vN0pctZ+xzKXJain1I07SvZE/U+beIZR6A/F4wbyqpENlHPlyB1SLtYs0kLNulsW95nq8ryTm3FHwuB07sEzMt12Lztf923vtwgmPZRfMrM68pGsU9zfDCmCN87j2gsEP4RixpRET2sI+hyzKHhkZEY1iyU5MgdIznRmsB0XpzksghRF663W6mYJykboxOiWGCcAHGXkUgeB0Xi3yMi2wRiRwVm9MEKzjDLi81TvCPnNA08R+T8YBGo0+Pq70lGgP7zVRoog0QOyeadhDINfJFLcLar3SG/3yHqbRQGHvxBU0KOHx07LVhAAAAAElFTkSuQmCC');\n  background-repeat: repeat no-repeat;\n  background-position: center 9px;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".f_video {\n  position: relative;\n  margin: 15px auto;\n  min-width: 150px;\n  max-width: 100%;\n}\n.f_video .ff-mask {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.f_video.f_video_16by9 .f_video_container {\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n  padding-bottom: 56.25%;\n}\n.f_video.f_video_16by9 .f_video_container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.f_video.f_video_narrow {\n  width: 50%;\n}\n.f_video.f_video_fit {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./toolbar.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./toolbar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./button.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./button.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./list.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./list.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./separator.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./separator.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./article.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./article.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./dnd.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./dnd.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./marker.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./marker.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./image.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./image.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./link.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./link.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./paragraph.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./paragraph.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./row.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./row.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./separator.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./separator.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./video.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/index.js!./video.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var win = window;
var Extensions = function() {}
Extensions.prototype = new Array();
var extensions = new Extensions();

var util = __webpack_require__(15);
var isArrayLike = util.isArrayLike;
var create = util.create;
var isHTML = util.isHTML;
var each = util.each;

var Context = function(document) {
  if( !document ) {
    var cs = (win.currentScript || win._currentScript);
    document = (cs && cs.ownerDocument) || win.document;
  }
  
  var Selection = function(selector) {
    if( typeof selector == 'string' ) {
      if( isHTML(selector) ) {
        selector = create(selector);
      } else {
        selector = document.querySelectorAll(selector);
      }
    }
    
    if( selector ) {
      var self = this;
      if( selector instanceof Extensions ) {
        return selector;
      //} else if( isNode(selector) && selector.nodeType == 11 ) {
      } else if( isArrayLike(selector) ) {
        [].forEach.call(selector, function(el) {
          self.push(el);
        });
      } else {
        this.push(selector);
      }
    }
  };
  
  var Selector = function(selector) {
    return new Selection(selector);
  };
  
  Selector.ready = function(fn) {
    if( document.body ) return fn.call(this, Selector);
    
    document.addEventListener('DOMContentLoaded', function() {
      fn(Selector);
    });
  };
  
  Selector.fn = extensions;
  Selector.util = util;
  Selector.create = create;
  Selector.each = each;
  Selection.prototype = extensions;
  Selection.prototype.document = document;
  Selection.prototype.Selection = Selection;
  Selection.prototype.$ = Selector;
  
  return Selector;
}

Context.fn = extensions;
Context.util = util;
Context.create = create;
Context.each = each;

module.exports = Context;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(15);
var win = window;
var doc = document;

(function () {
  if ( typeof win.CustomEvent === "function" ) return false;
  
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = doc.createEvent('CustomEvent');
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }
  
  CustomEvent.prototype = win.Event.prototype;
  win.CustomEvent = CustomEvent;
})();

module.exports = function(ctx) {
  var fn = ctx.fn;
  var create = util.create;
  var isHTML = util.isHTML;
  var isNode = util.isNode;
  var isElement = util.isElement;
  var isArrayLike = util.isArrayLike;
  var isNull = util.isNull;
  var matches = util.matches;
  var each = util.each;
  var async = util.async;
  var offset = util.offset;
  var computed = util.computed;
  var number = util.number;
  
  fn.ready = function(fn) {
    this.each(function() {
      if( this instanceof Document ) {
        if( this.body ) return fn.call(this, ctx(this));
        
        this.addEventListener('DOMContentLoaded', function() {
          fn.call(this, ctx(this));
        });
      }
    });
    return this;
  };
  
  fn.each = function(fn, force) {
    return each(this, fn, force);
  };
  
  fn.chunk = function(size) {
    return chunk(this, size);
  };
  
  fn.index = function(item) {
    return this.indexOf(item);
  };
  
  fn.add = function(arr) {
    if( !arr ) return;
    if( !isArrayLike(arr) ) arr = [arr];
    
    var self = this;
    [].forEach.call(arr, function(item) {
      if( item ) self.push(item);
    });
    return this;
  };
  
  fn.remove = function(item, once) {
    if( typeof item === 'number' ) item = this[item];
    for(var index;(index = this.indexOf(item)) >= 0;) {
      this.splice(index, 1);
      if( once ) break;
    }
    return this;
  };
  
  fn.reverse = function() {
    [].reverse.call(this);
    return this;
  };
  
  fn.clear = function() {
    var len = this.length;
    if( len > 0 ) {
      for(var i=0; i < len; i++) delete this[i];
      this.length = 0;
    }
    
    return this;
  };
  
  fn.get = function(index) {
    return this[index];
  };
  
  fn.find = function(selector) {
    var nodes = this.$();
    this.each(function() {
      if( !this.querySelectorAll ) return;
      [].forEach.call(this.querySelectorAll(selector), function(node) {
        if( !~nodes.indexOf(node) ) nodes.push(node);
      });
    });
    return nodes;
  };
  
  fn.empty = function() {
    return this.each(function() {
      this.innerHTML = '';
    });
  };
  
  fn.html = function(html) {
    if( !arguments.length ) return this[0] && this[0].innerHTML;
    
    return this.each(function() {
      this.innerHTML = html || '';
    });
  };
  
  fn.outer = function(html) {
    if( !arguments.length ) return this[0] && this[0].outerHTML;
    
    return this.each(function() {
      this.outerHTML = html || '';
    });
  };
  
  fn.text = function(text) {
    if( !arguments.length ) return (this[0] && (this[0].textContent || this[0].innerText)) || '';
    
    return this.each(function() {
      this.innerText = text || '';
    });
  };
  
  fn.attr = function(key, value) {
    if( !arguments.length ) return null;
    if( typeof key == 'object' ) {
      for(var k in key) this.attr(k, key[k]);
      return this;
    }
    if( arguments.length === 1 ) return this[0] && this[0].getAttribute && this[0].getAttribute(key);
    
    return this.each(function() {
      if( value === null || value === undefined ) this.removeAttribute(key);
      else this.setAttribute(key, value + '');
    });
  };
  
  fn.hasAttr = fn.ha = function(name) {
    return this[0] && this[0].hasAttribute(name);
  };
  
  fn.css = function(key, value) {
    if( !arguments.length ) return this;
    if( arguments.length === 1 ) {
      if( typeof key == 'string' ) return this[0] && this[0].style && this[0].style[key];
      for(var k in key) this.css(k, key[k]);
      return this;
    }
    
    return this.each(function() {
      if( isNull(value) ) this.style[key] = null;
      else this.style[key] = value;
    });
  };
  
  fn.addClass = fn.ac = function(cls) {
    if( typeof cls == 'string' ) cls = cls.split(' ');
    if( !isArrayLike(cls) || !cls.length ) return this;
    
    return this.each(function() {
      if( 'className' in this ) {
        var ocls = this.className.trim().split(' ');
        [].forEach.call(cls, function(cls) {
          if( isNull(cls) ) return;
          if( !~ocls.indexOf(cls) ) ocls.push(cls);
        });
        this.className = ocls.join(' ').trim();
      }
    });
  };
  
  fn.removeClass = fn.rc = function(cls) {
    if( typeof cls == 'string' ) cls = cls.split(' ');
    if( !isArrayLike(cls) || !cls.length ) return this;
    
    return this.each(function() {
      if( 'className' in this ) {
        var ocls = this.className.trim().split(' ');
        [].forEach.call(cls, function(cls) {
          if( isNull(cls) ) return;
          var pos = ocls.indexOf(cls);
          if( ~pos ) ocls.splice(pos, 1);
        });
        
        ocls = ocls.join(' ').trim();
        if( ocls ) this.className = ocls;
        else this.removeAttribute('class');
      }
    });
  };
  
  fn.clearClass = fn.cc = function() {
    return this.each(function() {
      if( 'className' in this ) {
        this.className = '';
        this.removeAttribute('class');
      }
    });
  };
  
  fn.classes = fn.cls = function(cls) {
    if( !arguments.length ) return this[0] && this[0].className;
    if( !cls ) return this.cc();
    
    return this.each(function() {
      if( 'className' in this ) {
        this.className = cls;
      }
    });
  };
  
  fn.hasClass = fn.hc = function(cls) {
    if( typeof cls == 'string' ) cls = cls.split(' ');
    if( !isArrayLike(cls) || !cls.length ) return false;
    if( !this[0] || !this[0].className ) return false;
    
    var ocls = this[0].className.trim().split(' ');
    var exists = true;
    [].forEach.call(cls, function(cls) {
      if( isNull(cls) ) return;
      if( !~ocls.indexOf(cls) ) exists = false;
    });
    return exists;
  };
  
  fn.toggleClass = fn.tc = function(cls, bool) {
    if( typeof cls == 'string' ) cls = cls.split(' ');
    if( !isArrayLike(cls) || !cls.length ) return this;
    if( arguments.length >= 2 ) {
      if( bool ) this.ac(cls);
      else this.rc(cls);
      return this;
    }
    
    return this.each(function() {
      if( 'className' in this ) {
        var ocls = this.className.trim().split(' ');
        [].forEach.call(cls, function(cls) {
          if( isNull(cls) ) return;
          var pos = ocls.indexOf(cls);
          if( !~pos ) ocls.push(cls);
          else ocls.splice(pos, 1);
        });
        this.className = ocls.join(' ').trim();
      }
    });
  };
  
  fn.append = function(node, index) {
    if( !node && typeof node != 'string' ) return this;
    
    return this.each(function(i) {
      if( !isElement(this) ) return;
      
      var el = this;
      var ref = this.children[index];
      
      if( typeof node == 'function' ) node = node.call(this, i);
      if( isHTML(node) ) node = create(node);
      if( !isArrayLike(node) ) node = [node];
      
      if( ref && el.insertBefore ) {
        [].forEach.call(node, function(node) {
          if( typeof node == 'string' ) node = doc.createTextNode(node);
          if( !isNode(node) ) return;
          el.insertBefore(node, ref);
          ref = node;
        });
      } else if( el.appendChild ) {
        [].forEach.call(node, function(node) {
          if( typeof node == 'string' ) node = doc.createTextNode(node);
          if( !isNode(node) ) return;
          el.appendChild(node);
        });
      }
    });
  };
  
  fn.appendTo = function(target, index) {
    if( target && typeof target === 'string' ) target = this.$(target);
    
    var $ = this.$;
    return this.each(function() {
      $(target).append(this, index);
    });
  };
  
  fn.insertBefore = function(ref) {
    if( typeof ref == 'string' ) ref = this.$(ref);
    if( !isNode(ref) ) return this;
    
    var parent = ref.parentNode;
    if( !parent ) return this;
    
    return this.each(function() {
      if( parent.insertBefore ) {
        parent.insertBefore(this, ref);
      }
    });
  };
  
  fn.insertAfter = function(ref) {
    if( typeof ref == 'string' ) ref = this.$(ref);
    if( !isNode(ref) ) return this;
    
    var parent = ref.parentNode;
    var sib = ref.nextSibling;
    if( !parent ) return this;
    
    return this.each(function() {
      if( !isNode(this) ) return;
      
      if( !sib ) {
        parent.appendChild(this);
      } else if( parent.insertBefore ) {
        parent.insertBefore(this, sib);
      }
    });
  };
  
  fn.before = function(node) {
    var $ = this.$;
    return this.each(function() {
      $(this).insertBefore(node);
    });
  };
  
  fn.after = function(node) {
    var $ = this.$;
    return this.each(function() {
      $(node).insertAfter(this);
    });
  };
  
  fn.remove = function(node) {
    if( !arguments.length ) return this.each(function() {
      var p = this.parentNode;
      p && p.removeChild(this);
    });
    
    if( !node ) return;
    if( !isArrayLike(node) ) node = [node];
    
    var $ = this.$;
    return this.each(function() {
      if( this.removeChild ) {
        var el = this;
        [].forEach.call(node, function(node) {
          if( typeof node == 'string' ) return $(el).find(node).remove();
          el.removeChild(node);
        });
      }
    });
  };
  
  fn.clone = function(deep) {
    deep = deep === false ? false : true;
    var arr = this.$();
    this.each(function() {
      if( !isNode(this) ) return;
      arr.push(this.cloneNode(deep));
    });
    return arr;
  };
  
  fn.on = function(type, fn, bubble) {
    if( typeof type !== 'string' || !fn ) return this;
    type = type.split(' ');
    
    return this.each(function(i, el) {
      el.addEventListener && type.forEach(function(type) {
        el.addEventListener(type, fn, bubble || false);
      });
    });
  };
  
  fn.once = function(type, fn, bubble) {
    var wrapper = function(e) {
      this.removeEventListener(type, wrapper, bubble || false);
      fn.call(this, e);
    };
    
    return this.on(type, wrapper, bubble);
  };
  
  fn.off = function(type, fn, bubble) {
    if( typeof type !== 'string' || !fn ) return this;
    type = type.split(' ');
    
    return this.each(function(i, el) {
      el.removeEventListener && type.forEach(function(type) {
        el.removeEventListener(type, fn, bubble || false);
      });
    });
  };
  
  fn.fire = function(type, detail, cancellable, bubbles) {
    if( !(type instanceof Event) ) {
      type = new CustomEvent(type, {
        detail: detail,
        bubbles: !!bubbles,
        cancelable: !!cancellable
      });
    }
    
    var passed = this.$();
    this.each(function(i,el) {
      if( !el.dispatchEvent ) return;
      if( el.dispatchEvent(type) ) passed.push(el);
    });
    
    return passed;
  };
  
  fn.click = function(fn) {
    var isclick;
    if( !arguments.length ) isclick = true;
    
    return this.each(function(i,el) {
      if( isElement(el) ) {
        if( isclick ) el.click();
        else el.onclick = fn;
      }
    });
  };
  
  fn.value = function(value) {
    if( !arguments.length ) return this[0].value;
    
    return this.each(function(i,el) {
      if( isNode(el) ) el.value = value;
    });
  };
  
  fn.data = function(key, value) {
    if( !arguments.length ) return this[0]._data;
    
    var data = {};
    if( key && typeof key == 'object' ) data = key;
    else if( key === false ) data = false;
    else if( typeof key != 'string' ) return this;
    else data[key] = value;
    
    return this.each(function(i, el) {
      if( !isNode(el) ) return;
      if( data === false ) {
        delete el._data;
        return;
      }
      
      el._data = el._data || {};
      for( var k in data ) {
        el._data[k] = data[k];
      }
    });
  };
  
  fn.invoke = function(fn) {
    if( typeof fn !== 'function' ) return this;
    return this.each(function(i) {
      fn(this._data, i);
    });
  };
  
  fn.is = function(selector) {
    return matches(this[0], selector);
  };
  
  fn.parent = function(selector) {
    var arr = this.$();
    this.each(function() {
      if( !selector ) return arr.push(this.parentNode);
      
      var p = this;
      do {
        if( matches(p, selector) ) {
          arr.push(p);
          break;
        }
      } while(p = p.parentNode)
    });
    return arr;
  };
  
  fn.children = function(selector) {
    var arr = this.$();
    this.each(function() {
      var children = this.children;
      if( selector ) {
        [].forEach.call(children, function(el) {
          matches(el, selector) && arr.push(el);
        });
      } else {
        arr.add(children);
      }
    });
    return arr;
  };
  
  fn.wrap = function(html) {
    var $ = this.$;
    return this.each(function(i) {
      if( !isNode(this) ) return;
      
      var wrapper = html;
      if( typeof wrapper == 'function' )
        wrapper = wrapper.call(this, i);
      
      if( isHTML(wrapper) )
        wrapper = create(wrapper)[0];
      
      if( !isElement(wrapper) ) return;
      
      var parent = this.parentNode;
      var ref = this.nextSibling;
      wrapper = $(wrapper).append(this);
      
      if( ref ) wrapper.insertBefore(ref);
      else wrapper.appendTo(parent);
    });
  };
  
  fn.unwrap = function(selector) {
    var $ = this.$;
    return this.each(function() {
      if( !isNode(this) ) return;
      
      var p = selector ? $(this).parent(selector)[0] : this.parentNode;
      if( !p ) return;
      if( !p.parentNode ) return p.removeChild(this);
      
      var ref = p.nextSibling;
      if( ref ) p.parentNode.insertBefore(this, ref);
      else p.parentNode.appendChild(this);
      
      if( !p.childNodes.length ) p.parentNode.removeChild(p);
    });
  };
  
  fn.normalize = function() {
    return this.each(function() {
      if( isElement(this) ) this.normalize();
    })
  };
  
  fn.filter = function(fn) {
    if( typeof fn == 'string' ) {
      var selector = fn;
      fn = function() {
        return matches(this, selector);
      };
    }
    
    if( isArrayLike(fn) ) {
      var arr = [].slice.call(fn);
      fn = function() {
        return ~arr.indexOf(this);
      };
    }
    
    if( typeof fn != 'function' ) return this;
    
    var arr = this.$();
    this.each(function() {
      fn.apply(this, arguments) && arr.push(this);
    });
    return arr;
  };
  
  fn.has = function(selector) {
    if( !selector ) return false;
    
    var contains = false;
    this.each(function() {
      if( typeof selector == 'string' && this.querySelector && this.querySelector(selector) ) {
        contains = true;
      } else if( this.contains(selector) ) {
        selector = true;
      }
      
      if( contains ) return true;
    });
    return !!contains;
  };
  
  fn.nodes = function() {
    var arr = this.$();
    this.each(function() {
      arr.add(this.childNodes);
    });
    return arr;
  };
  
  fn.src = function(src) {
    return this.each(function() {
      if( 'src' in this ) this.src = src;
    });
  };
  
  fn.position = function(fn) {
    return offset(this[0]);
  };
  
  fn.offset = function(fn) {
    if( !arguments.length ) return offset(this[0], true);
    
    if( typeof fn == 'function' ) return this.each(function(i) {
      fn.call(this, i, offset(this, true));
    });
    
    var top = number(fn.top);
    var left = number(fn.left);
    if( !top && !left ) return this;
    
    return this.each(function() {
      var el = this;
      if( el.style ) {
        var position = computed(el).position;
        if( !position || position == 'static' ) el.style.position = 'relative';
        if( top ) el.style.top = top + 'px';
        if( left ) el.style.left = left + 'px';
      }
    });
  };
  
  fn.show = function() {
    return this.each(function() {
      var el = this;
      if( el.style ) {
        el.style.display = '';
        var display = computed(el).display;
        if( !display || display == 'none' ) el.style.display = 'block';
      }
    });
  };
  
  fn.hide = function() {
    return this.each(function() {
      if( this.style ) {
        this.style.display = 'none';
      }
    });
  };
  
  fn.async = function(iterator, done) {
    return async(this, iterator, done);
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=ff.js.map