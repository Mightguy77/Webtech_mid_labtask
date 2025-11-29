const images = [
  "https://cdn.pixabay.com/photo/2025/11/08/13/23/zebra-9944593_1280.jpg",
  "https://media.istockphoto.com/id/1135079092/photo/idyllic-mountain-landscape-in-the-alps-mountain-chalet-meadows-and-blue-sky.jpg?s=612x612&w=is&k=20&c=KYz43YIIQlqBH1RDojIRkNqa0_G5mOzgmvLjZjzShZ0=",
  "https://cdn.pixabay.com/photo/2023/04/15/14/43/baby-7927869_1280.jpg",
  "https://media.istockphoto.com/id/1135078485/photo/idyllic-mountain-landscape-in-the-alps-mountain-chalet-meadows-and-blue-sky.jpg?s=612x612&w=is&k=20&c=-uxvnHurEbWe9GsB2Fp7HKVm_8V439FrhSRDQmLPeYc=",
  "https://cdn.pixabay.com/photo/2025/08/15/06/29/mountain-cabin-9776289_1280.jpg"
];

const imgEl = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
function showImage(i) {
  index = i;
  imgEl.src = images[index];
}
showImage(0); 

prevBtn.addEventListener('click', () => showImage(index - 1));
nextBtn.addEventListener('click', () => showImage(index + 1));



setInterval(() => {
  showImage(index + 1);
}, 3000);