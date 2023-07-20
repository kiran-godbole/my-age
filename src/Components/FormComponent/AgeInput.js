import React from "react";

const AgeInput = () =>{


    return(
        <form >
            <label> User Name</label>
            <input type="text" />
            <label >Age(Year)</label>
            <input type="number" />
            <button type="submit"> Add User</button>
        </form>
    )
}

export default AgeInput;