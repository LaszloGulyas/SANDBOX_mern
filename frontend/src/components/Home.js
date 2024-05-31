import './Home.css';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const navigateToCard = () => {
        navigate('/card');
    };

    return (
        <div className="Home">
            <p>Hello World from HOME</p>
            <button className="home-button" onClick={navigateToCard}>
                Go to Card Page
            </button>
        </div>
    );
}

export default Home;
