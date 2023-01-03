import React from 'react';

const ConfigAutomation = () => {
    return (
    <div className='row'>
        <div className="sidebar col-3 position-fixed">
            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-config-automation">Config automation</a>
                <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-development">Development</a>
                <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-deployment">Deployment</a>
                <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-feedback">Feedback</a> 
                <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-lessons-learnt">Lessons learnt</a>
            </div>
        </div>

        <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
            <section className="content-section">
            <h1 id="list-config-automation"className="text-primary">Configuration automation</h1>
            <p>At <a href="https://www.hitachivantara.com/" target="_blank" rel="noopener">Hitachi Vantara</a> I worked with other developers on automating a configuration process using <a href="https://www.python.org/" target="_blank" rel="noopener">Python</a> and several external API.</p>
            <p>Products would be picked, assembled, configured and finally packaged for shipping at the distribution centre where I collaborated on this project. Configuration happend by connecting a Windows laptop to the product and apply settings. This related to the product's operating system, network and storage settings.</p>
            <img src={`${process.env.PUBLIC_URL}/images/projects/hitachi/cto-config.webp`} alt="CTO config"/>
            </section>

            <section className="content-section">
            <h3 id="list-development" className="text-primary">Development</h3>
            <p>This project started as a local Python 2 script when it started, to only automate very specific settings. It later moved to USB drives and eventually to a VM on a network.</p>
            <p>It eventually grew to support multiple product lines and at this moment I joined the other programmer to further extend this software after my internship.</p>
            <p>Here I learnt working properly with Git and designing software architecture. I also learnt how to create automation by interfacing by GUI automation with <a href="https://www.autohotkey.com/" target="_blank" rel="noopener">AutoHotkey</a> and combine multiple APIs to achieve results.</p>
            <p>The automation software also used other resources like <a href="https://ttssh2.osdn.jp/index.html.en" target="_blank" rel="noopener">Tera Term</a> scripts.</p>
            <p>Another fun thing I added was an <a href="https://www.raritan.com/products/power/power-distribution" target="_blank" rel="noopener">iPDU</a> where Python could safely powercycle 230 Volt AC power consumers. This was useful to power down devices when the distribution center was not operating at night to reduce costs.</p>
            <img src={`${process.env.PUBLIC_URL}/images/projects/hitachi/cto-laptop.webp`} alt="CTO laptop"/>
            </section>

            <section className="content-section">
            <h3 id="list-deployment" className="text-primary">Deployment</h3>
            <p>Creating the release of this software had to be done by running a batch script to create a bundled set of Python files. These files were then uploaded to the VM located in a European distribution center in the Netherlands. This VM is then used to run the software from on a local network on which all configuration laptops were connected to. A WinSCP script would then sync the contents of all VM's in distribution centres located in Singapore, United States and China in 24 hours.</p>
            <p>A script (stub) on the configuration laptop would connect to the VM and run Python locally to receive instructions. The technician selects the product through a CLI menu and automated configuration starts.</p>
            <p>Dedicated storage managing software had to be installed, so communicating with the Japanese supplier was always important. This software and other assets were separately deployed to create a stable configuration process.</p>
            <img src={`${process.env.PUBLIC_URL}/images/projects/hitachi/storage-chassis.webp`} alt="Storage chassis"/>
            </section>

            <section className="content-section">
            <h3 id="list-feedback" className="text-primary">Feedback</h3>
            <p>The application generated log files with each configuration and then upload these back to the VM after configuration was complete or halted. These logs were sorted under product name and the order number. But quite often, I found it very productive to go to the configuration area and simply talk with the technician to figure out what went wrong. Depending on the severity of the problem, it would get documented in Gitlab issues. On a weekly basis, issues would get assigned among developers.</p>
            <p>Communication is always import and essential for proper DevOps. The people who operate and configure these machines daily often know a lot more details that can be used to optimize the software. But be certain to make them realize that they also contribute to profit, rather than believing their job may become obsolete.</p>
            <img src={`${process.env.PUBLIC_URL}/images/projects/hitachi/hitachi-banner.webp`} alt="Hitachi banner"/>
            </section>

            <section className="content-section">
            <h3 id="list-lessons-learnt" className="text-primary">Lessons learnt</h3>
            <p>Being a programmer, I was mostly concerned with the software. But it requires hardware to run on. When the software does not work because of differences in the platform the software run on, what is there to do? I eventually started managing around 40 configuration laptops, using <a href="https://clonezilla.org/" target="_blank" rel="noopener">Clonezilla</a> to create identical machines.</p>
            <p>Docker would have been an ideal solution, but I did not know much of it at the time.</p>
            <p>Also my many points of learning in git merges, creating release tags, deploying broken versions of the software and immediatly needing to patch with hotfixes, all contributed to my learning of software development.</p>
            <p>Automation demands an equalized platform to run on and once it is deployed, hundreds of products will be making use of it. So, thinking something over and propely design and architecture software is much more time-saving than quickly meeting deadlines.</p>
            <img src={`${process.env.PUBLIC_URL}/images/projects/hitachi/many-laptops.webp`} alt="Many laptops"/>
            </section>
        </div>
    </div>
    )
}

export default ConfigAutomation;