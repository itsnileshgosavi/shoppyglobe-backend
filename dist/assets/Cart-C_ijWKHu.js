import{r,u as c,j as e,L as a,a as i,d,i as o,b as n}from"./index-CRm8rBuv.js";import{Q as x}from"./QuantitySelector-mF89FEzN.js";function m({product:t}){const l=r.useRef(null),s=c();return e.jsxs("div",{ref:l,className:"w-full md:w-full mx-0 lg:w-[70vw] h-fit md:h-[200px] p-5 flex flex-col md:flex-row items-center overflow-hidden bg-slate-200 my-3 md:m-5 rounded-2xl justify-between",children:[e.jsx(a,{to:`/products/${t.id}`,className:"w-full md:w-[30%]",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:t.thumbnail,alt:"thumbnail",className:"md:w-60 w-auto h-20 md:h-60 p-2 hover:scale-105 transition-all duration-300"})})}),e.jsx(a,{to:`/products/${t.id}`,className:"w-full md:w-[30%]",children:e.jsxs("div",{className:"flex flex-col justify-start",children:[e.jsx("p",{className:"font-bold md:text-xl text-sm hover:text-blue-500",children:t.title}),e.jsxs("p",{className:"text-sm md:text-xl my-3 font-semibold",children:["$",t.price]})]})}),e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-1 md:space-y-3 w-[20%]",children:[e.jsx("p",{className:"text-sm md:text-xl",children:"Quantity"}),e.jsx(x,{quantity:t.quantity,reduceQuantity:()=>{t.quantity===1?(l.current.classList.add("fade-out-left"),setTimeout(()=>s(i(t)),700)):s(d(t))},increaseQuantity:()=>s(o({...t,quantity:1}))})]}),e.jsx("div",{className:"flex items-center justify-center w-[20%]",children:e.jsx("button",{className:"bg-red-500 px-5 h-7 md:h-10 block shadow-xl text-sm md:text-xl rounded-lg text-white my-3 hover:scale-105 transition-all duration-300",onClick:()=>{l.current.classList.add("fade-out-left"),setTimeout(()=>s(i(t)),700)},children:"Remove"})})]})}const u=""+new URL("empty-cart-Nsa1qgLr.png",import.meta.url).href;function j(){const t=n(s=>s.cart),{user:l}=n(s=>s.user);return e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{children:t.products.map(s=>e.jsx(m,{product:s},s.id))}),t.products.length>0&&e.jsxs("div",{className:"m-5 w-full flex justify-end flex-col bg-slate-200 items-end pr-10 py-10",children:[e.jsxs("div",{className:"flex gap-10",children:[e.jsx("div",{children:e.jsx("h6",{className:"text-xl text-black font-semibold",children:"Cart Total:"})}),e.jsx("div",{children:e.jsxs("p",{className:"text-xl font-mono font-medium",children:["$",t.total.toFixed(2)]})})]}),l.id!==0?e.jsx(a,{to:"/checkout",children:e.jsx("button",{className:` p-3 shadow-xl rounded-lg text-white my-2 transition-all hover:scale-105 ease-in-out duration-500 ${t.products.length===0?"bg-gray-500 cursor-not-allowed":"bg-blue-500"}`,disabled:t.products.length===0,children:"Checkout"})}):e.jsx(a,{to:"/signin",children:e.jsx("button",{className:` p-3 shadow-xl rounded-lg text-white my-2 transition-all hover:scale-105 ease-in-out duration-500 ${t.products.length===0?"bg-gray-500 cursor-not-allowed":"bg-blue-500"}`,disabled:t.products.length===0,children:"Sign In to Checkout"})})]}),t.products.length===0&&e.jsxs("div",{className:"text-xl flex-col text-black min-h-screen flex items-center",children:[e.jsx("img",{src:u,alt:"cart",className:"w-1/2"}),e.jsx("p",{children:"Your cart is empty"}),e.jsx(a,{to:"/products",children:e.jsx("button",{className:"bg-yellow-500 my-4 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded shadow-xl active:scale-95",children:"Browse Products"})})]})]})}export{j as default};