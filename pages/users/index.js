import { Fragment } from "react"
import UsersList from "../../components/Users/List";

const Users = () => {
    return (<Fragment>
            <h1>Our writers</h1>
            <UsersList users={[]} />
        </Fragment>)
}

export default Users;