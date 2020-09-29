const fakeData = [{
    type: 'product',
    title: 'Strongbow',
    category: 'drinks',
    subCategory: 'cider',
    active: true
}, {
    type: 'product',
    title: 'Fish & Chips',
    category: 'food',
    subCategory: 'mains',
    active: true
}, {
    type: 'product',
    title: 'Pizza',
    category: 'food',
    subCategory: 'mains',
    active: false
},{
    type: 'product',
    title: 'Pate',
    category: 'food',
    subCategory: 'starter',
    active: false
}];

const productListBuilder = (data) => {
    const sorted = data.sort((a, b) => {
        if(a.category === b.category) {
            return a.subCategory - b.subCategory;
        }
        return a.category - b.category
    });

    let cat = '';
    let subcat = '';
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].category === cat) {
            if (sorted[i].subCategory === subcat) {
                result.push(sorted[i]);
            } else {
                subcat = sorted[i].subCategory;
                result.push({
                    type: 'subtitle',
                    title: sorted.subCategory
                }, sorted[i]);
            }
        } else {
            cat = sorted.category;
            subcat = sorted.subCategory;
            result.push({
                type: 'title',
                text: sorted[i].category
            }, {
                type: 'subtitle',
                title: sorted.subCategory
            }, sorted[i]);
        }
    }
    return result;
}

console.log(productListBuilder(fakeData))