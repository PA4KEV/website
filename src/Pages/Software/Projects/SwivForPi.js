import React from 'react';

// Created on: 2014-04-04
const SwivForPi = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-hardware">Hardware</a>                    
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Embedded Game</h1>
                    <h4 className="text-secondary">Vertical shooter</h4>
                    <p>A simple vertical space shooter created for the <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer">Raspberry Pi</a>. The game is played with regular keyboard and a custom joystick setup. The game was programmed in Python using the <a href="https://www.pygame.org/" target="_blank" rel="noopener noreferrer">PyGame</a> library. This project was mainly to create small game and interface it with a custom hardware setup. The setup uses an analog joystick to control the player's helicopter. An <a href="https://en.wikipedia.org/wiki/Analog-to-digital_converter" target="_blank" rel="noopener noreferrer">ADC (Analog Digital Converter)</a> samples the analog data into digital data so that the Raspberry Pi (version 1, type B) could parse the data.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/swivforpi/title.webp`} alt="S W I V for Pi title screen"/>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/swivforpi/screenshot.webp`} alt="S W I V for Pi screenshot"/>
                </section>

                <section id="list-hardware" className="content-section">
                    <h2 className="text-primary">Hardware</h2>
                    <p>Simple components were placed onto a breadboard and the joystick's analog resistive data would be converted into digital data. This data would be read by the GPIO pins and used to determine how the helicopter moves over the X- and Y-axis. To help with understanding electronic logic, an oscilloscope was used.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-top-view-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-top-view-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-top-view-w800.webp`} />
                        <img alt="Breadboard with components top view" src={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-top-view-w800.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-front-view-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-front-view-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-front-view-w800.webp`} />
                        <img alt="Breadboard with components front view" src={`${process.env.PUBLIC_URL}/images/projects/swivforpi/breadboard-front-view-w800.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/oscilloscope-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/oscilloscope-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/swivforpi/oscilloscope-w800.webp`} />
                        <img alt="Breadboard with components top view" src={`${process.env.PUBLIC_URL}/images/projects/swivforpi/oscilloscope-w800.webp`}/>
                    </picture>
                </section>
            </div>

        </div>
    )
}

export default SwivForPi;