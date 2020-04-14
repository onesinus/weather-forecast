class MenuLeft extends HTMLElement{
    render() {
        this.innerHTML = `
            <img src="../icon.png" alt="Logo">
            <aside class="menu">
                <ul class="menu-list">
                <li><a class="is-active">Jakarta Timur</a></li>
                <li><a>Jakarta Barat</a></li>
                <li><a>Jakarta Selatan</a></li>
                <li><a>Jakarta Utara</a></li>
                <li><a>Jakarta Pusat</a></li>
                <li><a>Kepulauan Seribu</a></li>
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