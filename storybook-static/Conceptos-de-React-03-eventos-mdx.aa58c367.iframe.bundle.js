"use strict";(self.webpackChunkstorybook_docu=self.webpackChunkstorybook_docu||[]).push([[650],{"./src/Conceptos de React/03-eventos.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components-mdx/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"manejo-de-eventos",children:"Manejo de Eventos"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En React, el manejo de eventos es fundamental para crear aplicaciones interactivas y dinámicas. Los eventos en React son similares a los eventos en JavaScript estándar,\r\npero hay algunas diferencias clave, especialmente en la forma en que se nombran y se manejan."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ejemplo: Manejo de clicks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Vamos a crear un componente simple de botón en React que responda a un click del usuario."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n    import React, { useState } from 'react';\n\n    const ButtonClick = ( ) => {\n    const [message, setMessage] = useState('¡Haz clic en el botón!');\n\n    const handleClick = ( ) => {\n        setMessage('¡Se hizo clic en el botón!');\n    };\n\n    return (\n        <div>\n        <button onClick={handleClick}>Haz clic</button>\n        <p>{message}</p>\n        </div>\n    );\n    };\n\n    export default ButtonClick;\n  ",language:"javascript",sandboxUrl:"https://codesandbox.io/s/evento-click-qzswlr",showButtons:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En este ejemplo, hemos creado un componente funcional ButtonClick que renderiza un botón y un párrafo.\r\nHemos definido una función handleClick que actualiza el estado del mensaje(message) cuando se hace click en el botón. La prop onClick del botón está configurada para llamar\r\na esta función."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Ejemplo con formulario:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Otro caso común es manejar eventos cuando se trabaja con formularios."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n    import React, { useState } from 'react';\n\n    const ControlledForm = () => {\n    const [inputValue, setInputValue] = useState('');\n\n    const handleChange = (event) => {\n        setInputValue(event.target.value);\n    };\n\n    return (\n        <div>\n        <input\n            type=\"text\"\n            value={inputValue}\n            onChange={handleChange}\n            placeholder=\"Escribe algo\"\n        />\n        <p>{inputValue}</p>\n        </div>\n    );\n    };\n\n    export default ControlledForm;  \n  ",language:"javascript",sandboxUrl:"https://codesandbox.io/s/evento-formulario-y88pyz",showButtons:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'En este ejemplo, el componente "ControlledForm" contiene un campo de entrada (input). La función "handleChange" se ejecuta cada vez que el usuario escribe algo en el campo\r\nde entrada, actualizando el estado "inputValue" con el nuevo valor del campo.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Estos son solo ejemplos simples pero muestran cómo React utiliza eventos para manejar interacciones del usuario.\r\nPodemos aplicar conceptos similares a otros eventos, como onMouseOver, onSubmit, etc., dependiendo de los requisitos de tu aplicación.\r\nEl enfoque declarativo de React hace que el manejo de eventos sea más fácil de entender y mantener."})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components-mdx/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return components_mdx_Button},dn:function(){return components_mdx_CodeBlock},w2:function(){return components_mdx_CodeSandboxLink}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToggleComponent=function ToggleComponent(_ref){var title=_ref.title,_ref$level=_ref.level,level=void 0===_ref$level?"h1":_ref$level,children=_ref.children,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],Heading=level;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading,{onClick:function toggle(){setIsOpen(!isOpen)},style:{cursor:"pointer"},children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{children:children})]})};ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent",props:{level:{defaultValue:{value:'"h1"',computed:!1},required:!1}}};var prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),material_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js"),lib=__webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js"),CodeBlock=function CodeBlock(_ref){var codeString=_ref.codeString,language=_ref.language,sandboxUrl=_ref.sandboxUrl,showButtons=_ref.showButtons,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyButtonLabel=copied?"Copied":"Copy",primary=!!copied,copyButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:primary,label:copyButtonLabel,size:"small"});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(prism.Z,{language:language||"javascript",style:material_dark.Z,children:codeString}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[showButtons&&(0,jsx_runtime.jsx)(components_mdx_CodeSandboxLink,{url:sandboxUrl}),(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:codeString,onCopy:function handleCopy(){setCopied(!0),setTimeout((function(){return setCopied(!1)}),2e3)},children:copyButton})]})]})};CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};var components_mdx_CodeBlock=CodeBlock,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var components_mdx_Button=Button,CodeSandboxLink=function CodeSandboxLink(_ref){var url=_ref.url,codeSandboxButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:!1,label:"Ver en CodeSandbox",size:"small"});return(0,jsx_runtime.jsx)("span",{onClick:function redirectToCodeSandbox(){window.open(url,"_blank")},style:{cursor:"pointer",marginRight:"8px"},children:codeSandboxButton})};CodeSandboxLink.__docgenInfo={description:"",methods:[],displayName:"CodeSandboxLink"};var components_mdx_CodeSandboxLink=CodeSandboxLink}}]);