window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]'),
        titleLink = document.querySelector('.title'),
        logoLink = document.querySelector('.logo'),
        tabs = document.querySelectorAll('.service__item'),
        tabsContent = document.querySelectorAll('.service'),
        tabParent = document.querySelector('.services__list'),
        upButton=document.querySelector('.up__button');

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
        if (window.pageYOffset > 200) {
            upButton.classList.remove('hidden');
        } else {
            upButton.classList.add('hidden');
        }
    };

    upButton.onclick = function () {
        window.scrollTo(0, 0);
    };

   
});