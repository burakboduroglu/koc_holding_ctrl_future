import 'bulma/css/bulma.css';
import './App.css';
import Course from "./Course";
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Cs from './images/ccsharp.png'
import Web from './images/kompleweb.jpg'

function App() {
  return (
    <div className="App">
        <section className="hero is-link">
            <div className="hero-body">
                <p className="title">Kurslarım</p>
            </div>
        </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column">
                        <Course
                            image={Angular}
                            title="Angular"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores, commodi fuga iusto laborum minima minus natus necessitatibus" />
                    </div>
                    <div className="column">
                        <Course
                            image={Bootstrap}
                            title="Bootstrap 5"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores, commodi fuga iusto laborum minima minus natus necessitatibus" />
                    </div>
                    <div className="column">
                        <Course
                            image={Cs}
                            title="CSharp"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores, commodi fuga iusto laborum minima minus natus necessitatibus" />
                    </div>
                    <div className="column">
                        <Course
                            image={Web}
                            title="Komple Web"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores, commodi fuga iusto laborum minima minus natus necessitatibus" />
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default App;
