
// Функция для работы меню-гамбургер
(function(){
  const ham=document.querySelector('.hamburger');
  const ham_menu=document.querySelector('.ham-menu');
  const body=document.querySelector('body');
  function toggleMenu(){
      ham.classList.toggle('active');
      ham_menu.classList.toggle('is-active');    
      body.classList.toggle('locked'); 
  }
  ham.addEventListener('click',function(e){
  e.preventDefault();  
  toggleMenu();
})
  ham_menu.addEventListener('click',function(e){  
    target=e.target;
    if (target.className==='menu__link menu__link_ham') {
      toggleMenu();
    }           
  })    
  })();


//Функция для работы слайдера
(function(){
const prev=document.querySelector('.slider__prev');
const next=document.querySelector('.slider__next');
const list=document.querySelector('.slider__list');
const width=parseInt(getComputedStyle(list).width);
const slider=getComputedStyle(list);
var itemCounter=list.children.length;
var max=(itemCounter-1)*width;
let inAnimate=false;//флаг проверки, запущена ли анимация

//обработчик клика по кнопке next
next.addEventListener('click', function(e){
  console.log('test')
  e.preventDefault();
  let currentRight=parseInt(slider.right);  
  if (!inAnimate){
    inAnimate=true;
      if (currentRight<(itemCounter-1)*width)
          {
          list.style.right =currentRight+width+"px";                  
          } 
          else {
            currentRight=0;
            list.style.right=0;
          }  
          // установка таймера равным длительности анимации
          setTimeout(function(){
            inAnimate=false;
          },300);
        };  
});
//обработчик клика по кнопке prev
prev.addEventListener('click', function(e){
  e.preventDefault();
  let currentRight=parseInt(slider.right);  
  if (!inAnimate){
    inAnimate=true;
        if (currentRight>0)
            {
            list.style.right =currentRight-width+"px";    
            }
            else {
              currentRight=max;
              list.style.right=max+"px";      
            }
            setTimeout(function(){
              inAnimate=false;
            },300);
          }
})
})();

// Функция для работы вертикального аккордеона
(function(){
  const accord = document.querySelectorAll('.accordeon__item');
    accord.forEach(function(item) {      
      item.addEventListener('click',function(event){
        event.preventDefault();           
          for (i=0; i<accord.length;i++) {
          if (accord[i]!=item){
            accord[i].classList.remove('active')};
            }   
        item.classList.toggle('active');            
      })       
    })
  })();

// Функция для работы горизонтального аккордеона
  (function(){const accord = document.querySelectorAll('.vert-accord__item');
    accord.forEach(function(item) {      
      item.addEventListener('click',function(event){
        event.preventDefault();           
          for (i=0; i<accord.length;i++) {
          if (accord[i]!=item){
            accord[i].classList.remove('is-active')};
            }   
        item.classList.toggle('is-active');            
      })       
    })
  })();

  //Функция для работы оверлея c шаблоном

  (function(){
    const btn = document.querySelectorAll('.btn_overlay');    
    const template=document.querySelector('.OverlayTemplate').innerHTML;
    const overlay=createOverlay(template);  
    const order=  document.querySelector('.order');

    
    for (var i=0; i<btn.length;i++) {
      let overlayText=btn[i].previousElementSibling.textContent;
      let overlayName=btn[i].previousElementSibling.previousElementSibling.textContent;   
      btn[i].addEventListener('click', function (e) {
      e.preventDefault();           
      overlay.open();      
      overlay.setContent(overlayName,overlayText);      
          })
        }   
    order.addEventListener('click',function(e){
      e.preventDefault();           
      overlay.open();      
      overlay.setContent("Сообщение","Ваше письмо отправлено.");
    })
          
    function createOverlay(template) {
      let fragment=document.createElement('div');
      fragment.innerHTML=template;

      const overlayElement = fragment.querySelector(".overlay");
      const overlayTittle = fragment.querySelector(".overlay__tittle");
      const overlayContent = fragment.querySelector(".overlay__content");
      const close = fragment.querySelector(".close");
      fragment = null;
      
      overlayElement.addEventListener("click", e => {
        if (e.target === overlayElement) {
          close.click();
        }
      });      
      close.addEventListener("click", () => {
        document.body.removeChild(overlayElement);
      });      
      return {
        open() {
          document.body.appendChild(overlayElement);
        },
        close() {
          close.click();
        },
        setContent(name,content) {
          overlayTittle.innerHTML=name;
          overlayContent.innerHTML = content;          
        }
      };
    }
  })();

