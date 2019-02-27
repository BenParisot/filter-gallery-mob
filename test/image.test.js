import './html-equal.js';
import { createImageList } from '../src/create-image-list.js';

const test = QUnit.test;

test('create html template using interpolation', assert => {
    //arrange
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };
    const expected = `<li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        <p>Horns: 1</p>
    </li>`; 
    //act
    const result = createImageList(image);

    //assert
    assert.htmlEqual(result, expected);
});
