$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");
    let floorPath = $(".home-image path");
    let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    let viewFlatsButton = $(".view-flats");
    let currentFlat = 0;
    let flatPath = $(".flats path");
    let flatLink = $(".flat-link");

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });

    floorPath.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);
    
    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currentFloor >2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

     flatPath.on("mouseover", function () {
         flatLink.removeClass("current-flat");
         flatPath.removeClass("current-flat");
         currentFlat = $(this).attr('data-flat');
         $(`[flat-number=${currentFlat}]`).toggleClass("current-flat");
     
    });

    flatLink.on("mouseover", function () {
        flatLink.removeClass("current-flat");
        flatPath.removeClass("current-flat");
        //currentFloor = $(this).attr('data-floor');
        currentFlat = $(this).attr('flat-number');
        console.log(currentFlat);
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
        //$(".counter").text(currentFloor);
    });
  

   function toggleModal() {
        modal.toggleClass('is-open');
    };
    
});