import loadImages from './create-image-list.js';
import images from '../data/images.js';

loadImages(images);


const filterNode = document.getElementById('filter-form');
filterNode.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterNode);
    const filter = {
        keyword: formData.get('keyword'),
        horns: parseInt(formData.get('horns'))
    };
});
