import CtrlWidget from './CtrlWidget'

const boxWidget = document.querySelector('.box_widget');
const widget = new CtrlWidget(boxWidget, 'Collapse');
widget.init();
document.addEventListener('click', (event) => {
    event.preventDefault();
    const text = document.querySelector('.box_text_collapse');
    if(event.target.classList.contains('btn_collapse')){
        if(text.style.display === 'block') {
            text.style.display = 'none'
        } else {
            text.style.display = 'block'
        }
        text.classList.toggle('text_animation');
    } else {
        if(text.style.display === 'block') {
            text.style.display = 'none';
        }
    }
});