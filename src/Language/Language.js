export const languages = ['en', 'nl'];

export function getLanguage() {
    const currentPath = window.location.pathname;
    let language;
    try {
        const result = currentPath.split('/')[1];
        if (languages.includes(result)) {
            language = result;
        } else {
            throw new Error('Invalid language detected');
        }
    }
    catch (error) {
        language = 'en';
    }
    return language;
}