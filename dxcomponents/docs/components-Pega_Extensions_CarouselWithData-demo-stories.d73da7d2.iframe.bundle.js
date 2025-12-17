(self.webpackChunkdxcomponents=self.webpackChunkdxcomponents||[]).push([[90413],{"./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Configuration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/Configuration.js");const __WEBPACK_DEFAULT_EXPORT__=Component=>props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Configuration__WEBPACK_IMPORTED_MODULE_1__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...props})})},"./src/components/Pega_Extensions_CarouselWithData/create-nonce.ts":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{window?.__webpack_nonce__&&(__webpack_require__.nc=window.__webpack_nonce__)},"./src/components/Pega_Extensions_CarouselWithData/demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommaSeparatedUrlsClone:()=>CommaSeparatedUrlsClone,DataPageConfiguration:()=>DataPageConfiguration,DefaultCarouselClone:()=>DefaultCarouselClone,DefaultImagesWhenEmpty:()=>DefaultImagesWhenEmpty,ManualClone:()=>ManualClone,SlowAutoPlayClone:()=>SlowAutoPlayClone,__namedExportsOrder:()=>__namedExportsOrder,default:()=>demo_stories});var react=__webpack_require__("./node_modules/react/index.js");const stateProps={value:".CarouselCloneImages"};var withConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Configuration/withConfiguration.js"),styled_components_browser_esm=(__webpack_require__("./src/components/Pega_Extensions_CarouselWithData/create-nonce.ts"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const styles=styled_components_browser_esm.Ay.div(()=>styled_components_browser_esm.AH`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background: #fff;
      border: 2px solid #007bff; /* Blue border to distinguish clone */
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
      background: rgba(0, 123, 255, 0.7); /* Blue theme for clone */
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
        background: rgba(0, 123, 255, 0.9);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus {
        outline: 3px solid #28a745; /* Green focus for clone */
        outline-offset: 2px;
        background: rgba(0, 123, 255, 0.9);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus-visible {
        outline: 3px solid #28a745;
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
      background: rgba(0, 123, 255, 0.5); /* Blue indicators for clone */
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 123, 255, 0.8);
        transform: scale(1.2);
      }

      &.active {
        background: #007bff;
        transform: scale(1.3);
      }

      &:focus {
        outline: 2px solid #28a745; /* Green focus for clone */
        outline-offset: 2px;
        background: rgba(0, 123, 255, 0.8);
        transform: scale(1.2);
      }

      &:focus-visible {
        outline: 2px solid #28a745;
        outline-offset: 2px;
      }
    }

    /* Focus styles for the main carousel container */
    &:focus {
      outline: 2px solid #28a745; /* Green focus for clone */
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid #28a745;
      outline-offset: 2px;
    }

    /* Clone identifier header */
    &::before {
      content: "CAROUSEL CLONE";
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 123, 255, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      z-index: 3;
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
  `);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultImages=["https://picsum.photos/800/400?random=12","https://picsum.photos/800/400?random=15","https://picsum.photos/800/400?random=16","https://picsum.photos/800/400?random=17","https://picsum.photos/800/400?random=18"];function PegaExtensionsCarouselWithData(props){const{getPConnect,value,testId,images,autoPlay=!0,interval=5e3,dataPage,imageUrlProperty="imageUrl"}=props,[currentIndex,setCurrentIndex]=(0,react.useState)(0),[isHovered,setIsHovered]=(0,react.useState)(!1),[dataPageImages,setDataPageImages]=(0,react.useState)([]),[isLoading,setIsLoading]=(0,react.useState)(!1),[error,setError]=(0,react.useState)(null),intervalRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{(async()=>{if(dataPage&&getPConnect&&"function"==typeof getPConnect){setIsLoading(!0),setError(null);try{const pConn=getPConnect();let results=[];if(window.PCore&&window.PCore.getDataPageUtils){const dataPageUtils=window.PCore.getDataPageUtils();if(!dataPageUtils||!dataPageUtils.getDataAsync)throw new Error("PCore data page utilities not available");results=await(async(dataPageName,pConn)=>{const dataPageUtils=window.PCore.getDataPageUtils(),contextName=pConn&&pConn.getContextName?pConn.getContextName():"";try{const results=await dataPageUtils.getDataAsync(dataPageName,contextName);if(results&&Array.isArray(results))return results;if(results&&results.pxResults&&Array.isArray(results.pxResults))return results.pxResults;if(results&&results.data&&Array.isArray(results.data))return results.data;throw new Error("Data page returned invalid format")}catch(err){throw new Error(`Failed to load data page via PCore: ${err.message||"Unknown error"}`)}})(dataPage,pConn)}else{if(!window.PegaRULES||!window.PegaRULES.getDataPage)throw new Error("Data page integration requires Pega runtime environment (PCore or PegaRULES)");results=await(async dataPageName=>{const pegaDataPage=window.PegaRULES.getDataPage(dataPageName);if(pegaDataPage&&pegaDataPage.then){const results=await pegaDataPage;if(results&&Array.isArray(results))return results;if(results&&results.pxResults&&Array.isArray(results.pxResults))return results.pxResults;throw new Error("Data page returned invalid format")}return pegaDataPage||[]})(dataPage)}setDataPageImages(results),setIsLoading(!1)}catch(err){setError(err.message||"Unknown error accessing data page"),setDataPageImages([]),setIsLoading(!1)}}else dataPage&&!getPConnect&&setError("Data page specified but no Pega connection available")})()},[dataPage,getPConnect]);let carouselImages=defaultImages,isUsingDefaultImages=!0;if(dataPageImages&&dataPageImages.length>0)carouselImages=dataPageImages.map(item=>"string"==typeof item?item:item&&"object"==typeof item?item[imageUrlProperty]||item.imageUrl||item.url||item.src||Object.values(item)[0]:item).filter(Boolean),isUsingDefaultImages=!1;else if(images&&"string"==typeof images&&""!==images.trim()){const urlsFromImages=images.split(",").map(url=>url.trim()).filter(url=>url.length>0);urlsFromImages.length>0&&(carouselImages=urlsFromImages,isUsingDefaultImages=!1)}else if(value&&"string"==typeof value&&""!==value.trim())try{const parsedImages=JSON.parse(value);Array.isArray(parsedImages)&&parsedImages.length>0&&(carouselImages=parsedImages,isUsingDefaultImages=!1)}catch(e){const urlsFromValue=value.split(",").map(url=>url.trim()).filter(url=>url.length>0);urlsFromValue.length>0&&(carouselImages=urlsFromValue,isUsingDefaultImages=!1)}(0,react.useEffect)(()=>(autoPlay&&!isHovered&&carouselImages.length>1?intervalRef.current=setInterval(()=>{setCurrentIndex(prev=>(prev+1)%carouselImages.length)},interval):intervalRef.current&&(clearInterval(intervalRef.current),intervalRef.current=null),()=>{intervalRef.current&&clearInterval(intervalRef.current)}),[autoPlay,isHovered,carouselImages.length,interval]);const goToPrevious=()=>{setCurrentIndex(prev=>(prev-1+carouselImages.length)%carouselImages.length)},goToNext=()=>{setCurrentIndex(prev=>(prev+1)%carouselImages.length)},goToSlide=index=>{setCurrentIndex(index)},handleKeyDown=(event,action)=>{"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),action())};if(isLoading)return(0,jsx_runtime.jsx)(styles,{children:(0,jsx_runtime.jsx)("div",{style:{padding:"20px",textAlign:"center",color:"#666"},children:"Loading images from data page..."})});carouselImages&&0!==carouselImages.length||(carouselImages=defaultImages);const showErrorMessage=error&&!isLoading;return(0,jsx_runtime.jsxs)(styles,{"data-testid":testId,onMouseEnter:()=>setIsHovered(!0),onMouseLeave:()=>setIsHovered(!1),onKeyDown:event=>{switch(event.key){case"ArrowLeft":event.preventDefault(),goToPrevious();break;case"ArrowRight":event.preventDefault(),goToNext();break;case"Home":event.preventDefault(),goToSlide(0);break;case"End":event.preventDefault(),goToSlide(carouselImages.length-1)}},tabIndex:0,role:"region","aria-label":"Image carousel clone",children:[showErrorMessage&&(0,jsx_runtime.jsxs)("div",{style:{position:"absolute",top:"10px",left:"10px",right:"10px",background:"rgba(211, 47, 47, 0.9)",color:"white",padding:"8px 12px",borderRadius:"4px",fontSize:"12px",zIndex:10,textAlign:"center"},children:[error," - Using default images"]}),isUsingDefaultImages&&!showErrorMessage&&(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:"10px",left:"10px",background:"rgba(33, 150, 243, 0.9)",color:"white",padding:"6px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"500",zIndex:10,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},children:"Loading default images"}),(0,jsx_runtime.jsxs)("div",{className:"carousel-container",children:[(0,jsx_runtime.jsx)("div",{className:"carousel-wrapper",children:(0,jsx_runtime.jsx)("div",{className:"carousel-track",style:{transform:`translateX(-${100*currentIndex}%)`},children:carouselImages.map((image,index)=>(0,jsx_runtime.jsx)("div",{className:"carousel-slide",children:(0,jsx_runtime.jsx)("img",{src:image,alt:`Slide ${index+1}`,className:"carousel-image",onError:e=>{e.target.src=`https://via.placeholder.com/800x400/CCCCCC/666666?text=Clone+Image+${index+1}+Not+Found`}})},`slide-${image.replace(/[^a-zA-Z0-9]/g,"")}`))})}),carouselImages.length>1&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"carousel-control prev",onClick:goToPrevious,onKeyDown:e=>handleKeyDown(e,goToPrevious),"aria-label":"Previous image",tabIndex:0,children:"‹"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"carousel-control next",onClick:goToNext,onKeyDown:e=>handleKeyDown(e,goToNext),"aria-label":"Next image",tabIndex:0,children:"›"})]}),carouselImages.length>1&&(0,jsx_runtime.jsx)("div",{className:"carousel-indicators",children:carouselImages.map((image,index)=>(0,jsx_runtime.jsx)("button",{type:"button",className:"indicator "+(index===currentIndex?"active":""),onClick:()=>goToSlide(index),onKeyDown:e=>handleKeyDown(e,()=>goToSlide(index)),"aria-label":`Go to image ${index+1}`,"aria-pressed":index===currentIndex,tabIndex:0},`indicator-${image.replace(/[^a-zA-Z0-9]/g,"")}`))})]})]})}PegaExtensionsCarouselWithData.displayName="PegaExtensionsCarouselWithData";const Pega_Extensions_CarouselWithData=(0,withConfiguration.A)(PegaExtensionsCarouselWithData);try{PegaExtensionsCarouselWithData.displayName="PegaExtensionsCarouselWithData",PegaExtensionsCarouselWithData.__docgenInfo={description:"",displayName:"PegaExtensionsCarouselWithData",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string"}},autoPlay:{defaultValue:null,description:"",name:"autoPlay",required:!1,type:{name:"boolean"}},interval:{defaultValue:null,description:"",name:"interval",required:!1,type:{name:"number"}},dataPage:{defaultValue:null,description:"",name:"dataPage",required:!1,type:{name:"string"}},imageUrlProperty:{defaultValue:null,description:"",name:"imageUrlProperty",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},validatemessage:{defaultValue:null,description:"",name:"validatemessage",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"any"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"any"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},testId:{defaultValue:null,description:"",name:"testId",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!0,type:{name:"string"}},displayMode:{defaultValue:null,description:"",name:"displayMode",required:!1,type:{name:"string"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!0,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},fieldMetadata:{defaultValue:null,description:"",name:"fieldMetadata",required:!1,type:{name:"any"}},additionalProps:{defaultValue:null,description:"",name:"additionalProps",required:!1,type:{name:"any"}},getPConnect:{defaultValue:null,description:"",name:"getPConnect",required:!0,type:{name:"() => C11nEnv"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pega_Extensions_CarouselWithData/index.tsx#PegaExtensionsCarouselWithData"]={docgenInfo:PegaExtensionsCarouselWithData.__docgenInfo,name:"PegaExtensionsCarouselWithData",path:"src/components/Pega_Extensions_CarouselWithData/index.tsx#PegaExtensionsCarouselWithData"})}catch(__react_docgen_typescript_loader_error){}const demo_stories={title:"Extensions/Image Carousel Clone",component:Pega_Extensions_CarouselWithData,excludeStories:/.*Data$/,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{autoPlay:{control:"boolean",description:"Whether the carousel should auto-advance slides"},interval:{control:"number",description:"Time in milliseconds between auto-advancing slides"},images:{control:"object",description:"Array of image URLs to display in the carousel clone"},dataPage:{control:"text",description:"Name of the data page to load images from"},imageUrlProperty:{control:"text",description:"Property name for image URLs in data page records"}}},sampleCloneImagesString="https://picsum.photos/800/400?random=10,https://picsum.photos/800/400?random=11,https://picsum.photos/800/400?random=12,https://picsum.photos/800/400?random=13,https://picsum.photos/800/400?random=14",DefaultCarouselClone=args=>{const[value,setValue]=(0,react.useState)(""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Images:"})," ",args.images||"Default images"]}),(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args})]})};DefaultCarouselClone.displayName="DefaultCarouselClone",DefaultCarouselClone.args={images:sampleCloneImagesString,autoPlay:!0,interval:4e3,testId:"carousel-clone-demo"};const SlowAutoPlayClone=args=>{const[value,setValue]=(0,react.useState)(""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsx)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args})})};SlowAutoPlayClone.displayName="SlowAutoPlayClone",SlowAutoPlayClone.args={images:sampleCloneImagesString,autoPlay:!0,interval:7e3,testId:"carousel-clone-slow"};const ManualClone=args=>{const[value,setValue]=(0,react.useState)(""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsx)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args})})};ManualClone.displayName="ManualClone",ManualClone.args={images:sampleCloneImagesString,autoPlay:!1,interval:5e3,testId:"carousel-clone-manual"};const DataPageConfiguration=args=>{const[value,setValue]=(0,react.useState)(""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"20px",padding:"15px",background:"#f5f5f5",borderRadius:"8px"},children:[(0,jsx_runtime.jsx)("h4",{style:{margin:"0 0 10px 0",color:"#333"},children:"Data Page Configuration Example"}),(0,jsx_runtime.jsx)("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"This story demonstrates how to configure the carousel to load images from a Pega data page. The component uses PCore API (modern) with PegaRULES fallback for data page access."}),(0,jsx_runtime.jsxs)("ul",{style:{margin:"10px 0 0 20px",fontSize:"12px",color:"#666"},children:[(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"Data Page:"})," D_ImageCarouselData"]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"Image URL Property:"})," imageUrl"]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"API Priority:"})," PCore.getDataPageUtils() → PegaRULES.getDataPage()"]})]})]}),(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args})]})};DataPageConfiguration.displayName="DataPageConfiguration",DataPageConfiguration.args={dataPage:"D_ImageCarouselData",imageUrlProperty:"imageUrl",autoPlay:!0,interval:6e3,testId:"carousel-clone-datapage"};const DefaultImagesWhenEmpty=args=>{const[value,setValue]=(0,react.useState)(""),props={value,getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:(propName,theValue)=>{setValue(theValue)},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Note:"}),' This carousel clone demonstrates the default images behavior when no data source is available. The component will automatically show default placeholder images from Picsum instead of an empty state, and displays a "Loading default images" indicator in the top-left corner.']}),(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args})]})};DefaultImagesWhenEmpty.displayName="DefaultImagesWhenEmpty",DefaultImagesWhenEmpty.args={images:"",dataPage:"",autoPlay:!0,interval:4e3,testId:"carousel-clone-default-images"};const CommaSeparatedUrlsClone=args=>{const[images,setImages]=(0,react.useState)(args.images||"https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=21, https://picsum.photos/800/400?random=22"),props={getPConnect:()=>({getStateProps:()=>stateProps,getActionsApi:()=>({updateFieldValue:()=>{},triggerFieldChange:()=>{}})})};return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",maxWidth:"900px",margin:"20px auto"},children:[(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",backgroundColor:"#e3f2fd",borderRadius:"4px",fontSize:"12px"},children:[(0,jsx_runtime.jsx)("strong",{children:"Demo:"})," This shows how comma-separated URLs work with data page support. Try editing the images below:",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("input",{type:"text",value:images,onChange:e=>setImages(e.target.value),style:{width:"100%",marginTop:"5px",padding:"4px",border:"1px solid #ccc",borderRadius:"2px"},placeholder:"Enter comma-separated image URLs"})]}),(0,jsx_runtime.jsx)(Pega_Extensions_CarouselWithData,{...props,...args,images})]})};CommaSeparatedUrlsClone.displayName="CommaSeparatedUrlsClone",CommaSeparatedUrlsClone.args={images:"https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=21, https://picsum.photos/800/400?random=22",autoPlay:!0,interval:4e3,testId:"carousel-clone-comma-urls"},DefaultCarouselClone.parameters={...DefaultCarouselClone.parameters,docs:{...DefaultCarouselClone.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState('');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Images:</strong> {args.images || 'Default images'}\n      </div>\n      <PegaExtensionsCarouselWithData {...props} {...args} />\n    </div>;\n}",...DefaultCarouselClone.parameters?.docs?.source}}},SlowAutoPlayClone.parameters={...SlowAutoPlayClone.parameters,docs:{...SlowAutoPlayClone.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState('');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <PegaExtensionsCarouselWithData {...props} {...args} />\n    </div>;\n}",...SlowAutoPlayClone.parameters?.docs?.source}}},ManualClone.parameters={...ManualClone.parameters,docs:{...ManualClone.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState('');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <PegaExtensionsCarouselWithData {...props} {...args} />\n    </div>;\n}",...ManualClone.parameters?.docs?.source}}},DataPageConfiguration.parameters={...DataPageConfiguration.parameters,docs:{...DataPageConfiguration.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState('');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '20px',\n      padding: '15px',\n      background: '#f5f5f5',\n      borderRadius: '8px'\n    }}>\n        <h4 style={{\n        margin: '0 0 10px 0',\n        color: '#333'\n      }}>Data Page Configuration Example</h4>\n        <p style={{\n        margin: '0',\n        fontSize: '14px',\n        color: '#666'\n      }}>\n          This story demonstrates how to configure the carousel to load images from a Pega data page.\n          The component uses PCore API (modern) with PegaRULES fallback for data page access.\n        </p>\n        <ul style={{\n        margin: '10px 0 0 20px',\n        fontSize: '12px',\n        color: '#666'\n      }}>\n          <li><strong>Data Page:</strong> D_ImageCarouselData</li>\n          <li><strong>Image URL Property:</strong> imageUrl</li>\n          <li><strong>API Priority:</strong> PCore.getDataPageUtils() → PegaRULES.getDataPage()</li>\n        </ul>\n      </div>\n      <PegaExtensionsCarouselWithData {...props} {...args} />\n    </div>;\n}",...DataPageConfiguration.parameters?.docs?.source}}},DefaultImagesWhenEmpty.parameters={...DefaultImagesWhenEmpty.parameters,docs:{...DefaultImagesWhenEmpty.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [value, setValue] = useState('');\n  const props = {\n    value,\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: (propName: string, theValue: any) => {\n              setValue(theValue);\n            },\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#f5f5f5',\n      borderRadius: '4px'\n    }}>\n        <strong>Note:</strong> This carousel clone demonstrates the default images behavior when no data source is available.\n        The component will automatically show default placeholder images from Picsum instead of an empty state, and displays a \n        \"Loading default images\" indicator in the top-left corner.\n      </div>\n      <PegaExtensionsCarouselWithData {...props} {...args} />\n    </div>;\n}",...DefaultImagesWhenEmpty.parameters?.docs?.source}}},CommaSeparatedUrlsClone.parameters={...CommaSeparatedUrlsClone.parameters,docs:{...CommaSeparatedUrlsClone.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [images, setImages] = useState(args.images || 'https://picsum.photos/800/400?random=20, https://picsum.photos/800/400?random=21, https://picsum.photos/800/400?random=22');\n  const props = {\n    getPConnect: () => {\n      return {\n        getStateProps: () => {\n          return stateProps;\n        },\n        getActionsApi: () => {\n          return {\n            updateFieldValue: () => {/* nothing */},\n            triggerFieldChange: () => {/* nothing */}\n          };\n        }\n      };\n    }\n  };\n  return <div style={{\n    width: '100%',\n    maxWidth: '900px',\n    margin: '20px auto'\n  }}>\n      <div style={{\n      marginBottom: '10px',\n      padding: '10px',\n      backgroundColor: '#e3f2fd',\n      borderRadius: '4px',\n      fontSize: '12px'\n    }}>\n        <strong>Demo:</strong> This shows how comma-separated URLs work with data page support. Try editing the images below:\n        <br />\n        <input type=\"text\" value={images} onChange={e => setImages(e.target.value)} style={{\n        width: '100%',\n        marginTop: '5px',\n        padding: '4px',\n        border: '1px solid #ccc',\n        borderRadius: '2px'\n      }} placeholder=\"Enter comma-separated image URLs\" />\n      </div>\n      <PegaExtensionsCarouselWithData {...props} {...args} images={images} />\n    </div>;\n}",...CommaSeparatedUrlsClone.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultCarouselClone","SlowAutoPlayClone","ManualClone","DataPageConfiguration","DefaultImagesWhenEmpty","CommaSeparatedUrlsClone"]}}]);