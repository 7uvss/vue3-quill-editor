import{d as e,t as o,r as a,o as l,Q as r,h as n,c as t,a as i,F as u,b as d,e as s,f as m}from"./vendor.3cc3f4db.js";var c=e({name:"richTextEditor",props:{modelValue:String,toolBarConfig:Array},emits:["update:modelValue"],setup:(e,{emit:t})=>{const{modelValue:i,toolBarConfig:u}=o(e),d=a(),s=a();return l((()=>{d.value=new r(s.value,{modules:{toolbar:null==u?void 0:u.value},theme:"snow"}),d.value.root.innerHTML=null==i?void 0:i.value,null==d||d.value.on("text-change",(()=>{t("update:modelValue",d.value.root.innerHTML)}))})),()=>n("div",{ref:s})}}),p=e({name:"App",components:{richTextEditor:c},setup:()=>({rawHTML:a(""),toolBarConfig:[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],["bold","italic","underline","strike"],[{align:[]}],["clean"]]})});p.render=function(e,o,a,l,r,n){const m=d("richTextEditor");return s(),t(u,null,[i("div",{class:"ql-editor",innerHTML:e.rawHTML},null,8,["innerHTML"]),i(m,{toolBarConfig:e.toolBarConfig,modelValue:e.rawHTML,"onUpdate:modelValue":o[1]||(o[1]=o=>e.rawHTML=o)},null,8,["toolBarConfig","modelValue"])],64)},m(p).mount("#app");