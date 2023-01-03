import React from 'react';

const ConfigAutomation = () => {
    return (
    <div className='row'>
        <div className="sidebar col-3 position-fixed">
            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action" href="#list-config-automation">Config automation</a>
                <a className="list-group-item list-group-item-action" href="#list-development">Development</a>
                <a className="list-group-item list-group-item-action" href="#list-deployment">Deployment</a>
                <a className="list-group-item list-group-item-action" href="#list-feedback">Feedback</a> 
            </div>
        </div>

        <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
            <section className="content-section">
            <h1 id="list-config-automation">Configuration automation</h1>
            <p>At <a href="https://www.hitachivantara.com/" target="_blank" rel="noopener">Hitachi Vantara</a> I worked with other developers on automating a configuration process using <a href="https://www.python.org/" target="_blank" rel="noopener">Python</a> and several external API.</p>
            <p>Products would be picked, assembled, configured and finally packaged for shipping at the distribution centre where I collaborated on this project. Configuration happend by connecting a Windows laptop to the product and apply settings. This related to the product's operating system, network and storage settings.</p>
            </section>

            <section className="content-section">
            <h3 id="list-development">Development</h3>
            <p>This project started as a local Python 2 script when it started, to only automate very specific settings. It later moved to USB drives and eventually to a VM on a network.</p>
            </section>

            <section className="content-section">
            <h3 id="list-deployment">Deployment</h3>
            <p>Creating the release of this software had to be done by running a batch script to create a bundled set of Python files. These files were then uploaded to the VM located in a European distribution center in the Netherlands. This VM is then used to run the software from on a local network on which all configuration laptops were connected to. A WinSCP script would then sync the contents of all VM's in distribution centres located in Singapore, United States and China in 24 hours.</p>
            <p>A script (stub) on the configuration laptop would connect to the VM and run Python locally to receive instructions. The technician selects the product through a CLI menu and automated configuration starts.</p>
            </section>

            <section className="content-section">
            <h3 id="list-feedback">Feedback</h3>
            <p>The application generated log files with each configuration and then upload these back to the VM after configuration was complete or halted. These logs were sorted under product name and the order number. But quite often, I found it very productive to go to the configuration area and simply talk with the technician to figure out what went wrong. Depending on the severity of the problem, it would get documented in Gitlab issues. On a weekly basis, issues would get assigned among developers.</p>
            </section>
        </div>
    </div>
    )
}

export default ConfigAutomation;