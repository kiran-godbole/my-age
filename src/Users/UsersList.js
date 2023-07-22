import React from "react";

import Card from "../Components/UI/Card";
import classes from './UsersList.module.css';
const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.user.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} year old ) {user.collage}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList;