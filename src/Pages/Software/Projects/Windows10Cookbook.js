import React from 'react';

const Windows10Cookbook = () => {
    return (   
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">Intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-mockups">Mockups</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Windows 10 Cookbook</h1>
                    <h4 className="text-secondary">UWP application</h4>
                                       

                    <p>This <a href="https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide" target="_blank" rel="noopener noreferrer">UWP</a> application was built with <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a> and <a href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0" target="_blank" rel="noopener noreferrer">XAML</a>.</p>
                    <p>This was a school project which retrieved recipies and other data from an API.</p>
                    <p>Mostly this was to learn quickly how to develop a mobile application on the Windows platform with a responsive design.</p>

                    <p>
                        Source code can be seen on my Github page: &nbsp;
                        <a href="https://github.com/PA4KEV/Win10-Cookbook" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="github icon"/>
                        </a>
                    </p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/logo-w240.webp`} />                        
                        <source media="(min-width: 800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/logo.webp`} />
                        <img alt="application logo" src={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/logo.webp`}/>
                    </picture>

                    <p></p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/user-interface-w240.webp`} />                        
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/user-interface-w480.webp`} />
                        <source media="(min-width: 1200px) and (max-width: 1799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/user-interface-w800.webp`} />
                        <source media="(min-width: 1800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/user-interface.webp`} />
                        <img alt="user interface" src={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/user-interface.webp`}/>
                    </picture>
                </section>
                <section id="list-mockups" className="content-section">
                    <h2 className="text-primary">Mockups on laptop and mobile</h2>

                    <p>These are mockups on other devices, using screenshots of the application.</p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/laptop-mockup-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/laptop-mockup-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/laptop-mockup.webp`} />
                        <img alt="laptop mockup" src={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/laptop-mockup.webp`}/>
                    </picture>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/mobile-mockup-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/mobile-mockup-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/mobile-mockup.webp`} />
                        <img alt="laptop mockup" src={`${process.env.PUBLIC_URL}/images/projects/windows10cookbook/mobile-mockup.webp`}/>
                    </picture>
                </section>
            </div>
        </div>
    )
}

export default Windows10Cookbook;