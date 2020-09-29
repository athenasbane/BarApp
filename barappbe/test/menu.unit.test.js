const mongoose = require('mongoose');
const assert = require('assert');
const Menu = require('../models/menu.model');

mongoose.Promise = global.Promise;
describe('Menu Model', () => {
    it('should save a new item', (done) => {
        const item = new Menu({
            title: 'Strongbow',
            category: 'drink',
            subCategory: 'cider'
        });

        item.save()
        .then(() => {
            assert(!item.isNew);
            done();
        }).catch(err => {
            console.log(err)
        });
    });
});