import React from 'react';

const FD20240121EN = () => {
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
                        <h1 className="text-primary">Field day - De Groote Peel, Kokmeeuwenweg</h1>
                        <p><i>2024-01-20</i></p>

                        <p>This day was a failure to me.</p>
                        <p>I was only to make 1 park-to-park QSO with SP3W/P, in SP-1888 and SP-1878 in Poland.</p>
                        <p>I had to suddenly tear down my station immediately (and rightfully so) by Staatsbosbeheer, the organization that maintains nature preserves in the Netherlands. I was deployed in a vulnerable area. There was a sign, which I did not see. Stupid of me.</p>
                        <p>It was a succesful test for my new antenna deployment though. I made use of a plastic tube, strong screwing pegs and special hooks from Nite Ize.</p>

                        <ul>
                            <li><a href="https://www.niteize.nl/p/camjam-spanhaak-zwart-ni-ncj-01-r3">Nite Ize CamJam hooks</a></li>
                            <li><a href="https://www.praxis.nl/bouwmaterialen/waterafvoer/dakgoten-en-accessoires/martens-hwa-buis-60mm-2-meter-grijs/2215168">60mm HWA tube</a></li>
                            <li><a href="https://www.wurmi-shop.de/">Wurmi Erdsandwurm pegs</a></li>
                        </ul>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w800.webp`} />
                            <img alt="antenna setup" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/setup-w800.webp`} />
                        </picture>

                        <p>The mastholder, bit of a mess currently. I should be able to improve this...</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w800.webp`} />
                            <img alt="mast" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/mast-w800.webp`} />
                        </picture>

                        <p>The sign, that I sadly did not notice. It is important to respect these areas, so pay attention to the surroundings when you will do an activation.</p>
                        <p>"Kwetsbaar gebied" = Vulnerable area, "Geen toegang" = Access denied.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w800.webp`} />
                            <img alt="geen toegang bordje" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/geen-toegang-w800.webp`} />
                        </picture>

                        <p>The maintainer of Staatsbosbeheer comes to write the fine.</p>

                        <picture>
                            <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w240.webp`} />
                            <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w480.webp`} />
                            <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w800.webp`} />
                            <img alt="staatsbosbeheer" src={`${process.env.PUBLIC_URL}/images/radio/velddagen/2024-01-21/staatsbosbeheer-w800.webp`} />
                        </picture>

                        <p>I admit being wrong here, I had no problem accepting the fine. It is important to respect the rules of the park. Make sure you are not in a closed-off area and start putting pegs in the ground. For the ground and the life in it may be disturbed. Do not annoy others with your hobby and respect the rules.</p>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default FD20240121EN;
