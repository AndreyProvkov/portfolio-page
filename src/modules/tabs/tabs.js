export default class Tabs {
    tabsItems = document.querySelectorAll('.tabs__item');
    contents = document.querySelectorAll('.tabs__content');
    countBorder = 2;
    firstTab = this.tabsItems[0];
    beginWidthPercentTab = 100;
    beginHeightPercentTab = 100;

    setBeginWidthTab(item) {
        this.beginWidthTab = parseFloat(getComputedStyle(item).width) + parseFloat(getComputedStyle(item).borderWidth) * this.countBorder;
    }

    getBeginWidthTab() {
        return this.beginWidthTab;
    }

    setSelectedWidthTab(item) {
        this.selectedWidthTab = parseFloat(item.getBoundingClientRect().width);
    }

    getSelectedWidthTab() {
        return this.selectedWidthTab;
    }

    setPercentWidthTab() {
        this.percentWidthTab = Math.round(this.getSelectedWidthTab() / this.getBeginWidthTab() * 100) - this.beginWidthPercentTab;
    }

    getPercentWidthTab() {
        return this.percentWidthTab;
    }

    setBeginHeightTab(item) {
        this.beginHeightTab = parseFloat(getComputedStyle(item).height) + parseFloat(getComputedStyle(item).borderWidth) * this.countBorder;
    }

    getBeginHeightTab() {
        return this.beginHeightTab;
    }

    setSelectedHeightTab(item) {
        this.selectedHeightTab = parseFloat(item.getBoundingClientRect().height) - parseFloat(getComputedStyle(item).borderWidth);
    }

    getSelectedHeightTab() {
        return this.selectedHeightTab;
    }

    setPercentHeightTab() {
        this.percentHeightTab = Math.round(this.getSelectedHeightTab() / this.getBeginHeightTab() * 100) - this.beginHeightPercentTab;
    }

    getPercentHeightTab() {
        return this.percentHeightTab;
    }

    hideContent(index) {
        for (let i = 0; i < this.contents.length; i++) {
            if (i === index) continue;
            this.contents[i].style.display = 'none';
        }
    }

    showContent(index) {
        this.contents[index].style.display = 'block';
    }

    isOneTab() {
        if (this.tabsItems.length === 1) return true;
        return false;
    }

    isFirstActiveTab(item, index) {
        if (index === 0 && item.hasAttribute('active')) return true;
        return false;
    }

    isLastActiveTab(item, index) {
        if ((index === this.tabsItems.length - 1) && item.hasAttribute('active')) return true;
        return false;
    }

    setSelectedStyleTab(item, index) {
        item.style.borderBottom = 'none';
        item.style.borderColor = 'rgb(83, 32, 97)';
        item.style.borderTopLeftRadius = '4px';
        item.style.borderTopRightRadius = '4px';
        item.style.transform = `scale(1.2)`;
        item.style.zIndex = '1';
        item.setAttribute('active', 'active');

        this.setSelectedHeightTab(item);
        this.setSelectedWidthTab(item);
        this.setPercentHeightTab(item);
        this.setPercentWidthTab(item);

        if (this.isOneTab()) {
            item.style.transform = `scale(1)`;
            item.style.height = `${parseInt(getComputedStyle(item).height) * 1.2}px`;
        } else if (this.isFirstActiveTab(item, index)) {
            item.style.transform = `translate(${this.getPercentWidthTab() / 2}%, -${this.getPercentHeightTab() / 2}%) scale(1.2)`;
        } else if (this.isLastActiveTab(item, index)) {
            item.style.transform = `translate(-${this.getPercentWidthTab() / 2}%, -${this.getPercentHeightTab() / 2}%) scale(1.2)`;
        } else {
            item.style.transform = `translateY(-${this.getPercentHeightTab() / 2}%) scale(1.2)`;
        }
    }

    setBeginStyleTabs(tab) {
        this.tabsItems.forEach( (item) => {
            item.style.border = '1px solid rgba(83, 32, 97, 0.5)';
            item.style.borderBottomColor = 'rgba(83, 32, 97, 1)';
            item.style.transform = 'scale(1)';
            item.style.zIndex = '0';
            item.removeAttribute('active');
        });

        this.setBeginHeightTab(tab);
        this.setBeginWidthTab(tab);
    }

    changeTab() {
        this.tabsItems.forEach( (item, index) => {
            item.addEventListener('click', () => {
                this.setBeginStyleTabs(item);
                this.setSelectedStyleTab(item, index);
                this.hideContent(index);
                this.showContent(index);
            });
        });
    }

    init() {
        this.changeTab();
    }
}