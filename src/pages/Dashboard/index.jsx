import React from 'react'
import { getUserDatas } from '../../utils/getdata'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Error from '../Error'
import Loader from '../../components/Loader'
import User from '../../utils/user'
import ActivityChart from '../../components/Charts/ActivityChart'



function Dashboard() {
  	// user datas, fetched in the useEffect in getUserDatas
	const [user, setUser] = useState({});
	// user Sessions datas, fetched in the useEffect in getUserDatas, to have an array with only the day datas, to display on the session chart
	const [userSessions, setUserSessions] = useState([]);
	// isLoaded and error, to display a loader or an error if we have some problems when fetching the datas
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	// User Id, taking from the url params
	const {userId} = useParams();


 useEffect(() => {
    getUserDatas(Number(userId))
        .then((result) => {
            if (!result[0] || !result[1] || !result[2] || !result[3]) {
                setError(true);
                setIsLoaded(true);
                return;
            }
            let user = new User(result[0], result[1], result[2], result[3]);
            setUser(user);
            let userSession = user.sessions?.sessions || [];
            const userSessionsLength = userSession.map((day) => day.sessionLength);
            setUserSessions(userSessionsLength);
            setIsLoaded(true);
        })
        .catch(err => {
            console.error('Erreur dans Dashboard:', err);
            setError(true);
            setIsLoaded(true);
        })
}, [userId])

	if(error) {
		return (
		<Error type="fetchError"/>
		)
	}
	if(!isLoaded) {
		return (<Loader />)
	}

  return (
    <div>
      <section className="dashboard">

				<h2>Bonjour <em>{user.getFirstName("firstName")}</em></h2>
				<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		
				<section className="dashboard__graphs">

					<div className="dashboard__graphs__charts">

						<ActivityChart data={user.activities} />

						<div className="dashboard__graphs__charts-smalls">
							{/* <SessionChartD3 data={user} sessions={userSessions} />
							<PerformancesChart data={user.performances} />
							<ScoreChart data={user.infos}/> */}
						</div>

					</div>
				
				<div className="dashboard__graphs__nutriments">
					{/* <Nutriment quantity={user.getNutriment("calorieCount")} nutriment="Calories" /> 
					<Nutriment quantity={user.getNutriment("proteinCount")} nutriment="Protéines" />
					<Nutriment quantity={user.getNutriment("carbohydrateCount")} nutriment="Glucides" />
					<Nutriment quantity={user.getNutriment("lipidCount")} nutriment="Lipides" /> */}
				</div> 
				
				</section>

			</section>
    </div>
  )
}

export default Dashboard