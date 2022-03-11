const job = document.getElementById('quotes_job');
const name = document.getElementById('quotes_name');
const para = document.getElementById('quotes-para');
const image = document.getElementById('pictures-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const users = [
	{
		name: 'Tanya Sinclair',
		job: 'UX Engineer',
		paragraph: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
		image: './images/image-tanya.jpg'
	},
	{
		name: 'John Tarkpor',
		job: 'Junior Front-end Developer',
		paragraph: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
		image: './images/image-john.jpg'
	}
];
let slide = 0;


addEventListener('load', () => {
	image.innerHTML = `
	         <img src="./images/pattern-bg.svg" alt="" id="pattern">
			<img src="${users[slide].image}" alt="" id="person">`;
	para.innerHTML = ` <p>${users[slide].paragraph}</p>`;
	job.innerHTML = `${users[slide].job}`;
	name.innerHTML = `${users[slide].name}`;
});

const navigation = () => {
	if (slide > users.length - 1) {
		slide = 0;
	}
	image.innerHTML = ` <img src="./images/pattern-bg.svg" alt="" id="pattern">
						<img src="${users[slide].image}" alt="${name}" id="person" class="show">`;
	para.innerHTML = `<p>${users[slide].paragraph}</p>`;
	job.innerHTML = `${users[slide].job}`;
	name.innerHTML = `${users[slide].name}`;
	slide++;
};
prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);
