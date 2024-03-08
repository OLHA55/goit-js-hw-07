 const item = document.querySelectorAll(".item")

 console.log(`Number of categories:${item.length} `);
const ul = Array.from(document.querySelector('#categories').children);
for (let item of ul) {
    let category = item.firstElementChild.textContent;   
    let quantityElem = item.lastElementChild.children.length;
    console.log(`Category: ${category} 
    Elements:  ${quantityElem}`);
};  






