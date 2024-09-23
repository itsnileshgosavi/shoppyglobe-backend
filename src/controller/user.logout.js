
export const userLogout = (req, res) => {
    try {
      res.clearCookie("authtoken"); //clearing cookie
      res.status(200).json({ message: "user logged out", success: true });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", success: false });
    }
  }