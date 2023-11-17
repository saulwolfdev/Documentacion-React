"use strict";(self.webpackChunkstorybook_docu=self.webpackChunkstorybook_docu||[]).push([[555],{"./src/Conceptos de Javascript/02-variables .mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components-mdx/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2"},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"variables-en-react-y-javascript-moderno-let-y-const",children:"Variables en React y JavaScript Moderno (Let y Const)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Antes que nada cabe mencionar que las variables se declaraban anteriormente con ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"var"})," la razón por la que ya no se recomienda usar la palabra clave ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"var"})," en React (y en JavaScript en general) se debe a la introducción de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"let y const"})," en ECMAScript 6 (ES6)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"let y const"})," tienen un alcance de bloque más estricto en comparación con ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"var"}),", lo que significa que solo están disponibles dentro del bloque donde se declaran (por ejemplo, dentro de una función o un bucle). Por otro lado, var tiene un alcance de función o global, lo que puede llevar a errores difíciles de depurar y a problemas de legibilidad en el código."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["En React, se recomienda el uso de ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"const"})," para declarar variables que no van a ser reasignadas, y ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"let"})," para aquellas que sí pueden cambiar de valor. Esto ayuda a evitar errores sutiles y a escribir código más claro y predecible."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"let",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"let:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"let es una palabra clave introducida en ECMAScript 6 (también conocido como ES6 o ECMAScript 2015) que permite declarar variables con alcance de bloque. Como se menciono anteriormente se pueden declarar variables con let para aquellas variables que pueden cambiar su valor."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Sintaxis:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"let variable = valor;",language:"javascript",sandboxUrl:"https://codesandbox.io/s/inspiring-bartik-pjrl9h",showButtons:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ejemplo:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  let x = 10;\n\n  if (true) {\n    let x = 20;\n    console.log(x); // 20\n  }\n\n  console.log(x); // 10\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En este ejemplo, la variable x declarada dentro del bloque if tiene un alcance limitado a ese bloque, mientras que la variable x declarada fuera del bloque if tiene un alcance global al script."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"const",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"const:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"const es otra palabra clave introducida en ECMAScript 6. Al igual que let, permite declarar variables con alcance de bloque, pero a diferencia de let, las variables declaradas con const no pueden ser reasignadas después de su inicialización. Sin embargo, esto no significa que el valor es inmutable, solo que la variable no puede apuntar a otro valor."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Sintaxis:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"const variable = valor;",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ejemplo:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const PI = 3.14;\n  PI = 42; // Error: No puedes reasignar una constante\n\n  const array = [1, 2, 3];\n  array.push(4); // Esto es válido, porque no estamos reasignando 'array' pero no lo ideal ya que estariamos mutando el array original\n\n  const newArray = [...array, 4]; //lo ideal seria utilizar el spread operator para evitar mutar el arreglo original.\n\n  console.log(newArray); // Output: [1, 2, 3, 4] \n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En este ejemplo, PI no puede ser reasignada después de su inicialización. Sin embargo, el arreglo array puede ser modificado, aunque no puede apuntar a otro arreglo."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Es importante notar que cuando usas const con objetos o arreglos, el valor al que apunta (la referencia) no puede ser cambiado, pero los valores internos del objeto o arreglo sí pueden ser modificados."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resumen",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Resumen:"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"let se utiliza para declarar variables con alcance de bloque que pueden ser reasignadas.\r\nconst se utiliza para declarar constantes con alcance de bloque, cuyos valores no pueden ser reasignados después de la inicialización, aunque sus propiedades o elementos internos pueden ser modificados."})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components-mdx/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return components_mdx_Button},dn:function(){return components_mdx_CodeBlock},w2:function(){return components_mdx_CodeSandboxLink}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToggleComponent=function ToggleComponent(_ref){var title=_ref.title,_ref$level=_ref.level,level=void 0===_ref$level?"h1":_ref$level,children=_ref.children,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],Heading=level;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading,{onClick:function toggle(){setIsOpen(!isOpen)},style:{cursor:"pointer"},children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{children:children})]})};ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent",props:{level:{defaultValue:{value:'"h1"',computed:!1},required:!1}}};var prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),material_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js"),lib=__webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js"),CodeBlock=function CodeBlock(_ref){var codeString=_ref.codeString,language=_ref.language,sandboxUrl=_ref.sandboxUrl,showButtons=_ref.showButtons,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyButtonLabel=copied?"Copied":"Copy",primary=!!copied,copyButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:primary,label:copyButtonLabel,size:"small"});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(prism.Z,{language:language||"javascript",style:material_dark.Z,children:codeString}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[showButtons&&(0,jsx_runtime.jsx)(components_mdx_CodeSandboxLink,{url:sandboxUrl}),(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:codeString,onCopy:function handleCopy(){setCopied(!0),setTimeout((function(){return setCopied(!1)}),2e3)},children:copyButton})]})]})};CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};var components_mdx_CodeBlock=CodeBlock,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var components_mdx_Button=Button,CodeSandboxLink=function CodeSandboxLink(_ref){var url=_ref.url,codeSandboxButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:!1,label:"Ver en CodeSandbox",size:"small"});return(0,jsx_runtime.jsx)("span",{onClick:function redirectToCodeSandbox(){window.open(url,"_blank")},style:{cursor:"pointer",marginRight:"8px"},children:codeSandboxButton})};CodeSandboxLink.__docgenInfo={description:"",methods:[],displayName:"CodeSandboxLink"};var components_mdx_CodeSandboxLink=CodeSandboxLink}}]);