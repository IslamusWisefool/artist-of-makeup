window.addEventListener("load", (e) => {
  const slider = document.querySelector(".slider-body");
  const slides = Array.from(document.querySelectorAll(".slider-item"));

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let currentIndex = 0;

  slides.forEach((slide, index) => {
    //Touch events

    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);

    //Mouse events

    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mouseup", touchEnd);
    slide.addEventListener("mouseleave", touchEnd);
    slide.addEventListener("mousemove", touchMove);
  });

  //Disable context menu

  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;

      animationID = requestAnimationFrame(animation);
    };
  }

  function touchEnd() {
    isDragging = false;
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPos = getPositionX(event);
      currentTranslate = prevTranslate + currentPos - startPos;
    }
  }

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  function animation() {
    setSliderPos();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPos() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
});
