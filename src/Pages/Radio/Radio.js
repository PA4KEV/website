import React from 'react';

const Radio = () => {
    return (        
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-links">links</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div className='content-item'>
                        <h1 id="list-intro" className="text-primary">Radio amateur</h1>
                        <p>I am a (beginner) ham radio amateur! My callsign is: <b>PA4KEV</b></p>
                        <p>This hobby involves experimenting with wireless communication and electronics. Without the magic of radio, we would not have television, wifi or mobile phones.</p>
                        <p>Here I post my notes on the hobby.</p>
                        <ul>
                        <li><a href="https://www.qrz.com/db/PA4KEV" target="_blank" rel="noopener noreferrer">https://www.qrz.com/db/PA4KEV</a></li>
                        <li><a href="https://www.eqsl.cc/" target="_blank" rel="noopener noreferrer">https://www.eqsl.cc/</a></li>
                        <li><a href="http://www.hamqsl.com/" target="_blank" rel="noopener noreferrer">http://www.hamqsl.com/</a></li>
                        </ul>
                    </div>
                </section>

                <section className="content-section">
                    <div className='content-item'>
                        <h2 id="list-links" className="text-primary">Links</h2>
                        <p>Some links I found of websites to other amateurs and information sources.</p>
                        <ul>
                            <li><a href="https://www.dj0ip.de/" target="_blank" rel="noopener noreferrer">https://www.dj0ip.de/</a></li>
                            <li><a href="http://pa0ebc.nl/pe1kqp/s-match-tuner.html" target="_blank" rel="noopener noreferrer">http://pa0ebc.nl/pe1kqp/s-match-tuner.html</a></li>
                            <li><a href="https://www.pc5e.nl/" target="_blank" rel="noopener noreferrer">https://www.pc5e.nl/</a></li>
                            <li><a href="http://www.pd0cq.nl/" target="_blank" rel="noopener noreferrer">http://www.pd0cq.nl/</a></li>
                            <li><a href="https://www.qsl.net/on7px/" target="_blank" rel="noopener noreferrer">https://www.qsl.net/on7px/</a></li>
                        </ul>

                        <ul>
                            <li><a href="https://www.signalintegrityjournal.com/" target="_blank" rel="noopener noreferrer">https://www.signalintegrityjournal.com/</a></li>
                            <li><a href="https://www.dspguide.com/" target="_blank" rel="noopener noreferrer">https://www.dspguide.com/</a></li>
                            <li><a href="https://fieldradio.org/best-ham-radio-antenna-for-apartments/" target="_blank" rel="noopener noreferrer">https://fieldradio.org/best-ham-radio-antenna-for-apartments/</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/J-pole_antenna" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/J-pole_antenna</a></li>
                            <li><a href="https://www.amateurradio.com/w5olf-website/" target="_blank" rel="noopener noreferrer">https://www.amateurradio.com/w5olf-website/</a></li>
                            <li><a href="https://www.qrp-labs.com/clockn.html" target="_blank" rel="noopener noreferrer">https://www.qrp-labs.com/clockn.html</a></li>
                        </ul>

                        <ul>
                            <li><a href="http://sdr.shbrg.nl:8074/" target="_blank" rel="noopener noreferrer">http://sdr.shbrg.nl:8074/</a></li>
                            <li><a href="http://websdr.ewi.utwente.nl:8901/" target="_blank" rel="noopener noreferrer">http://websdr.ewi.utwente.nl:8901/</a></li>
                        </ul>

                    </div>
                </section>
            </div>

        </div>
        )
}

export default Radio;