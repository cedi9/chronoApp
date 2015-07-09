angular.module('starter')
	.controller('LoginCtrl', function($scope, $ionicLoading,$ionicModal,LoginService) {

console.log('OK ca marche!');
		$scope.login=function(){

			//LoginService.login($scope.email, scope.password);
			$ionicLoading.show();

			LoginService.login($scope.email, $scope.password)
			.then(function(){
						//$scope.closeModal();

				$state.go('browse');
				$ionicLoading.hide();

				}).catch(function(){
					$ionicLoading.hide();
				});
			};

		$scope.openSignUp= function(){

			//
			// $ionicModal.fromTemplateUrl


			$ionicModal.fromTemplateUrl('templates/auth/signup/signup.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}


	});
