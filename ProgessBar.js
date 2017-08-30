/**
 * Created by Appjak on 30/08/17.
 */

class ProgessBar {

    constructor() {
        this.widthProgress = 0;
        this.itvl = null;
        this.bulidOut();
        this.update();
    }

    bulidOut() {

        this.pgrsContainer = document.createElement('div');
        this.pgrsText = document.createElement('div');
        this.pgrsContent = document.createElement('div');
        this.pgrsBar = document.createElement('div');

        this.pgrsBar.className = 'pgrs-bar';
        this.pgrsContent.className = 'pgrs-bar-content';
        this.pgrsText.className = 'pgrs-bar-text';
        this.pgrsContainer.className = 'pgrs-bar-container';

        this.pgrsContent.appendChild(this.pgrsBar);
        this.pgrsContainer.appendChild(this.pgrsText);
        this.pgrsContainer.appendChild(this.pgrsContent);
    }

    progress() {
        this.itvl = setInterval(() => {
            if (this.widthProgress < 95) {
                this.widthProgress += Math.round(Math.random() * 8);
                this.update();
            } else {
                clearInterval(this.itvl);
            }
        }, 350);
    }

    finish() {
        clearInterval(this.itvl);
        this.widthProgress = 100;
        this.update();
    }

    update() {
        this.pgrsText.innerText = this.widthProgress + "%";
        this.pgrsBar.style.width = this.widthProgress + "%";
    }

}