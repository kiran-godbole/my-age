import React, { useState } from 'react';
import Card from '../Components/UI/Card';
import classes from './AddUser.module.css';
import Button from '../Components/UI/Button'
import Wrapper from '../Helpers/Wrappper';
import ErrorModal from '../Components/UI/ErrorModal.module';

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredage, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "please enter a valid name and age(non-empty values)."
            })
            return;
        }
        if (+enteredage < 1) {
            setError({
                title: "Invalid age",
                message: "please enter a valid age(> 0)."
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredage);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
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
        </Wrapper>
    )
}

export default AddUser;