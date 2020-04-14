/* Load Css */
import 'bulma/css/bulma.css'
import './styles/main.css';
/* End Load Css */

/* Load JS */
import $ from "jquery";
/* End Load JS */

/* Import Components  */
import './components/menu-left';
import './components/table-one';
import './components/footer-one';
/* End Import Components */

/* Required Tools */
const convert = require('xml-js');
/* Required Tools */

const main = () => {
    const getWeather = async(url) => {
        try {
                const weather  = await fetch(url)
                                    .then(response => response.text())
                                    .then(str => JSON.parse(convert.xml2json(str, { compact: true, spaces: 4 })))
                        
            const tableContent = $("._list-weather tbody");
            tableContent.empty();

            
            const areas = weather.data.forecast.area || [];
            const { year, month, day, hour, minute, second } = weather.data.forecast.issue;
            $(".display-datetime").text(`Last Updated Data: ${day._text}-${month._text}-${year._text} ${hour._text}:${minute._text}:${second._text}`);
            areas.map((area, idx) => {
                tableContent.append(`
                    <tr>
                        <th>${idx+1}</th>
                        <td>${area.name[0]._text}</td>
                        <td>${area._attributes.longitude}</td>
                        <td>${area._attributes.latitude}</td>
                        <td>${area.parameter[3].timerange[0].value._text}% - ${area.parameter[1].timerange[0].value._text}%</td>
                        <td>${area.parameter[4].timerange[0].value[0]._text}°C - ${area.parameter[2].timerange[0].value[0]._text}°C</td>
                        <td>${area.parameter[3].timerange[1].value._text}% - ${area.parameter[1].timerange[1].value._text}%</td>
                        <td>${area.parameter[4].timerange[1].value[0]._text}°C - ${area.parameter[2].timerange[1].value[0]._text}°C</td>
                        <td>${area.parameter[3].timerange[2].value._text}% - ${area.parameter[1].timerange[2].value._text}%</td>
                        <td>${area.parameter[4].timerange[2].value[0]._text}°C - ${area.parameter[2].timerange[2].value[0]._text}°C</td>
                    </tr>
                `);
            });
        } catch (error) {
            console.log(error);
        }
    }

    getWeather('https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DKIJakarta.xml');
}

main();