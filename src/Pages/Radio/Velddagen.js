import React from 'react';

const Velddagen = () => {
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
                        <h1 className="text-primary">Velddag - Strabrechtse Heide</h1>
                        <p><i>2023-11-11</i></p>
                        <p>Dit was mijn eerste mobiele activatie voor <a href="https://pota.app/" target="_blank" rel="noopener noreferrer">POTA</a> en <a href="https://wwff.co/" target="_blank" rel="noopener noreferrer">WWFF</a>. Het was geweldig!</p>

                        <p>Samen met de camper van PA2WLE ben ik met mijn Yaesu FT-897 naar de <a href="https://www.staatsbosbeheer.nl/uit-in-de-natuur/locaties/strabrechtse-heide" target="_blank" rel="noopener noreferrer">Strabrechtse Heide</a> gegaan als Activator van dit park.<br />
                            Locatie POTA: PA-0026, locatie WWFF: PAFF-0058<br />
                            PA2WLE gebruikte een ICOM IC-705 en heeft vooral verbindingen gemaakt met Morse.</p>

                        <p>De stations die verbinding met ons willen maken, zijn de Hunters.</p>

                        <p>We hadden de luxe om vanuit de parkeerplaats met de camper een verbinding kunnen maken.
                            We hebben een <a href="https://en.wikipedia.org/wiki/Near_vertical_incidence_skywave" target="_blank" rel="noopener noreferrer">NVIS</a>-antenne gebruikt, ontworpen door PA0ABG. Deze mochten we met toestemming opstellen in het paarden-veldje van <a href="https://www.manegemeulendijks.com/" target="_blank" rel="noopener noreferrer">manege Meulendijks</a>. De paarden waren die dag niet in het veldje, dus we konden een antenne van 13x13 meter opstellen.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w800.webp`} />
                            <img alt="N V I S antenna" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-antenna-w800.webp`} />
                        </picture>

                        <p>We hadden een camper (Citroën Globecar Globescout R), en maakten gebruik van de huishoudaccu om de apparatuur te voorzien van stroom. De volgende keer gaan we de heide op, dus dan moeten we een batterij meenemen.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w800.webp`} />
                            <img alt="Mobile radio station in van" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-mobile-station-1-w800.webp`} />
                        </picture>


                        <p>Ik heb op SSB 16 verbindingen kunnen maken, op CW had PA2WLE 25 verbindingen gemaakt.
                            Voor mij als beginneling, is dit best veel.</p>

                        <p>Operating practice:
                            <br />
                            Nadat je een frequentie vrij hebt (met 5khz boven en onder ook vrij), kun je beginnen.</p>

                        <p>Begin met oproepen: "CQ CQ, PA4KEV, Flaura and Fauna, WWFF"
                            of: "CQ CQ, PA4KEV, Parks on the Air, POTA"
                            <br /><br />
                            Het tegenstation roept alleen met een callsign.
                            Herhaal de callsign van het tegenstation, net zolang je een "Roger roger" of "QSL" krijgt.
                            <br /><br />
                            Geef vervolgens het signaalrapport (59) en sluit af, je kan een korte groet doen, maar een gesprek is niet de bedoeling. Er proberen namelijk meerdere Hunters een verbinding te maken.
                            <br /><br />
                            Bijvoorbeeld:<br />
                            <table className='table-dialog'>
                                <tr><td>Ik:</td><td><i>"CQ CQ, PA4KEV, Flaura and Fauna, WWFF"</i></td></tr>
                                <tr><td>Zij:</td><td><i>"PA0--C"</i></td></tr>
                                <tr><td>Ik:</td><td><i>"PA0 again" of; "Ending with Charlie again"</i></td></tr>
                                <tr><td>Zij:</td><td><i>"PA0ABC, Papa Alpha Zero Alpha Bravo Charlie"</i></td></tr>
                                <tr><td>Ik:</td><td><i>"PA0ABC QSL?"</i></td></tr>
                                <tr><td>Zij:</td><td><i>"Roger roger, you are a 59"</i></td></tr>
                                <tr><td>Ik:</td><td><i>"You are 59, thank you for the contact! 44, 73"</i></td></tr>
                            </table>
                        </p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w800.webp`} />
                            <img alt="Mobile radio station in van" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-11-11/wwff-2023-11-11-operator-w800.webp`} />
                        </picture>

                        <p>In het geval van WWFF, groet je elkaar op het einde met een "44", samen met de standaard "73".</p>

                        <p>Alle verbindingen heb ik op papier genoteerd. Ook hier is structuur waardevol, want deze snelle notities moeten uiteindelijk wel leiden tot een correct logboek.</p>

                        <p>Het is gewelding om over de hele wereld verbindingen te kunnen maken en de volgende keer gaan we proberen om een nog mobielere opstelling te gaan bereiken.</p>

                        <p>Wat ik miste en de volgende keer meeneem:
                            <ul>
                                <li>UTC klokmodule</li>
                                <li>audiosplitter (voor 2 koptelefoons aan 1 transceiver)</li>
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

export default Velddagen;
