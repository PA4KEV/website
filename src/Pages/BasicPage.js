import React, {useState, useEffect} from 'react';

import ScrollSpy from '../UI/ScrollSpy';

const BasicPage = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/jsonapi/node/page/" + props.id)
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
      }, [])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(items);
        return (        
            <div className='row'>            
                <ScrollSpy/>
                <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
                    <section id="list-skills" className="content-section">
                        <h2 className="text-primary">{items['data']['attributes']['title']}</h2>
                        <hr/>
                    </section>
                </div>
            </div>
            )
        }
}

export default BasicPage;