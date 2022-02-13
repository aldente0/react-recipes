import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

import {useHistory} from 'react-router-dom';
import {getMeal} from '../api';
import {Preloader} from './Preloader';

function Meal() {
    const {idMeal} = useParams();

    const [meal, setMeal] = useState({});

    useEffect(() => {
        getMeal(idMeal).then( data => {
            setMeal(data.meals[0])
        }
        )
        //eslint-disable-next-line
    }, [])

    const {goBack} = useHistory();

    return <>
        <button className="btn" onClick={() => goBack()}>Go back</button>
        {
            !meal.idMeal ? <Preloader/> : (
                <div className="recipe">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h1>{meal.strMeal}</h1>
                    <h6>Category: {meal.strCategory}</h6>
                    {
                        meal.strArea ? <h6>Area: {meal.strArea}</h6> : null
                    }
                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            Object.keys(meal).map(key => {
                                if (key.includes('Ingredient') && meal[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{meal[key]}</td>
                                            <td>{
                                                meal[`strMeasure${key.slice(13)}`]
                                                }</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                           } 
                        </tbody>
                    </table>
                    <h4>Instructions</h4>
                    <p>{meal.strInstructions}</p>
                    {
                        meal.strYoutube ? (
                            <div className="row">
                                <h5>Video Recipe</h5>
                                <iframe title={meal.idMeal} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} allowFullScreen/>
                            </div>
                        ) : null
                    }
                </div>
            )
        }
        <button className="btn" onClick={() => goBack()}>Go back</button>
        
    </> 
}

export {Meal};