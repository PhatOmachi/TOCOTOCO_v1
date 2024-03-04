// app.controller('dangnhapctrl', function($rootScope,$scope,$window, $http, $timeout)
app.controller('dangnhapctrl', function($rootScope,$scope,$window, $http, $timeout, $location){
    $rootScope.show = false;
    // $rootScope.dangnhap = false;

    $rootScope.dataTaikhoan = [];
    $scope.booleanthongbaotren = false;
    $scope.booleanthongbao = false;


    $rootScope.taiKhoanDaLogin = {};

    $http.get('model/data-acc.json').then(
        function(res){//thành công 
            $rootScope.dataTaikhoan = res.data;
            // console.log($rootScope.dataTaikhoan);
        },
        function(res){//thất bại
            alert("Lỗi");
        }
    )


    $scope.checktaikhoan = function(){
        for(var i = 0 ; i  < $rootScope.dataTaikhoan.length ; i++){
            if($rootScope.dataTaikhoan[i].sdt == $scope.sdt && $rootScope.dataTaikhoan[i].mk == $scope.pass){
                $scope.booleanthongbaotren = false;
                // console.log("kk");
                $scope.booleanthongbao = true;

                $rootScope.taiKhoanDaLogin = {
                    sdt : $rootScope.dataTaikhoan[i].sdt,
                    mk : $rootScope.dataTaikhoan[i].mk
                }

                console.log($rootScope.taiKhoanDaLogin);
                $timeout(function() {
                    // Đặt tên ID cho nút (ví dụ: 'myButton')
                    var nut = document.getElementById('myButton');
                    if (nut) {
                      nut.click();
                        $location.path("/view/giohang");
                    }
                }, 2500);

            }else{
                $scope.booleanthongbaotren = true;
                $scope.booleanthongbao = true;
            }
        }
    }




})