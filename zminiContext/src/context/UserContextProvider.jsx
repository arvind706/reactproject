import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{    // children means the data which we want to provide to the certain page
    const [user, setUser] = React.useState(null)
    return(
        // now what type of data it will pass to the next page and for that we make user and setUser
        <UserContext.Provider value={{user, setUser}}>   
        {children}     
        </UserContext.Provider>
    )
}

export default UserContextProvider