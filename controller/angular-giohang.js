
app.controller('giohangctrl', function($rootScope,$scope,$window, $http, $timeout){

    //show nav và foorter
    $rootScope.show = false;
    // $rootScope.chuadangnhap = true;


    $scope.dangnhap = true;
    $scope.dangnhap1 = false;

    //data giỏ hàng
    $scope.GioHang = [];

    //số thành phần
    $scope.indexAll = 0;
    $scope.indexTraSua = 0;
    $scope.indexTraiCay = 0;
    $scope.indexCheese = 0;
    $scope.indexCafe = 0;
    $scope.indexKem = 0;
    $scope.indexInstant = 0;

    //show theo từng danh mục
    $scope.booleanAll = true;
    $scope.booleanTraSua = true;
    $scope.booleanTraiCay = true;
    $scope.booleanCheese = true;
    $scope.booleanCafe = true;
    $scope.booleanKem = true;
    $scope.booleanInstant = true;

    // load data
    $http.get('model/data-giohang.json').then(
        function(res){//thành công
            $scope.GioHang = res.data;

            for(var i = 0 ; i < $scope.GioHang.length; i++){

                $scope.indexAll = $scope.GioHang.length-1;

                if($scope.GioHang[i].loai == "Trà Sữa"){
                    $scope.indexTraSua += 1;
                }

                if($scope.GioHang[i].loai == "Trái Cây"){
                    $scope.indexTraiCay += 1;
                }

                if($scope.GioHang[i].loai == "Cheese"){
                    $scope.indexCheese += 1;
                }

                if($scope.GioHang[i].loai == "Cafe"){
                    $scope.indexCafe += 1;
                }
                
                if($scope.GioHang[i].loai == "Kem"){
                    $scope.indexKem += 1;
                }

                if($scope.GioHang[i].loai == "Instant"){
                    $scope.indexInstant += 1;
                }
            }

            
            //sẽ được gọi để show full danh mục
            $scope.booleanTraSua = true;
            $scope.booleanTraiCay = true;
            $scope.booleanCheese = true;
            $scope.booleanCafe = true;
            $scope.booleanKem = true;
            $scope.booleanInstant = true;
            $scope.booleanAll = true;

            
            if($rootScope.taiKhoanDaLogin){

                $scope.dangnhap = false;

                $scope.dangnhap1 = true;
    
            }

        },
        function(res){//thất bại
            alert("Lỗi rồi")
        }
    )


        //lấy chữ của danh mục để so sanh
    $scope.getItem = function(index){

        switch (index) {
            case "Trà Sữa":
                // console.log("tao nè s");
                $scope.booleanTraSua = true;
                $scope.booleanTraiCay = false;
                $scope.booleanCheese = false;
                $scope.booleanCafe = false;
                $scope.booleanKem = false;
                $scope.booleanInstant = false;
                $scope.booleanAll = false;
                break;
            case "Trái Cây":
                // console.log("tao nè c");
                $scope.booleanTraSua = false;
                $scope.booleanTraiCay = true;
                $scope.booleanCheese = false;
                $scope.booleanCafe = false;
                $scope.booleanKem = false;
                $scope.booleanInstant = false;
                $scope.booleanAll = false;
                break;
            case "Cheese":
                // console.log("tao nè che");
                $scope.booleanTraSua = false;
                $scope.booleanTraiCay = false;
                $scope.booleanCheese = true;
                $scope.booleanCafe = false;
                $scope.booleanKem = false;
                $scope.booleanInstant = false;
                $scope.booleanAll = false;
                break;
            case "Cafe":
                // console.log("tao nè ca");
                $scope.booleanTraSua = false;
                $scope.booleanTraiCay = false;
                $scope.booleanCheese = false;
                $scope.booleanCafe = true;
                $scope.booleanKem = false;
                $scope.booleanInstant = false;
                $scope.booleanAll = false;
                break;
            case "Kem":
                // console.log("tao nè k");
                $scope.booleanTraSua = false;
                $scope.booleanTraiCay = false;
                $scope.booleanCheese = false;
                $scope.booleanCafe = false;
                $scope.booleanKem = true;
                $scope.booleanInstant = false;
                $scope.booleanAll = false;
                break;
            case "Instant":
                // console.log("tao nè in");
                $scope.booleanTraSua = false;
                $scope.booleanTraiCay = false;
                $scope.booleanCheese = false;
                $scope.booleanCafe = false;
                $scope.booleanKem = false;
                $scope.booleanInstant = true;
                $scope.booleanAll = false;
                break;
            default:
                $scope.booleanTraSua = true;
                $scope.booleanTraiCay = true;
                $scope.booleanCheese = true;
                $scope.booleanCafe = true;
                $scope.booleanKem = true;
                $scope.booleanInstant = true;
                $scope.booleanAll = true;
                break;
        }
        
    }
    
    
    //biến sắp xếp
    // $scope.sapXep = "gia";
    

    $scope.lowToHigh = function(){
        $scope.sapXep = 'gia';
    }

    $scope.highToLow = function(){
        $scope.sapXep = '-gia';
    }



    // giỏ hàng khi có đủ data
    $rootScope.dataGioHang = [];
    $scope.datagia = [];

    


    $scope.xoatatca = true;
    $scope.giohang = true;
    $scope.thanhtoan = true;
    $scope.thanhtien = 0;
    $scope.soluong = 0;



    $scope.addItem = function(sp){
        //không có trong giỏ hàng
        $scope.giohang = false;
        $scope.thanhtoan = false;
        $scope.xoatatca = false;
        
        var inCart = false;

                            //vì điều kiện này không đúng khi dataGioHang bang 0 nên for bỏ qua                            
        for(var i = 0 ; i < $rootScope.dataGioHang.length ; i++){
            
            //nếu như item giỏ hàng thứ i có id bằng với id sản phẩm nhập vào 
            if($rootScope.dataGioHang[i].id == sp.id){
                //đổi biên incard thành true
                inCart = true;
                $rootScope.dataGioHang[i].soluong += 1;
                $scope.soluong += 1;
                $scope.thanhtien = $scope.soluong * $rootScope.dataGioHang[i].gia;
                // console.log($scope.thanhtien);
                //cộng phần tử tứ i trong giỏ hàng số lượng lên 1 ;
            }
            // console.log($scope.thanhtien);
            
        }

        if(!$rootScope.taiKhoanDaLogin){
            alert("Vui lòng đăng nhập để thực hiện");
            $scope.giohang = true;
        }else{
            //vì inCard không được điều thành true khi chạy trong for 
            // nên if này được chạy để đẩy sản phẩm vào mảng
            if(!inCart){
                $scope.soluong += 1;
                $rootScope.dataGioHang.push(sp);
                $scope.thanhtien += sp.gia;
            }
        }


        
        


    }


    


    $scope.deleteAll = function(){
        if($rootScope.dataGioHang.length == 0){
            $scope.showthanhtoan = true;
            $timeout(function(){
                $scope.showthanhtoan = false;
            },1500)
        }

        //hiện thông báo
        $scope.giohang = true;
        $rootScope.dataGioHang = [];
        $scope.soluong = 0;
        $scope.thanhtien = 0;


    }

    $scope.deleteSP = function(index, sp){

        $scope.soluong = 0;

        $scope.thanhtien= 0;

        console.log(sp.soluong);
        
        $rootScope.dataGioHang.splice(index, 1);
        

        sp.soluong = 1;

        // $scope.xoatatca = true;
        if($rootScope.dataGioHang.length ==0){
            $scope.giohang = true;
        }else{
        }

        



    }


   

    $scope.loadacc = function(){

        if(!$rootScope.taiKhoanDaLogin){
            alert("Vui lòng đăng nhập để thực hiện")
        }else if($rootScope.dataGioHang==0){
            alert("Không có gì để thanh toán")
        }else{
            alert("Cảm ơn bạn đã mua nước");
            $rootScope.dataGioHang = [];
            $scope.soluong = 0;
            $scope.thanhtien= 0;
            $scope.giohang = true;
        }
    
    }



    $scope.kitutimkiem = '';

})