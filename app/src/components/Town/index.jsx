import React from 'react';

const Town = () => {
    return (
        <div className="container">
            <br />
            <div className="card bg-light">
                <article className="card-body mx-auto">
                    <h3 className="card-title mt-3 text-center">Add Town</h3>
                    <hr />
                    <form>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-building"></i></span>
                            </div>
                            <input type="text" name="name" className="form-control" placeholder="Town" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-globe"></i> </span>
                            </div>
                            <input type="text" name="country" class="form-control" placeholder="Country" />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-warning btn-block">Add Town</button>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    )
};

export default Town;