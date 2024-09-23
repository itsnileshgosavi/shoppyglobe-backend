export function signUpdataValidate(req, res, next) {
  const { firstName, lastName, email, password, address, mobile } = req.body;
  //password regex password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number
  const pwdregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
    res.status(400).json({ message: "All fields are required" });
  } else {
    if (!email.match(emailregex)) {
      return res.status(400).json({ message: "invalid email", success: false });
    }
    if (!password.match(pwdregex)) {
      return res.status(400).json({
        message:
          "invalid password, password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
        success: false,
      });
    }
    next();
  }
}

export function signinDataValidate(req, res, next) {
  const { email, password } = req.body;
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.trim() || !password.trim()) {
    res.status(400).json({ message: "All fields are required" });
  } else {
    if (!email.match(emailregex)) {
      return res.status(400).json({ message: "invalid email format", success: false });
    }
    next();
  }
}

export function UpdateCartDataValidate(req, res, next) {
  const { quantity, product } = req.body;
   if(typeof quantity !== 'number'){
    res.status(400).json({ message: "quantity must be a number", success: false });
  }else if(quantity <= 0){
    res.status(400).json({ message: "quantity must be greater than 0", success: false });
  } else {
    next();
  }
}
export function addToCartDataValidate(req, res, next) {
  const { quantity, product } = req.body;
   if(typeof quantity !== 'number'){
    res.status(400).json({ message: "quantity must be a number", success: false });
  }else if(quantity <= 0){
    res.status(400).json({ message: "quantity must be greater than 0", success: false });
  }else if(typeof product !== "object"){
    res.status(400).json({ message: "product must be an object", success: false });
  }else if(!product.id || !product.title || !product.description || !product.price || !product.thumbnail){
    res.status(400).json({ message: "product must contain id, title, description, price, thumbnail", success: false });
  }else if(product.price <= 0 || typeof product.price !== 'number', typeof product.description !== 'string', typeof product.thumbnail !== 'string' || typeof product.title !== 'string' ){
    res.status(400).json({ message: "Invalid data type in the field please check the data", success: false });
  } else {
    next();
  }
}

export function addProductDataValidate(req, res, next) {
  const { id, title, description, price, thumbnail } = req.body;
  if(!title || !description || !price || !thumbnail || !id){
    res.status(400).json({ message: "mandatory fields are missing , title, description, price, thumbnail and id are required", success: false });
  }else if(typeof id !== 'number' || typeof title !== 'string' || typeof description !== 'string' || typeof price !== 'number' || typeof thumbnail !== 'string'){
    res.status(400).json({ message: "Invalid data type in the field please check the data", success: false });
  } else{
    next();
  }
}

export function updateProductDataValidate(req, res, next) {
  const { id, title, description, price, thumbnail } = req.body;
  if(!title || !description || !price || !thumbnail || !id){
    res.status(400).json({ message: "mandatory fields are missing, id, title, description, price, thumbnail are required", success: false });
  }else{
    next();
  }
}


