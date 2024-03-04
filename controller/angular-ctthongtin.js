app.controller('ctthongtinctrl', function($rootScope,$scope,$window, $http, $timeout){
    $rootScope.show = false;

    $scope.hoten = $rootScope.taiKhoanDaLogin.hoten;
    $scope.ngaysinh = $rootScope.taiKhoanDaLogin.ngaysinh;
    $scope.diachi = $rootScope.taiKhoanDaLogin.diachi;
    $scope.gioitinh = $rootScope.taiKhoanDaLogin.gioitinh;
    $scope.sdt = $rootScope.taiKhoanDaLogin.sdt;


    $scope.luuthongtin = function(){

        var thongtin = {
            sdt : $rootScope.taiKhoanDaLogin.sdt,
            mk :  $rootScope.taiKhoanDaLogin.mk,
            hoten : $scope.hoten,
            diachi : $scope.diachi,
            gioitinh : $scope.gioitinh,
            ngaysinh : $scope.ngaysinh
        }

        var xacNhan = confirm("Bạn có chắc chắn muốn thay đổi thông tin?");

        if(xacNhan){
            $rootScope.taiKhoanDaLogin = thongtin;
            console.log($rootScope.taiKhoanDaLogin);
            alert("Thay đổi thành công");
        }

        
    }
})