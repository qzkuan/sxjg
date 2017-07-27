<script type="text/javascript" src="./api.js"></script>
<script type="text/javascript">
    var bname;
			api.showProgress();//显示加载进度框
			//使用api.ajax请求数据，具体使用方法和参数请看官方文档，这里使用get方法演示
			api.ajax({
			url:'http://172.27.16.20/sxjg/php/get.php',//如果地址访问不到会请求出错，请填写自己的接口地址
			method:'get',
			cache:'false',
			timeout:30,
			dataTpye:'json',
			},function(ret,err){
			api.hideProgress();//隐藏加载进度框
			if(ret){
				for(var i=0;i<ret.length;i++){
				var bname=ret[i].bname+ret[i].bauthor;
	      var bauthor=ret[i].bauthor;
				document.write(bname);
				}
			}else{
			api.alert({msg:('错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode)});
			}
			});
	</script>
