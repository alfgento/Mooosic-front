import './UserForm.css'

function UserForm () {
    return(
        <form action="submit" method="post" className="sign-in-form">
            <h2>Sign In</h2>
            <label for="username">User name</label>
            <input type="text" id="username"/>
            <label for="name">Name</label>
            <input type="text" id="name"/>
            <label for="surname">Surname</label>
            <input type="text" id="surname"/>
            <label for="age">Age</label>
            <input type="text" id="age"/>
            <label for="email">Email</label>
            <input type="text" id="email"/>
            <button type="submit" onSubmit="" method="POST">Create user</button>
        </form>
    )
}
export default UserForm