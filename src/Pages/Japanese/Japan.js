import React from 'react';
import Emoji from '../../Content/Emoji';

const Japanese = () => {
    return (
        <div className='row'>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <div className='content-item'>
                        <h1 id="list-intro" className="text-primary">Japanese <Emoji symbol="🇯🇵" /></h1>
                        <p>The Japanase language has facinated me for many years now, for I am married with a Japanese. To become fluent means practice every single day, no exceptions.</p>
                        <ul>
                            <li><a href="https://www.wanikani.com/users/PA4KEV" target="_blank" rel="noopener noreferrer">Wani Kani</a></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Japanese;