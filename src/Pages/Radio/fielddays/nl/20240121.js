import React from 'react';

const FD20240121NL = () => {
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
                        <h1 className="text-primary">Velddag - De Groote Peel, Kokmeeuwenweg</h1>
                        <p><i>2024-01-20</i></p>

                        <p>Deze dag was een mislukking voor me.</p>
                        <p>Ik heb slechts 1 park-to-park QSO kunnen maken met SP3W/P, in SP-1888 en SP-1878 in Polen.</p>
                        <p>Ik moest plotseling mijn opstelling direct (en terecht) verwijderen van Staatsbosbeheer. Ik stond opgesteld op een kwetsbaar gebied. Er stond een bordje, maar helaas had ik het zelf niet gezien, stom van me.</p>
                        <p>Het was wel een test voor mijn nieuwe antenne-opstelling. Ik had een plastic buis gebruikt met sterke haringen en speciale spanhaken van Nite Ize.</p>

                        <ul>
                            <li><a href="https://www.niteize.nl/p/camjam-spanhaak-zwart-ni-ncj-01-r3">Nite Ize CamJam spanhaken</a></li>
                            <li><a href="https://www.praxis.nl/bouwmaterialen/waterafvoer/dakgoten-en-accessoires/martens-hwa-buis-60mm-2-meter-grijs/2215168">60mm HWA buis</a></li>
                            <li><a href="https://www.wurmi-shop.de/">Wurmi Erdsandwurm haring</a></li>
                        </ul>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w800.webp`} />
                            <img alt="antenna setup" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w800.webp`} />
                        </picture>

                        <p>De masthouder, een provisorische opstelling. Moet veel beter kunnen denk ik...</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w800.webp`} />
                            <img alt="mast" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w800.webp`} />
                        </picture>

                        <p>Het bordje, dat ik helaas niet had opgemerkt. Het is belangrijk om deze gebieden te respecteren, dus let goed op als je een activatie gaat doen.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w800.webp`} />
                            <img alt="geen toegang bordje" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w800.webp`} />
                        </picture>

                        <p>De handhaver van Staatsbosbeheer komt de boete schrijven.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w800.webp`} />
                            <img alt="staatsbosbeheer" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w800.webp`} />
                        </picture>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default FD20240121NL;
