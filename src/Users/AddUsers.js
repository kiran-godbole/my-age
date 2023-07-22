import React, { useState, useRef } from 'react';
import Card from '../Components/UI/Card';
import classes from './AddUser.module.css';
import Button from '../Components/UI/Button'
import Wrapper from '../Helpers/Wrappper';
import ErrorModal from '../Components/UI/ErrorModal.module';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collageInputRef = useRef();

    
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName= nameInputRef.current.value;
        const enteredUserAge= ageInputRef.current.value;
        const enteredUserCollage= ageInputRef.current.value;

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredUserCollage.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "please enter a valid name and age(non-empty values)."
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter a valid age(> 0)."
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge, enteredUserCollage);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collageInputRef.current.value = '';
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
                        id="username"
                        type="text"                        
                        ref={nameInputRef}
                    />
                    <label htmlFor='userage'>Age(Years)</label>
                    <input
                        id="userage"
                        type="number"                        
                        ref={ageInputRef}
                    />
                    <label htmlFor='usercollage'>College name</label>
                    <input
                        id="usercollage"
                        type="text"                        
                        ref={collageInputRef}
                    />
                    <Button type='submit'> Add user</Button>
                </form>

            </Card>
        </Wrapper>
    )
}

export default AddUser;