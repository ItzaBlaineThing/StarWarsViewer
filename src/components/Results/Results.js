import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ResultItem } from '../ResultItem/ResultItem';
import { ResultsWrapper } from './Results.styled';

export const Results = ({ activeTab, hasNextPage, fetchNextPage, pages, updateResult }) => {

    // console.log(activeTab);
    console.log(pages);
    const loader = useRef(null);

    // Create json configs for the various key's we're expecting(Ex. People, Films, Starships, etc.) and the desired attributes
    const peopleConfig = ["name", "gender", "birth_year", "eye_color", "hair_color"];
    const filmsConfig = ["title", "episode_id", "director", "producer", "release_date"];
    const starshipsConfig = ["name", "model", "starship_class", "cost_in_credits", "crew"];
    const vehiclesConfig = ["name", "model", "vehicle_class", "cost_in_credits", "crew"];
    const speciesConfig = ["name", "classification", "designation", "average_lifespan", "language"];
    const planetsConfig = ["name", "orbital_period", "population", "climate", "terrain"];

    const [activeConfig, setActiveConfig] = useState(peopleConfig);

    const updateConfig = (key) => {
        switch (key) {
            case 'people':
                setActiveConfig(peopleConfig);
                break;
            case 'films':
                setActiveConfig(filmsConfig);
                break;
            case 'starships':
                setActiveConfig(starshipsConfig);
                break;
            case 'vehicles':
                setActiveConfig(vehiclesConfig);
                break;
            case 'species':
                setActiveConfig(speciesConfig);
                break;
            case 'planets':
                setActiveConfig(planetsConfig);
                break;
        }
    }

    // Similar to useEffect, except useMemo only updates when there is an update to activeTab instead on each render
    useMemo(() => {
        updateConfig(activeTab);
    }, [activeTab]);

    /* Infinite Scroll Testing */
    const handleObserver = useCallback((entries) => {
        // console.log(entries);
        const target = entries[0];
        if (target.isIntersecting) {
            fetchNextPage();
        }
    })

    useEffect(() => {
        console.log('useEffect triggered');
        const options = {
            root: document.querySelector('.results'),
            rootMargin: '0px',
            threshold: 0
        }

        // Detects movement
        let observer = new IntersectionObserver(handleObserver, options);

        if (loader.current) {
            console.log(loader);
            observer.observe(loader.current);
        }
    }, [handleObserver]);

    return (
        <ResultsWrapper className='results'>
            <h3>Results</h3>

            {pages.map(page => {
                return page.data.results.map((result, index) => {
                    return <ResultItem key={`${result.name}-${index}`} config={activeConfig} result={result} updateResult={updateResult} />
                })
            })}

            {/* Item the observer is watching to trigger next load */}
            {hasNextPage ?
                <div className="loader-ref" ref={loader} />
            :
                <div>
                    No more data to fetch
                </div>
            }
        </ResultsWrapper>
    )
}