"use strict";
exports.__esModule = true;
var $ = require("./node_modules/jquery");
$(document).ready(function () {
    console.log('I got parcel-bundler to work!');
    console.log('I made a change and recompiled');
});
var cards_1 = require("./cards");
var chooseRandomImg = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
var createCard = function (fn) {
    var srcUrl = chooseRandomImg(cards_1["default"]);
    var $imgForCard = $("<img src=" + srcUrl + " alt='card image'>");
    var $newCard = $('.container').append($imgForCard);
    return $newCard;
};
// const $card = $('<div>');
var $addBtn = $('.addCard');
$addBtn.click(function () {
    createCard(chooseRandomImg(cards_1["default"]));
});
