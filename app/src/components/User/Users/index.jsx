import React from 'react';
import userService from '../../../services/userService';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    };

    componentWillMount = () => {
        userService.getAllUsers()
            .then(users => {
                this.setState({ users: users });
            });
    };

    deleteUser = (event) => {
        const username = event.target.name;
        userService.deleteUser(username)
            .then((data) => {
                userService.getAllUsers()
                    .then(users => {
                        this.setState({ users: users });
                    });
            });
    };

    changeRole = (event) => {
        const username = event.target.name;
        userService.changeRole(username)
            .then((data) => {
                userService.getAllUsers()
                    .then(users => {
                        this.setState({ users: users });
                    });
            });
    };

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <br />
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Username</th>
                            <th className="text-center">Full name</th>
                            <th className="text-center">Role</th>
                            <th className="text-center">Change Role</th>
                            <th className="text-center">Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {users.map(u => <User
                            username={u.username}
                            firstName={u.firstName}
                            lastName={u.lastName}
                            role={u.role}
                            history={history} />)} */}
                        {users.map(u => <tr>
                            <td className="text-center align-middle" key={u.username}>{u.username}</td>
                            <td className="text-center align-middle" key={u.firstName.toString() + u.lastName.toString()}>{u.firstName} {u.lastName}</td>
                            <td className="text-center align-middle" key={u.role.toString()}>{u.role}</td>
                            <td className="text-center align-middle" key={u.username.toString() + u.role.toString()}>
                                <button className="btn btn-success btn-sm" name={u.username} onClick={this.changeRole}>
                                    Change role
                                </button>
                            </td>
                            <td className="text-center align-middle" key={u.role.toString() + u.username.toString()}>
                                <button className="btn btn-danger btn-sm" name={u.username} onClick={this.deleteUser}>
                                    Delete User
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Users;