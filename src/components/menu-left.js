class MenuLeft extends HTMLElement{
    render() {
        this.innerHTML = `
            <img src="../icon.png" alt="Logo">
            <aside class="menu">
                <ul class="menu-list">
                <li><a class="is-active">Jakarta</a></li>
                <li><a>Bali</a></li>
                <li><a>DI Yogyakarta</a></li>
                <li><a>Sumatera Utara</a></li>
                <li><a>Lampung</a></li>
                <li><a>Aceh</a></li>
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