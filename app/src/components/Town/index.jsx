import React from 'react';
import validationService from '../../services/validationService';
import townService from '../../services/townService';

class Town extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            errors: {
                name: '',
                country: ''
            }
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name = !validationService.townNameValidation(value)? 'Town should be at least 3 symbols long and contains only letters!' : '';
                break;
            case 'country':
                errors.country = !validationService.countryNameValidation(value) ? 'Country should be at least 4 symbols long and contains only letters!' : '';
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
            townService.create(data).then(() => {
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
                        <h3 className="card-title mt-3 text-center">Add Town</h3>
                        <hr />
                        <form onSubmit={this.submitHandler}>
                            {/* NAME */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-building"></i></span>
                                </div>
                                <input type="text" className="form-control" name="name" onChange={this.changeHandler} placeholder="Town" />
                            </div>
                            {errors.name.length > 0 && <div className="alert alert-warning">{errors.name}</div>}

                            {/* COUNTRY */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-globe"></i> </span>
                                </div>
                                <input type="text" className="form-control" name="country" onChange={this.changeHandler} placeholder="Country" />
                            </div>
                            {errors.country.length > 0 && <div className="alert alert-warning">{errors.country}</div>}

                            {/* SUBMIT */}
                            <div class="form-group">
                                <button type="submit" className="btn btn-danger btn-block">Add Town</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        );
    };
};

export default Town;