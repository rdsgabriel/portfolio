function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

const nav = document.getElementById("especific")
const sim = document.getElementById("symbol")

const openNav = () => {	
	nav.classList.remove('hidden')
	sim.classList.add('hidden')	
}

const closeNav = () => {
	nav.classList.add('hidden')
	sim.classList.remove('hidden')
}
const off = document.getElementById("off")
const on = document.getElementById("on")
const dom = document.querySelector('html')
const bgChange = document.querySelector('body')
const tail = document.getElementById("tail")
const type = document.getElementById("type")
const react = document.getElementById("react")
const ex = document.getElementById("ex")
const git = document.getElementById("git")
const linkedin = document.getElementById("linkedin")
const wpp = document.getElementById("wpp")
const close = document.getElementById("close")
const open = document.getElementById("open")


off.addEventListener('change',light = () => {
	dom.classList.remove('dark')
	bgChange.classList.remove('backsdark')
	bgChange.classList.add('backs')	
	tail.style.fill='#374151'
	type.style.fill='#374151'
	react.style.fill='#374151'
	ex.style.fill='#374151'
	git.style.fill='#374151'
	linkedin.style.fill='#374151'
	wpp.style.fill='#374151'
	close.style.fill='#374151'
	open.style.fill='#374151'
	off.classList.add('hidden')
	on.classList.remove('hidden')
})

on.addEventListener('change',dark = () => {
	dom.classList.add('dark')
	bgChange.classList.remove('backs')
	bgChange.classList.add('backsdark')	
	tail.style.fill='white'
	type.style.fill='white'
	react.style.fill='white'
	ex.style.fill='white'
	git.style.fill='white'
	linkedin.style.fill='white'
	wpp.style.fill='white'
	close.style.fill='white'
	open.style.fill='white'
	on.classList.add('hidden')
	off.classList.remove('hidden')
})

dark()