"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3583],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78363:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"migration_guide",title:"Migration Guide"},p="Migrating to v4",s={unversionedId:"migration_guide",id:"migration_guide",title:"Migration Guide",description:"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.",source:"@site/docs/migration-guide.md",sourceDirName:".",slug:"/migration_guide",permalink:"/docs/next/migration_guide",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/migration-guide.md",tags:[],version:"current",frontMatter:{id:"migration_guide",title:"Migration Guide"},sidebar:"docs",previous:{title:"Label Guide",permalink:"/docs/next/labels"}},m=[{value:"Core changes",id:"core-changes",children:[{value:"Pressable",id:"pressable",children:[],level:3}],level:2},{value:"Components",id:"components",children:[{value:"<code>ThemeProvider</code>",id:"themeprovider",children:[],level:3},{value:"<code>Tooltip</code>",id:"tooltip",children:[],level:3}],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-to-v4"},"Migrating to v4"),(0,o.kt)("p",null,"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below."),(0,o.kt)("h2",{id:"core-changes"},"Core changes"),(0,o.kt)("p",null,"In the same directory as your package.json file, create or edit an .npmrc file to include a line specifying GitHub Packages URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"@react-native-elements:registry=https://npm.pkg.github.com\n")),(0,o.kt)("p",null,"To use the v4 version, you first need to update the package names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- import {} from 'react-native-elements'\n+ import {} from '@react-native-elements/themed'\n")),(0,o.kt)("p",null,"You can install the packages from npm or yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-elements/base @react-native-elements/themed\n\n# or with yarn\nyarn add @react-native-elements/base @react-native-elements/themed\n")),(0,o.kt)("p",null,"You can also make ",(0,o.kt)("inlineCode",{parentName:"p"},"alias")," for package to help you with migration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-elements@npm:@react-native-elements/themed\n")),(0,o.kt)("h3",{id:"pressable"},"Pressable"),(0,o.kt)("p",null,"These components are now using ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Touchable")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avatar"),(0,o.kt)("li",{parentName:"ul"},"Badge"),(0,o.kt)("li",{parentName:"ul"},"ButtonGroup"),(0,o.kt)("li",{parentName:"ul"},"CheckBox"),(0,o.kt)("li",{parentName:"ul"},"Icon"),(0,o.kt)("li",{parentName:"ul"},"Image"),(0,o.kt)("li",{parentName:"ul"},"ListItem"),(0,o.kt)("li",{parentName:"ul"},"SearchBar"),(0,o.kt)("li",{parentName:"ul"},"SpeedDial"),(0,o.kt)("li",{parentName:"ul"},"Tile")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.")),(0,o.kt)("p",null,"This change would let you use ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressIn")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressOut")," APIs in components, For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <CheckBox\n    title="I agree"\n    onPress={()=>{}}\n    onLongPress={()=>{}}\n+   onPressIn={()=>{}}\n+   onPressOut={()=>{}}\n    onPress={() => {}}\n  />\n')),(0,o.kt)("p",null,"and the rest of props for ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," can be added via ",(0,o.kt)("inlineCode",{parentName:"p"},"pressableProps")," API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  <ButtonGroup\n+   pressableProps={{android_ripple:{radius:2}}}\n  />\n")),(0,o.kt)("p",null,"few other props (like ",(0,o.kt)("inlineCode",{parentName:"p"},"underlayColor"),") will not be supported, you can remove them."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"themeprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ThemeProvider")),(0,o.kt)("p",null,"Please make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," is defined at the root of your application (even if you are using the default theme) and ",(0,o.kt)("inlineCode",{parentName:"p"},"NO")," useStyles or useTheme is called before ",(0,o.kt)("inlineCode",{parentName:"p"},"<ThemeProvider>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- <ThemeProvider theme={myTheme} useDark={false}>\n+ <ThemeProvider theme={myTheme}>\n     <Button title="My Button" />\n   </ThemeProvider>\n')),(0,o.kt)("p",null,"Create custom theme using ",(0,o.kt)("inlineCode",{parentName:"p"},"createTheme")," helper"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- const myTheme: FullTheme = {\n+ const myTheme = createTheme({\n   colors: {\n     primary: '#f2f2f2',\n   },\n+ darkColors: {\n+   primary: '#121212',\n+ },\n+ mode: 'dark',\n};\n")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"useDark")," is deprecated, you can switch ",(0,o.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"light")," themeColors using ",(0,o.kt)("inlineCode",{parentName:"p"},"updateTheme")," function which can be access from ",(0,o.kt)("inlineCode",{parentName:"p"},"useTheme")," hook."),(0,o.kt)("p",null,"Complete example of root of our application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='App.tsx'",title:"'App.tsx'"},"import {\n  ThemeProvider,\n  Button,\n  createTheme,\n} from '@react-native-elements/themed';\n\nconst myTheme = createTheme({\n  colors: {\n    primary: '#f2f2f2',\n  },\n  darkColors: {\n    primary: '#121212',\n  },\n  mode: 'dark',\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,o.kt)("h3",{id:"tooltip"},(0,o.kt)("inlineCode",{parentName:"h3"},"Tooltip")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," is one of core component of RNE, Since v4 this component would be stateless and would use ",(0,o.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOpen")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onClose")," Props for its working"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Tooltip\n+   visible={open}\n+   onOpen={() => {\n+      setOpen(true);\n+   }}\n+   onClose={() => {\n+      setOpen(false);\n+   }}\n    popover="Hey All"\n  />\n')),(0,o.kt)("p",null,"You can still use Tooltip as stateful component by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ControlledTooltip: React.FC<TooltipProps> = (props) => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tooltip\n      visible={open}\n      onOpen={() => {\n        setOpen(true);\n      }}\n      onClose={() => {\n        setOpen(false);\n      }}\n      {...props}\n    />\n  );\n};\n")))}u.isMDXComponent=!0}}]);