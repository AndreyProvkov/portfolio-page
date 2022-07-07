export default class Description {
    btnInfoArr = document.querySelectorAll('.btn-info');
    btnCloseArr = document.querySelectorAll('.description__btn-close');
    idTimers = new Map();

    hideBtnInfo(e) {
        const btnInfo = e.target;

        btnInfo.style.opacity = '0';
        btnInfo.style.visibility = 'hidden';
    }

    showBtnInfo(btnInfo) {
        btnInfo.style.visibility = 'visible';
        btnInfo.style.opacity = '1';
    }

    showDescription(e) {
        let idTimer = null;
        const description = e.target.nextElementSibling;
        const closeBtn = description.firstElementChild;

        description.classList.add('description_active');

        this.hideBtnInfo(e);

        idTimer = setTimeout(() => {
            const eventCloseButton = new Event('click');
            
            closeBtn.dispatchEvent(eventCloseButton);
        }, 6000);

        this.idTimers.set(closeBtn, idTimer);
    }

    closeDescription(e) {
        const closeBtn = e.target;
        const description = closeBtn.closest('.description');
        const infoBtn = description.previousElementSibling;

        let idTimer = this.idTimers.get(closeBtn);
        clearTimeout(idTimer);

        description.classList.remove('description_active');

        this.showBtnInfo(infoBtn);
    }

    init() {
        this.btnInfoArr.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.showDescription(e);
            });
        });

        this.btnCloseArr.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.closeDescription(e);
            });
        });
    }
}



