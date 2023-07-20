import React, { useState } from 'react';
import Card from '../Components/UI/Card';
import classes from './AddUser.module.css';
import Button from '../Users/Button';

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredage, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredage);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'> Username</label>
                <input
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                    id="username"
                    type="text" />
                <label htmlFor='userage'>Age(Years)</label>
                <input
                    onChange={ageChangeHandler}
                    value={enteredage}
                    id="userage"
                    type="number" />
                <Button type='submit'> Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;