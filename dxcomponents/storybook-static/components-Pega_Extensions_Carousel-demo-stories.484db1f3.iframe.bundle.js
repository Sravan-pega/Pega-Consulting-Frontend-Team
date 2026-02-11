(self.webpackChunkdxcomponents=self.webpackChunkdxcomponents||[]).push([[60065],{"./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Configuration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/Configuration.js");const __WEBPACK_DEFAULT_EXPORT__=Component=>props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Configuration__WEBPACK_IMPORTED_MODULE_1__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...props})})},"./src/components/Pega_Extensions_Carousel/create-nonce.ts":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{window?.__webpack_nonce__&&(__webpack_require__.nc=window.__webpack_nonce__)},"./src/components/Pega_Extensions_Carousel/demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoPlayDisabled:()=>AutoPlayDisabled,CommaSeparatedUrls:()=>CommaSeparatedUrls,DefaultCarousel:()=>DefaultCarousel,DefaultImagesWhenEmpty:()=>DefaultImagesWhenEmpty,FastAutoPlay:()=>FastAutoPlay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>demo_stories});var react=__webpack_require__("./node_modules/react/index.js");const stateProps={value:".CarouselImages"};var withConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js"),styled_components_browser_esm=(__webpack_require__("./src/components/Pega_Extensions_Carousel/create-nonce.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const styles=styled_components_browser_esm.Ay.div(()=>styled_components_browser_esm.AH`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background: #fff;
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }

    .carousel-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-slide {
      min-width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
      
      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus {
        outline: 3px solid #007bff;
        outline-offset: 2px;
        background: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus-visible {
        outline: 3px solid #007bff;
        outline-offset: 2px;
      }

      &.prev {
        left: 15px;
      }

      &.next {
        right: 15px;
      }
    }

    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.2);
      }

      &.active {
        background: white;
        transform: scale(1.3);
      }

      &:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.2);
      }

      &:focus-visible {
        outline: 2px solid #007bff;
        outline-offset: 2px;
      }
    }

    /* Focus styles for the main carousel container */
    &:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .carousel-container {
        max-width: 100%;
      }

      .carousel-wrapper {
        height: 250px;
      }

      .carousel-control {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }

      .carousel-control.prev {
        left: 10px;
      }

      .carousel-control.next {
        right: 10px;
      }

      .indicator {
        width: 10px;
        height: 10px;
      }
    }

    @media (max-width: 480px) {
      .carousel-wrapper {
        height: 200px;
      }

      .carousel-control {
        width: 35px;
        height: 35px;
        font-size: 18px;
      }

      .carousel-indicators {
        bottom: 15px;
      }
    }
  `);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultImages=["https://picsum.photos/800/400?random=1","https://picsum.photos/800/400?random=2","https://picsum.photos/800/400?random=3","https://picsum.photos/800/400?random=4","https://picsum.photos/800/400?random=5"];function PegaExtensionsCarousel(props){const{images,testId,autoPlay=!0,interval=5e3}=props;let carouselImages=defaultImages,isUsingDefaultImages=!0;if(images&&"string"==typeof images&&""!==images.trim()){const urlsFromValue=images.split(",").map(url=>url.trim()).filter(url=>url.length>0);urlsFromValue.length>0&&(carouselImages=urlsFromValue,isUsingDefaultImages=!1)}const[currentIndex,setCurrentIndex]=(0,react.useState)(0),[isHovered,setIsHovered]=(0,react.useState)(!1),intervalRef=(0,react.useRef)(null);(0,react.useEffect)(()=>(autoPlay&&!isHovered&&carouselImages.length>1?intervalRef.current=setInterval(()=>{setCurrentIndex(prev=>(prev+1)%carouselImages.length)},interval):intervalRef.current&&(clearInterval(intervalRef.current),intervalRef.current=null),()=>{intervalRef.current&&clearInterval(intervalRef.current)}),[autoPlay,isHovered,carouselImages.length,interval]);const goToPrevious=()=>{setCurrentIndex(prev=>(prev-1+carouselImages.length)%carouselImages.length)},goToNext=()=>{setCurrentIndex(prev=>(prev+1)%carouselImages.length)},goToSlide=index=>{setCurrentIndex(index)},handleKeyDown=(event,action)=>{"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),action())};return carouselImages&&0!==carouselImages.length||(carouselImages=defaultImages),(0,jsx_runtime.jsxs)(styles,{"data-testid":testId,onMouseEnter:()=>setIsHovered(!0),onMouseLeave:()=>setIsHovered(!1),onKeyDown:event=>{switch(event.key){case"ArrowLeft":event.preventDefault(),goToPrevious();break;case"ArrowRight":event.preventDefault(),goToNext();break;case"Home":event.preventDefault(),goToSlide(0);break;case"End":event.preventDefault(),goToSlide(carouselImages.length-1)}},tabIndex:0,role:"region","aria-label":"Image carousel",children:[isUsingDefaultImages&&(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:"10px",left:"10px",background:"rgba(33, 150, 243, 0.9)",color:"white",padding:"6px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"500",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},children:"Loading default images"}),(0,jsx_runtime.jsxs)("div",{className:"carousel-container",children:[(0,jsx_runtime.jsx)("div",{className:"carousel-wrapper",children:(0,jsx_runtime.jsx)("div",{className:"carousel-track",style:{transform:`translateX(-${100*currentIndex}%)`},children:carouselImages.map((image,index)=>(0,jsx_runtime.jsx)("div",{className:"carousel-slide",children:(0,jsx_runtime.jsx)("img",{src:image,alt:`Slide ${index+1}`,className:"carousel-image",onError:e=>{e.target.src=`https://via.placeholder.com/800x400/CCCCCC/666666?text=Image+${index+1}+Not+Found`}})},`slide-${image.replace(/[^a-zA-Z0-9]/g,"")}`))})}),carouselImages.length>1&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"carousel-control prev",onClick:goToPrevious,onKeyDown:e=>handleKeyDown(e,goToPrevious),"aria-label":"Previous image",tabIndex:0,children:"‹"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"carousel-control next",onClick:goToNext,onKeyDown:e=>handleKeyDown(e,goToNext),"aria-label":"Next image",tabIndex:0,children:"›"})]}),carouselImages.length>1&&(0,jsx_runtime.jsx)("div",{className:"carousel-indicators",children:carouselImages.map((image,index)=>(0,jsx_runtime.jsx)("button",{type:"button",className:"indicator "+(index===currentIndex?"active":""),onClick:()=>goToSlide(index),onKeyDown:e=>handleKeyDown(e,()=>goToSlide(index)),"aria-label":`Go to image ${index+1}`,"aria-pressed":index===currentIndex,tabIndex:0},`indicator-${image.replace(/[^a-zA-Z0-9]/g,"")}`))})]})]})}PegaExtensionsCarousel.displayName="PegaExtensionsCarousel";const Pega_Extensions_Carousel=(0,withConfiguration.A)(PegaExtensionsCarousel);try{PegaExtensionsCarousel.displayName="PegaExtensionsCarousel",PegaExtensionsCarousel.__docgenInfo={description:"",displayName:"PegaExtensionsCarousel",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string"}},autoPlay:{defaultValue:null,description:"",name:"autoPlay",required:!1,type:{name:"boolean"}},interval:{defaultValue:null,description:"",name:"interval",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},validatemessage:{defaultValue:null,description:"",name:"validatemessage",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"any"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},testId:{defaultValue:null,description:"",name:"testId",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!0,type:{name:"string"}},displayMode:{defaultValue:null,description:"",name:"displayMode",required:!1,type:{name:"string"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!0,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},fieldMetadata:{defaultValue:null,description:"",name:"fieldMetadata",required:!1,type:{name:"any"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"any"}},getPConnect:{defaultValue:null,description:"",name:"getPConnect",required:!0,type:{name:"() => C11nEnv"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pega_Extensions_Carousel/index.tsx#PegaExtensionsCarousel"]={docgenInfo:PegaExtensionsCarousel.__docgenInfo,name:"PegaExtensionsCarousel",path:"src/components/Pega_Extensions_Carousel/index.tsx#PegaExtensionsCarousel"})}catch(__react_docgen_typescript_loader_error){}const demo_stories={title:"Extensions/Image Carousel",component:Pega_Extensions_Carousel,excludeStories:/.*Data$/,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{autoPlay:{control:"boolean",description:"Whether the carousel should auto-advance slides"},interval:{control:"number",description:"Time in milliseconds between auto-advancing slides"},value:{control:"text",description:"Comma-separated string of image URLs to display in the carousel"}}},sampleImagesString="https://picsum.photos/800/400?random=1,https://picsum.photos/800/400?random=2,https://picsum.photos/800/400?random=3,https://picsum.photos/800/400?random=4,https://picsum.photos/800/400?random=5",DefaultCarousel=args=>{const[value,setValue]=(0,react.useState)(args.value||sampleImagesString),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Value:"})," ",value]}),(0,jsx_runtime.jsx)(Pega_Extensions_Carousel,{...props,...args})]})};DefaultCarousel.displayName="DefaultCarousel",DefaultCarousel.args={value:sampleImagesString,autoPlay:!0,interval:5e3,testId:"carousel-demo"};const AutoPlayDisabled=args=>{const[value,setValue]=(0,react.useState)(args.value||sampleImagesString),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Auto-play:"})," Disabled | ",(0,jsx_runtime.jsx)("strong",{children:"Value:"})," ",value]}),(0,jsx_runtime.jsx)(Pega_Extensions_Carousel,{...props,...args})]})};AutoPlayDisabled.displayName="AutoPlayDisabled",AutoPlayDisabled.args={value:sampleImagesString,autoPlay:!1,interval:5e3,testId:"carousel-manual"};const FastAutoPlay=args=>{const[value,setValue]=(0,react.useState)(args.value||sampleImagesString),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Auto-play:"})," Fast (2s) | ",(0,jsx_runtime.jsx)("strong",{children:"Value:"})," ",value]}),(0,jsx_runtime.jsx)(Pega_Extensions_Carousel,{...props,...args})]})};FastAutoPlay.displayName="FastAutoPlay",FastAutoPlay.args={value:sampleImagesString,autoPlay:!0,interval:2e3,testId:"carousel-fast"};const DefaultImagesWhenEmpty=args=>{const[value,setValue]=(0,react.useState)(args.value||""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Note:"}),' This carousel demonstrates the default images behavior when no value is provided. The component will automatically show placeholder images instead of an empty state, and displays a "Loading default images" indicator in the top-left corner.']}),(0,jsx_runtime.jsx)(Pega_Extensions_Carousel,{...props,...args})]})};DefaultImagesWhenEmpty.displayName="DefaultImagesWhenEmpty",DefaultImagesWhenEmpty.args={value:"",autoPlay:!0,interval:3e3,testId:"carousel-default-images"};const CommaSeparatedUrls=args=>{const[value,setValue]=(0,react.useState)(args.value||"https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30"),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#e3f2fd",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Demo:"})," This shows how comma-separated URLs work. Try editing the value below:",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"text",value,onChange:e=>setValue(e.target.value),style:{width:"100%",marginTop:"5px",padding:"4px",border:"1px solid #ccc",borderRadius:"2px"},placeholder:"Enter comma-separated image URLs"})]}),(0,jsx_runtime.jsx)(Pega_Extensions_Carousel,{...props,...args})]})};CommaSeparatedUrls.displayName="CommaSeparatedUrls",CommaSeparatedUrls.args={value:"https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30",autoPlay:!0,interval:4e3,testId:"carousel-comma-urls"},DefaultCarousel.parameters={...DefaultCarousel.parameters,docs:{...DefaultCarousel.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState(args.value || sampleImagesString);\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Value:</strong> {value}\n      </div>\n      <PegaExtensionsCarousel {...props} {...args} />\n    </div>;\n}",...DefaultCarousel.parameters?.docs?.source}}},AutoPlayDisabled.parameters={...AutoPlayDisabled.parameters,docs:{...AutoPlayDisabled.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState(args.value || sampleImagesString);\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Auto-play:</strong> Disabled | <strong>Value:</strong> {value}\n      </div>\n      <PegaExtensionsCarousel {...props} {...args} />\n    </div>;\n}",...AutoPlayDisabled.parameters?.docs?.source}}},FastAutoPlay.parameters={...FastAutoPlay.parameters,docs:{...FastAutoPlay.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState(args.value || sampleImagesString);\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Auto-play:</strong> Fast (2s) | <strong>Value:</strong> {value}\n      </div>\n      <PegaExtensionsCarousel {...props} {...args} />\n    </div>;\n}",...FastAutoPlay.parameters?.docs?.source}}},DefaultImagesWhenEmpty.parameters={...DefaultImagesWhenEmpty.parameters,docs:{...DefaultImagesWhenEmpty.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState(args.value || '');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px'\n    }}>\n        <strong>Note:</strong> This carousel demonstrates the default images behavior when no value is provided.\n        The component will automatically show placeholder images instead of an empty state, and displays a \n        \"Loading default images\" indicator in the top-left corner.\n      </div>\n      <PegaExtensionsCarousel {...props} {...args} />\n    </div>;\n}",...DefaultImagesWhenEmpty.parameters?.docs?.source}}},CommaSeparatedUrls.parameters={...CommaSeparatedUrls.parameters,docs:{...CommaSeparatedUrls.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState(args.value || 'https://picsum.photos/800/400?random=10, https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=30');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#e3f2fd',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Demo:</strong> This shows how comma-separated URLs work. Try editing the value below:\n        <br />\n        <input type=\"text\" value={value} onChange={e => setValue(e.target.value)} style={{\n        width: '100%',\n        marginTop: '5px',\n        padding: '4px',\n        border: '1px solid #ccc',\n        borderRadius: '2px'\n      }} placeholder=\"Enter comma-separated image URLs\" />\n      </div>\n      <PegaExtensionsCarousel {...props} {...args} />\n    </div>;\n}",...CommaSeparatedUrls.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultCarousel","AutoPlayDisabled","FastAutoPlay","DefaultImagesWhenEmpty","CommaSeparatedUrls"]}}]);