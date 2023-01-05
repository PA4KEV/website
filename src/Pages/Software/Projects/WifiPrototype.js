import React from 'react';

const WifiPrototype = () => {
    return (   
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-wifi">Wi-Fi</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-tech">Technique</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-wifi" className="content-section">
                    <h1 className="text-primary">Wi-Fi prototype board</h1>
                    <h4 className="text-secondary">Embedded internship project</h4>
                    <p>This project was part of my internship at Dazzletek in Breda. They created intelligent lighting control solutions, but sadly the company no longer exists today. My assignment was to create a prototype that would allow a device to communicate over <a href="https://en.wikipedia.org/wiki/Wi-Fi" target="_blank" rel="noopener noreferrer">Wi-Fi</a>. I worked with <a href="https://en.wikipedia.org/wiki/PIC_microcontrollers" target="_blank" rel="noopener noreferrer">oscilloscopes</a> and electronics to adjust the hardware on the prototype.</p>
                    <p>I developed a software program using <a href="https://en.wikipedia.org/wiki/Bluegiga" target="_blank" rel="noopener noreferrer">C</a> in the OpenAT framework. At the end of my internship the prototype was realized into a product. The purpose of this assignment was to provide a device which communicates over <a href="https://en.wikipedia.org/wiki/General_Packet_Radio_Service" target="_blank" rel="noopener noreferrer">GPRS</a>, with the ability to communicate that data over Wi-Fi.</p>
                    <p>Instead of using the Wi-Fi stack, I was encouraged to develop my own data transfer logic over <a href="https://en.wikipedia.org/wiki/Serial_Peripheral_Interface" target="_blank" rel="noopener noreferrer">SPI</a>, which was then read over the oscilloscope.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/dazzletek/antares.webp`} alt="Antares main board"/>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/dazzletek/oscilloscope.webp`} alt="oscilloscope showing S P I protocol"/>
                </section>

                <section id="list-tech" className="content-section">
                    <h2 className="text-primary">Technique</h2>
                    <p>The WF121 by <a href="https://en.wikipedia.org/wiki/Bluegiga" target="_blank" rel="noopener noreferrer">BlueGiga</a>, which used a <a href="https://en.wikipedia.org/wiki/PIC_microcontrollers" target="_blank" rel="noopener noreferrer">PIC32 microcontroller</a>, had to be programmed to accept and transfer data to a specific <a href="https://en.wikipedia.org/wiki/Service_set_(802.11_network)#SSID" target="_blank" rel="noopener noreferrer">SSID</a>. Also the AirPrime SL6087 by <a href="https://www.sierrawireless.com/" target="_blank" rel="noopener noreferrer">Sierra Wireless</a> had to be programmed to relay the data to the Wi-Fi module.</p>
                    <p>I used <a href="https://www.wireshark.org/" target="_blank" rel="noopener noreferrer">Wireshark</a>, commandline debug and an oscilloscope to monitor the datatranfers. I also built a little <a href="https://en.wikipedia.org/wiki/Registered_jack" target="_blank" rel="noopener noreferrer">RJ45</a> connector that could be plugged on the prototype board so it could be easily programmed. Version control was done in <a href="https://subversion.apache.org/" target="_blank" rel="noopener noreferrer">Subversion</a>.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/dazzletek/wifi-board-prototype.webp`} alt="Wi-Fi prototype board final product"/>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/dazzletek/programming-batch.webp`} alt="programming a batch"/>

                </section>
            </div>
        </div>
    )
}

export default WifiPrototype;
