import cards from './cards.js';

const chooseRandomImg = function (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};

const createCard = function () {
	const srcUrl = chooseRandomImg(cards);
	let $imgForCard = $(`<img src=${srcUrl} alt='card image'>`);
	let $newCard = $('.container').append($imgForCard);
	return $newCard;
};

// const $card = $('<div>');
const $addBtn = $('.addCard');

$addBtn.click(function () {
	createCard(chooseRandomImg(cards));
});
