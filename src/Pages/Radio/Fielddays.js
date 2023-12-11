import React from 'react';

const Fielddays = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div id="list-intro" className='content-item'>
                        <h1 className="text-primary">Field day - Strabrechtse Heide</h1>
                        <p><i>2023-11-11</i></p>
                        <p>This was my first activation for <a href="https://pota.app/" target="_blank" rel="noopener noreferrer">POTA</a> and <a href="https://wwff.co/" target="_blank" rel="noopener noreferrer">WWFF</a>. It was amazing!</p>

                        <p>Together with the motorhome of PA2WLE I took my Yaesu FT-897 to the <a href="https://en.wikipedia.org/wiki/Strabrechtse_Heide" target="_blank" rel="noopener noreferrer">Strabrechtse Heide</a> as activator of this park.<br />
                            Location POTA: <strong>PA-0026</strong>, location WWFF: <strong>PAFF-0058</strong><br />
                            PA2WLE utilize an ICOM IC-705 made connections with Morse.</p>

                        <p>The stations that try to connect to our station, are called the &ldquo;Hunters&rdquo; or &ldquo;Chasers&rdquo;.</p>

                        <p>We had the luxurity to operate from a parking spot to make our connections.
                            We used an <a href="https://en.wikipedia.org/wiki/Near_vertical_incidence_skywave" target="_blank" rel="noopener noreferrer">NVIS</a>-antenna, created by PA0ABG. After getting permission over the telephone from the owner, we set up the mast on a 13x13 meter (42.5x42.5 feet) patch within a nearby field.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w800.webp`} />
                            <img alt="N V I S antenna" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w800.webp`} />
                        </picture>

                        <p>The vehicle we used, (Citroën Globecar Globescout R), had an additional 12 Volt battery from which we could supply our equipment with power. Next time we intend to set up further in the park, so we will require a mobile battery as well.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w800.webp`} />
                            <img alt="Mobile radio station in van" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w800.webp`} />
                        </picture>


                        <p>On SSB I made 16 connections. On CW, PA2WLE made 25 connections.
                            For me as beginner, this was quite a lot.</p>

                        <p>Operating practice:
                            <br />
                            Once you have an available frequency, valid in the bandplan (with 5khz above and below also free), you can get started.</p>

                        <p>Start by calling: "CQ CQ, PA4KEV, Flaura and Fauna, WWFF"
                            or: "CQ CQ, PA4KEV, Parks on the Air, POTA"
                            <br /><br />
                            The other station will call you with only their callsign.
                            Repeat the callsign of the other station, until the station replies with a &ldquo;Roger, roger&rdquo; or a &ldquo;QSL&rdquo;.
                            <br /><br />
                            Give the signal report (59) and end the QSO. You can do a greeting of course, but do not start a conversation. There are more stations waiting and want to make a connection.
                            <br /><br />
                            For example:<br />
                            <table className='table-dialog'>
                                <tr><td>Me:</td><td><i>&ldquo;CQ CQ, PA4KEV, Flaura and Fauna, WWFF&rdquo;</i></td></tr>
                                <tr><td>They:</td><td><i>&ldquo;PA0--C&rdquo;</i></td></tr>
                                <tr><td>Me:</td><td><i>&ldquo;PA0 again&rdquo; or; &ldquo;Ending with Charlie again&rdquo;</i></td></tr>
                                <tr><td>They:</td><td><i>&ldquo;PA0ABC, Papa Alpha Zero Alpha Bravo Charlie&rdquo;</i></td></tr>
                                <tr><td>Me:</td><td><i>&ldquo;PA0ABC QSL?&rdquo;</i></td></tr>
                                <tr><td>They:</td><td><i>&ldquo;Roger roger, you are a 59&rdquo;</i></td></tr>
                                <tr><td>Me:</td><td><i>&ldquo;You are 59, thank you for the contact! 44, 73&rdquo;</i></td></tr>
                            </table>
                        </p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w800.webp`} />
                            <img alt="Mobile radio station in van" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w800.webp`} />
                        </picture>

                        <p>In the case of WWFF, you can greet one another at the end with a &ldquo;44&rdquo;, together with the standard &ldquo;73&rdquo;.</p>

                        <p>I noted all my connections on paper. Doing this structurized is very important, because those scribbles need to become a valid logbook.</p>

                        <p>It is amazing to make connections all over the world, especially to do so in the field. The challenge of course is to become as remote and mobiele as possible, with the least amount of power and equipment.</p>

                        <p>What I missed during this activation and will bring next time:
                            <ul>
                                <li>UTC clock module</li>
                                <li>audiosplitter (So 2 headphones may be connected to 1 transceiver)</li>
                            </ul>
                        </p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-2-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-2-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-2-w800.webp`} />
                            <img alt="N V I S antenna" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-2-w800.webp`} />
                        </picture>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Fielddays;
