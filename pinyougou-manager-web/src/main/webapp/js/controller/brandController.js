app.controller("brandController", function ($scope,$controller,brandService) {
    $controller('baseController',{$scope:$scope});//继承

    $scope.findAll = function () {
        brandService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        );
    };


    //分页
    $scope.findPage=function(page,size){
        brandService.findPage(page,size).success(
            function(response){
                $scope.list=response.rows;//显示当前页数据
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        )
    };
    //增加
    $scope.save=function () {
        var object = null;
        if ($scope.iphone.id !=null){
            object= brandService.update($scope.iphone)
        }else{
            object= brandService.add($scope.iphone)
        }
        object.success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();
                }else{
                    alert(response.message)
                }
            })
    };
    //单个查询
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.iphone = response;
            }
        )
    };
    //删除
    $scope.delete=function () {
        brandService.delete($scope.selectIds).success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();
                } else {
                    alert(response.message)
                }
            }
        )
    };

    $scope.searchIphone={};
    $scope.search=function (page,size) {
        brandService.search(page,size,$scope.searchIphone).success(
            function(response){
                $scope.list=response.rows;//显示当前页数据
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        )
    }


});