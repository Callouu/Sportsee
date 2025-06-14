import React from "react";
import { Link } from "react-router";

/**
 * @component
 * @description Component who appears for the developement, we can choose between two users to simulate the app
 * */
function Home() {
    return (
        <div className="home">
            <h2>
                Bienvenue sur Sportsee
            </h2>
            <div className="descript">
                <p>Choisissez l'utilisateur ci-dessous pour accéder au tableau de bord</p>
            </div>
            <div className="home-buttons">
                <Link className="btn-user" to="/user/12">
                    <button>
                        <span>Karl</span>
                    </button>
                </Link>
                <Link className="btn-user" to="/user/18">
                    <button>
                        <span>Cecilia</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

Home.propTypes = {};

export default Home;