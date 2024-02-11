import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../../../Content/Emoji';
import fielddaysdata from './fielddays.json';

const FielddaysTable = () => {

    function generatePath(dateString, language) {
        // Assuming dateString is in the format "YYYY-MM-DD"
        const parts = dateString.split('-');
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];

        // Construct the path
        const path = `/${language}/radio/fielddays/${year}${month}${day}`;

        // Return JSX with the path inside an <a> tag
        return (
            <Link reloadDocument to={path}>
                Link
            </Link>
        );
    }

    // Optimize to only show link column for the current language.
    // This also eliminates a column.
    return (
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
                {fielddaysdata.fielddays.map((fieldDay, index) => (
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
    )
}

export default FielddaysTable;
