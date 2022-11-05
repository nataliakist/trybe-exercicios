const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
}
  
createDaysOfTheWeek();
  
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
const createDaysOfTheMonth = () => {
	const getDaysList = document.querySelector('#days')
	for(let i = 0; i < decemberDaysList.length; i += 1) {
		const day = decemberDaysList[i];
		const dayItem = document.createElement('li');
		dayItem.innerHTML = day;
		if(day === 24 || day === 31) {
			dayItem.className = 'day holiday';
			getDaysList.appendChild(dayItem);
		} else if (day === 4 || day === 11 || day === 18) {
			dayItem.className = 'day friday';
			getDaysList.appendChild(dayItem);
		} else if (day === 25) {
			dayItem.className = 'day holiday friday';
			getDaysList.appendChild(dayItem);
		} else {
			dayItem.className = 'day';
			getDaysList.appendChild(dayItem);
		}
	}
}
createDaysOfTheMonth();

const createHolidayButton = (buttonName) => {
	const buttonContainer = document.querySelector('.buttons-container');
	const newButton = document.createElement('button');
	newButton.id = 'btn-holiday';
	newButton.innerHTML = buttonName;
	buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');

const displayHolidays = () => {
	const getHolidays = document.querySelectorAll('.holiday');
	const getButton = document.querySelector('#btn-holiday');
	const backgroundColor = 'rgb(238,238,238)';
	const newColor = 'lightgreen';
	getButton.addEventListener('click', () => {
		for(let i = 0; i < getHolidays.length; i += 1){
			if (getHolidays[i].style.backgroundColor === newColor){
				getHolidays[i].style.backgroundColor = backgroundColor;
			} else {
				getHolidays[i].style.backgroundColor = newColor;
			}
		}
	})
}
displayHolidays();

const createFridayButton = (string) => {
	const buttonContainer = document.querySelector('.buttons-container');
	const newButton = document.createElement('button');
	newButton.id = 'btn-friday';
	newButton.innerHTML = string;
	buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

const displayFridays = (fridaysArray) => {
	const getFridays = document.querySelectorAll('.friday');
	console.log(getFridays)
	const getButton = document.querySelector('#btn-friday');
	const newFridayText = 'SEXTOU!!!';
	getButton.addEventListener('click', () => {
		for(let i = 0; i < getFridays.length; i += 1){
			let days = fridaysArray[i]
			if(getFridays[i].innerText !== newFridayText){
				getFridays[i].innerText = newFridayText;
			} else {
				getFridays[i].innerText = days;
			}
		}
	})
}
let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

const mouseOver = () => {
	const days = document.querySelector('#days')
	days.addEventListener('mouseover', (event) => {
	event.target.style.fontSize = '30px';
	event.target.style.fontWeight = '600'
	})

}
const mouseOut = () => {
	const days = document.querySelector('#days')
	days.addEventListener('mouseout', (event) => {
	event.target.style.fontSize = '20px';
	event.target.style.fontWeight = '200'
	})
}
mouseOver();
mouseOut();

