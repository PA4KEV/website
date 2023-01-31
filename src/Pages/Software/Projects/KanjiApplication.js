import React from 'react';

// Created on: 2016-03-02
const KanjiApplication = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-settings">settings</a>                    
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Kanji flashcard Android application</h1>
                    <h4 className="text-secondary">Personalized Japanese learning</h4>
                    <p>In my free time I like to learn Japanese. I am married with someone from Japan, so being able talk with her parents in their own language is nice! You also pick up much of the culture through learning the language.</p>
                    <p>I wanted a personalized way to learn <a href="https://en.wikipedia.org/wiki/Kanji" target="_blank" rel="noopener noreferrer">Kanji</a>. I keep track of the words I want to learn in a small <a href="https://sqlite.org/" target="_blank" rel="noopener noreferrer">SQLite</a> database. If I come across a Japanese word, I can enter it in the database myself, because many language learning applications give you a preset of words, usually of the <a href="https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji" target="_blank" rel="noopener noreferrer">joyo Kanji</a>. The database can also be exported and imported to a file from the application.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/logo-w240.webp`} />
                        <source media="(min-width: 800px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/logo.webp`} />                        
                        <img alt="MyKanji application logo" src={`${process.env.PUBLIC_URL}/images/projects/mykanji/logo.webp`}/>
                    </picture>

                    <h4 className="text-secondary">Tools</h4>
                    <p><a href="https://www.java.com" target="_blank" rel="noopener noreferrer">Java</a> and <a href="https://en.wikipedia.org/wiki/Android_Studio" target="_blank" rel="noopener noreferrer">Android studio</a> were used to create this application.</p>

                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-1-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-1-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-1.webp`} />
                        <img alt="Screenshot of a kanji flashcard" src={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-1.webp`}/>
                    </picture>
                </section>

                <section id="list-settings" className="content-section">
                    <h2 className="text-primary">Settings</h2>
                    <p>By user input, the difficulty of a Kanji is determined. A Kanji that is often guessed wrong will increase in difficulty and can be asked more frequently. Questioning can be done based on time and certain aspects of the Kanji can be shown or hidden. Finally, a dark and light mode offers some more customizability, along with the sizes of the characters.</p>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-2-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-2-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-2.webp`} />
                        <img alt="Screenshot with application settings" src={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-2.webp`}/>
                    </picture>
                    <picture>
                        <source media="(max-width: 799px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-3-w240.webp`} />
                        <source media="(min-width: 800px) and (max-width: 1199px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-3-w480.webp`} />
                        <source media="(min-width: 1200px)" srcset={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-3.webp`} />
                        <img alt="Screenshot with database entries" src={`${process.env.PUBLIC_URL}/images/projects/mykanji/screenshot-3.webp`}/>
                    </picture>
                </section>
            </div>
        </div>
    )
}

export default KanjiApplication;