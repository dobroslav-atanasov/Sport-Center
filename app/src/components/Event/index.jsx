import React from 'react';

const Event = () => {
    return (
        <div className="container">
            <br />
            <div className="card bg-light">
                <article className="card-body mx-auto">
                    <h3 className="card-title mt-3 text-center">Create Event</h3>
                    <hr />
                    <form>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-etsy"></i></span>
                            </div>
                            <input type="text" name="name" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-calendar"></i> </span>
                            </div>
                            <input type="date" name="country" class="form-control" placeholder="Country" />
                        </div>
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
                        <div class="form-group">
                            <button type="submit" class="btn btn-danger btn-block">Create Event</button>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    )
};

export default Event;