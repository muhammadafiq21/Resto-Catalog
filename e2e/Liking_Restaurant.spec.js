/* eslint-disable no-undef */
const assert = require('assert');

/* eslint-disable max-len */
Feature('Liking Restaurant and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('#fav-resto');
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#fav-resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('#main-container');
  I.waitForElement('#explore-restaurant .card');
  const firstIndexRestaurant = locate('#explore-restaurant .card').first();
  const firstIndexRestaurantName = await I.grabTextFrom(firstIndexRestaurant.find('.card-content-title'));
  I.click(firstIndexRestaurant.find('a'));
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto .card');
  const favoriteRestoName = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstIndexRestaurantName, favoriteRestoName);
});

Scenario('Unliking one restaurant that already liked', async ({ I }) => {
  I.waitForElement('#main-container');
  I.waitForElement('#explore-restaurant .card');
  I.click('#explore-restaurant .card a');
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto .card');

  I.click('#fav-resto .card a');
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#fav-resto');
});
