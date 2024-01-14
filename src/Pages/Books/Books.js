import React from 'react';

const Books = ({ books }) => {
    return (
        <div className='row'>
            <section className="content-section-book">

                <ul>
                    {books.map((book, index) => (
                        <li key={index}>{book.completionDate} | {book.title}</li>
                    ))}
                </ul>

                <p>The life of a career woman who wanted to serve her country, but not in her own way.</p>
                <p>Crown prince of Japan, <a href="https://en.wikipedia.org/wiki/Naruhito" target="_blank" rel="noopener noreferrer">Naruhito</a>, feels love for <a href="https://en.wikipedia.org/wiki/Empress_Masako" target="_blank" rel="noopener noreferrer">Masako Owada</a> and eventually they get married. Masako Owada lived and studied several years in the United States of America. But she eventually returned to Japan because she wanted te serve her country. The book will often state how much Masako wanted to serve Japan and the crux of the story is that due to the conservative expectations of the royal family on her will cause her to become a "caged butterfly".</p>
                <p>The main expectation is that she must birth a son which can inherit the Japanese throne. After a miscarriage, Naruhito and Masako however will have a daughter, Aiko. Despite the couple being very happy together, they do not meet the expectations of the <a href="https://en.wikipedia.org/wiki/Imperial_Household_Agency" target="_blank" rel="noopener noreferrer">Kunai-chō</a> and the emperor, <a href="https://en.wikipedia.org/wiki/Akihito" target="_blank" rel="noopener noreferrer">Akihito</a>. Masako was considered not Japanese enough due to her long stays in America, she could not birth a son and she could not do the diplomatic missions for which she studied, she would not fit in with the others in the royal family, the media would portray lies about her. It eventually took its toll and she became very sick.</p>
                <p>She recovers each downfall, but the book makes it clear that her life as a princess is not a rose-coloured, easy life. Naruhito and Masako want to be closer to the Japanese people, yet they must still be considered divine beings.</p>
                <p>There are also sections where the youth of Akihito is described, which, after Japan's loss during the second world war, shows how much the Americans have caused the dimishing of power of the Japanese emperor. Due to this influence, less people consider the imperial family of Godly status anymore. Groups like the <a href="https://en.wikipedia.org/wiki/Zaitokukai" target="_blank" rel="noopener noreferrer">Zaitokukai</a> and <a href="https://en.wikipedia.org/wiki/Nippon_Kaigi" target="_blank" rel="noopener noreferrer">Conservative parties in Japan</a> often resent this change of their nation and emperor.</p>
                <p>The book does not mention the birth of <a href="https://en.wikipedia.org/wiki/Prince_Hisahito_of_Akishino" target="_blank" rel="noopener noreferrer">Hisahito</a> in 2006, the son of <a href="https://en.wikipedia.org/wiki/Fumihito,_Crown_Prince_of_Japan" target="_blank" rel="noopener noreferrer">Fumihito</a> and <a href="https://en.wikipedia.org/wiki/Kiko,_Crown_Princess_of_Japan" target="_blank" rel="noopener noreferrer">Kiko</a>, who will now inherit the throne. Fumihito is the brother of Naruhito.</p>

            </section>
        </div >
    )
}

export default Books;
