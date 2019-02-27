const test = QUnit.test;

const imageArray = [
    { keyword: 'rhino', horns: 1 },
    { keyword: 'rhino', horns: 2 },
    { keyword: 'unicorn', horns: 2 }
];

function imageFilter(imageArray, filter) {
    return imageArray.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;
        return hasKeyword && hasHorns;
    });
}

test('filter by keyword rhino', function(assert) {
    //arrange
    const filter = {
        keyword: 'rhino',
    };
  
    const expected = [ 
        { keyword: 'rhino', horns: 1 },
        { keyword: 'rhino', horns: 2 } 
    ];
    //act
    const result = imageFilter(imageArray, filter);

    //assert
    assert.deepEqual(result, expected);

});

test('return all images if keyword is empty', function(assert){
    //arrange
    const filter = {
        keyword: ''
    };

    const expected = imageArray;
    //act
    const result = imageFilter(imageArray, filter);
    
    //assert
    assert.deepEqual(result, expected);


});

test('filter by horn number', function(assert) {
    //arrange
    const filter = {
        keyword: '',
        horns: 2
    };
    const expected = [
        { keyword: 'rhino', horns: 2 },
        { keyword: 'unicorn', horns: 2 }
    ];
    //act
    const result = imageFilter(imageArray, filter);
    //assert
    assert.deepEqual(result, expected);
});

test('return all if no filter', function(assert) {
    //arrange
    const filter = {
        keyword: '',
        horns: NaN
    };
    const expected = [
        { keyword: 'rhino', horns: 1 },
        { keyword: 'rhino', horns: 2 },
        { keyword: 'unicorn', horns: 2 }
    ];
    //act
    const result = imageFilter(imageArray, filter);
    //assert
    assert.deepEqual(result, expected);
});