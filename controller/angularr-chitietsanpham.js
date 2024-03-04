
app.controller('chitietsanphamctrl', function($rootScope, $http, $routeParams, $scope){
    
    $rootScope.dataDaLoad = {};


    for(var i = 0 ; i < $rootScope.dssp.length; i++){
        if($rootScope.dssp[i].id == $routeParams.id){

            $rootScope.dataDaLoad = $rootScope.dssp[i];
            break;
        }
    }
    
    console.log($rootScope.dataDaLoad);
    // console.log($scope.dataDaLoad);


    // for(var i = 0 ; i < $rootScope.dataGioHang.length ; i++){
            
    //     //nếu như item giỏ hàng thứ i có id bằng với id sản phẩm nhập vào 
    //     if($rootScope.dataGioHang[i].id == sp.id){
    //         //đổi biên incard thành true
    //         inCart = true;
    //         $rootScope.dataGioHang[i].soluong += 1;
    //         $scope.soluong += 1;
    //         $scope.thanhtien = $scope.soluong * $rootScope.dataGioHang[i].gia;
    //         // console.log($scope.thanhtien);
    //         //cộng phần tử tứ i trong giỏ hàng số lượng lên 1 ;
    //     }
    //     // console.log($scope.thanhtien);
        
    // }

    // if(!$rootScope.taiKhoanDaLogin){
    //     alert("Vui lòng đăng nhập để thực hiện");
    //     $scope.giohang = true;
    // }else{
    //     //vì inCard không được điều thành true khi chạy trong for 
    //     // nên if này được chạy để đẩy sản phẩm vào mảng
    //     if(!inCart){
    //         $scope.soluong += 1;
    //         $rootScope.dataGioHang.push(sp);
    //         $scope.thanhtien += sp.gia;
    //     }
    // }


    

})
