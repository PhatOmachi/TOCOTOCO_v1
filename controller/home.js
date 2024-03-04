app.controller("trangchuctrl",function($http, $scope, $rootScope){

    $rootScope.show = true;


    // $rootScope.chuadangnhap = true;

    $rootScope.dssp = [];
        $http.get("model/data-home.json").then(
            function(res){//thành công
            $rootScope.dssp = res.data;
            // console.log($rootScope.dssp);
            },
            function(res){// thất bại
                alert("lỗi rồi");
            }
    );



    



})