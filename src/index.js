import 'bulma/css/bulma.css'
import './styles/main.css';

/* Import Components  */
import './components/menu-left';
import './components/table-one';
import './components/footer-one';
/* End Import Components */

const main = () => {
    const getWeather = () => {
        console.log("this is getting weather list");
    }

    getWeather();
}

main();