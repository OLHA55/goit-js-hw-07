function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}
//  function getRandomHexColor() {
//             return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//         }

        function changeColor() {
            var body = document.querySelector('body');
            var colorSpan = document.querySelector('span.color');

            var randomColor = getRandomHexColor();
            body.style.backgroundColor = randomColor;
            colorSpan.textContent = randomColor;
        }

        document.addEventListener('DOMContentLoaded', function() {
            var button = document.querySelector('.change-color');
            button.addEventListener('click', changeColor);
        });