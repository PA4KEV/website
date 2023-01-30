import React from 'react';

const BoardOfEducationBot = () => {
    return (
        <div className='row'>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Board of Education bot</h1>
                    <h4 className="text-secondary">Learning robot platform</h4>

                    <p>The Board of education Robot is a development platform made by Parallax.</p>
                    <p>This school project was mainly to learn about basic electronics and programming for embedded devices. The BoeBot was created by Parallax and uses the Javelin stamp processor. This processor accepts the high-level programming language Java to control different pieces of hardware on the robot. The robot started as a simple prototype board with two servo motors. Sensors and actuators were later placed on the breadboard to allow sensory input and output. We created a GUI named "Robot at Work" which allowed the robot to follow a path using QPI linefollowers. The robot could also be controlled with an IR remote control.</p>
                    
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_classdiagram-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_classdiagram-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_classdiagram-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_classdiagram.webp`} />
                        <img alt="Class diagram" src={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_classdiagram.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_gui-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_gui-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_gui.webp`} />                        
                        <img alt="G U I for this project" src={`${process.env.PUBLIC_URL}/images/projects/boebot/boebot_gui.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot2-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot2-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot2.webp`} />                        
                        <img alt="B O E bot" src={`${process.env.PUBLIC_URL}/images/projects/boebot/robot2.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot3-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot3-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/robot3.webp`} />                        
                        <img alt="B O E bot" src={`${process.env.PUBLIC_URL}/images/projects/boebot/robot3.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/javelin-w240.webp`} />
                        <source media="(min-width: 800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/boebot/javelin.webp`} />                        
                        <img alt="Javelin chip" src={`${process.env.PUBLIC_URL}/images/projects/boebot/javelin.webp`}/>
                    </picture>

                </section>
            </div>
        </div>
    )
}

export default BoardOfEducationBot;