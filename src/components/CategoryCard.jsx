import {Link} from 'react-router-dom';

function CategoryCard(props) {
    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props

    return <div className="card" id={idCategory}>
    <div className="card-image">
      <img src={strCategoryThumb} alt={strCategory}/>
    </div>
    <div className="card-content">
      <span className="card-title">{strCategory}</span>
      <p>{strCategoryDescription.slice(0, 60)} ...</p>
      
    </div>
	<div className="card-action">
		<Link to={'/category/' + strCategory}><button className="btn">Watch category</button></Link>
    </div>
  </div>
}

export {CategoryCard};