// import images from '../data/images.js';

function imageFilter(imageArray, filter) {
    return imageArray.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;
        return hasKeyword && hasHorns;
    });
}

export default imageFilter;