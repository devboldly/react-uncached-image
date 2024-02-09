/*! For license information please see stories-UncachedImage-stories-mdx.81e8dc84.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_uncached_image=self.webpackChunkreact_uncached_image||[]).push([[284],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/UncachedImage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_react_uncached_image_react_uncached_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_components_UncachedImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/UncachedImage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",hr:"hr"},(0,_home_runner_work_react_uncached_image_react_uncached_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Qb,{title:"Docs/UncachedImage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"UncachedImage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["An UncachedImage adds a cache-busting query param to your image ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"src"})," to ensure the browser requests the image from the server on every render."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import { UncachedImage } from 'react-uncached-image';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Use just like you would a normal ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," tag in React:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<UncachedImage src="https://loremflickr.com/320/240" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_UncachedImage__WEBPACK_IMPORTED_MODULE_2__.q,{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Pass the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"src"})," for the image, as well as any other ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," props you'd like. The image will automatically include a query param that's used to bust the cache."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The service used to get this image, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://loremflickr.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"loremflickr.com"}),", returns a different image on every request. Because cache busting is being used, the image is not cached and is likely different on every render."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.td,{children:"cacheBuster"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"})," | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"undefined"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.td,{children:"Optional. You can provide your own cache buster, which will be URI encoded and added as a query parameter. If you make this constant, cache-busting will effectively be disabled. When not specified, one is generated automatically."})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["This component supports ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.strong,{children:["all ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," props"]}),", such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"alt"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"className"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"style"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ref"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"onClick"}),". It renders as an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The following example shows three regular ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"img"})," elements, and three ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"UncachedImage"})," components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The image source for all six images is the same: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"https://loremflickr.com/320/240"}),". This service returns a different image on every request."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The first three are likely the same, while the three uncached images will likely all be different."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"These three images share the same source. They've been cached by your browser and likely repeat three times."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["These use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"<UncachedImage/>"}),", which uses client-side cache busting. They've all incurred a trip to the\nserver and are likely all different."]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_UncachedImage__WEBPACK_IMPORTED_MODULE_2__.q,{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_UncachedImage__WEBPACK_IMPORTED_MODULE_2__.q,{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_UncachedImage__WEBPACK_IMPORTED_MODULE_2__.q,{src:"https://loremflickr.com/320/240"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'<p>These three images share the same source. They\'ve been cached by your browser and likely repeat three times.</p>\n<img src="https://loremflickr.com/320/240" />\n<img src="https://loremflickr.com/320/240" />\n<img src="https://loremflickr.com/320/240" />\n<p>\n  These use <code>{`<UncachedImage/>`}</code>, which uses client-side cache busting. They\'ve all incurred a trip to\n  the server and are likely all different.\n</p>\n<UncachedImage src="https://loremflickr.com/320/240" />\n<UncachedImage src="https://loremflickr.com/320/240" />\n<UncachedImage src="https://loremflickr.com/320/240" />\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/UncachedImage",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_uncached_image_react_uncached_image_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./src/components/UncachedImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>UncachedImage});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UncachedImage(_ref){let{cacheBuster,...imgProps}=_ref,src=imgProps.src;if("string"==typeof src){cacheBuster=cacheBuster??randChars(10);const paramSymbol=src.indexOf("?")>=0?"&":"?";src=`${src}${paramSymbol}${encodeURIComponent(cacheBuster)}`}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{...imgProps,src,alt:imgProps.alt})}UncachedImage.displayName="UncachedImage";const randChars=length=>{let result="";const characters="abcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<length;i++)result+=characters.charAt(Math.floor(36*Math.random()));return result};try{UncachedImage.displayName="UncachedImage",UncachedImage.__docgenInfo={description:"See documentation: [UncachedImage](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page)\n\nAn UncachedImage adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.",displayName:"UncachedImage",props:{cacheBuster:{defaultValue:null,description:"Optional. You can provide your own cache buster, which will be URI encoded and added as a query parameter. If you make this constant, cache-busting will effectively be disabled. When not specified, one is generated automatically.",name:"cacheBuster",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UncachedImage.tsx#UncachedImage"]={docgenInfo:UncachedImage.__docgenInfo,name:"UncachedImage",path:"src/components/UncachedImage.tsx#UncachedImage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);