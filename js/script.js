'use strict';

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function() {
            alert(self.text);
        });
    }
}
var btn1 = new Button('hry');
btn1.create();
var btn2 = new Button();
btn2.create();