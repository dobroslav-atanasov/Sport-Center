import React from 'react';
import validationService from '../../services/validationService';
import eventService from '../../services/eventService';

class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date: '',
            town: '',
            errors: {
                name: '',
                date: '',
                town: ''
            }
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'name':
                errors.name = value.length < 2 ? 'Event name should be at least 2 characters long!' : '';
                break;
            case 'date':
                errors.date = value === undefined ? 'Date is required!' : '';
                break;
            case 'town':
                errors.town = value !== this.state.password ? 'Passwords don\'t match!' : '';
                break;
            default:
                break;
        };

        this.setState({ errors, [name]: value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        if (validationService.formValidation(this.state.errors)) {
            eventService.create(data).then((data) => {
                this.props.history.push('/');
            });
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <br />
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Create Event</h3>
                        <hr />
                        <form>
                            {/* NAME */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-etsy"></i></span>
                                </div>
                                <input type="text" className="form-control" name="name" onChange={this.changeHandler} placeholder="Name" />
                            </div>
                            {errors.name.length > 0 && <div className="alert alert-warning">{errors.name}</div>}

                            {/* DATE */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-calendar"></i> </span>
                                </div>
                                <input type="date" className="form-control" name="date" />
                            </div>
                            {errors.date.length > 0 && <div className="alert alert-warning">{errors.date}</div>}

                            {/* TOWN */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-globe"></i></span>
                                </div>
                                <select className="form-control">
                                    <option selected=""> Select Town</option>
                                    <option>Sofia</option>
                                    <option>Varna</option>
                                </select>
                            </div>
                            {errors.town.length > 0 && <div className="alert alert-warning">{errors.town}</div>}

                            {/* SUBMIT */}
                            <div class="form-group">
                                <button type="submit" class="btn btn-danger btn-block">Create Event</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        );
    };
};

export default Event;