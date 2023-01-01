import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
    <div className="sidebar col-3 position-fixed">
        <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href={"#" + props.id}>{props.title}</a>
        </div>
    </div>        
    )
}

export default Sidebar;
