/**
 * Created by Avihai on 4/3/16.
 */


var todoApp = angular.module('todoApp',[]);

todoApp.controller('MainController',['$scope',function($scope){

    // List of TODOS
    $scope.todos = [];
    $scope.editMode = false;

    // Tasks counter
    $scope.getTotalTodos = function(){
        if($scope.todos.length === 1){
            return $scope.todos.length + ' Task';
        }else{
            return $scope.todos.length + ' Tasks';
        }
    };

    $scope.clearCompleted = function(){
        $scope.todos = _.filter($scope.todos,function(todo){
            return !todo.Done;
        })
        $scope.inputTodoText = '';
    };





    $scope.removeTodo = function(start){
        $scope.todos.splice(start,1);
    }


    // Add new task
    $scope.addTodo = function(){
        $scope.todos.push({text:$scope.inputTodoText,Edit:false,Done:false})
        $scope.inputTodoText = '';
    };




}]);
