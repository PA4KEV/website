import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
    <div className="sidebar col-3 position-fixed">
        <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
    </div>        
    )
}

export default Sidebar;
