import{r,j as s,c as i}from"./index-DFMxPtie.js";import{P as m}from"./ProductList-GIUHut9D.js";import{u as d}from"./useFetch-nlPw6iQK.js";import"./QuantitySelector-D5tD9A1I.js";const p=()=>{const[c,o]=r.useState([]),{data:e,loading:a,error:t}=d("https://dummyjson.com/products?limit=8&skip=108");return r.useEffect(()=>{e&&o(e.products)},[e]),a?s.jsx("div",{className:"h-screen gap-4 w-screen flex items-center justify-center",children:s.jsx(i,{})}):s.jsxs("div",{className:"flex flex-col items-center my-5",children:[t&&s.jsx("p",{className:"text-red-500 text-xl",children:t.message}),s.jsx(m,{products:c})]})};export{p as default};