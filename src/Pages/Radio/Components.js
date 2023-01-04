import React from 'react';

const Components = () => {
    return (        
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-diode">diode</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div id="list-intro" className='content-item'>
                        <h1 className="text-primary">Electronic components</h1>
                        <p>These pages contain my notes on electronical components.</p>
                        <p>They are however, all in Dutch for now.</p>
                        
                    </div>
                </section>

                <section className="content-section">
                    <div id="list-diode" className='content-item'>
                        <h3 className="text-primary">Diode</h3>

                        <figure>
                            <img src={`${process.env.PUBLIC_URL}/images/components/diode.png`} alt="diode" />
                            <figcaption>Diode symbool. (Halfgeleiderdiode)</figcaption>
                        </figure>

                        <p><a className="mediaIcon mediaWikipedia" href="https://nl.wikipedia.org/wiki/Diode" target="_blank" rel="noreferrer noopener">Diode</a></p>

                        <p>De halfgeleiderdiodes worden gebruikt in gelijkrichters, om wisselstroom om te zetten in gelijkstroom.</p>

                        <p>Diodes hebben een <strong>lekstroom</strong>, deze neemt toe bij verhoging van de temperatuur.</p>

                        <hr/>
                        <h6>Zenerdiode</h6>

                        <figure>
                            <img src={`${process.env.PUBLIC_URL}/images/components/zenerdiode.png`} alt="zenerdiode"/>
                            <figcaption>Zenerdiode symbool.</figcaption>
                        </figure>

                        <p><a className="mediaIcon mediaWikipedia" href="https://nl.wikipedia.org/wiki/Zenerdiode" target="_blank" rel="noreferrer noopener">Zenerdiode</a></p>

                        <p>Zenerdiodes</p>

                        <figure>
                            <img src={`${process.env.PUBLIC_URL}/images/signals/zenerdiode-karakeristiek.png`} alt="zenerdiode karakteristiek"/>
                            <figcaption>Karakteristiek van een zenerdiode.</figcaption>
                        </figure>


                        <img src={`${process.env.PUBLIC_URL}/images/schematics/zenerdiode.png`} alt="zenerdiode"/>
                        <p>Als er een <strong>constante</strong> uitgangsspanning moet zijn, dan moet de ingangsspanning <strong>hoger</strong> zijn dan de zenerspanning.</p>
                        <hr/>

                        <img src={`${process.env.PUBLIC_URL}/images/schematics/diode-schakeling-1.png`} alt="diode schakeling"/>
                        <p>De dioden hebben een gelijke doorlaatkarakteristiek maar een verschillende belastbaarheid.</p>
                        <p>Gegeven zijn 4 combinaties. Welke combinatie van de hoogste U<sub>uit</sub> en grootste I<sub>uit</sub> kan deze schakeling geven?</p>
                        <table className='table'>
                        <tbody>
                        <tr><td>A.</td><td>U<sub>uit</sub> = 20V en I<sub>uit</sub> = 2A</td></tr>
                        <tr><td>B.</td><td>U<sub>uit</sub> = 20V en I<sub>uit</sub> = 3A</td></tr>
                        <tr><td>C.</td><td>U<sub>uit</sub> = 10V en I<sub>uit</sub> = 3A</td></tr>
                        <tr><td>D.</td><td>U<sub>uit</sub> = 10V en I<sub>uit</sub> = 2A</td></tr>
                        </tbody>
                        </table>

                        <p>D1 en D2 kunnen samen 3A doorlaten. Echter, als er 3A gaat stromen, wordt deze opgedeeld in 2x 1.5A. Maar D1 kan dit niet doorlaten, maar max 1A. Als er dus in totaal 2A gaat stromen, wordt deze stroom opgedeeld in 1A door D1 en 1A door D2.</p>
                        <p>Dus, opties B en C vallen al af.</p>
                        <p>Dit is het signaal dat door de schakeling loopt.</p>
                        <img src={`${process.env.PUBLIC_URL}/images/signals/diode-schakeling-1-signaal.png`} alt="diode schakeling signaal 1"/>
                        <p>De maximum sperspanning voor D1 en D2 is 30 Volt. Dus een wisselstroom met een top-top waarde van 30V.</p>
                        <p>Als de wisselstroom gaat stromen, gaat de electrolytische condensator opladen en ontladen (stippelijn). Hierdoor onstaat een onregelmatige gelijkstroom. De amplitude van deze stroom is dus de helft van 30V, dus 15V.</p>
                        <p>Hierdoor valt optie A ook af, dus optie D blijft over.</p>

                        <p><i>Antwoord:</i> <b>D. U<sub>uit</sub> = 10V en I<sub>uit</sub> = 2A</b></p>
                        <hr/>

                        <p>De dioden hebben gelijke doorlaatkarakteristieken maar de belastbaarheid is verschillend.</p>

                        <img src={`${process.env.PUBLIC_URL}/images/schematics/diode-schakeling-2.png`} alt="diode schakeling signaal 2"/>

                        <p>Kies uit de combinaties de hoogste U<sub>uit</sub> en grootste I<sub>uit</sub> die deze schakeling kan leveren.</p>
                        <table className='table'>
                        <tbody>
                        <tr><td>A.</td><td>U<sub>uit</sub> = 20V en I<sub>uit</sub> = 1A</td></tr>
                        <tr><td>B.</td><td>U<sub>uit</sub> = 10V en I<sub>uit</sub> = 2A</td></tr>
                        <tr><td>C.</td><td>U<sub>uit</sub> = 30V en I<sub>uit</sub> = 2A</td></tr>
                        <tr><td>D.</td><td>U<sub>uit</sub> = 10V en I<sub>uit</sub> = 1A</td></tr>
                        </tbody>
                        </table>


                        <p><i>Antwoord:</i> <b>B. U<sub>uit</sub> = 10V en I<sub>uit</sub> = 2A</b></p>
                        <hr/>

                        <img src={`${process.env.PUBLIC_URL}/images/schematics/zener-diode1.png`} alt="zenerdiode schakeling"/>
                        <p>Gegeven zijn schakeling en karakteristiek. Hoe ziet het spanningssignaal U uit over de zenerdiode?</p>

                        <p><i>Antwoord:</i></p>
                        <img src={`${process.env.PUBLIC_URL}/images/signals/zener-diode1.png`} alt="zenerdiode signaal"/>

                        <hr/>

                        <img src={`${process.env.PUBLIC_URL}/images/schematics/zener-diode2.png`} alt="zenerdiode schakeling"/>
                        <p>De belastingsstroom van I<sub>bel</sub> varieert van 100mA tot 300mA.
                        Wat is het maximaal gedissipeerde vermogen door de zenerdiode?</p>

                        <p>Op de zenerdiode staat een spanning van 10V.
                        Dat komt doordat de ingangsspanning 20V is en de uitgangsspanning 10V.
                        Er moet dus 10V op de zenerdiode staan.</p>

                        <p>De maximumstroom van I<sub>bel</sub> is 300mA.</p>
                        <p>P = U*I<br/>
                        P = 10*0.3</p>

                        <p><i>Antwoord:</i> <b>3 Watt</b></p>

                        <hr/>
                        
                    </div>
                </section>

            </div>

        </div>
        )
}

export default Components;