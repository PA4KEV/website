import { getLanguage } from "./Language";

const languageStrings = {
    en: {
        // Common
        and: 'and',
        on: 'on',
        copy: 'copy',
        // Titles
        japanese: 'Japanese',
        radio_amateur: 'Radio amateur',
        software: 'Software',
        // Japan
        download_map_at_github: 'Get this map at Github',
        // Education
        certification: 'Certification',
        completed: 'Completed',
        courses: 'Courses',
        education: 'Education',
        issued: 'issued',
        skills: 'Skills',
        // Navigation
        portal: 'Portal',
        language: 'Language',
        // Radio
        equipment: 'Equipment',
        components: 'components',
        fielddays: 'Field days',
        nvisAntenna: 'NVIS Antenna',
        // Software
        code_pages: 'Code sections',
        code_pages_intro: 'Some notes and examples of code.',
        // Footer
        footer_contentparsed: 'Content is parsed by',
        footer_madewith: 'This site was made with',
    },
    nl: {
        // Common
        and: 'en',
        on: 'op',
        copy: 'kopieer',
        // Titles
        japanese: 'Japans',
        radio_amateur: 'Radiozendamateur',
        software: 'Software',
        // Japan
        download_map_at_github: 'Download deze kaart op Github',
        // Education
        certification: 'Certificering',
        completed: 'Voltooid',
        courses: 'Cursussen',
        education: 'Opleiding',
        issued: 'uitgegeven',
        skills: 'Vaardigheden',
        // Navigation
        portal: 'Portaal',
        language: 'Taal',
        // Radio
        equipment: 'Apparatuur',
        components: 'componenten',
        fielddays: 'Velddagen',
        nvisAntenna: 'NVIS Antenne',
        // Software
        code_pages: 'Code secties',
        code_pages_intro: 'Notities en voorbeelden van code.',
        // Footer
        footer_contentparsed: 'Inhoud is verwerkt door',
        footer_madewith: 'Deze website is gemaakt met',
    },
};

export function getString(key) {
    const language = getLanguage();
    return languageStrings[language][key] || `{${key}}`;
}