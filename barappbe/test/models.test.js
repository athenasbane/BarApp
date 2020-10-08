const expect = require('chai').expect;

const InputOption = require('../models/inputOptions.model');
const Product = require('../models/product.model');
const Order = require('../models/order.model');
const Table = require('../models/table.model')

describe('inputOptions Model', () => {
    const i = new InputOption();
    it('should be invalid if optionTitle is empty', done => {

        i.validate(err => {
            expect(err.errors.optionTitle).to.exist;
            done();
        });
    });

    it('should be invalid if price is empty', done => {   

        i.validate(err => {
            expect(err.errors.price).to.exist;
            done();
        });
    });

    it('should be invalid if product is empty', done => {

        i.validate(err => {
            expect(err.errors.product).to.exist;
            done();
        });
    });

    it('shoud be valid when provided optionTitle, price', done => {
        
        const p = new Product({
            title: 'test product',
            category: 'test cat',
            subCategory: 'test sub'
        });
        
        const i = new InputOption({
            optionTitle: 'Test Option',
            price: 4,
            product: p._id
        });
        
        i.validate(err => {
            expect(err).to.not.exist;
            done();
        });
    });
});

describe('Product Model', () => {
    const p = new Product()

    it('should be invalid if title is not present', done => {
        p.validate(err => {
            expect(err.errors.title).to.exist;
            done();
        });
    });

    it('should be invalid if category is not present', done => {
        p.validate(err => {
            expect(err.errors.category).to.exist;
            done();
        });
    });

    it('should be invalid if subcategory is not present', done => {
        p.validate(err => {
            expect(err.errors.subCategory).to.exist;
            done();
        });
    });

    it('should be invalid if subcategory is not present', done => {
        
        const p = new Product({
            title: 'test product',
            category: 'test cat',
            subCategory: 'test sub'
        });
        
        p.validate(err => {
            expect(err).not.to.exist;
            done();
        });
    });
});

describe('Order Model', () => {
    const o = new Order();

    it('should be invalid if orderedItems is not present', done => {
        o.validate(err => {
            expect(err.errors.orderedItems).to.exist;
            done();
        });
    });
    it('should be invalid if tableNumber is not present', done => {
        o.validate(err => {
            expect(err.errors.tableNumber).to.exist;
            done();
        });
    });

    it('should be invalid if totalPrice is not present', done => {
        o.validate(err => {
            expect(err.errors.totalPrice).to.exist;
            done();
        });
    });

    it('should be invalid if all required are present', done => {
        const o = new Order({
            orderedItems: {
                title: 'TestItem',
                subOption: 'testSub',
                optionId: 'this is a code',
                volume: 2
            },
            tableNumber: 1,
            totalPrice: 2
        });

        o.validate(err => {
            expect(err).to.not.exist;
            done();
        });
    });

});

describe('Table Model', () => {
    const t = new Table();

    it('should be invalid if tableNum is not present', done => {
        t.validate(err => {
            expect(err.errors.tableNum).to.exist;
            done();
        });
    });

    it('should be invalid if tableActive is not present', done => {
        t.validate(err => {
            expect(err.errors.tableActive).to.exist;
            done();
        });
    });
})