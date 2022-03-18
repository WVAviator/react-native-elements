"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27324:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c=void 0,s={unversionedId:"component_usage/Overlay",id:"version-4.0.0-rc.0/component_usage/Overlay",title:"Overlay",description:"\x3c!-- To show the guide to configure the Overlay Component to a project.",source:"@site/versioned_docs/version-4.0.0-rc.0/component_usage/Overlay.mdx",sourceDirName:"component_usage",slug:"/component_usage/Overlay",permalink:"/docs/component_usage/Overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/component_usage/Overlay.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You ",(0,o.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,o.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,o.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Overlay","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Overlay%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20OverlayComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20OverlayComponent%3A%20React.FunctionComponent%3COverlayComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleOverlay%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible(!visible)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Overlay%22%0A%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3COverlay%20isVisible%3D%7Bvisible%7D%20onBackdropPress%3D%7BtoggleOverlay%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textPrimary%7D%3EHello!%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textSecondary%7D%3E%0A%20%20%20%20%20%20%20%20Welcome%20to%20React%20Native%20Elements%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22wrench%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D%22Start%20Building%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FOverlay%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0AtextPrimary%3A%20%7B%0A%20%20marginVertical%3A%2020%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2020%2C%0A%7D%2C%0AtextSecondary%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2017%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20OverlayComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);