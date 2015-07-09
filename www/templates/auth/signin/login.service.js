angular.module('starter').factory("LoginService", function (FirebaseService) {

	return {

		login: function(email, password) {
			return FirebaseService.login(email,password);

		},

		signUp: function(email, password, username, firstname, lastname, phone, country, condition, gender){
			return FirebaseService.signUp(email,password);
		}
	}

});
