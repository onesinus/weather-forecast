class TableOne extends HTMLElement{
    render() {
        this.innerHTML = `
                <div class="table-container _list-weather">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Area Code</th>
                            <th><abbr title="Longitude">Longitude</abbr></th>
                            <th><abbr title="Latitude">Latitude</abbr></th>
                            <th><abbr title="Date">Date</abbr></th>
                            <th><abbr title="Time">Time</abbr></th>
                            <th><abbr title="Percentage">%</abbr></th>
                            <th><abbr title="Celcius">C</abbr></th>
                            <th><abbr title="Fahrenheit">F</abbr></th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="is-selected">
                            <th>1</th>
                            <td>501192</td>
                            <td>106.731319</td>
                            <td>-6.203019</td>
                            <td>13-04-2020</td>
                            <td>05:30:10</td>
                            <td>90</td>
                            <td></td>
                            <td></td>
                            <td>Aman Terkendali</td>
                        </tr>
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