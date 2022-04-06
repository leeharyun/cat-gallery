import Header from "./Header";
import ImageListContainer from "../container/ImageListContainer";

const Main =() => {
    const MainContent = () => {
        return (
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
                    <ImageListContainer />
                </div>
            </main>
        );
    };

    return (
        <div id="wrap">
            <Header />
            <MainContent />
        </div>
    );
};

export default Main;