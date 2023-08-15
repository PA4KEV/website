import React, {useState, useEffect} from 'react';
import parse from 'html-react-parser'
import { useTheme } from '../ThemeContext';

// import ScrollSpy from '../UI/ScrollSpy';

const BasicPage = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const { theme } = useTheme();

    useEffect(() => {
        fetch("http://localhost:5218/page/" + props.id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [props])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(items)

        const title = items[0]['title']
        const subtitle = items[0]['subtitle']
        const body = items[0]['content']

        return (        
            <div className='row'>            
                {/* <ScrollSpy/> */}
                <div className={`scrollspy-example col-6 offset-3 bg-${theme}`} data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                    <section id="list-skills" className={`text-${theme}`}>
                        <h2 className={`text-primary-${theme}`}>{title}</h2>
                        <h4 className={`text-secondary-${theme}`}>{subtitle}</h4>
                        <hr/>
                        {parse(body)}
                    </section>
                </div>
            </div>
            )
        }
}

export default BasicPage;