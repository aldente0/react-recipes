import {useHistory} from 'react-router-dom';
import {MealCard} from './MealCard';


function MealsList(props) {
    const {meals} = props;

    const {goBack} = useHistory();

    return<>
        <button className='btn' onClick={() => goBack()}>Go back</button>
        <div className="list">
            {
                meals.map(el => {
                    return <MealCard key={el.idMeal} {...el}/>
                })
            }
        </div>
    </>
    
    
}

export {MealsList};