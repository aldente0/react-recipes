import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getFilteredCategory} from '../api';

import {Preloader} from './Preloader';
import {MealsList} from './MealsList';

function Category() {
    const {catName} = useParams();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(catName)
            .then(data => setMeals(data.meals))
        //eslint-disable-next-line
    }, [])


    return (
        !meals.length ?  <Preloader/> : (
            <MealsList meals={meals}/>
        )
    )
}
export {Category};