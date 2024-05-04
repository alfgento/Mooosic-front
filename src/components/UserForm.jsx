import './UserForm.css'

function UserForm () {
    return(
        <form action="http://localhost:3000/user/createUser" method="POST" enctype="application/json" className="sign-in-form">
            <h2>Sign In</h2>
            <label htmlFor="username">User name</label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name'/>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name='surname'/>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" name='age'/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name='email'/>
            <button type="submit" >Create user</button>
        </form>
    )
}
export default UserForm