"use strict";(self.webpackChunktc_chinese_tutor=self.webpackChunktc_chinese_tutor||[]).push([[262],{8647:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294);const n="heroBanner_jsEf",l="heroTitle_FGBM",s="heroSubtitle_JZTr",o="underline_nuEI";var c=a(6010);const u=e=>{let{title:t,body:a,extra:u}=e;return r.createElement("header",{className:(0,c.Z)("hero hero--primary",n)},r.createElement("div",{className:"container"},r.createElement("h1",{className:(0,c.Z)("hero__title",l)},t),r.createElement("div",{className:"padding-bottom--lg",style:{display:"flex",justifyContent:"center"}}," ",r.createElement("div",{className:o})),r.createElement("p",{className:(0,c.Z)("hero__subtitle",s)},a),u))}},5863:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(7294),n=a(3285),l=a(8647),s=a(6010);const o="form_N9qP",c="input_VNcB",u="button_yCQ2";function i(e){const t=e.match(/youtu\.be\/(.+)/);return t?t[1]:null}const m=()=>{const[e,t]=(0,r.useState)(""),[a,n]=(0,r.useState)(""),[l,m]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),[p,b]=(0,r.useState)(!1),[E,v]=(0,r.useState)(!1),[y,g]=(0,r.useState)(!1);(0,r.useEffect)((()=>{b(!1),e&&a&&l&&(b(!0),v(!1))}),[e,a,l,d]);return r.createElement("section",null,r.createElement("div",{className:"container margin-bottom--xl center"},r.createElement("div",{className:(0,s.Z)("row",o)},r.createElement("input",{type:"text",placeholder:"Youtube Share Url (Required)",value:e,onChange:e=>t(e.target.value),className:(0,s.Z)(c)}),r.createElement("textarea",{type:"text",placeholder:"Title (Required)",value:a,onChange:e=>n(e.target.value),className:(0,s.Z)(c)}),r.createElement("textarea",{type:"text",placeholder:"Description (Required)",value:l,onChange:e=>m(e.target.value),className:(0,s.Z)(c),rows:"4"}),r.createElement("textarea",{type:"text",placeholder:"Answer (Optional)",value:d,onChange:e=>h(e.target.value),className:(0,s.Z)(c),rows:"4"}),r.createElement("button",{disabled:!p,onClick:async()=>{try{const r={video_code:i(e),title:a,description:l,answer:d};g(!0);(await fetch("https://vasqhjczkzaqsexezhhn.functions.supabase.co/youtube-videos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok&&(v(!0),t(""),n(""),m(""),h(""))}catch(r){console.error(r),v(!1),alert("An error occurred while submitting the form. Please try again later.")}g(!1)},className:(0,s.Z)(u)},y?"Sending...":E?"Submitted":"Submit"))))},d=()=>r.createElement(n.Z,null,r.createElement(l.Z,{title:"Manage Youtube Videos",body:"Fill out this form to add more Youtube videos to the site"}),r.createElement("main",null,r.createElement(m,null)))}}]);