import React from 'react';

const IOSAirports = () => {
    return (
        <div className='row'>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">iOS Airports</h1>
                    <h4 className="text-secondary">iPhone application</h4>

                    <p>A mobile iPhone application using a <a href="https://sqlite.org/" target="_blank" rel="noopener noreferrer">SQLite</a> database to display airports around the world. With this project I got to experience working with <a href="https://en.wikipedia.org/wiki/Xcode" target="_blank" rel="noopener noreferrer">Xcode</a> and <a href="https://en.wikipedia.org/wiki/Swift_(programming_language)" target="_blank" rel="noopener noreferrer">Swift</a> to develop iOS mobile applications.</p>

                    <p>
                        Source code can be seen on my Github page: &nbsp;
                        <a href="https://github.com/PA4KEV/iOS-Airports" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="github icon"/>
                        </a>
                    </p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-1-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-1-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-1.webp`} />
                        <img alt="Screenshot of selectable airports" src={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-1.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-2-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-2-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-2.webp`} />
                        <img alt="Screenshot of an air route" src={`${process.env.PUBLIC_URL}/images/projects/ios-airports/screenshot-2.webp`}/>
                    </picture>

                </section>
            </div>
        </div>
    )
}

export default IOSAirports;