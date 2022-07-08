import { useContext } from "react";
import PageContext from "../PageContext";

const Avatar = () => {
  const page = useContext(PageContext)
  if (page.isLoggedIn) {
    return( <div>User logged in</div> )
  } else {
    return ( <div>Not logged in</div>)
  }
}

export default Avatar;