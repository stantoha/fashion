window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]'),

        tabsList = document.querySelector('.services__list'),
        tabs = document.querySelectorAll('.service__link'),
        tabsContent = document.querySelectorAll('.service__item'),
        titleLink = document.querySelector('.title');


    /* upButton = document.querySelector('.up__button'),
    sliedeIn = document.querySelectorAll('.slidein') */
    ;

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
        tabs[i].classList.remove('active');
    }

    hideTabContent();
    showTabContent();

    tabsList.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('service__link')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    titleLink.addEventListener('click', () => {
        hideTabContent();
        showTabContent(0);
    });

    //Modal


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

    const modalTimerId = setTimeout(openModal, 3000);


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


   /*  window.addEventListener("resize", getSizes, false);

    function getSizes() {
        let body = document.body;
        console.log(body.clientWidth + "px x " + body.clientHeight + "px");
    }
 */
});