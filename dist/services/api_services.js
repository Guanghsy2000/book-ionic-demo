//创建服务,进行数据请求
app.service('se',function($http){
    var url = 'http://localhost:3000/api/v1/books/'
    /**
     * 获取书籍类型数据
     * 
     * 参数一 回调函数
     */
    this.getFoodType = function(callback){
        $http.get(`${url}booktype`)
            .then(function(res){
                callback(res.data)
            })
    }   

    this.getBookData = function(page,type,callback){
        $http.get(`${url}get_page_count/?type=${type}&page=${page}`)
            .then(function(res){
                callback(res)
            })
    }
})


