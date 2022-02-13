import { useEffect, useState } from "react";
import {useLocation, useHistory} from 'react-router-dom';

import {getAllCategories} from '../api';

import {Preloader} from './Preloader';
import {Categories} from './Categories';
import {Search} from './Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const {push} = useHistory();


    const handleSearch = (value) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(value.toLowerCase()))
        );
        push({
            pathname,
            search: `?search=${value}`
        });
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? data.categories.filter(el => el.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories);
        })

    }, [search])

    return <>
        <Search cb={handleSearch}/>
        {
            !catalog.length ? <Preloader/> : (
                <Categories catalog={filteredCatalog}/>
            )
        }
        
    </>
}

export {Home}