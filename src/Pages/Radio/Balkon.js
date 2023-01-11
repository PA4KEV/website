import React from 'react';

const Balkon = () => {
    return (        
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-dipole">dipole</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div id="list-intro" className='content-item'>
                        <h1 className="text-primary">Balcony antenna</h1>
                        <p>Living in an appartment brings great challenges for a radio amateur home setup.</p>
                        <p>This page describes my findings and improvements that I made to create a working balcony setup.</p>
                    </div>
                </section>

                <section className="content-section">
                    <div id="list-dipole" className='content-item'>
                        <h3 className="text-primary">Dipole</h3>
                        <p>A dipole with a 1:1 Balun was the first HF antenna I attempted to try out.</p>
                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/antenna/balun-string-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/antenna/balun-string-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/antenna/balun-string-w800.webp`} />
                            <img alt="1:1 Balun on a string" src={`${process.env.PUBLIC_URL}/images/radio/antenna/balun-string-w800.webp`}/>
                        </picture>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Balkon;
