import * as $ from 'jquery';

$(document).ready(() => {
	console.log('I got parcel-bundler to work!');
	console.log('I made a change and recompiled');
});

import cards from './cards';

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
