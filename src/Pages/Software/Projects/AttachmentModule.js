import React from 'react';

// Created on: 2017-10-06
const AttachmentModule = () => {
    return (
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-intro">intro</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-workflow">workflow</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-lessons-learnt">lessons learnt</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                <section id="list-intro" className="content-section">
                    <h1 className="text-primary">Attachment Module</h1>
                    <h4 className="text-secondary">Solving the problem of someone else</h4>
                    <p>Sometimes a project owner wants a feature implemented in their project that the developers somehow are unable to realize. The project was a website containing a form that customers would enter text data on. The project owner asked for a feature which allowed customers to attach files to this form.</p>
                    <p>As a "temporary" solution, I suggested creating a stand-alone server that would handle file uploads that would be linked to the ID number of the form. This consisted of 2 servers. One server would be a simple web interface, the other a database server that hosted a simple API.</p>
                    <p>Both servers were VMs running <a href="https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux" target="_blank" rel="noopener noreferrer">RHEL</a>.</p>
                    <p>The web server used the <a href="https://en.wikipedia.org/wiki/Nginx" target="_blank" rel="noopener noreferrer">Nginx</a> engine and the <a href="https://en.wikipedia.org/wiki/Django_(web_framework)" target="_blank" rel="noopener noreferrer">Django</a> framework. Python handles the HTTP requests with <a href="https://en.wikipedia.org/wiki/Gunicorn" target="_blank" rel="noopener noreferrer">Gunicorn</a>, a <a href="https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface" target="_blank" rel="noopener noreferrer">WSGI</a> gateway.</p>
                    <p>The database server used a <a href="https://en.wikipedia.org/wiki/MySQL" target="_blank" rel="noopener noreferrer">MySQL</a> server to host uploaded file data. To expose this data, <a href="https://flask-restful.readthedocs.io/" target="_blank" rel="noopener noreferrer">Flask RESTful</a> was used to serve a simple API.</p>
                    <p>This was the first separate project I created for the company, so I set up a <a href="https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface" target="_blank" rel="noopener noreferrer">GitLab</a> server for version control.</p>
                </section>

                <section id="list-workflow" className="content-section">
                    <h2 className="text-primary">Workflow</h2>
                    <ol>
                        <li>The website hosting the forms, would serve a hyperlink to the "attachment module", along with the form's ID.</li>
                        <li>The user is redirected to the website with a simple input field and browse button where a file can be uploaded.</li>
                        <li>The file is validated by type, size and upload time.</li>
                        <li>The file is copied to the database server.</li>
                        <li>The file is also cached for 2 weeks on the web server, for quicker access.</li>
                        <li>The database server creates a database entry.</li>
                        <li>A link to the file is created for access on the website.</li>
                        </ol>
                        <p>After a file is uploaded, someone else will want to access it.</p>
                        <ol>
                        <li>The user accesses the website and clicks on the link with the file name.</li>
                        <li>If the file is cached on the web server, then this file is opened.</li>
                        <li>If the file is not cached, the web server downloads the file from the database server and then opens it.</li>
                    </ol>
                </section>

                <section id="list-lessons-learnt" className="content-section">
                    <h2 className="text-primary">Lessons learnt</h2>
                    <p>The project owner did not want the users to separately log in to the web server of the attachment module. So a big security issue is that anyone with the link, can access uploaded files. At the time this was agreed to be a <i>temporary</i> solution. The project was deployed in 2017 and in 2021 this project was still running though. After all, the business must go on and if the problem's symptoms seems fixed, why bother with it further...</p>
                    <p>Because other users could access other uploaded files using the right link, it was decided that users could only upload and never delete any files.</p>
                    <p>A big learning point for me was that not to compromise security, even for projects that are considered temporary. A problem never occurred. This compromise caused silly decisions to not allow users to delete their own files. I will defend my standpoint much more and use this project as an example.</p>
                    <p>The actual problem here though, is why the other developers were not able to create a safe file upload feature.</p>
                </section>
            </div>
        </div>
    )
}

export default AttachmentModule;