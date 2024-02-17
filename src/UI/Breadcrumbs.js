import React from 'react';

const Breadcrumbs = ({ separator, path, children }) => {
    const items = React.Children.toArray(children);

    const generatePath = (index) => {
        return path.split('/').slice(0, index + 1).join('/');
    };

    if (items.length !== path.split('/').length) {
        throw new Error('The number of breadcrumbs does not match the number of items in the path.');
    }

    return (
        <div className='breadcrumbs'>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <span className='separator'>{separator}</span>}
                    {index < items.length - 1 ? (
                        <a href={generatePath(index)}>{item}</a>
                    ) : (
                        <a href={generatePath(index)}>{item}</a>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Breadcrumbs;