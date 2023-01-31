import React from 'react';

// Created on: 2016-03-23
const RaspberryJukebox = () => {
    return (
        <div className='row'>
            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Raspberry Pi Jukebox</h1>
                    <h4 className="text-secondary">Streaming internet radio</h4>
                    <p>Here I used a <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer">Raspberry Pi</a> to stream internet radio. <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a> and <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">Flask</a> were used to create a simple website interface that resided on the Raspberry Pi using the Apache web engine. This simple site had buttons to control the LEDs, the station to stream and to adjust the volume.</p>
                    <p>The LEDs were controlled using an <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">Arduino</a> and a <a href="https://www.analog.com/media/en/technical-documentation/data-sheets/max7219-max7221.pdf" target="_blank" rel="noopener noreferrer">Maxim MAX7219 IC</a>.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/disassembly-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/disassembly-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/disassembly.webp`} />
                        <img alt="Jukebox disassembly" src={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/disassembly.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/old-interiour-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/old-interiour-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/old-interiour.webp`} />
                        <img alt="Jukebox old interiour" src={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/old-interiour.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/led-matrix-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/led-matrix-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/led-matrix.webp`} />
                        <img alt="L E D Matrix" src={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/led-martix.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/fully-assembled-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/fully-assembled-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/fully-assembled-w800.webp`} />
                        <img alt="Fully assembled jukebox with lights" src={`${process.env.PUBLIC_URL}/images/projects/raspberry-jukebox/fully-assembled-w800.webp`}/>
                    </picture>                    
                </section>
                
            </div>
        </div>
    )
}

export default RaspberryJukebox;