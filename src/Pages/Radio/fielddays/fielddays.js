import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../../../Content/Emoji';

const Fielddays = ({ fieldDays }) => {
    function generatePath(dateString, language) {
        // Assuming dateString is in the format "YYYY-MM-DD"
        const parts = dateString.split('-');
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];

        // Construct the path
        const path = `/${language}/pages/radio/fielddays/${year}${month}${day}`;

        // Return JSX with the path inside an <a> tag
        return (
            <Link reloadDocument to={path}>
                Link
            </Link>
        );
    }

    return (
        <div className='row'>
            <section className="content-section">
                <p></p>
                <table className='table-fielddays'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th><Emoji symbol="🇬🇧" /></th>
                            <th><Emoji symbol="🇳🇱" /></th>
                            <th>Name</th>
                            <th>POTA Locator</th>
                            <th>WW-FF Locator</th>
                            <th>Bands</th>
                            <th>Mode</th>
                            <th>Transceiver</th>
                            <th>Total unique QSO</th>
                            <th>Antenna</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldDays.map((fieldDay, index) => (
                            <tr key={index}>
                                <td>{fieldDay.date}</td>
                                <td>{generatePath(fieldDay.date, 'en')}</td>
                                <td>{generatePath(fieldDay.date, 'nl')}</td>
                                <td>{fieldDay.name}</td>
                                <td>{fieldDay['identifier-pota']}</td>
                                <td>{fieldDay['identifier-wwff']}</td>
                                <td>{fieldDay.bands}</td>
                                <td>{fieldDay.modes}</td>
                                <td>{fieldDay.transceiver}</td>
                                <td>{fieldDay['total-unique-qso']}</td>
                                <td>{fieldDay.antenna}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default Fielddays;
