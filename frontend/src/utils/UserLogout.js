import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { useContext } = require("react");
const { UserContext } = require("../context");

export function UserLogout() {

    const{setState} = useContext(UserContext)
    const navigate = useNavigate()

    // update context
    setState(null);

    // Update the local storage
    window.localStorage.removeItem("auth");
    navigate("/login")
    toastsuccess("User LoggedOut Successfully")
  }