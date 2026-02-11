(self.webpackChunkdxcomponents=self.webpackChunkdxcomponents||[]).push([[88946],{"./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Configuration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/Configuration.js");const __WEBPACK_DEFAULT_EXPORT__=Component=>props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Configuration__WEBPACK_IMPORTED_MODULE_1__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...props})})},"./src/components/Pega_Extensions_ContextualAlert/create-nonce.ts":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{window?.__webpack_nonce__&&(__webpack_require__.nc=window.__webpack_nonce__)},"./src/components/Pega_Extensions_ContextualAlert/demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasePegaExtensionsContextualAlert:()=>BasePegaExtensionsContextualAlert,HtmlMessage:()=>HtmlMessage,InfoAlert:()=>InfoAlert,SuccessAlert:()=>SuccessAlert,UrgentAlert:()=>UrgentAlert,WarningAlert:()=>WarningAlert,__namedExportsOrder:()=>__namedExportsOrder,default:()=>demo_stories});const configProps_testId="ContextualAlert-12345678";var withConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js"),styled_components_browser_esm=(__webpack_require__("./src/components/Pega_Extensions_ContextualAlert/create-nonce.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const styles=styled_components_browser_esm.Ay.div(()=>styled_components_browser_esm.AH`
    margin: 8px 0;

    .contextual-alert {
      padding: 16px;
      position: relative;
      transition: all 0.3s ease;
    }

    .alert-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 8px;
    }

    .alert-icon {
      flex-shrink: 0;
      font-size: 18px;
      line-height: 1.2;
      margin-top: 2px;
    }

    .alert-title {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0;

      strong {
        font-weight: 600;
      }
    }



    .alert-body {
      margin-left: 30px;
    }

    .alert-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;

      &.html-content {
        p {
          margin: 0 0 8px 0;
          
          &:last-child {
            margin-bottom: 0;
          }
        }

        strong, b {
          font-weight: 600;
        }

        em, i {
          font-style: italic;
        }

        a {
          color: inherit;
          text-decoration: underline;
          
          &:hover {
            text-decoration: none;
          }
        }

        ul, ol {
          margin: 0 0 8px 0;
          padding-left: 20px;
        }
      }

      &.text-content {
        white-space: pre-wrap;
      }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .contextual-alert {
        padding: 12px;
      }

      .alert-header {
        gap: 10px;
      }

      .alert-body {
        margin-left: 28px;
      }

      .alert-title {
        font-size: 15px;
      }

      .alert-message {
        font-size: 13px;
      }
    }
  `),Attention_Icon_namespaceObject=__webpack_require__.p+"static/media/Attention_Icon.ebb63008.svg",Info_Icon_namespaceObject=__webpack_require__.p+"static/media/Info_Icon.85f9bb7e.svg",Reminder_Icon_namespaceObject=__webpack_require__.p+"static/media/Reminder_Icon.1540f358.svg",Speak_Icon_namespaceObject=__webpack_require__.p+"static/media/Speak_Icon.9caacd8b.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const alertConfig={urgent:{iconUrl:Attention_Icon_namespaceObject,className:"alert-urgent",textColor:"#dc2626",iconColor:"#dc2626"},info:{iconUrl:Info_Icon_namespaceObject,className:"alert-info",textColor:"#3b82f6",iconColor:"#3b82f6"},warning:{iconUrl:Reminder_Icon_namespaceObject,className:"alert-warning",textColor:"#f59e0b",iconColor:"#f59e0b"},success:{iconUrl:Speak_Icon_namespaceObject,className:"alert-success",textColor:"#10b981",iconColor:"#10b981"}},createIconComponent=(iconUrl,color,altText)=>(0,jsx_runtime.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:color,WebkitMask:`url(${iconUrl}) no-repeat center`,mask:`url(${iconUrl}) no-repeat center`,WebkitMaskSize:"contain",maskSize:"contain"},role:"img","aria-label":altText});function PegaExtensionsContextualAlert(props){const{type="info",title="Alert",message="",testId}=props,config=alertConfig[type]||alertConfig.info;return(0,jsx_runtime.jsx)(styles,{"data-testid":testId,children:(0,jsx_runtime.jsxs)("div",{className:`contextual-alert ${config.className}`,role:"alert","aria-live":"polite",children:[(0,jsx_runtime.jsxs)("div",{className:"alert-header",children:[(0,jsx_runtime.jsx)("div",{className:"alert-icon",children:createIconComponent(config.iconUrl,config.iconColor,type)}),(0,jsx_runtime.jsx)("div",{className:"alert-title",children:(0,jsx_runtime.jsx)("strong",{style:{color:config.textColor},children:title})})]}),message&&(0,jsx_runtime.jsx)("div",{className:"alert-body",children:(()=>{if(!message)return null;if(/<\/?[a-z][\s\S]*>/i.test(message)){const sanitizedHtml=(html=>{let sanitized=html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");return sanitized=sanitized.replace(/\son\w+="[^"]*"/gi,""),sanitized})(message);return(0,jsx_runtime.jsx)("div",{className:"alert-message html-content",style:{color:config.textColor},dangerouslySetInnerHTML:{__html:sanitizedHtml}})}return(0,jsx_runtime.jsx)("div",{className:"alert-message text-content",style:{color:config.textColor},children:message})})()})]})})}createIconComponent.displayName="createIconComponent",PegaExtensionsContextualAlert.displayName="PegaExtensionsContextualAlert";const Pega_Extensions_ContextualAlert=(0,withConfiguration.A)(PegaExtensionsContextualAlert);try{PegaExtensionsContextualAlert.displayName="PegaExtensionsContextualAlert",PegaExtensionsContextualAlert.__docgenInfo={description:"",displayName:"PegaExtensionsContextualAlert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"urgent"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},validatemessage:{defaultValue:null,description:"",name:"validatemessage",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"any"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},testId:{defaultValue:null,description:"",name:"testId",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!0,type:{name:"string"}},displayMode:{defaultValue:null,description:"",name:"displayMode",required:!1,type:{name:"string"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!0,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},fieldMetadata:{defaultValue:null,description:"",name:"fieldMetadata",required:!1,type:{name:"any"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"any"}},getPConnect:{defaultValue:null,description:"",name:"getPConnect",required:!0,type:{name:"() => C11nEnv"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pega_Extensions_ContextualAlert/index.tsx#PegaExtensionsContextualAlert"]={docgenInfo:PegaExtensionsContextualAlert.__docgenInfo,name:"PegaExtensionsContextualAlert",path:"src/components/Pega_Extensions_ContextualAlert/index.tsx#PegaExtensionsContextualAlert"})}catch(__react_docgen_typescript_loader_error){}const demo_stories={title:"PegaExtensionsContextualAlert",component:Pega_Extensions_ContextualAlert,excludeStories:/.*Data$/,argTypes:{type:{control:"select",options:["urgent","info","warning","success"],description:"Alert type determines the style and icon"},title:{control:"text",description:"Alert title text"},message:{control:"text",description:"Alert message - supports plain text or HTML"}}},InfoAlert={args:{type:"info",title:"Information",message:"This is an informational alert with some useful information.",testId:configProps_testId}},WarningAlert={args:{type:"warning",title:"Warning",message:"This is a warning alert. Please review the following information carefully.",testId:configProps_testId}},UrgentAlert={args:{type:"urgent",title:"Urgent Action Required",message:"This is an urgent alert that requires immediate attention.",testId:configProps_testId}},SuccessAlert={args:{type:"success",title:"Success",message:"Operation completed successfully! Your changes have been saved.",testId:configProps_testId}},HtmlMessage={args:{type:"info",title:"HTML Content",message:'This alert supports <strong>HTML content</strong> including <em>emphasis</em> and <a href="#">links</a>.',testId:configProps_testId}},BasePegaExtensionsContextualAlert=InfoAlert;InfoAlert.parameters={...InfoAlert.parameters,docs:{...InfoAlert.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'info',\n    title: 'Information',\n    message: 'This is an informational alert with some useful information.',\n    testId: configProps.testId\n  }\n}",...InfoAlert.parameters?.docs?.source}}},WarningAlert.parameters={...WarningAlert.parameters,docs:{...WarningAlert.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'warning',\n    title: 'Warning',\n    message: 'This is a warning alert. Please review the following information carefully.',\n    testId: configProps.testId\n  }\n}",...WarningAlert.parameters?.docs?.source}}},UrgentAlert.parameters={...UrgentAlert.parameters,docs:{...UrgentAlert.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'urgent',\n    title: 'Urgent Action Required',\n    message: 'This is an urgent alert that requires immediate attention.',\n    testId: configProps.testId\n  }\n}",...UrgentAlert.parameters?.docs?.source}}},SuccessAlert.parameters={...SuccessAlert.parameters,docs:{...SuccessAlert.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'success',\n    title: 'Success',\n    message: 'Operation completed successfully! Your changes have been saved.',\n    testId: configProps.testId\n  }\n}",...SuccessAlert.parameters?.docs?.source}}},HtmlMessage.parameters={...HtmlMessage.parameters,docs:{...HtmlMessage.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'info',\n    title: 'HTML Content',\n    message: 'This alert supports <strong>HTML content</strong> including <em>emphasis</em> and <a href=\"#\">links</a>.',\n    testId: configProps.testId\n  }\n}",...HtmlMessage.parameters?.docs?.source}}},BasePegaExtensionsContextualAlert.parameters={...BasePegaExtensionsContextualAlert.parameters,docs:{...BasePegaExtensionsContextualAlert.parameters?.docs,source:{originalSource:"InfoAlert",...BasePegaExtensionsContextualAlert.parameters?.docs?.source}}};const __namedExportsOrder=["InfoAlert","WarningAlert","UrgentAlert","SuccessAlert","HtmlMessage","BasePegaExtensionsContextualAlert"]}}]);