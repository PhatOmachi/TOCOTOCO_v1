app.controller('dangkyctrl', function($rootScope,$scope,$window, $http, $timeout,$location){

    

    $rootScope.show = false;
    $rootScope.dangnhap = false;

    $scope.pass1 ='';
    $scope.pass2 ='';

    $scope.booleanpass2 =false;
    $scope.booleanthongbao = false;

    // $scope.taikhoandangky = {};


    $scope.kiemTraKhopNhau = function() {
        if ($scope.pass1 == $scope.pass2) {
            $scope.booleanpass2 =false;
            $scope.booleanthongbao = true;

            $rootScope.taiKhoanDaLogin = {
                sdt: $scope.sdt,
                mk: $scope.pass1
            }
            $rootScope.dataTaikhoan.push($rootScope.taiKhoanDaLogin);
            $timeout(function() {
                // Đặt tên ID cho nút (ví dụ: 'myButton')
                var nut = document.getElementById('myButton');
                if (nut) {
                  nut.click();
                  
                    $location.path("/view/giohang");
                }
            }, 4000);


        } else {
            $scope.booleanpass2 =true;
            $scope.booleanthongbao = true;
            $scope.pass1 ='';
            $scope.pass2 ='';
            $scope.hoten = "";
        }
      };


})