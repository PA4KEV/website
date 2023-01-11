import React from 'react';

const TeslaMaze = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-gameplay">gameplay</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-woodwork">woodwork</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-lessons-learnt">lessons learnt</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">TeslaMaze</h1>
                    <h4 className="text-secondary">Gaming, Woodcraft and Teamwork!</h4>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-logo-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-logo-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-logo.webp`} />
                        <img alt="TeslaMaze logo" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-logo.webp`}/>
                    </picture>

                    <p>A team project where the player must align pipes correctly using a Wii remote. The ingame goals would then have effect on a custom built wooden tower. The game was programmed in <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">Java</a>.</p>
                    <p>This project was made by four people working on both software and hardware. The game uses the <a href="https://en.wikipedia.org/wiki/Wii" target="_blank" rel="noopener noreferrer">Nintendo Wii remote</a> to get input from the player.</p>
                </section>
                <section id="list-gameplay" className="content-section">
                    <h2 className="text-primary">Gameplay</h2>
                    <p>The player must align pipes from the fictional tesla coil to "relay electricity" to a specific point in the game. The game communicates to the <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">Arduino</a> to power <a href="https://en.wikipedia.org/wiki/Servomotor" target="_blank" rel="noopener noreferrer">servomotors</a> that operate three doors and an elevator.</p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/gameplay-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/gameplay-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/gameplay-w800.webp`} />
                        <img alt="TeslaMaze gameplay" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/gameplay-w800.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/screenshot-game-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/screenshot-game-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/screenshot-game.webp`} />
                        <img alt="TeslaMaze pipe game screenshot" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/screenshot-game.webp`}/>
                    </picture>

                </section>
                <section id="list-woodwork" className="content-section">
                <h2 className="text-primary">Woodwork</h2>
                    <p>The tower base is made of wood and has a metal screw elevator. A conductive metal ball has to be elevated up and then roll down three rails. One side of a rail is powered and the other is grounded. The metal ball conducts electricity to blue LED's on the rails when it passes by. Once the ball has reached the bottom of the tower within the time limit, a switch turns on the <a href="https://en.wikipedia.org/wiki/Plasma_globe" target="_blank" rel="noopener noreferrer">plasma globe</a> on the top of the tower and the game is won.</p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/elevator-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/elevator-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/elevator.webp`} />
                        <img alt="TeslaMaze screw elevator" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/elevator.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/rails-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/rails-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/rails.webp`} />
                        <img alt="TeslaMaze rails" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/rails.webp`}/>
                    </picture>                    

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/tower-base-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/tower-base-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/tower-base.webp`} />
                        <img alt="TeslaMaze tower base" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/tower-base.webp`}/>
                    </picture>    

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/in-progress-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/in-progress-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/in-progress.webp`} />
                        <img alt="TeslaMaze in progress" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/in-progress.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/render-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/render-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/render.webp`} />
                        <img alt="TeslaMaze 3D render" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/render.webp`}/>
                    </picture>
                    
                </section>

                <section id="list-lessons-learnt" className="content-section">
                    <h2 className="text-primary">Lessons learnt</h2>
                    <p>This was actually my favourite project to work on! It combined the talent of everyone in our team. We had a very skilled woodworker <i>(who doubled as a good project leader as well)</i> and we all were coding. This project taught me that effective team work with good group synergy, produces great results.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-final-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-final-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-final.webp`} />
                        <img alt="TeslaMaze final version" src={`${process.env.PUBLIC_URL}/images/projects/teslamaze/teslamaze-final.webp`}/>
                    </picture>
                </section>
            </div>
        </div>
    )
}

export default TeslaMaze;