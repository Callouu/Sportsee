// Two bases url's to fetch datas from local mock or back-end
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../data/mock.js';

const USE_MOCK = true; // Passe à false pour utiliser l'API

const BASE_URL = "http://localhost:3000";

/**
 * @description Function to fetch datas, and return response in json format
 * @param {string} url Path of the desired end-point of the API
 */
const getApiDatas = (url) =>
    fetch(`${BASE_URL}${url}`)
        .then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            // console.log(response); // Pour debug, voir si la réponse est correcte
            return response.json();
        });
/**
 * @description Get all the user datas we need for all our components
 * @param  {number} userId Id of the user
 */

export const getUserDatas = (userId) => {
    if (USE_MOCK) {
        // Utilisation des données mockées
        let userData = Promise.resolve(USER_MAIN_DATA.find(u => u.id === userId));
        let activityData = Promise.resolve(USER_ACTIVITY.find(a => a.userId === userId));
        let sessionData = Promise.resolve(USER_AVERAGE_SESSIONS.find(s => s.userId === userId));
        let perfData = Promise.resolve(USER_PERFORMANCE.find(p => p.userId === userId));
        // console.log(userData); // Pour debug, voir si les données sont correctes
        return Promise.all([userData, activityData, sessionData, perfData]);
    } else {
        // Utilisation de l'API backend
        let userData = getApiDatas(`/user/${userId}`);
        let activityData = getApiDatas(`/user/${userId}/activity`);
        let sessionData = getApiDatas(`/user/${userId}/average-sessions`);
        let perfData = getApiDatas(`/user/${userId}/performance`);
        return Promise.all([userData, activityData, sessionData, perfData]);
    }
};