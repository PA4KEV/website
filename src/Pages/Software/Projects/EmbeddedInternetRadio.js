import React from 'react';

// Created on: 2014-03-07
const EmbeddedInternetRadio = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">Intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-development">Development</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-design">Design</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Embedded Internet Radio</h1>
                    <h4 className="text-secondary">Working with C</h4>

                    <p>This project gave me the opportunity to work with the SIR120 internet radio made by the company StreamIT. The radio involved connecting to exiting internet streams and interfacing with the <a href="https://en.wikipedia.org/wiki/Liquid-crystal_display" target="_blank" rel="noopener noreferrer">LCD</a> and buttons on the device. The code was written in <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a>.</p>                    
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/front-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/front-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/front.webp`} />
                        <img alt="Stream I T front of radio" src={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/front.webp`}/>
                    </picture>
                </section>

                <section id="list-development" className="content-section">
                    <h2 className="text-primary">Development</h2>
                    <p>The radio had an existing operating system called <a href="https://en.wikipedia.org/wiki/Ethernut" target="_blank" rel="noopener noreferrer">Nut/OS</a>, an open source OS. Nut/OS provided the TCP/IP stack we required to connect the device to the internet. The radio was able to play a select number of internet streams. The user could read the stream channel on the LCD and use the buttons to navigate between them.</p>
                    <p>This project often had code overhauls because our code kept moving towards a more <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank" rel="noopener noreferrer">OOP</a> approach using structs rather than large chunks of produral code.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/inside-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/inside-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/inside.webp`} />
                        <img alt="Stream I T inside of the radio" src={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/inside.webp`}/>
                    </picture>
                </section>

                <section id="list-design" className="content-section">
                    <h2 className="text-primary">Design</h2>
                    <p>A simple flowchart was created to show how the user could navigate through the menu.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/flowchart-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/flowchart-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/flowchart-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/flowchart.webp`} />
                        <img alt="Program flow chart" src={`${process.env.PUBLIC_URL}/images/projects/embedded-internet-radio/flowchart.webp`}/>
                    </picture>
                </section>
            </div>
        </div>
    )
}

export default EmbeddedInternetRadio;