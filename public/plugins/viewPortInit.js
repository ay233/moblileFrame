 window.onload = function () {
          window.viewportUnitsBuggyfill.init({
            hacks: window.viewportUnitsBuggyfillHacks
          });
          var winDPI = window.devicePixelRatio;
              var uAgent = window.navigator.userAgent;
              var screenHeight = window.screen.height;
              var screenWidth = window.screen.width;
              var winWidth = window.innerWidth;
              var winHeight = window.innerHeight;
              // console.log(
              //     "Windows DPI:" + winDPI +
              //     ";\ruAgent:" + uAgent +
              //     ";\rScreen Width:" + screenWidth +
              //     ";\rScreen Height:" + screenHeight +
              //     ";\rWindow Width:" + winWidth +
              //     ";\rWindow Height:" + winHeight
              // )
        }