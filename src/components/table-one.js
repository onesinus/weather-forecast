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
                            <th><abbr title="Percentage">%</abbr></th>
                            <th><abbr title="Celcius">C</abbr></th>
                            <th><abbr title="Fahrenheit">F</abbr></th>
                            <th>Status</th>
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