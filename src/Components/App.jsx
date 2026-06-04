import "../Styles/App.css"
import Photo from "./Photo"
import Name from "./Name"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function App() {
    return (
        <div className="app">
        <main>
            <div className="photo">
            <Photo />
            </div>
            <div className="name">
                <Name />
            </div>
            <div className="about">
                <About />
            </div>
            <div className="interests">
                <Interests />
            </div>
        </main>
        <Footer />
        </div>
    )
} export default App