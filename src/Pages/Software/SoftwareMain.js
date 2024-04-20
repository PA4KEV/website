import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../Language/Language';
import { getString } from '../../Language/LanguageStrings'
import educationData from './education.json'

const SoftwareMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">{getString('software')} <Emoji symbol="🖥️" /></h1>
            <MarkdownPage md={'Software/' + language + '/main.md'} />
            <hr />
            <h2>{getString('code_pages')}</h2>
            <p>{getString('code_pages_intro')}</p>
            <a href={'/' + language + '/software/elm/'}>Elm</a>
            <hr />

            <h2>{getString('education')}</h2>
            {educationData.education.map((edu, index) => (
                <div key={edu.name + index}>
                    <h4>{edu.name}</h4>
                    <h6>{edu.diploma}</h6>
                    <p>{edu.school} - {edu.location}</p>
                    <p>{edu.start} - {edu.end}</p>
                </div>
            ))}
            <hr />
            <h2>{getString('certification')}</h2>
            {educationData.certifications.map((certification, index) => (
                <div key={certification.name + index}>
                    <h4>{certification.name}</h4>
                    <h6><a href={certification.link}>{certification.institution}</a></h6>
                    <p>{getString('issued')}: {certification.issueYear}</p>
                </div>
            ))}
            <hr />
            <h2>{getString('courses')}</h2>
            <div className="card-deck">
                {educationData.courses.map((course, index) => (
                    <div className='card courses-card' key={course.name + index}>
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                            <p className="card-text">
                                <i className='small'>{course.sub}, {course.instructor}</i>
                                <br />
                                <a href={course.link}>{course.intstitution}</a> | <a href={course.certificate}>certificate</a>
                                <br />
                                {getString('completed')}: {course.achieveDate}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{course.duration} hours</small>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default SoftwareMain;