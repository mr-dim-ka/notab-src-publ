// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


function addClassLoaded() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}

addClassLoaded();

/* const cookie = document.querySelector('.cookie');
const cookieBtn = document.querySelector('.cookie__btn'); */

document.addEventListener("click", function (e) {
	const targetEl = e.target;
	if (targetEl.closest('.cookie__btn')) {
		targetEl.closest('.cookie').classList.add('hidden');
	}
});