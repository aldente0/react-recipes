import { CategoryCard } from "./CategoryCard";

function Categories(props) {
    const {catalog} = props;

    

    return <>
        <div className="list">
            {
                catalog.map(el => {
                    return <CategoryCard key={el.idCategory} {...el}/>
                })
            }
        </div>
    </>
        
}

export {Categories};