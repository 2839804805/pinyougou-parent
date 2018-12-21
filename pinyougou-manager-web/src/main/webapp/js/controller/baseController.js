app.controller("baseController",function ($scope) {

    $scope.reloadList=function(){
        //切换页码
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };


//分页控件配置currentPage:当前页   totalItems :总记录数  itemsPerPage:每页记录数  perPageOptions :分页选项  onChange:当页码变更后自动触发的方法
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();
        }
    };
    $scope.selectIds=[];
    $scope.updateSelection=function($event,id){
        if ($event.target.checked) {
            $scope.selectIds.push(id);
        }else{
            var idx = $scope.selectIds.indexOf(id);//返回在集合中的位置
            $scope.selectIds.splice(idx,1);//根据集合位置位置删除
        }
    };

    $scope.jsonTOString = function (jsonString,key) {
        var json = JSON.parse(jsonString);
        var value = "";
        for (var i=0;i<json.length;i++){
            if (i>0){
                value+=","
            }
                value+=json[i][key]
        }

        return value;

    }
});
