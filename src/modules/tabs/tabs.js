export default class Tabs {
    tabsItems = document.querySelectorAll('.tabs__item');
    contents = document.querySelectorAll('.tabs__content');
    firstTab = this.tabsItems[0];
    tabScale = 1.2;
    tabScalePercent = (this.tabScale - 1) * 100;
    countOppositeSidesOfElement = 2;

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
        item.style.zIndex = '1';
        item.setAttribute('active', 'active');

        if (this.isOneTab()) {
            item.style.height = `${parseInt(item.offsetHeight) * this.tabScale}px`;
        } else if (this.isFirstActiveTab(item, index)) {
            item.style.transform = `translate(${this.tabScalePercent / this.countOppositeSidesOfElement}%, -${this.tabScalePercent / this.countOppositeSidesOfElement}%) scale(${this.tabScale})`;
        } else if (this.isLastActiveTab(item, index)) {
            item.style.transform = `translate(-${this.tabScalePercent / this.countOppositeSidesOfElement}%, -${this.tabScalePercent / this.countOppositeSidesOfElement}%) scale(${this.tabScale})`;
        } else {
            item.style.transform = `translateY(-${this.tabScalePercent / this.countOppositeSidesOfElement}%) scale(${this.tabScale})`;
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

    selectTabFirst(tab, index) {
        this.setSelectedStyleTab(tab, index);
        this.showContent(index);
    }

    init() {
        this.selectTabFirst(this.firstTab, 0);
        this.changeTab();
    }
}