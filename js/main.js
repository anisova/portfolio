//функция плавного скроллинга к якорю
function scrollTo() {
  const anchors = document.querySelectorAll("a.scrollto");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
//end of scrollTo

//функция для отработки действий при скролле
function scrollAсtion() {
  window.addEventListener("scroll", () => {
    if (document.documentElement.clientWidth > 1000) {
      elemAnimate(".services__right", "animate");
      elemAnimate(".service", "animate");
      elemAnimate(".services__stage", "animate");
    }
    elemAnimate(".case__back", "caseAnimation");
    elemAnimate(".case__link", "titleAnimation");
    elemAnimate(".case__img", "imgAnimation");
    btnUp();
  });
}

//функция появления кнопки Наверх
function btnUp() {
  const btn = document.querySelector(".btn-up");
  if (pageYOffset > document.documentElement.clientHeight) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}
//end of btnUp

//Функция, которая проверяет, появился ли элемент в области видимости
function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

//Функция анимации элемента, который появляется в области видимости
function elemAnimate(elemClass, animationClass) {
  let el = document.querySelectorAll(elemClass);
  el.forEach((element) => {
    if (isPartiallyVisible(element)) {
      element.classList.add(animationClass);
    }
  });
}

scrollTo();
scrollAсtion();
