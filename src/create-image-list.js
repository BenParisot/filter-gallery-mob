export function createImageList(image) {
    const template = document.createElement('template');

    template.innerHTML = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>Horns: ${image.horns}</p> </li>`;
    
    const dom = template.content;
    return dom;
}

export default function loadImage(images) {
    const imageListNode = document.getElementById('image-list');
    while(imageListNode.children.length > 0) {
        imageListNode.removeChild(imageListNode.lastChild);
    }
    images.forEach(image => {
        const imageLi = createImageList(image);
        imageListNode.appendChild(imageLi);
    });
}


