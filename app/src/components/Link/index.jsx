import React from 'react';

function Link({ children, url }) {
    return <li className="listItem">
        <a href={url}>{children}</a>
    </li>
};

export default Link;