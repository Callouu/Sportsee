// Two bases url's to fetch datas from local mock or back-end
const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('../data/mock.jsx');

const USE_MOCK = true; // Passe à false pour utiliser l'API

//const BASE_URL = "http://localhost:5173/data"; // For local development with mock data
const BASE_URL = "";

/**
 * @description Function to create the url to fetch, who check if datas are mocked and add .json if needed
 * @param  {string} base First part of API adress ("" for mocked datas)
 * @param  {string} path Path of the desired end-point of the API
 */
const createUrl = (base, path) => {
    let url = `${base}${path}`;
    if (base === "") {
        url += ".json";
    }
    // console.log(url)
    return url;
};

/**
 * @description Function to fetch datas, and return response in json format
 * @param {string} url Path of the desired end-point of the API
 */
const getApiDatas = (url, userId = 12) => {
    if (USE_MOCK) {
        // Simule les endpoints selon l'URL et l'userId
        if (url.includes('/user/') && !url.includes('activity') && !url.includes('average-sessions') && !url.includes('performance')) {
            return Promise.resolve(USER_MAIN_DATA.find(u => u.id === userId));
        }
        if (url.includes('/activity')) {
            return Promise.resolve(USER_ACTIVITY.find(a => a.userId === userId));
        }
        if (url.includes('/average-sessions')) {
            return Promise.resolve(USER_AVERAGE_SESSIONS.find(s => s.userId === userId));
        }
        if (url.includes('/performance')) {
            return Promise.resolve(USER_PERFORMANCE.find(p => p.userId === userId));
        }
    }
    return fetch(createUrl(BASE_URL, url)).then((response) => response.json());
};

/**
 * @description Get all the user datas we need for all our components
 * @param  {number} userId Id of the user
 */

export const getUserDatas = (userId) => {
    let userData = getApiDatas(`/user/${userId}`, userId);
    let activityData = getApiDatas(`/user/${userId}/activity`, userId);
    let sessionData = getApiDatas(`/user/${userId}/average-sessions`, userId);
    let perfData = getApiDatas(`/user/${userId}/performance`, userId);

    return Promise.all([userData, activityData, sessionData, perfData]);
};

// Just two lines to check if these routes are working (user stories 8 and 10)
    // console.log(getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/today-score`).then((res) => console.log(res)))
    // console.log(getApiDatas(process.env.PUBLIC_URL + `/user/${userId}/key-data`).then((res) => console.log(res)))