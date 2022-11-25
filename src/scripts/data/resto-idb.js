/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const FavRestoIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await openIdb).get(OBJECT_STORE_NAME, id);
  },

  // get all resto
  async getAllResto() {
    return (await openIdb).getAll(OBJECT_STORE_NAME);
  },

  // put resto
  async putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await openIdb).put(OBJECT_STORE_NAME, restaurant);
  },

  // delete resto
  async deleteResto(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavRestoIdb;
