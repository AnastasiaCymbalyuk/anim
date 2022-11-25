export default class CtrlWidget {
    constructor(elem, name) {
        this.name = name;
        this.elem = elem;
    }

    init(){
        this.elem.innerHTML = ` 
        <div class="box_collapse">
            <button class="btn_collapse">${this.name}</button>
            <div class="box_text_collapse">
                <p>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim
                    keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt
                    sapiente ea proident.
                </p>
            </div>
        </div>`
    }
}