"use strict";(self.webpackChunkstorybook_docu=self.webpackChunkstorybook_docu||[]).push([[11],{"./src/Conceptos de React/09-metodos.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components-mdx/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong"},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"métodos-para-strings-y-arrays",children:"Métodos para Strings y Arrays"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En React, como en JavaScript en general, se puede utilizar métodos para manipular strings o arrays."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"métodos-para-strings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Métodos para Strings:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"1. str.length"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Retorna la longitud de una cadena de texto.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:'\n  const str = "Hola Mundo";\n    const length = str.length; // 10\n  ',language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"2. str.toLowerCase(), str.toUpperCase()"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Convierte una cadena de texto a minúsculas o mayúsculas respectivamente.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:'\n  const str = "Hola Mundo";\n  const lowerCase = str.toLowerCase( ); // "hola mundo"\n  const upperCase = str.toUpperCase( ); // "HOLA MUNDO"\n  ',language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"3. str.trim()"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Elimina los espacios en blanco al principio y al final de una cadena de texto.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:'\n  const str = "    Hola Mundo    ";\n  const trimmed = str.trim( ); // "Hola Mundo"\n  ',language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"4. str.split(separator)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Divide una cadena de texto en un array de substrings basado en un separador.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:'\n  const str = "Hola,Mundo";\n  const parts = str.split(","); // ["Hola", "Mundo"]\n  ',language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"5. str.includes(substring)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Verifica si una cadena de texto contiene un substring especificado.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:'\n  const str = "Hola Mundo";\n  const containsHello = str.includes("Hola"); // true\n  ',language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"métodos-para-arrays",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Métodos para Arrays:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"1. arr.length"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Retorna la cantidad de elementos en un array.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const arr = [1, 2, 3, 4];\n  const length = arr.length; // 4\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"2. arr.push(element)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Añade un elemento al final del array.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const arr = [1, 2, 3];\n  arr.push(4); // arr ahora es [1, 2, 3, 4]\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"3. arr.pop()"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Elimina el último elemento del array y lo retorna.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const arr = [1, 2, 3, 4];\n  const lastElement = arr.pop( ); // lastElement = 4, arr = [1, 2, 3]\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"4. arr.map(callback)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Crea un nuevo array aplicando una función a cada elemento del array original.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const arr = [1, 2, 3];\n  const mappedArr = arr.map(item => item * 2); // [2, 4, 6]\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"5. arr.filter(callback)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Descripción: Crea un nuevo array con todos los elementos que pasen una condición.\r\nUso:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const arr = [1, 2, 3, 4, 5];\n  const filteredArr = arr.filter(item => item % 2 === 0); // [2, 4]\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Estos son algunos métodos que son nativos de JavaScript y se pueden utilizar en cualquier proyecto de React. Para utilizarlos en tu aplicación simplemente accede a las propiedades y métodos de los strings y arrays como se haria en JavaScript estándar."})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components-mdx/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return components_mdx_Button},dn:function(){return components_mdx_CodeBlock}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToggleComponent=function ToggleComponent(_ref){var title=_ref.title,_ref$level=_ref.level,level=void 0===_ref$level?"h1":_ref$level,children=_ref.children,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],Heading=level;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading,{onClick:function toggle(){setIsOpen(!isOpen)},style:{cursor:"pointer"},children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{children:children})]})};ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent",props:{level:{defaultValue:{value:'"h1"',computed:!1},required:!1}}};var prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),material_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js"),lib=__webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js"),CodeBlock=function CodeBlock(_ref){var codeString=_ref.codeString,language=_ref.language,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyButtonLabel=copied?"Copied":"Copy",primary=!!copied,copyButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:primary,label:copyButtonLabel,size:"small"});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(prism.Z,{language:language||"javascript",style:material_dark.Z,children:codeString}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:codeString,onCopy:function handleCopy(){setCopied(!0),setTimeout((function(){return setCopied(!1)}),2e3)},children:copyButton})})]})};CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};var components_mdx_CodeBlock=CodeBlock,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var components_mdx_Button=Button}}]);