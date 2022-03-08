import NavigationBar from "./NavigationBar";
import apartment from '../images/apartment.png';

function WelcomePage() {
    return (
        <header>
            <NavigationBar />
            <div className="introduction container">
                <div className="row">
                    <div className="col">
                        <div className="heading">
                            A Convenient Way to Connect Landlords, Tanenets, & Students
                        </div>
                        <p className="sub-heading">
                            <i>We help finding aparments easier.</i>
                        </p>
                        <a className="link-styling" href="/login"><button type="button" className="btn btn-light rounded-corner rounded-pill">Login to get started</button></a>
                    </div>
                    <div className="col">
                        <img src={apartment} alt="logo" id="welcome-img" width="50" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default WelcomePage;