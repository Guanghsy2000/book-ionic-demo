//左侧边栏触发书籍信息展示
// $routeParams 用于获取路由的传递过来的信息
app.controller('leftMenus',['$scope','$routeParams','se',function($s,$r,se){
    console.log($r)
    $s.booklist = []  //用于存放书籍信息
    $s.page = 1  //当前页数
    $s.pageSum = null  //总页数
    $s.end = false  //用于判断书籍信息是否全部获取完毕,true会获取完毕,false表示还可以继续点击获取

    // 通过传递的类型值,或许书籍信息
    $s.getBookData = function(){
        se.getBookData($s.page,$r.type,function(res){
        console.log(res)
        res.data.res.forEach(function(item){
           $s.booklist.push(item)
        })
        $s.pageSum = res.data.pageCount
        })
    }

    $s.getBookData()

    $s.bookAdd = function(pageSum){
        if($s.page < pageSum){
            $s.end = false
            $s.page += 1
            $s.getBookData()
        }else{
            $s.end = true
            return
        }}
}])