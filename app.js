



// jQuery(document).ready(function () {
//   const frameCount = 20;

//   for (let i = 1; i < frameCount; i++) {
//     // console.log(currentFrame(i))
//     jQuery('#pseudo-window').append(
//       '<div class="slide slide' + i + '" style="background-image:url(' + currentFrame(i) + ')"><h1>' + i + '</h1></div>'
//     )
//   }

//   jQuery('#pseudo-window').height(frameCount * $(window).height())

//   action = new TimelineMax({ paused: true })
//     .staggerTo('.slide', 0.01, {
//       x: '100%', y: '100%',
//       rotation: 360,
//       ease: Power4.easeOut,
//       onUpdateScope: (tween) => {
//         console.log('onUpdateScope ' + (tween + 1))
//       },
//       onStart: (tween) => {
//         console.log('onStart ' + (tween + 1))
//       },
//       onStart: (tween) => {
//         console.log('onStart ' + (tween + 1))
//       },
//       onComplete: (tween) => {
//         console.log('onComplete ' + (tween + 1))
//       },
//       onUpdateScope: (tween) => {
//         console.log('onUpdateScope ' + (tween + 1))
//       },
//       onCompleteScope: (tween) => {
//         console.log('onCompleteScope ' + (tween + 1))
//       },
//       onReverseComplete: (tween) => {
//         console.log('onReverseComplete ' + (tween + 1))
//       },
//       onStartScope: (tween) => {
//         console.log('onStartScope ' + (tween + 1))
//       },
//       //ease: Back.easeOut.config(1.4) 
//     }, 2)
//     .staggerFrom('.slide h1', 0.01, {
//       autoAlpha: 0,
//       scale: 0.5, transformOrigin: 'center',
//     }, 2, 1.2)


// jQuery(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   var docHeight = $(document).height();
//   var winHeight = $(window).height();
//   //action.progress(scrollTop)
//   if (scrollTop >= 0) {
//     action.progress(scrollTop / (docHeight - winHeight), true);
//   }
// });

//   window.addEventListener('scroll', () => {
//     debugger
//     const scrollTop = jQuery('html').scrollTop();
//     const maxScrollTop = jQuery('html').scrollHeight - jQuery(window).innerHeight;
//     const scrollFraction = scrollTop / maxScrollTop;
//     const frameIndex = Math.min(
//       frameCount - 1,
//       Math.floor(scrollFraction * frameCount)
//     );
//     console.log(frameIndex);
//   });
// })

function currentFrame(index) {
  if (canUseWebP()) {
    return `http://localhost/bassobike/Frame_SV_Webp/SV${index}.webp`
  } else {
    return `http://localhost/bassobike/Frame_SV/SV${index}.jpg`
  }

}
function canUseWebP() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}


const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

if (canUseWebP()) {
  frameCount = 1089
} else {
  frameCount = 1089
}
// const currentFrame = index => (
//   `https://basso.mahiz.dev/Sequence/SV${index.toString().padStart(4, '')}.jpg`
// )

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = 1920;
canvas.height = 1080;
img.onload = function () {
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}
var currentframe = 0;
const animationText = index => {
  console.log(index);
  if (index != currentframe) {
    currentframe = index;
  }
  var data = {
    "1": {
      "text": "hello all good I am at slide 1",
      "position": {
        "large": {
          "from": { "top": 10, "left": 20 },
          "to": { "top": 20, "left": 200, duration: 1 }
        }
      }
    },
    "2": {
      "text": "hello all good I am at slide 1",
      "position": {
        "large": {
          "from": { "top": 10, "left": 20 },
          "to": { "top": 20, "left": 200, duration: 1 }
        }
      }
    },
    "3": {
      "text": "hello all good I am at slide 1",
      "position": {
        "large": {
          "from": { "top": 10, "left": 20 },
          "to": { "top": 200, duration: 1 }
        }
      }
    },
    "4": {
      "text": "hello all good I am at slide 1",
      "position": {
        "large": {
          "from": { "top": 10, "left": 20 },
          "to": { "top": 300, duration: 1 }
        }
      }
    },
    "5": {
      "text": "hello all good I am at slide 1",
      "position": {
        "large": {
          "from": { "top": 10, "left": 20 },
          "to": { "top": 20, "left": 400, duration: 1 }
        }
      }
    }
  };
  // if (jQuery('.frame_animation_' + index).length) {
  windowsize = 'large'
  console.log(data[index]);
  jQuery('.frame_animation').html(data[index]['text'])
  gsap.set('.frame_animation', data[index]['position'][windowsize]['from'])
  gsap.to('.frame_animation', data[index]['position'][windowsize]['to'])
  // }

}

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1))
  animationText(frameIndex + 1)
});

// preloadImages()