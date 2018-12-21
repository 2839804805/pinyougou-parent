//品牌服务
app.service("brandService",function ($http) {
    this.find=function () {
        return $http.get("../brand/findAll.do");
    };
    this.findPage=function (page,size) {
        return $http.get('../brand/findPage.do?page='+page+'&size='+size);
    };
    this.findOne=function (id) {
        return $http.get("../brand/findOne.do?id="+id);
    };
    this.add=function (iphone) {
        return $http.post('../brand/add.do',iphone)
    };
    this.update=function (iphone) {
        return $http.post('../brand/update.do',iphone)
    };
    this.delete=function (ids) {
        return $http.get("../brand/delete.do?id="+ids);
    };
    this.search=function (page,size,searchIphone) {
        return  $http.post('../brand/search.do?page='+page+'&size='+size,searchIphone);
    }
    this.selectOption=function () {
        return $http.get('../brand/selectOption.do')
    }
});