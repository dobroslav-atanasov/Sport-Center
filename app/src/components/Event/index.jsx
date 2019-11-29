import React from 'react';
import validationService from '../../services/validationService';
import eventService from '../../services/eventService';
import townService from '../../services/townService';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            town: '',
            towns: [],
            errors: {
                name: '',
                date: 'Date is required!',
                town: 'Town is required!'
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
                errors.town = value === 'Select Town' ? 'Town is required!' : '';
                break;
            default:
                break;
        };

        this.setState({ errors, [name]: value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        if (validationService.formValidation(this.state.errors)) {
            eventService.create(data).then((data) => {
                this.props.history.push('/');
            });
        }
    };

    componentDidMount = () => {
        townService.getTowns()
            .then(towns => {
                this.setState({ towns: towns });
            });
    };

    render() {
        const { errors, towns } = this.state;
        return (
            <div className="container">
                <br />
                <div className="card bg-light">
                    <article className="card-body mx-auto">
                        <h3 className="card-title mt-3 text-center">Create Event</h3>
                        <hr />
                        <form onSubmit={this.submitHandler}>
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
                                <input type="date" className="form-control" name="date" onChange={this.changeHandler} />
                            </div>
                            {errors.date.length > 0 && <div className="alert alert-warning">{errors.date}</div>}

                            {/* TOWN */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-globe"></i></span>
                                </div>
                                <select className="form-control" name="town" onChange={this.changeHandler}>
                                    <option selected=""> Select Town</option>
                                    {towns.map(t => <option key={t.name.toString()}>{t.name}</option>)}
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