var app = angular.module('myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl : "../view/body-trangchu.html",
        controller : "trangchuctrl"
    })
    .when("/view/body-tintuc" ,{
        templateUrl : "../view/body-tintuc.html",
        controller : "tintucctrl"
    })
    .when("/view/body-thuonghieu" ,{
        templateUrl : "../view/body-thuonghieu.html",
        controller : "thuonghieuctrl"
    })
    .when("/view/body-sumenh" ,{
        templateUrl : "../view/body-sumenh.html",
        controller : "sumenhctrl"
    })



    // chi tiết tin tức khuyến mãi 
    .when("/view/body-chitiettintuc" ,{
        templateUrl : "../view/body-chitiettintuc.html",
        controller : "chitiettintucctrl"
    })
    .when("/view/body-ctthuonghieu" ,{
        templateUrl : "../view/body-ctthuonghieu.html",
        controller : "ctthuonghieuctrl"
    })
    .when("/view/body-trangchu/:id",{
        templateUrl : "../view/body-chitietsanpham.html",
        controller : "chitietsanphamctrl"
    })
    
    // giỏ hàng
    .when("/view/giohang" ,{
        templateUrl : "../view/GIo_Hang.html",
        controller : "giohangctrl"
    })

    //đăng kí và đăng nhập
    .when("/view/dangnhap" ,{
        templateUrl : "../view/Dang_Nhap.html",
        controller : "dangnhapctrl"
    })
    .when("/view/dangky" ,{
        templateUrl : "../view/Dang_ky.html",
        controller : "dangkyctrl"
    })


    .when("/view/ctthongtin" ,{
        templateUrl : "../view/ctthongtin.html",
        controller : "ctthongtinctrl"
    })
    

    //ngoại lệ khi url bị sai 
    .otherwise({
        redirectTo : "/home"
    })



})




