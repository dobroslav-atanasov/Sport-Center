import React, { Fragment } from 'react';
import MappleToolTip from 'reactjs-mappletooltip';
import validationService from '../../../services/validationService';
import eventService from '../../../services/eventService';
import townService from '../../../services/townService';
import authService from '../../../services/authService';
import Loading from '../../Loading';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            date: '',
            description: '',
            town: '',
            errors: {
                name: 'Event name is required!',
                location: 'Location is required!',
                date: 'Date is required!',
                description: 'Description is required!',
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
            case 'location':
                errors.location = value.length < 5 ? 'Location should be at least 2 characters long!' : '';
                break;
            case 'date':
                errors.date = value === undefined ? 'Date is required!' : '';
                break;
            case 'description':
                errors.description = !validationService.eventDescriptionValidation(value) ? 'Description should be at least 50 symbols and contains only letters, digits and special symbols /.,!?()/!' : '';
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
        const creatorId = authService.getUserInfo().id;
        if (validationService.formValidation(this.state.errors)) {
            eventService.create(data, creatorId).then((data) => {
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
            <Fragment>
                {towns ?
                    <div className="container" style={{ marginBottom: 50, marginTop: 30 }}>
                        <div className="card bg-light">
                            <article className="card-body mx-auto">
                                <h3 className="card-title mt-3 text-center">Create Event</h3>
                                <hr />
                                <form onSubmit={this.submitHandler}>
                                    {/* NAME */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-etsy"></i></span>
                                                </div>
                                                <input type="text" className="form-control" name="name" onChange={this.changeHandler} placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.name.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Event name is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.name}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* LOCATION */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i class="fa fa-map-marker"></i></span>
                                                </div>
                                                <input type="text" className="form-control" name="location" onChange={this.changeHandler} placeholder="Location" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.location.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Location name is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.location}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* DATE */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-calendar"></i> </span>
                                                </div>
                                                <input type="datetime-local" className="form-control" name="date" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.date.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Date is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.date}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i class="fa fa-text-height"></i> </span>
                                                </div>
                                                <textarea className="form-control" rows="7" name="description" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.description.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Description is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.description}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* TOWN */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-globe"></i></span>
                                                </div>
                                                <select className="form-control" name="town" onChange={this.changeHandler}>
                                                    <option selected=""> Select Town</option>
                                                    {towns.map(t => <option key={t.toString()}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.town.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Town is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.town}</div></MappleToolTip>}
                                        </div>
                                    </div>
                                    {/* {errors.town.length > 0 && <div className="alert alert-warning"><i class="fa fa-exclamation-triangle"></i> {errors.town}</div>} */}

                                    {/* SUBMIT */}
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-danger btn-block">Create Event</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                    : <Loading />}
            </Fragment>
        );
    };
};

export default CreateEvent;