var app = angular.module('app1', ['lbServices']);
	app.controller('app1Controller',
		['$scope','Todo', function($scope, Todo) {
			$scope.todos = [];
			$scope.todosdone=[];
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
				console.log("esegui "+$scope.newTodo + " " + idtodo);
				for(i=0;$scope.todos.lenght;i++){
					if($scope.todos[i].id==idtodo){
						$scope.todos[i].done=true;
						Todo.upsert($scope.todos[i]).$promise.then(function(results){
						$scope.todos=[];
						$scope.todosdone=[];
						getTodos();
					});
						
					break;
					}
				}
			}
			
			function getTodos(){
			Todo
				.find()
				.$promise
				.then(function(results){
					for(i=0; i<results.length;i++){
						if (results[i].done==false || results[i].done==null){
							$scope.todos.push(results[i]);
						}else{
							$scope.todosdone.push(results[i]);
						}
					}
					console.log($scope.todos);
					console.log($scope.todosdone);
					//$scope.todos = results;
					console.log( results);
				})
			}
			getTodos();
		}]);
