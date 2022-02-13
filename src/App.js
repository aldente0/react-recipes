import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Category } from './components/Category';
import { Meal } from './components/Meal';
import { NotFound } from './components/NotFound';

function App() {
	return (
		<>
			<Router basename='/react-recipe'>
				<Header />
				<main className='container content'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/category/:catName' component={Category} />
						<Route path='/meal/:idMeal' component={Meal} />
						<Route component={NotFound} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
