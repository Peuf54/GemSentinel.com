import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        this.startFadeout();
    }

    startFadeout() {
        this.fadeoutTimer = setTimeout(() => {
            this.fadeout();
        }, 3000);
    }

    fadeout() {
        this.element.classList.add('fadeout');
        this.setDisplayNoneTimer = setTimeout(() => {
            this.hide();
        }, 1000);
    }

    hide() {
        this.element.style.display = 'none';
    }

    closeFlash() {
        clearTimeout(this.fadeoutTimer);
        clearTimeout(this.setDisplayNoneTimer);
        this.hide();
    }
}
