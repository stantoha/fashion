window.addEventListener('DOMContentLoaded', ()=>{
 
    //Modal

    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]');
        
        function hideTabContent(){
            tabsContent.forEach(item=>{
                item.classList.add('hide');
                item.classList.remove('show','fade');
            });
            tabs.forEach(item=>{
               item.classList.remove('tabheader__link__active');
            });
        }
       
       function showTabContent(i=0){
           tabsContent[i].classList.add('show','fade');
           tabsContent[i].classList.remove('hide');
           tabs[i].classList.add('tabheader__link__active');
       }
       
       hideTabContent();
       showTabContent();
    
        titleLink.addEventListener('click',()=>{
            hideTabContent();
            showTabContent(0);
        });
    
        tabs.forEach(item=>{
            item.addEventListener('click',(event)=>{
                const target=event.target;
                if(target && target.classList.contains('tabheader__link')){
                    tabs.forEach((item,i)=>{
                         if(target==item){
                            hideTabContent();
                            showTabContent(i);
                         }
                    });
                }
            });
        });
/* 
    function openModal() {
        modal.classList.add('show','fade'); //или modal.classList.toggle('show);
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('show','fade'); //или modal.classList.toggle('show);
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

      const modalTimerId=setTimeout(openModal,3000);


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll); */
    



});
/* window.addEventListener("resize", getSizes, false);
        
function getSizes(){
  let body = document.body;
  console.log(body.clientWidth +"px x "+ body.clientHeight + "px");
} */

