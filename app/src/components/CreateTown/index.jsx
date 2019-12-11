import React, { Fragment } from 'react';
import MappleToolTip from 'reactjs-mappletooltip';
import validationService from '../../services/validationService';
import townService from '../../services/townService';
import Loading from '../Loading';
import constants from '../../constants/constants';

class CreateTown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            imageUrl: '',
            errors: {
                name: constants.createTown.TOWN_NAME_REQUIRED,
                country: constants.createTown.COUNTRY_NAME_REQUIRED,
                imageUrl: constants.createTown.IMAGE_URL_REQUIRED
            }
        };
    };

    changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                if (this.state.towns.includes(value)) {
                    errors.name = constants.createTown.TOWN_EXIST;
                } else if (!validationService.townNameValidation(value)) {
                    errors.name = constants.createTown.INVALID_TOWN;
                } else {
                    errors.name = '';
                }
                break;
            case 'country':
                errors.country = !validationService.countryNameValidation(value) ? constants.createTown.INVALID_COUNTRY : '';
                break;
            case 'imageUrl':
                errors.imageUrl = !validationService.imageUrlValidation(value) ? constants.createTown.INVALID_IMAGE_URL : '';
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
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="card bg-light">
                            <article className="card-body mx-auto">
                                <h3 className="card-title mt-3 text-center">Add Town</h3>
                                <hr />
                                <form onSubmit={this.submitHandler}>
                                    {/* NAME */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-building"></i></span>
                                                </div>
                                                <input id="name" type="text" className="form-control" name="name" onChange={this.changeHandler} placeholder="Town" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.name.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Town name is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.name}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* COUNTRY */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-globe"></i> </span>
                                                </div>
                                                <input id="country" type="text" className="form-control" name="country" onChange={this.changeHandler} placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.country.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Coutnry is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.country}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* IMAGE URL */}
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i class="fa fa-image"></i> </span>
                                                </div>
                                                <input id="imageUrl" type="text" className="form-control" name="imageUrl" onChange={this.changeHandler} placeholder="Image Url" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            {errors.imageUrl.length === 0
                                                ? <MappleToolTip><div className="text-success"><i className="fa fa-check"></i></div><div className="text-success">Image url is correct!</div></MappleToolTip>
                                                : <MappleToolTip><div className="text-danger"><i className="fa fa-exclamation-triangle"></i></div><div className="text-danger">{errors.imageUrl}</div></MappleToolTip>}
                                        </div>
                                    </div>

                                    {/* SUBMIT */}
                                    <div class="form-group">
                                        <button type="submit" className="btn btn-danger btn-block">Add Town</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default CreateTown;