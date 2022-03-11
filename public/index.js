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
let article = 0;


addEventListener('load', () => {
	image.innerHTML = `
	         <img src="./images/pattern-bg.svg" alt="some pattern" id="pattern">
			<img src="${users[article].image}" alt="${users[article].name}" id="person">`;
	para.innerHTML = ` <p>${users[article].paragraph}</p>`;
	job.innerHTML = `${users[article].job}`;
	name.innerHTML = `${users[article].name}`;
});

const directions = () => {
	if (article > users.length - 1) {
		article = 0;
	}
	image.innerHTML = ` <img src="./images/pattern-bg.svg" alt="" id="pattern">
						<img src="${users[article].image}" alt="${name}" id="person" class="show">`;
	para.innerHTML = `<p>${users[article].paragraph}</p>`;
	job.innerHTML = `${users[article].job}`;
	name.innerHTML = `${users[article].name}`;
	article++;
};
prevBtn.addEventListener('click', directions);
nextBtn.addEventListener('click', directions);
