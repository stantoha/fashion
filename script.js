window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]'),
        titleLink = document.querySelector('.title'),
        logoLink = document.querySelector('.logo'),
        tabs = document.querySelectorAll('.service__item'),
        tabsContent = document.querySelectorAll('.service'),
        tabParent = document.querySelector('.services__list'),
        footerTabs = document.querySelectorAll('.footer__service__item'),
        footerTabParent = document.querySelector('.footer__services__list'),
        upButton=document.querySelector('.up__button'),
        navBlock=document.querySelectorAll('.nav__block'),
        navButtons=document.querySelectorAll('.nav__button'),
        shoppingButton=document.querySelector('.shopping__section__button'),
        shoppingBlock=document.querySelector('.shopping__section'),
        titleName=document.querySelector('.title__name'),
        titleFamilyName=document.querySelector('.title__family__name');


    
     //SHOW-HIDE CONTENT

            function hideTabContent() {
                tabsContent.forEach(item => {
                    item.classList.add('hide');
                    item.classList.remove('show', 'fade');
                });
                tabs.forEach(item => {
                    item.classList.remove('active');
                });
            }
        
            function showTabContent(i = 0) {
                tabsContent[i].classList.add('show', 'fade');
                tabsContent[i].classList.remove('hide');
                tabs[i].classList.add('active');
            }
        
            hideTabContent();
            showTabContent();
        
            tabParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target && target.classList.contains('service__item')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }
            });


            logoLink.addEventListener('click', () => {
                hideTabContent();
                showTabContent(0);
            }); 
        
            titleLink.addEventListener('click', () => {
                hideTabContent();
                showTabContent(0);
            });


    //MODAL

    function openModal() {
        modal.classList.add('show', 'fade'); //или modal.classList.toggle('show);
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('show', 'fade'); //или modal.classList.toggle('show);
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalClosebtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 30000);

    

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

   //UPBUTTON

    window.onscroll = function () {
        if (window.pageYOffset > 300) {
            titleLink.classList.add('left__slide');
            upButton.classList.remove('hide');
            upButton.classList.add('show','fade');
        } else {
            titleLink.classList.remove('left__slide');
            upButton.classList.add('hide');
            upButton.classList.remove('show','fade');
        }
    };

    upButton.onclick = function () {
        window.scrollTo(0, 0);
    };

  
  
         
          
          shoppingButton.onclick=function(){
            if(shoppingBlock.classList.contains('hide')){
            shoppingBlock.classList.remove('hide');
            shoppingBlock.classList.add('show','fade');}
            else{
            shoppingBlock.classList.add('hide');
            shoppingBlock.classList.remove('show','fade');
            }

          };

let navShow=function(){
    for(let i=0;i<navButtons.length;i++){
        navButtons[i].onclick=function(){
            if(!navButtons[i].classList.contains('active')){
                navButtons.forEach(item=>{
                  item.classList.add('hide');
                });

                navButtons[i].classList.remove('hide');  
                navButtons[i].classList.add('show','active');  
                let  navBlockCoord= navBlock[i].getBoundingClientRect(),
                x=navBlockCoord.x,
                y=navBlockCoord.y;
                if(navButtons[i].classList.contains('vip')){
                    navBlock[i].classList.remove('hide');
                    navBlock[i].classList.add('show','fade');
                }
                window.scrollTo(x ,y);
            /*     document.body.style.overflow = 'hidden';
                navBlock[i].style.overflow='visible'; */
            }
            else{
                navButtons.forEach(item=>{
                    item.classList.remove('hide');
                  }); 
                  if(!navButtons[i].classList.contains('vip')){
                    navBlock[i].classList.add('hide');
                    navBlock[i].classList.remove('show','fade');
                }
                navButtons[i].classList.remove('show','active');  
                window.scrollTo(0, 0);
            }
          };
    }
};          
    
navShow();

let subTitle=document.querySelectorAll('.sub__title');

function slideinSubTitle(){
    subTitle.forEach(item=>{
        let  subTitleCoordY=subTitle.getBoundingClientRect().y;
        window.onscroll = function () {
            if (window.pageYOffset > subTitleCoordY) {
                subTitle.classList.add('sub__title__active','fade');
            } 
        };
      });
    
}

const itemDesc=document.querySelector('.item__desc'),
  prev=document.querySelector('.prev'),
  next=document.querySelector('.next'),
  itemDescPics=document.querySelectorAll('.item__desc__img');

/* function itemDescPicsHide(){
  itemDescPics.forEach(item=>{
    item.classList.add('hidden');
    item.classList.remove('show','fade');
  });
}

function itemDescPicsShow(i=0){
    itemDescPics.forEach((item,i)=>{
      itemDescPics[i].classList.remove('hidden');
      itemDescPics[i].classList.add('show','fade');
    });
  }
  itemDescPicsHide(); */
  /* itemDescPicsShow(); */

         


/* function showFooterTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    footerTabs[i].classList.add('active');
}

hideTabContent();
showTabContent();

footerTabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('footer__service__item')) {
        footerTabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showFooterTabContent(i);
            }
        });
    }
}); */
          
                    
              
         








});