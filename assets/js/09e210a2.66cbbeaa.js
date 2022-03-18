"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9741,9652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,D=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(D,i(i({ref:t},u),{},{components:n})):a.createElement(D,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),l=n(72389),i=n(29548),r=n(86010);const s="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,D=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),A=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(A,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!A.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+A.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.UB)(),k=C.tabGroupChoices,f=C.setTabGroupChoices,B=(0,o.useState)(b),h=B[0],y=B[1],E=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=k[m];null!=w&&w!==h&&A.some((function(e){return e.value===w}))&&y(w)}var F=function(e){var t=e.currentTarget,n=E.indexOf(t),a=A[n].value;a!==h&&(N(t),y(a),null!=m&&f(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},D)},A.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:F,onClick:F},l,{className:(0,r.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":h===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}function u(e){var t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},73633:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],r={},s=void 0,c={unversionedId:"component_usage/Dialog",id:"version-4.0.0-rc.0/component_usage/Dialog",title:"Dialog",description:"\x3c!-- To show the guide to configure the Dialog Component to a project.",source:"@site/versioned_docs/version-4.0.0-rc.0/component_usage/Dialog.mdx",sourceDirName:"component_usage",slug:"/component_usage/Dialog",permalink:"/docs/component_usage/Dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/component_usage/Dialog.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,l.kt)("p",{parentName:"blockquote"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Dialog","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%0AButton%2C%0ADialog%2C%0ACheckBox%2C%0AListItem%2C%0AAvatar%2C%0A%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20DialogComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Dialogs%3A%20React.FunctionComponent%3CDialogComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible1%2C%20setVisible1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible2%2C%20setVisible2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible3%2C%20setVisible3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible4%2C%20setVisible4%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible5%2C%20setVisible5%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible6%2C%20setVisible6%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(1)%3B%0A%0Aconst%20toggleDialog1%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible1(!visible1)%3B%0A%7D%3B%0Aconst%20toggleDialog2%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible2(!visible2)%3B%0A%7D%3B%0Aconst%20toggleDialog3%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible3(!visible3)%3B%0A%7D%3B%0Aconst%20toggleDialog4%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible4(!visible4)%3B%0A%7D%3B%0Aconst%20toggleDialog5%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible5(!visible5)%3B%0A%7D%3B%0Aconst%20toggleDialog6%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible6(!visible6)%3B%0A%7D%3B%0A%0Aconst%20userlist%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20%20%20subtitle%3A%20'amy.farha%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20%20%20subtitle%3A%20'cjackson%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20%20%20subtitle%3A%20'amandam%40gmail.com'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Simple%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Mutli%20Action%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Loading%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog3%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Buttonless%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%201%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%202%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible1%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible2%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%201%22%20onPress%3D%7B()%20%3D%3E%20console.log('Primary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%202%22%20onPress%3D%7B()%20%3D%3E%20console.log('Secondary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%20isVisible%3D%7Bvisible3%7D%20onBackdropPress%3D%7BtoggleDialog3%7D%3E%0A%20%20%20%20%20%20%3CDialog.Loading%20%2F%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible4%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible5%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Select%20Preference%22%2F%3E%0A%20%20%20%20%20%20%7B%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7Bl%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'white'%2C%20borderWidth%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20%20%20%20%20checked%3D%7Bchecked%20%3D%3D%3D%20i%20%2B%201%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setChecked(i%20%2B%201)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%0A%20%20%20%20%20%20%20%20%20%20title%3D%22CONFIRM%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60Option%20%24%7Bchecked%7D%20was%20selected!%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20toggleDialog5()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22CANCEL%22%20onPress%3D%7BtoggleDialog5%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible6%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Choose%20Account%22%2F%3E%0A%20%20%20%20%20%20%7Buserlist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%20-10%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20borderRadius%3A%206%2C%0A%20%20width%3A%20220%2C%0A%20%20margin%3A%2020%2C%0A%7D%2C%0AbuttonContainer%3A%20%7B%0A%20%20margin%3A%2020%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Dialogs%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0},10188:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>m});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),i=(n(9877),n(58215),n(34738),n(73633)),r=["components"],s={id:"dialog",title:"Dialog"},c=void 0,u={unversionedId:"components/dialog",id:"version-4.0.0-rc.0/components/dialog",title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",source:"@site/versioned_docs/version-4.0.0-rc.0/components/Dialog.mdx",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/components/Dialog.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{id:"dialog",title:"Dialog"},sidebar:"docs",previous:{title:"Chip",permalink:"/docs/components/chip"},next:{title:"Dialog.Actions",permalink:"/docs/components/dialog_actions"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.\nYou can wrap any component with a simple Dialog component to display quick information to the user.\nAlso receives all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/overlay#props"},"Overlay")," props except ",(0,l.kt)("inlineCode",{parentName:"p"},"fullscreen"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"overlay#props"},"Overlay")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add Enclosed components.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"overlayStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add additional styling to the internal Overlay component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}m.isMDXComponent=!0}}]);