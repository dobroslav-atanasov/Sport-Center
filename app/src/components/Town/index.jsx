import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Town extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTownName = this.handleTownName.bind(this);
        this.handleCountryName = this.handleCountryName.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ redirect: true });

        axios.post(`http://localhost:3333/api/town/create`, {
            name: this.state.name,
            country: this.state.country
        }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    handleTownName(e) {
        this.setState({ name: e.target.value });
    }

    handleCountryName(e) {
        this.setState({ country: e.target.value });
    }

    render() {
        const redirect = this.state.redirect;

        return (
            redirect ? <Redirect to="/" /> :
                <div className="container">
                    <br />
                    <div className="card bg-light">
                        <article className="card-body mx-auto">
                            <h3 className="card-title mt-3 text-center">Add Town</h3>
                            <hr />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-building"></i></span>
                                    </div>
                                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleTownName} placeholder="Town" />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-globe"></i> </span>
                                    </div>
                                    <input type="text" name="country" class="form-control" value={this.state.country} onChange={this.handleCountryName} placeholder="Country" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-warning btn-block">Add Town</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
        )
    }
}

export default Town;