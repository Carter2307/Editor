//getElement.js

export default function getElement() {
        return {
            nav: document.querySelector('.nav'),

            
            sections: {
                header: document.querySelector('.section-header'),
                components : [...document.querySelectorAll('.components')]
            },

            header : document.querySelector('.header'),
            container : document.querySelector('.container'),
            sidebar : document.querySelector('.sidebar'),
            footer : document.querySelector('.footer')
        }
}


