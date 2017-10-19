/**
 * Created by David Feng<sublime3@163.com>.
 * ComponentName Loading
 * Desc loading 菊花
 * GroupName flash-component
 */
import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames';
import './index.scss';


const propTypes = {
    open: PropTypes.bool.isRequired
};

const defaultProps = {
    open: false
};

const Loading = ({
                open,
                ...others
             }) => {

    let loadingShowClass = classNames({
        "loading-panel": true,
        "hidden": !open
    });

    return (

        <div className={loadingShowClass}>
            <div className="loading-icon"></div>
        </div>

    )

};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
