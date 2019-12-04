import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="container" style={{ marginTop: 30, marginBottom: 50, width: 100, height: 100 }}>
            <ReactLoading type="spin" color="#dc3545" />
            <p className="text-danger">
                Loading...
            </p>
        </div>
    );
};

export default Loading;