class TableOne extends HTMLElement{
    render() {
        this.innerHTML = `
                <div class="table-container _list-weather">
                    <h1 class="display-datetime"></h1>
                    <table class="table is-fullwidth">
                        <thead>
                        <tr class="is-selected">
                            <th>#</th>
                            <th>Area</th>
                            <th><abbr title="Longitude">Longitude</abbr></th>
                            <th><abbr title="Latitude">Latitude</abbr></th>
                            <th><abbr title="Humidity">Humidity</abbr></th>
                            <th><abbr title="Temperature">Temperature</abbr></th>                            
                            <th><abbr title="Tomorrow Humidity">H+1 Humidity</abbr></th>
                            <th><abbr title="Tomorrow Temperature">H+1 Temperature</abbr></th>                            
                            <th><abbr title="The Day After Tomorrow Humidity">H+2 Humidity</abbr></th>
                            <th><abbr title="The Day After Tomorrow Temperature">H+2 Temperature</abbr></th>                            
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.innerHTML = ``;
    }
}

customElements.define("table-one", TableOne);