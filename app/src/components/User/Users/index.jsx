import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';
import userService from '../../../services/userService';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
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

    searchUsers = (event) => {
        event.preventDefault();
        const { users } = this.state;
        const search = event.target.value.toLowerCase();
        if (search === '') {
            userService.getAllUsers()
                .then(users => {
                    this.setState({ users: users });
                });
        } else {
            const result = users.filter(x => x.username.toLowerCase().includes(search));
            this.setState({ users: result });
        }
    };

    render() {
        const { users } = this.state;
        return (
            <Fragment>
                {users ?
                    <div className="container">
                        <div className="row" style={{ marginTop: 30, marginBottom: 20 }}>
                            <div className="col-md-4 offset-md-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchUsers} placeholder="Search" />
                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
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
                    : <div className="container" style={{ marginTop: 30, marginBottom: 50, width: 100, height: 100 }}>
                        <ReactLoading type="spin" color="#dc3545" />
                        <p className="text-danger">
                            Loading...
                        </p>
                    </div>
                }
            </Fragment>
        );
    };
};

export default Users;