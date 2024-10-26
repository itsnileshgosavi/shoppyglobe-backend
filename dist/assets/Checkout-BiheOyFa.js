import{j as e,b as x,r as o,e as g,u as p,L as y,f as b}from"./index-CDDcH2a-.js";const j=({product:a})=>e.jsxs("div",{className:"flex flex-row h-30 w-full md:w-[500px] bg-yellow-50 my-2 rounded-md",children:[e.jsx("div",{className:"flex items-center w-[20%]",children:e.jsx("img",{src:a.thumbnail,alt:"",className:"w-30 h-30"})}),e.jsxs("div",{className:"flex flex-col justify-center w-[60%]",children:[e.jsx("p",{className:"text-sm md:text-lg font-bold",children:a.title}),e.jsxs("p",{className:"text-sm md:text-lg",children:["Quantity: ",a.quantity]}),e.jsxs("p",{className:"text-sm md:text-lg font-medium",children:["Price: $",a.price.toFixed(2)]})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center w-[20%]",children:[e.jsx("p",{className:"text-sm md:text-lg font-semibold",children:"SubTotal"}),e.jsxs("p",{className:"text-sm md:text-lg font-medium",children:["$",(a.price*a.quantity).toFixed(2)]})]})]});function v(){const a=x(t=>t.cart),[c,u]=o.useState(!1),[d,r]=o.useState(""),{user:l}=x(t=>t.user),[s,n]=o.useState({fname:l.firstName!="Guest"?l.firstName:"",lname:l.lastName?l.lastName:"",email:l.email?l.email:"",phone:"",address:"",pincode:""}),m=g(),f=p();o.useEffect(()=>{l.id==0&&m("/signin")},[l,m]);const h=async t=>{if(t.preventDefault(),!s.fname||!s.fname.trim()){r("Please enter your first name");return}if(!s.lname||!s.lname.trim()){r("Please enter your last name");return}if(!s.email||!s.email.trim()){r("Please enter your email");return}if(!s.phone||!s.phone.trim()){r("Please enter your phone number");return}if(!s.address||!s.address.trim()){r("Please enter your address");return}if(!s.pincode||!s.pincode.trim()){r("Please enter your pincode");return}try{(await(await fetch("./api/order/place",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s,products:a.products,orderTotal:a.total})})).json()).success&&(r(""),u(!0),f(b()))}catch(i){console.log(i),r(i.message)}};return c?e.jsxs("div",{className:"flex flex-col justify-center items-center h-screen",children:[e.jsxs("p",{className:"text-xl md:text-2xl font-bold my-5",children:["Thank you ",s.fname," for your order!"]}),e.jsx("h1",{className:"text-3xl font-bold my-5",children:"Order Placed !!"}),e.jsx(y,{to:"/products",children:e.jsx("button",{className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded shadow-xl active:scale-95",children:"Continue Shopping"})})]}):e.jsxs("div",{className:"flex justify-center items-center min-h-screen w-screen overflow-hidden flex-col",children:[e.jsx("h1",{className:"text-3xl font-bold my-5 order-first",children:"Checkout"}),e.jsxs("div",{className:"flex justify-center flex-col md:flex-row w-full ",children:[e.jsx("div",{className:"flex justify-center items-center w-full md:w-[60%]",children:e.jsxs("div",{className:"cartitems flex flex-col items-center px-5 my-10 bg-red-100 rounded-lg",children:[e.jsx("p",{className:"text-3xl text-gray-700 uppercase my-3 font-bold",children:"Order Summary"}),e.jsxs("p",{className:"text-xl my-3",children:["Items: ",a.products.length]}),e.jsx("div",{children:a.products.map(t=>e.jsx(j,{product:t},t.id))}),e.jsxs("div",{className:"flex justify-between w-full my-10",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx("h6",{className:"text-xl text-black font-semibold",children:"Cart Total:"}),e.jsx("h6",{className:"text-xl text-black font-semibold",children:"Discount :"}),e.jsxs("h6",{className:"text-xl text-black font-semibold",children:["Shipping Charge :"," "]}),e.jsx("h6",{className:"text-xl text-black font-semibold",children:"Total : "})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsxs("p",{className:"text-xl font-medium font-mono",children:["$",a.total.toFixed(2)]}),e.jsx("p",{className:"text-xl font-medium font-mono",children:"0"}),e.jsx("p",{className:"text-xl font-medium font-mono",children:e.jsx("span",{className:"",children:"Free"})}),e.jsxs("p",{className:"text-xl font-medium font-mono",children:["$",a.total.toFixed(2)]})]})]})]})}),e.jsx("div",{className:"checkoutForms flex flex-col w-full md:w-[40%] order-last",children:e.jsx("div",{className:"flex flex-col items-center justify-center h-screen dark",children:!c&&e.jsxs("div",{className:"w-full max-w-md bg-yellow-100 rounded-lg shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Enter Personal Details"}),e.jsxs("form",{onSubmit:t=>h(t),className:"flex flex-col",children:[e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsx("input",{placeholder:"First Name",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 w-1/2 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-yellow-500 transition ease-in-out duration-150",type:"text",onChange:t=>n({...s,fname:t.target.value})}),e.jsx("input",{placeholder:"Last Name",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 w-1/2 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-yellow-500 transition ease-in-out duration-150",type:"text",onChange:t=>n({...s,lname:t.target.value})})]}),e.jsx("input",{placeholder:"Email",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-blue-500 transition ease-in-out duration-150",type:"email",onChange:t=>n({...s,email:t.target.value})}),e.jsx("input",{placeholder:"Phone",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-blue-500 transition ease-in-out duration-150",type:"tel",onChange:t=>n({...s,phone:t.target.value})}),e.jsx("textarea",{placeholder:"Address",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-blue-500 transition ease-in-out duration-150",onChange:t=>n({...s,address:t.target.value})}),e.jsx("input",{placeholder:"Pincode",className:"bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-400 focus:outline-none focus:ring-1 placeholder:text-gray-600 focus:ring-blue-500 transition ease-in-out duration-150",type:"number",onChange:t=>n({...s,pincode:t.target.value})}),d&&e.jsx("p",{className:"text-red-500 mb-4",children:d}),e.jsx("button",{className:"bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-yellow-600  hover:to-red-600 transition ease-in-out duration-300",type:"submit",children:"Place Order"})]})]})})})]})]})}export{v as default};
