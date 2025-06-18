/**
 * @description Class User we need on the Dashboard component to create a new user when we fetch his datas
 * @param  {Array} infos // User main data, like first name, last name, age, etc.
 * @param  {Array} activities // User activities data, like weight, calories, etc.
 * @param  {Array} sessions // User sessions data, like session length, etc.
 * @param  {Array} performances // User performances data, like performance in different categories
 */
 class User {
	constructor(infos, activities, sessions, performances) {
		this.infos = infos.data || infos;
        this.activities = activities.data || activities;
        this.sessions = sessions.data || sessions;
        this.performances = performances.data || performances;
	}

	getFirstName = () => {
		return this.infos.userInfos.firstName;
	}

	getInfos = (name) => {
		return this.infos.keyData[name];
	}
}

export default User;