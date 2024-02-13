function display_random_image()
{  
    var width = 400;
    var height = 300
    var theImages = [{
        src: "/images/together/badump.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date1.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date2.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date3.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date4.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date5.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date6.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date7.png",
        width: width,
        height: height
    }, {
        src: "/images/together/date8.png",
        width: width,
        height: height
    }, {
        src: "/images/together/date9.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date10.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date11.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/date12.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/vc1.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/vc2.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/vc3.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/vc4.jpg",
        width: width,
        height: height
    }, {
        src: "/images/together/vc5.png",
        width: width,
        height: height
    }, {
        src: "/images/together/vc6.png",
        width: width,
        height: height
    }, {
        src: "/images/together/vc7.png",
        width: width,
        height: height
    }, {
        src: "/images/together/vc8.png",
        width: width,
        height: height
    }, {
        src: "/images/together/vc9.png",
        width: width,
        height: height
    }, {
        src: "/images/together/vc10.png",
        width: width,
        height: height
    }];

    // create random image number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get random index
var randomIndex = getRandomInt(0, theImages.length - 1);

// Get random image data
var randomImage = theImages[randomIndex];

// Create new image element
var newImage = document.createElement('img');
newImage.src = randomImage.src;
newImage.width = randomImage.width;
newImage.height = randomImage.height;

// Get bounding rectangle of the target div
var targetDiv = document.getElementById('card');
var targetRect = targetDiv.getBoundingClientRect();

// Calculate positions for each direction
var left = getRandomInt(0, targetRect.left - randomImage.width);
var right = getRandomInt(targetRect.right, window.innerWidth - randomImage.width);
var above = getRandomInt(0, targetRect.top - randomImage.height);
var below = getRandomInt(targetRect.bottom, window.innerHeight - randomImage.height);

// Choose a random direction
var directions = ['left', 'right', 'above', 'below'];
var randomDirection = directions[Math.floor(Math.random() * directions.length)];

// Set image position based on the chosen direction
switch(randomDirection) {
  case 'left':
    newImage.style.left = left + 'px';
    newImage.style.top = getRandomInt(0, window.innerHeight - randomImage.height) + 'px';
    break;
  case 'right':
    newImage.style.left = right + 'px';
    newImage.style.top = getRandomInt(0, window.innerHeight - randomImage.height) + 'px';
    break;
  case 'above':
    newImage.style.left = getRandomInt(0, window.innerWidth - randomImage.width) + 'px';
    newImage.style.top = above + 'px';
    break;
  case 'below':
    newImage.style.left = getRandomInt(0, window.innerWidth - randomImage.width) + 'px';
    newImage.style.top = below + 'px';
    break;
}

// Set image position
newImage.style.position = 'absolute';

// display the image  
document.body.appendChild(newImage);

// Set initial transform to scale(0)
newImage.style.transform = 'scale(0)';

// Append the image to the document
document.body.appendChild(newImage);

// Trigger reflow to ensure CSS transition is applied
newImage.offsetWidth;

// Animate the image by changing its scale to 1
newImage.style.transform = 'scale(1)';
document.getElementById("card_sure").innerText = "Are you sure?? :(";
}