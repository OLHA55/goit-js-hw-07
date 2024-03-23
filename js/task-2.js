const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
  
const image = document.querySelectorAll('images'); 	

image.forEach(arr => {
    const li = document.createElement('li'); 
    const newImg = document.createElement('images'); 
    newImg.url = "${images.url}"; 
   newImg.alt = "${images.alt}"; 
    li.appendChild(newImg); 
    newImg.appendChild(li); 
  }); 
 
let newarr = []
for (let key of Object.keys(images)) {
    const innerArr = []
    for (let value of Object.values(images[key])) {
        innerArr.push(value)
    }
    newarr.push(innerArr)
}
console.log(newarr)
const img = newarr.slice(0, 3); 
const arr = [img]; 
console.log(arr);

const obj = arr.reduce((object, value, index) => {
  return {...object, [index]: value};
}, {});
console.log(obj);