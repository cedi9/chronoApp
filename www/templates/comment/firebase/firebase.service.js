angular.module('starter').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			//log with email and password
			var promise = auth.$authWithPassword({
				email: email,
				password: password
			}).catch(function (error){
				alert("FirebaseService. " + error);
				return promise;
			})
				return promise;
		},

		signUp: function (email, password, username, phone, country, gender, condition) {
				//Sign Upemail and password
			var promise = auth.$createUser({
				email: email,
				password: password,
				username: username,
				phone: phone,
				country: country,
				gender: gender,
				condition
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});