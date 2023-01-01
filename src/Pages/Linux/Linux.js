import React from 'react';
import ContentItem from '../../Content/ContentItem';
import Sidebar from '../../UI/Sidebar';

const Linux = () => {
    return (        
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action" href="#list-intro">intro</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div className='content-item'>
                        <h2 id="list-intro">Linux</h2>
                    </div>
                </section>
            </div>

        </div>
        )
}

export default Linux;