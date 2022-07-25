import './App.css';
import image from './Images/image.png';

function App() {
	return (
		<div>
			<div className='img-header'>
				<img src={image} alt='image-header' width='150px' />
			</div>
			<div className='title'>
				<h1>Declaratie App</h1>
			</div>
			<div className='container'>
				<div className='firstName'>
					First Name and Last Name: <br />
					<input placeholder='Please fill out your name'></input>
				</div>
				<div className='choose-a-date'>
					<label for='party'>Enter a date and time:</label>
					<br />
					<input
						id='party'
						type='datetime-local'
						name='partydate'
						value='2017-06-01T08:30'
					></input>
				</div>
			</div>
			<br />
			<div className='second-block'>
				<div className='container2'>
					Choose an expense:<br />
					<select name='expenses' id='expenses-select'>
						<option value=''>--Please choose an option--</option>
						<option value='Kilometers'>Kilometers</option>
						<option value='Openbaar vervoer'>Openbaar vervoer</option>
						<option value='Parkeren'>Parkeren</option>
						<option value='Eten en drinken'>Eten en drinken</option>
						<option value='Telefoon'>Telefoon</option>
						<option value='Kantoorbenodigdheden'>Kantoorbenodigdheden</option>
					</select>
				</div>
				<div className='expenses'>
					Expense Costs:
					<br />
					<input type='text' className='sum'
					onsubmit='CalculateSum(this)' placeholder='€ 0,00' >
					</input>
				</div>
			</div>
			<br />
			<div className='third-block'>
				<div className='text-block'>
					<label for='textBox'></label>
					Extra information:<br />
					<textarea
						id='textBox'
						name='textBox'
						rows='4'
						cols='50'
						placeholder='Extra information'
					></textarea>
				</div>
				<div>
					<label for='myfile'>Select a file:</label><br />
					<input type='file' id='myfile' name='myfile'></input>
				</div>
			</div>
		</div>
	);
}

export default App;
