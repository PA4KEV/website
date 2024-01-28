import React from 'react';

const FD20231230NL = () => {
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
                        <h1 className="text-primary">Fieldday - Stiphoutse bossen, Kamerven</h1>
                        <p><i>2023-12-30</i></p>
                        <p>This was my second activation for <a href="https://wwff.co/" target="_blank" rel="noopener noreferrer">WWFF</a>.</p>

                        <p>Location WWFF: <strong>PAFF-0221</strong></p>

                        <h3>Equipment</h3>
                        <hr />
                        <p>My backpack (Osprey Farpoint 40) with equipment weighed 14 kilogram (30.8 lbs), which was just too heavy for me to make long bicycle journey with. Instead we used the motorhome of PA2WLE to travel to these woods.</p>
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Near_vertical_incidence_skywave" target="_blank" rel="noopener noreferrer">NVIS</a> antenna</li>
                            <li><a href="https://www.rigpix.com/yaesu/ft897.htm" target="_blank" rel="noopener noreferrer">Yaesu FT-897</a> transceiver</li>
                            <li>LDG AT-897 Plus automatische antenna tuner</li>
                            <li><a href="https://www.jackery.com/products/explorer-240-portable-power-station" target="_blank" rel="noopener noreferrer">Jackery Explorer 240</a> portable power supply</li>
                            <li>Cable with 12 Volt plug and a plug that goes in the transceiver</li>
                            <li>25 meter (82 feet) Aircell 7 coax cable with 2 <a href="https://nl.wikipedia.org/wiki/BNC-connector" target="_blank" rel="noopener noreferrer">BNC</a> connectors</li>
                            <li>10 meter (32.8 feet) glass fibre reinforced plastic telescopic mast</li>
                            <li>50 meter (164 feet) measuring tape</li>
                            <li>Tent pegs</li>
                            <li>Battery powered clockmodule with UTC time</li>
                            <li>Pipe wrench to tighten the nuts on antenna and to pull out the tent pegs</li>
                        </ul>

                        <p>In addition, some sandwiches, pen and a notepad along with a vademecum. The table and chairs came from PA2WLE's camper. Also the Jackery power supply would not fit in my backpack.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w800.webp`} />
                            <img alt="apparatuur" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w800.webp`} />
                        </picture>

                        <br />
                        <br />
                        <h3>Activation</h3>
                        <hr />

                        <p>The activation of this location went fine with 27 unique QSO's. Once I was spotted on the cluster, I was hailed by many stations quickly.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w800.webp`} />
                            <img alt="N V I S antenna" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w800.webp`} />
                        </picture>

                        <p>The location was <strong>PAFF-0221</strong>, de Stiphoutse bossen (The Stiphoutse woods), near the Kamerven (A "ven" is mere in English). Because of the recent heavy rain fall, there was plenty of water in the mere now.</p>
                        <p>Hikers will often pass by with their dogs, They are usually interested in the radio equipment and their dogs were usually interested in the ham sandwiches from my backpack.</p>
                        <p>Those who showed interest, thought that we were searching for extraterrestial lifeforms, doing measurements of even counting animals. It is a fun opportunity to tell people about the hobby. Everyone showed genuine interest in it.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-location-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-location-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-location-w800.webp`} />
                            <img alt="location" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-location-w800.webp`} />
                        </picture>

                        <p></p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-operator-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-operator-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-operator-w800.webp`} />
                            <img alt="operator" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-operator-w800.webp`} />
                        </picture>

                        <p>The weather was cloudy and the temperature about 9° Celcius (48° Fahrenheit). The cold wind does make it difficult to write callsigns down with bare hands though.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w800.webp`} />
                            <img alt="mobiele setup" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w800.webp`} />
                        </picture>
                        <br />
                        <br />
                        <h3>Learning moments</h3>
                        <hr />
                        <p>I learnt much from this activation.</p>
                        <ol>
                            <li>The Aircell 7 coax cable was too long, to unwieldy and too heavy. A RG58 cable would have been better.</li>
                            <li>Use a screwdriver and spanner instead of a pipe wrench.</li>
                            <li>The wind keeps blowing away the paper of my notepad, this should be fixed.</li>
                            <li>Make ropes and cables more visible, so that people cannot trip over them.</li>
                            <li>Put away the sandwiches, so that curious dogs cannot reach them.</li>
                            <li>During activation, indicate that you are a <strong>portable</strong> station. Other stations will then understand better why the connection is not perfect.</li>
                            <li>The measuring tape was too big and not really required anyway. A rope of 12 meter (40 feet) would have been fine. Its not required to measure anything else anyway.</li>
                        </ol>
                        <p>I could use other kinds of gloves, so I can still write with them during cold weather.</p>
                        <p>The little UTC clock module was perfect, during a pile-up I found it handy to instantly have the right time in front of me. Using my phone doesn't really work for me. </p>

                        <p>Finally, its important to clean up your cables. It will save much time during deployment and tearing down the antenna. Its really annoying to untangle these in the field.</p>
                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-roll-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-roll-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-roll-w800.webp`} />
                            <img alt="antenna rolls" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-roll-w800.webp`} />
                        </picture>

                    </div>
                </section>
            </div >
        </div >
    )
}

export default FD20231230NL;
