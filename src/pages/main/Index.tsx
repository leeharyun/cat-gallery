import '../../scss/main.scss';
import Header from "../../common/Header";

const Main = () => {
    
    return(
        <div id="wrap">
            <Header />
            <main>
                <div className="container">
                    <section className="serach-box">
                        <ul>
                            <li className="search-area">
                                <input type="text" className="search-input" />
                            </li>
                            <li className="search">
                                <button>Search</button>
                            </li>
                        </ul>
                    </section>
                    <section className="image-container">
                        
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Main;