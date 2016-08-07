//第一步：分析需求和思路


//第二步：要操作谁就先获取谁
var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");

//第三步：指定一个功能方法，实现我们的需求
//nIndex是我们定义的形参，代表当前被选中元素的索引
function tabChange(nIndex){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }
    oLis[nIndex].className="select";
    oDivs[nIndex].className="select";
}

//第四步：给我们的li绑定鼠标移上去的事件
for(var i=0;i<oLis.length;i++){
    oLis[i].zhuFeng=i;//在每一次循环的时候，把每一个li的索引定义在自己的自定义属性zhuFeng上
    oLis[i].onmouseover=function(){
        tabChange(this.zhuFeng);
    }
}

//js加载完成后（for循环加载完成 i=3），我们才会手动触发onmouseover事件



//第二种写法，项目中实用
/*
var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");
for(var i=0;i<oLis.length;i++){
    var oLi = oLis[i];
    oLi.zhuFeng=i;
    oLi.onmouseover=function(){
        for(var j=0;j<oLis.length;j++){
            oLis[j].className="";
            oDivs[j].className="";
        }
        this.className="select";
        oDivs[this.zhuFeng].className="select";
    }
}*/
