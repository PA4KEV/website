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
                        <h1 className="text-primary">Velddag - Stiphoutse bossen, Kamerven</h1>
                        <p><i>2023-12-30</i></p>
                        <p>Dit was mijn tweede mobiele activatie voor <a href="https://wwff.co/" target="_blank" rel="noopener noreferrer">WWFF</a>.</p>

                        <p>Locatie WWFF: <strong>PAFF-0221</strong></p>

                        <h3>Apparatuur</h3>
                        <hr />
                        <p>Mijn rugzak (Osprey Farpoint 40) met apparatuur woog 14 kilogram, net te zwaar om een lange fietstocht te kunnen maken. We hebben met de camper van PA2WLE echter de reis gemaakt naar deze bossen.</p>
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Near_vertical_incidence_skywave" target="_blank" rel="noopener noreferrer">NVIS</a> antenne</li>
                            <li><a href="https://www.rigpix.com/yaesu/ft897.htm" target="_blank" rel="noopener noreferrer">Yaesu FT-897</a> transceiver</li>
                            <li>LDG AT-897 Plus automatische antenne tuner</li>
                            <li><a href="https://www.jackery.com/products/explorer-240-portable-power-station" target="_blank" rel="noopener noreferrer">Jackery Explorer 240</a> draagbare voeding</li>
                            <li>Gezekerde kabel met 12 Volt sigarettenaansteker en een aansluiting aan de transceiver</li>
                            <li>25 meter Aircell 7 coax-kabel met 2 <a href="https://nl.wikipedia.org/wiki/BNC-connector" target="_blank" rel="noopener noreferrer">BNC</a> connectoren</li>
                            <li>10 meter glasvezel versterkte kunststof telescopische mast</li>
                            <li>50 meter landmeter meetlint</li>
                            <li>Tentharingen</li>
                            <li>Klokmodule op batterijen met UTC tijd</li>
                            <li>Waterpomptang om de moeren van de antenne aan te draaien</li>
                        </ul>

                        <p>Verder nog broodjes, schrijfgerei en een vademecum. Het tafeltje en de stoelen komen uit de camper. Ook de Jackery voeding paste niet in mijn rugzak.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w800.webp`} />
                            <img alt="apparatuur" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-equipment-w800.webp`} />
                        </picture>

                        <br />
                        <br />
                        <h3>Activatie</h3>
                        <hr />

                        <p>De activatie van deze locatie verliep prima met 27 unieke QSO's. Zodra ik op het cluster gespot werd, werd ik snel door vele stations aangeroepen.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w800.webp`} />
                            <img alt="N V I S antenna" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-antenna-w800.webp`} />
                        </picture>

                        <p>De locatie was <strong>PAFF-0221</strong>, de Stiphoutse bossen, bij het Kamerven. Door de hevige regenval, stond er vrij hoog water in het ven dit jaar.</p>
                        <p>Er komen geregeld wandelaars met honden voorbij. De wandelaars waren vaak geïnteresseerd in de radio opstelling en de honden in de broodjes met ham uit mijn rugzak.</p>
                        <p>De mensen die interesse tonen, denken dat we zoeken naar buitenaards leven, metingen doen of zelfs dieren aan het tellen zijn. Het is een leuke kans om mensen te vertellen over de hobby en iedereen toonde oprechte belangstelling.</p>

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

                        <p>Het weer was helder, licht bewolkt, ongeveer 9° Celcius. De koude wind maakt het wel lastig om met de blote hand callsigns op te schrijven.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w800.webp`} />
                            <img alt="mobiele setup" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2023-12-30/wwff-2023-12-30-setup-w800.webp`} />
                        </picture>
                        <br />
                        <br />
                        <h3>Leermomenten</h3>
                        <hr />
                        <p>Uit deze activatie heb ik veel geleerd.</p>
                        <ol>
                            <li>De Aircell 7 coax kabel was te lang, te stug en te zwaar. Een RG58 coax kabel zou beter zijn.</li>
                            <li>Een schroevendraaier en ringsleuteltje in plaats van een waterpomptang gebruiken.</li>
                            <li>De wind waait mijn notepad-vellen telkens weg, dit moet vast worden gezet.</li>
                            <li>Lijnen en kabels beter zichtmaar maken, zodat omstanders er niet over kunnen struikelen.</li>
                            <li>Je broodjes beter opbergen, tegen de nieuwsgierige honden.</li>
                            <li>Tijdens de activatie aangeven dat je een <strong>portable</strong> station bent. Andere stations begrijpen dan beter waarom de verbinding niet perfect is.</li>
                            <li>De landmeter meetlint was te groot en eigenlijk niet nodig. Het gaat prima door een touwtje van 12 meter mee te nemen. Andere afstanden zijn namelijk toch niet nodig om te meten.</li>
                        </ol>
                        <p>Verder moet ik andere handschoenen hebben, zodat ik nog steeds kan schrijven bij koud weer.</p>
                        <p>De UTC-klok module was perfect om bij te hebben, tijdens een pile-up vind ik een aparte klok toch sneller dan mijn telefoon te gebruiken. Direct de UTC tijd zien en opschrijven en door naar het volgende QSO. Voor mij een goede uitkomst.</p>

                        <p>Ten slotte, het is zeer belangrijk om kabels netjes op te rollen. Het scheelt veel tijd met opstellen en afbreken van de antenne. Vooral in het veld is het erg vervelend om draden uit de knoop te moeten plukken.</p>
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
