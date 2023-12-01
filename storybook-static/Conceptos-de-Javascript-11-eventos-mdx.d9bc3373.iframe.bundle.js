"use strict";(self.webpackChunkstorybook_docu=self.webpackChunkstorybook_docu||[]).push([[592],{"./src/Conceptos de Javascript/11-eventos.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components-mdx/index.js");__webpack_require__("./src/styles.css");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong"},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"eventos",children:"Eventos"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En JavaScript un evento es cualquier cosa que sucede en el navegador. Puede ser una interacción del usuario como hacer clic en un botón, cargar una página o incluso el cambio\r\nen el tamaño de la ventana."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Eventos con el Mouse:"})," Los eventos del mouse incluyen acciones como hacer click, mover el mouse, soltar el mouse, etc."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Ejemplo de clic con el mouse\n  document.getElementById('miBoton').addEventListener('click', function() {\n    alert('¡Haz hecho clic!');\n  });\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Eventos sobre los Inputs:"})," Estos eventos están relacionados con la interacción del usuario con elementos de entrada como campos de texto."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Ejemplo de evento al escribir en un campo de texto\n  document.getElementById('miInput').addEventListener('input', function() {\n    console.log('Texto cambiado:', this.value);\n  });\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Evento Submit a un formulario:"})," El evento submit se activa cuando un formulario se envía."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Ejemplo de evento de envío de formulario\n  document.getElementById('miFormulario').addEventListener('submit', function(event) {\n    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada\n    alert('Formulario enviado');\n  });\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Event Bubbling:"})," El Event Bubbling es el proceso por el cual un evento se propaga desde el elemento objetivo hacia arriba en la jerarquía del DOM."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Ejemplo de event bubbling\n  document.getElementById('padre').addEventListener('click', function() {\n    alert('Padre hizo clic');\n  });\n\n  document.getElementById('hijo').addEventListener('click', function() {\n    alert('Hijo hizo clic');\n  });\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Cuando haces clic en el elemento con id 'hijo' el navegador primero activa el evento asociado a 'hijo' y luego propaga el evento hacia arriba en la jerarquía del DOM\r\nactivando también el evento asociado a 'padre'. Esto es el Event Bubbling."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Prevenir Event Bubbling con un método:"})," Se puede usar stopPropagation() para detener el Event Bubbling."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Ejemplo de prevención de event bubbling con stopPropagation\n  document.getElementById('hijo').addEventListener('click', function(event) {\n    event.stopPropagation(); // Evita que el evento se propague hacia arriba\n    alert('Hijo hizo clic');\n  });\n  ",language:"javascript"})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components-mdx/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return components_mdx_Button},dn:function(){return components_mdx_CodeBlock},w2:function(){return components_mdx_CodeSandboxLink}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToggleComponent=function ToggleComponent(_ref){var title=_ref.title,_ref$level=_ref.level,level=void 0===_ref$level?"h1":_ref$level,children=_ref.children,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],Heading=level;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading,{onClick:function toggle(){setIsOpen(!isOpen)},style:{cursor:"pointer"},children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{children:children})]})};ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent",props:{level:{defaultValue:{value:'"h1"',computed:!1},required:!1}}};var prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),material_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js"),lib=__webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js"),CodeBlock=function CodeBlock(_ref){var codeString=_ref.codeString,language=_ref.language,sandboxUrl=_ref.sandboxUrl,showButtons=_ref.showButtons,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyButtonLabel=copied?"Copied":"Copy",primary=!!copied,copyButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:primary,label:copyButtonLabel,size:"small"});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(prism.Z,{language:language||"javascript",style:material_dark.Z,children:codeString}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[showButtons&&(0,jsx_runtime.jsx)(components_mdx_CodeSandboxLink,{url:sandboxUrl}),(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:codeString,onCopy:function handleCopy(){setCopied(!0),setTimeout((function(){return setCopied(!1)}),2e3)},children:copyButton})]})]})};CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};var components_mdx_CodeBlock=CodeBlock,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var components_mdx_Button=Button,CodeSandboxLink=function CodeSandboxLink(_ref){var url=_ref.url,codeSandboxButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:!1,label:"Ver en CodeSandbox",size:"small"});return(0,jsx_runtime.jsx)("span",{onClick:function redirectToCodeSandbox(){window.open(url,"_blank")},style:{cursor:"pointer",marginRight:"8px"},children:codeSandboxButton})};CodeSandboxLink.__docgenInfo={description:"",methods:[],displayName:"CodeSandboxLink"};var components_mdx_CodeSandboxLink=CodeSandboxLink},"./src/styles.css":function(){}}]);