class MenuLeft extends HTMLElement{
    constructor() {
        super();
        this._city = "Jakarta";
    }

    set city(city) {
        this._city = city;
        this.render();
    }

    render() {
        console.log(this._city);
        this.innerHTML = `
            <img src="../icon.png" alt="Logo">
            <aside class="menu">
                <ul class="menu-list">
                    <li><a class=${this._city === 'Jakarta' ? 'is-active':''}>Jakarta</a></li>
                    <li><a class=${this._city === 'Bali' ? 'is-active':''}>Bali</a></li>
                    <li><a class=${this._city === 'DI Yogyakarta' ? 'is-active':''}>DI Yogyakarta</a></li>
                    <li><a class=${this._city === 'Sumatera Utara' ? 'is-active':''}>Sumatera Utara</a></li>
                    <li><a class=${this._city === 'Lampung' ? 'is-active':''}>Lampung</a></li>
                    <li><a class=${this._city === 'Aceh' ? 'is-active':''}>Aceh</a></li>
                </ul>
            </aside>        
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.innerHTML = ``;
    }
}

customElements.define("menu-left", MenuLeft);