import React, { useState } from 'react';

const AddUserForm = (props) => {

    const initialFormState = { id: null, name: '', username: '' };
    const [ user, setUser ] = useState(initialFormState);

    const handelInputChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    return(
        <form onSubmit={e => {
            e.preventDefault();
            if(!user.name || !user.username)
                return
            
            props.addUser(user);
            setUser(initialFormState);
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handelInputChange} />
            <label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handelInputChange} />
			<button>Add new user</button>
        </form>
    )
}

export default AddUserForm;