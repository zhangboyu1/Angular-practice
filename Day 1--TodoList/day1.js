(function (angular) {
    'use strict';
    /**
    * MyTodoMvc Module
    *
    * 应用程序的主要的模块
    */
    var myApp = angular.module('MyTodoMvc', []);
    //注册一个主要的控制器
    myApp.controller('MainController', ['$scope', function ($scope) {
        //文本框需要一个模型
        $scope.text = '';
        //任务列表需要一个模型
        //每一个任务的结构 { id:1,text:'学习',completed:true}
        $scope.todos = [
            { id: 1, text: '学习', completed: false },
            { id: 2, text: '睡觉', completed: false },
            { id: 3, text: '打豆豆', completed: true },
        ];

        //添加todo
        $scope.add = function () {
            if (!$scope.text) { return; }
            $scope.todos.push({
                id: Math.random(),
                text: $scope.text,
                completed: false
            });
            $scope.text = '';
        };

        //删除todo
        $scope.remove = function (id) {
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].id === id) {
                    $scope.todos.splice(i, 1);
                    break;
                }
            }
        };

        //删除所有
        $scope.removeAll = function () {
            var result = [];
            for (var i = 0; i < $scope.todos.length; i++) {
                if (!$scope.todos[i].completed) {
                    result.push($scope.todos[i]);
                }
            }
            $scope.todos = result;
        };


        //是否有完成的
        $scope.existCompleted = function () {
            //该函数一定要有返回值
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].completed) {
                    return true;
                }
            }
            return false;
        };


        //当前编辑哪个元素
        $scope.currentEditingId = -1;
        $scope.editing = function (id) {
            $scope.currentEditingId = id;
        };
        $scope.save = function () {
            $scope.currentEditingId = -1;
        };


        // $scope.checkall = false;
        // $scope.$watch('checkall',function(now,old){
        // for(var i=0;i<$scope.todos.length;i++){
        //  $scope.todos[i].completed = now;
        // }
        // });

        var now = true;
        $scope.toggleAll = function () {
            for (var i = 0; i < $scope.todos.length; i++) {
                $scope.todos[i].completed = now;
            }
            now = !now;
        };


    }]);
})(angular);