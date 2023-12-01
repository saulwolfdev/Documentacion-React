"use strict";(self.webpackChunkstorybook_docu=self.webpackChunkstorybook_docu||[]).push([[898],{"./src/Conceptos de Javascript/15-promesas.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components-mdx/index.js");__webpack_require__("./src/styles.css");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",h3:"h3",h4:"h4"},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"promesas-promises",children:"Promesas (Promises)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En JavaScript una promesa es un objeto que representa el resultado eventual (éxito o fallo) de una operación asíncrona.\r\nLas promesas son utilizadas para manejar operaciones asíncronas de una manera más clara y evitar los problemas asociados con los callbacks anidados."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Una promesa puede estar en uno de los tres estados:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Pending (Pendiente):"})," Estado inicial, la promesa está pendiente de resolverse o rechazarse."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Fulfilled (Cumplida):"})," La operación se completó con éxito, y la promesa tiene un valor resultante."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Rejected (Rechazada):"})," La operación falló, y la promesa tiene un motivo de rechazo."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n    // Creación de una promesa\n    const myPromise = new Promise((resolve, reject) => {\n    // Simulación de una operación asíncrona\n    setTimeout(() => {\n        const success = true; // Cambiar a false para simular un fallo\n\n        if (success) {\n        resolve('¡La operación fue exitosa!');\n        } else {\n        reject('¡La operación falló!');\n        }\n    }, 2000); // Simula una operación que tarda 2 segundos\n    });\n\n    // Uso de la promesa con then y catch\n    myPromise\n    .then((result) => {\n        console.log('Éxito:', result);\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"en-este-ejemplo",children:"En este ejemplo:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se crea una nueva promesa ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"myPromise"})," que simula una operación asíncrona usando setTimeout."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Dentro de la promesa se resuelve ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"resolve"})," o rechaza ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"reject"})," la promesa según el resultado de la operación."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se utiliza el método ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:".then()"})," para manejar el caso en que la promesa se resuelve con éxito."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se utiliza el método ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:".catch()"})," para manejar el caso en que la promesa es rechazada."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tips",children:"Tips"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"manejo-de-errores",children:"Manejo de Errores"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Siempre maneja los errores en las cadenas de promesas. Usa ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"catch"})," al final de la cadena para capturar cualquier error que ocurra en cualquier parte de la cadena."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  miPromesa()\n    .then(resultado => console.log(resultado))\n    .catch(error => console.error(error));\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"evitar-promesas-sin-retorno",children:"Evitar Promesas sin Retorno"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Asegúrate de que tus funciones de promesa devuelvan un valor o resuelvan con algún resultado. Olvidar hacerlo puede llevar a problemas difíciles de depurar."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  // Incorrecto\n  const promesaSinRetorno = () => new Promise(resolve => resolve());\n\n  // Correcto\n  const promesaConRetorno = () => new Promise(resolve => resolve('¡Éxito!'));\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"uso-de-promiseall",children:"Uso de Promise.all"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Tip: Utiliza ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Promise.all"})," para manejar múltiples promesas concurrentes. Esto asegura que todas las promesas se completen antes de continuar."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  const promesas = [promesa1(), promesa2(), promesa3()];\n\n  Promise.all(promesas)\n    .then(resultados => console.log(resultados))\n    .catch(error => console.error(error));\n  ",language:"javascript"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"asyncawait",children:"Async/Await"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Usa ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"async/await"})," para escribir código asincrónico de manera más sincrónica y legible."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_mdx_index_js__WEBPACK_IMPORTED_MODULE_2__.dn,{codeString:"\n  async function miFuncionAsincrona() {\n    try {\n      const resultado = await miPromesa();\n      console.log(resultado);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n  ",language:"javascript"})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_dev_Documentacion_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components-mdx/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return components_mdx_Button},dn:function(){return components_mdx_CodeBlock},w2:function(){return components_mdx_CodeSandboxLink}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToggleComponent=function ToggleComponent(_ref){var title=_ref.title,_ref$level=_ref.level,level=void 0===_ref$level?"h1":_ref$level,children=_ref.children,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],Heading=level;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Heading,{onClick:function toggle(){setIsOpen(!isOpen)},style:{cursor:"pointer"},children:title}),isOpen&&(0,jsx_runtime.jsx)("div",{children:children})]})};ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent",props:{level:{defaultValue:{value:'"h1"',computed:!1},required:!1}}};var prism=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/prism.js"),material_dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js"),lib=__webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js"),CodeBlock=function CodeBlock(_ref){var codeString=_ref.codeString,language=_ref.language,sandboxUrl=_ref.sandboxUrl,showButtons=_ref.showButtons,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyButtonLabel=copied?"Copied":"Copy",primary=!!copied,copyButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:primary,label:copyButtonLabel,size:"small"});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(prism.Z,{language:language||"javascript",style:material_dark.Z,children:codeString}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[showButtons&&(0,jsx_runtime.jsx)(components_mdx_CodeSandboxLink,{url:sandboxUrl}),(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:codeString,onCopy:function handleCopy(){setCopied(!0),setTimeout((function(){return setCopied(!1)}),2e3)},children:copyButton})]})]})};CodeBlock.__docgenInfo={description:"",methods:[],displayName:"CodeBlock"};var components_mdx_CodeBlock=CodeBlock,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var components_mdx_Button=Button,CodeSandboxLink=function CodeSandboxLink(_ref){var url=_ref.url,codeSandboxButton=(0,jsx_runtime.jsx)(components_mdx_Button,{primary:!1,label:"Ver en CodeSandbox",size:"small"});return(0,jsx_runtime.jsx)("span",{onClick:function redirectToCodeSandbox(){window.open(url,"_blank")},style:{cursor:"pointer",marginRight:"8px"},children:codeSandboxButton})};CodeSandboxLink.__docgenInfo={description:"",methods:[],displayName:"CodeSandboxLink"};var components_mdx_CodeSandboxLink=CodeSandboxLink},"./src/styles.css":function(){}}]);