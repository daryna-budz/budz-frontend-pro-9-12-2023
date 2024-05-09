let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

//добавила в кінець кожного методу return this,щоб вони повертали посилання на ladder
//а не undefined,що дозволить викликати методи в рядок