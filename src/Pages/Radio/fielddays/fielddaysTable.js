import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../../../Content/Emoji';
import fielddaysData from './fielddays.json';
import { useTheme } from '../../../ThemeContext';
import { getLanguage } from '../../../Language/Language';
import { getString } from '../../../Language/LanguageStrings'

const FielddaysTable = () => {
    const { theme } = useTheme();

    function generatePath(dateString, language, linkText) {
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
                {linkText}
            </Link>
        );
    }

    // Optimize to only show link column for the current language.
    // This also eliminates a column.
    return (
        <table className={'table table-striped table-hover table-' + theme}>
            <thead>
                <tr>
                    <th>{getString('date')}</th>
                    <th>{getString('name')}</th>
                    <th>POTA Locator</th>
                    <th>WW-FF Locator</th>
                    <th>{getString('bands')}</th>
                    <th>Mode</th>
                    <th>Transceiver</th>
                    <th>{getString('totalUniqueQSO')}</th>
                    <th>{getString('antenna')}</th>
                </tr>
            </thead>
            <tbody>
                {fielddaysData.fielddays.map((fieldDay, index) => (
                    <tr key={index}>
                        <td>{generatePath(fieldDay.date, getLanguage(), fieldDay.date)}</td>
                        <td>{generatePath(fieldDay.date, getLanguage(), fieldDay.name)}</td>
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
