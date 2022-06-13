export default class ContactMe {
    contactMe = document.querySelector('.contact-me');
    contactMeText = document.querySelector('.contact-me__text');
    contactMeLinks = document.querySelector('.contact-me__links');

    calculateWidthPseudoElement() {
        return String(getComputedStyle(this.contactMeText).width);
    }

    calculateHeightPseudoElement() {
        return `${parseInt(getComputedStyle(this.contactMe).height) + parseInt(getComputedStyle(this.contactMe).padding)}px`;
    }

    calculateBottomPosition() {
        return `-${parseInt(getComputedStyle(this.contactMe).height) - parseInt(getComputedStyle(this.contactMeText).height) - 3}px`;
    }

    setStartSizesContactBlock() {
        this.contactMe.style.setProperty('--heightBorder', this.calculateHeightPseudoElement());
        this.contactMe.style.setProperty('--width', this.calculateWidthPseudoElement());
        this.contactMe.style.bottom = this.calculateBottomPosition();
    }

    toggleHeightContactMeBlock() {
        this.contactMe.classList.toggle('active');
        
        if (this.contactMe.classList.contains('active')) {
            this.contactMe.style.bottom = 0;
        } else {
            this.contactMe.style.bottom = this.calculateBottomPosition();
        }
    }

    hideContactMeBlock() {
        this.contactMe.classList.remove('active');
        this.contactMe.style.bottom = this.calculateBottomPosition();
    }

    init() {
        this.setStartSizesContactBlock();

        this.contactMeLinks.addEventListener('click', e => {
            e.stopPropagation();
        });

        this.contactMe.addEventListener('click', () => {
            this.toggleHeightContactMeBlock();
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.contact-me')) {
                this.hideContactMeBlock();
            }
        });

        window.addEventListener('resize', () => {
            this.contactMe.style.setProperty('--heightBorder', this.calculateHeightPseudoElement());
            this.contactMe.style.setProperty('--width', this.calculateWidthPseudoElement());
            this.contactMe.style.bottom = this.calculateBottomPosition();
        });
    }
}