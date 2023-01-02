import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const DXPDevelopment = () => {
    return (   
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action" href="#list-dxp">DXP</a>
                    <a className="list-group-item list-group-item-action" href="#list-legacy">Legacy</a>
                    <a className="list-group-item list-group-item-action" href="#list-improvement">Improvement</a>                    
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section className="content-section">
                    <h1 id="list-dxp">DXP Development</h1>
                    <h3>OPPLE Catalog Generator</h3>
                    <p>What is DXP? It stands for Digital Experience Platform and is basically interactive software where data can be maintained. One such DXP I loved working on was for  <a href="https://www.opple.eu/" target="_blank" rel="noopener">OPPLE</a>. They are a brand of lighting products and have over 14000 different items.</p>
                    <p>My contributions were taking ownership of their catalog generator tool and maintaining the data of their products in <a href="https://www.drupal.org/" target="_blank" rel="noopener">Drupal</a> on their website.</p>
                    <p>You can view the catalog here: <a href="https://www.opple.nl/en/product-catalogue-np" target="_blank" rel="noopener">https://www.opple.nl/en/product-catalogue-np</a></p>
                    <p>All the data was supplied through an external API by <a href="https://www.compano.com/" target="_blank" rel="noopener">Compano</a> and through an uploaded XML file. This data had to be parsed and converged into a logical structure so that products and product families were matched along with their features, photographs, accessoires, dimensional drawings, sensor diagrams and more. And all data is  <a href="https://en.wikipedia.org/wiki/Multilingualism" target="_blank" rel="noopener">multilingual</a>. And of course data had to be exchanged through excel files for pricelists and tender texts. Data was used interchangably between different tools and websites.</p>
                    <img src={`${process.env.PUBLIC_URL}/images/projects/opple/opple-catalog.webp`} alt="opple catalog"/>
                    <p>The catalog generator makes use of the Drupal platform as an intranet portal where thousands of PDF's could be automatically generated in a single batch. The customer only has to alter the data and the layouts and appropriate sections appear.</p>
                </section>

                <section className="content-section">
                    <h3 id="list-legacy">Legacy</h3>
                    <p>This project was handed to me as a <a href="https://en.wikipedia.org/wiki/Monolithic_application" target="_blank" rel="noopener">monolithic source</a>, with only 1 PHP file containing all the rendering logic and handling exceptions (as in, many products had their own unique, exceptional attributes). This was a project that had outgrown itself and was hard to scale further due to the current structure. I had to improve the code base, while retaining the legacy functions. But because everything was so tightly coupled I had to make sure a change did not break functionality elsewhere. The key is to write new code and provide "safety nets" for older code.</p>
                    <p>A common misconception is to think by creating quick code, is easy gain. Not much effort, just copy and paste the existing logic and adjust it a bit. Then put it in the same file, no need to document it. But by building up <a href="https://en.wikipedia.org/wiki/Technical_debt" target="_blank" rel="noopener">Technical Dept</a>, you will either leave this code behind or you will forget how everything works. Making code scalable, is essential. Even for "small" or "temporary" projects. Do not take shortcuts, thinking it will save time or meet the deadline.</p>
                </section>

                <section className="content-section">
                    <h3 id="list-improvement">Improvement</h3>
                    <p>Restructuring code built as such requires mostly patience. You cannot instantly restart everything, as this tool is used in production. You cannot create a new architecture complete with diagrams, there is currently no time. It is not the only project I work on, there are 20 other projects that also require attention. Instead, I started by moving functions around every time I worked on a new feature for the tool. Dedicating existing functions to separate module files was the start. Creating object-oriented code for new features was the next step. Applying unit tests came next. As long as a new feature request did not exceed in time, it could be slowly prepared to grow by having prework done every time.</p>
                    <p>Eventually, it became a tool with composed logic, making future maintenance and feature requests a lot more simple.</p>
                    <p>Moving forward with a structured tool, I am proud to have collaborated on this project!</p>
                </section> 
            </div>

        </div>
    )
}

export default DXPDevelopment;