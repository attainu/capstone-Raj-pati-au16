import React from 'react'
import {Link } from 'react-router-dom';
import {PATHS } from '../../config';

function NotFound() {
    return (
        <div className="homebtn">
            <Link to={PATHS.HOME}>Go to Home</Link>
        </div>
    )
}

export default NotFound
