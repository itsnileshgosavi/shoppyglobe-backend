export function signUpdataValidate(req, res, next) {
  const { firstName, lastName, email, password, address, mobile } = req.body;
  //password regex password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number
  const pwdregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if ((!firstName, trim() || !lastName.trim() || !email.trim() || !password)) {
    res.status(400).json({ message: "All fields are required" });
  } else {
    if (!email.match(emailregex)) {
      return res.status(400).json({ message: "invalid email", success: false });
    }
    if (!password.match(pwdregex)) {
      return res
        .status(400)
        .json({
          message:
            "invalid password, password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
          success: false,
        });
    }
    next();
  }
}


