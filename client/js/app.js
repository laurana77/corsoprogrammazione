var app = angular.module('app1', ['lbServices']);
	app.controller('app1Controller',
		['$scope','Todo', function($scope, Todo) {
			$scope.newTodo={
				name:"",
				desc:"",
				important:false
			}
			$scope.aggiungitodo=function(){
				console.log("aggiungo"+$scope.newTodo);
			}
			$scope.cancellatodo=function(idtodo){
				console.log("cancella"+idtodo);
			}
			$scope.eseguitodo=function(idtodo){
				console.log("eseguitodo"+idtodo);
			}
		}]);
