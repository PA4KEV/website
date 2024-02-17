import React from 'react';
import Emoji from '../../Content/Emoji';
import MarkdownPage from '../markdownPage';
import { getLanguage, getString } from '../../App';
import educationData from './education.json'

const SoftwareMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">Software <Emoji symbol="🖥️" /></h1>
            <MarkdownPage md={'Software/' + language + '/main.md'} />
            <hr />

            <h2>{getString('courses')}</h2>
            <div class="card-deck">
                {educationData.courses.map((course, index) => (
                    <div className='card courses-card' key={index}>
                        <div class="card-body">
                            <h5 class="card-title">{course.name}</h5>
                            <p class="card-text">
                                <i className='small'>{course.sub}, {course.instructor}</i>
                                <br />
                                <a href={course.link}>{course.intstitution}</a> | <a href={course.certificate}>certificate</a>
                                <br />
                                {getString('completed')}: {course.achieveDate}
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{course.duration} hours</small>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default SoftwareMain;