import React from "react";
import { getUserDatas } from "../../utils/getdata";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Error from "../Error";
import Loader from "../../components/Loader";
import User from "../../utils/user";
import ChartCard from "../../components/ChartCard";
import ActivityChart from "../../components/Charts/ActivityChart";
import PerformanceChart from "../../components/Charts/PerformanceChart";
import ScoreChart from "../../components/Charts/ScoreChart";
import Card from "../../components/Card";
import SessionChart from "../../components/Charts/SessionChart";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";

/** 
 * @component
 * @namespace Dashboard
 * 
 * @description This is component for Dashboard page, it handles 3 states (user => datas of the user, loader => if true, Loader component is rendered, 
 *   error => if true, Error component is rendered)
 * @returns If loader and error are false, the Dashboard is rendered, with first name, nutriments and some charts with fetched informations of the user
 * 
 */


function Dashboard() {
  // user datas, fetched in the useEffect in getUserDatas
  const [user, setUser] = useState({});
  // user Sessions datas, fetched in the useEffect in getUserDatas, to have an array with only the day datas, to display on the session chart
  const [userSessions, setUserSessions] = useState([]);
  // isLoaded and error, to display a loader or an error if we have some problems when fetching the datas
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // User Id, taking from the url params
  const { userId } = useParams();

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
      .catch((err) => {
        console.error("Erreur dans Dashboard:", err);
        setError(true);
        setIsLoaded(true);
      });
  }, [userId]);

  if (error) {
    return <Error type="fetchError" />;
  }
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <section className="profil-wrapper">
      <div className="profil">
        <h2 className="profil-title">
          Bonjour{" "}
          <span className="profil-firstName">
            {user.getFirstName("firstName")}
          </span>
        </h2>
        <p className="profil-subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="dashboard">
          <div className="dashboard-charts-wrapper">
            <div className="activity-charts">
              <ActivityChart data={user.activities} />
            </div>
            <div className="small-card-wrapper">
              <ChartCard
                className="average-sessions"
                content={<SessionChart data={user.sessions?.sessions || []} />}
              />

              <ChartCard
                className="performance"
                content={<PerformanceChart data={user.performances} />}
              />

              <ChartCard
                className="score"
                content={<ScoreChart data={user.infos} />}
              />
            </div>
          </div>

          <div className="dashboard-aside">
            <Card
              userKeyData={user.getInfos("calorieCount")}
              unit="kCal"
              subtitle="Calories"
              className="calorie"
              logo={energy}
            />
            <Card
              userKeyData={user.getInfos("proteinCount")}
              unit="g"
              subtitle="Proteines"
              className="protein"
              logo={chicken}
            />
            <Card
              userKeyData={user.getInfos("carbohydrateCount")}
              unit="g"
              subtitle="Glucides"
              className="carbohydrate"
              logo={apple}
            />
            <Card
              userKeyData={user.getInfos("lipidCount")}
              unit="g"
              subtitle="Lipides"
              className="lipid"
              logo={cheeseburger}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
