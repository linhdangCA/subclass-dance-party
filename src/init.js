$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.container').height() * Math.random() * 0.85,
      $('.container').width() * Math.random() * 0.9,
      Math.random() * 1000
    );

    var currLeftDist = Number.parseInt(dancer.$node[0].style.left);
    var currTopDist = Number.parseInt(dancer.$node[0].style.top);
    // Iterate through the window.dancers array
    for (let i = 0; i < window.dancers.length; i++) {
      // Find the distance between this new dancer and the other dancers
      var left = Number.parseInt(window.dancers[i].$node[0].style.left);
      var top = Number.parseInt(window.dancers[i].$node[0].style.top);
      if (!top) {
        continue;
      }

      var dist = Math.sqrt(Math.pow((currLeftDist - left), 2) + Math.pow((currTopDist - top), 2));
      // If that distance is within 50px,
      if (dist < 200) {
        window.dancers[i].$node[0].src = 'images/balloon.gif';

        var hide = function () {
          window.dancers[i].$node[0].hidden = true;

          if (window.dancers[i].$node[0].alt === 'siren') {
            console.log(window.dancers[i].$node[0]);
            window.dancers[i].$node[0].className = 'hideThis';
            console.log(window.dancers[i]);
          }
        };

        setTimeout(hide, 500);

        // $(window.dancers[i].$node[0]).delay(500).hide(1);
      }
    }
    window.dancers.push(dancer);

    $('.container').append(dancer.$node);
  });

  $(document).on('mouseover', '.drake', function () {
    $('.drake').css({ visibility: 'hidden' });
  });


  $('.lineAllUp').on('click', function () {
    // Iterate through the dancers in the global window
    $('.dancer').css({ 'top': '' });
    $('.dancer').css({ 'bottom': '0' });
  });

});