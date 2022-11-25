/* eslint-disable no-undef */
/* eslint-disable max-len */
const assert = require('assert');

Feature('Go to detail restaurant');

Before(({ I }) => {
  I.amOnPage('/#');
});

Scenario('Go to detail one restaurant', async ({ I }) => {
  I.waitForElement('#explore-restaurant .card');
  const firstIndexRestaurant = locate('#explore-restaurant .card').first();
  const firstIndexRestaurantName = await I.grabTextFrom(firstIndexRestaurant.find('.card-content-title'));
  I.click(firstIndexRestaurant.find('a'));
  I.waitForElement('#detail-resto .detail');
  const restoDetailName = await I.grabTextFrom('.detail-name-address-rating');
  assert.strictEqual(firstIndexRestaurantName, restoDetailName);
});
