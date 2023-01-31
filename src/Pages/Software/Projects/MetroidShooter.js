import React from 'react';

// Created on: 2013-07-30
const MetroidShooter = () => {
    return (
        <div className='row'>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Metroid Horizontal Shooter</h1>
                    <h4 className="text-secondary">Java game</h4>

                    <p>A simple Java 2D game using Nintendo's <a href="https://en.wikipedia.org/wiki/Metroid" target="_blank" rel="noopener noreferrer">Metroid</a> franchise sprites. This was a school project. This little game I made to practice programming with 2D graphics. It slowly gained more and more features like extra weapons and different levels, because I really enjoyed working on this project.</p>
                    
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen1-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen1-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen1-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen1.webp`} />
                        <img alt="Screenshot" src={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen1.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen2-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen2-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen2-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen2.webp`} />
                        <img alt="Screenshot" src={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen2.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen3-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen3-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen3-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen3.webp`} />
                        <img alt="Screenshot" src={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen3.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen4-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen4-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen4-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen4.webp`} />
                        <img alt="Screenshot" src={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen4.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen5-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen5-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen5-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen5.webp`} />
                        <img alt="Screenshot" src={`${process.env.PUBLIC_URL}/images/projects/metroid/MetroidScreen5.webp`}/>
                    </picture>

                </section>
            </div>
        </div>
    )
}

export default MetroidShooter;