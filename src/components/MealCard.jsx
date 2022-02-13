import {Link} from 'react-router-dom';

function MealCard(props) {
    const {idMeal, strMeal, strMealThumb} = props;

    return <div className="card" id={idMeal}>
    <div className="card-image">
      <img src={strMealThumb} alt={strMeal}/>
    </div>
    <div className="card-content">
      <span className="card-title">{strMeal}</span>
    </div>
	<div className="card-action">
		<Link to={'/meal/' + idMeal}><button className="btn">Watch recipe</button></Link>
    </div>
  </div>
}

export {MealCard};