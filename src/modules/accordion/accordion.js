export default class Accordion {
    titles = document.querySelectorAll('.accordion__title');
    accordionBlock = document.querySelector('.accordion');

    setEventListenerClick() {
        this.titles.forEach( item => {
            item.addEventListener('click', (e) => {
                this.toggleClassActive(e);
                this.setMaxHeight(e);
            });   
        });
    }

    toggleClassActive(e) {
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('active');
    }

    setMaxHeight(e) {
        const description = e.target.nextElementSibling;

        if (this.isMaxHeight(description)) {
            description.style.maxHeight = '0';
        } else {
            description.style.maxHeight = `${description.scrollHeight}px`;
        }
    }

    isMaxHeight(item) {
        if (parseInt(getComputedStyle(item).maxHeight)) return true;
        return false;
    }

    init() {
        this.accordionBlock.addEventListener('wheel', e => {
            e.stopPropagation();
        });

        this.accordionBlock.addEventListener('keydown', e => {
            e.stopPropagation();
        });

        this.accordionBlock.addEventListener('mouseenter', e => {
            e.target.focus();
        });

        this.accordionBlock.addEventListener('mouseleave', (e) => {
            e.target.blur();
        });

        this.setEventListenerClick();
    }
}