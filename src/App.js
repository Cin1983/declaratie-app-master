import './App.css';
import image from './Images/image.png'

function App() {
	return (
		<div>
			<div className='img-header'>
				<img src={image} alt='image' />
			</div>
			<div className='title'>
				<h1>Declaration App</h1>
			</div>
		</div>
	);
}

export default App;
