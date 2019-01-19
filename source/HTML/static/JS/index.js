




setInterval(function(){
    if($("body").prop("class")==="background_0"){

        $("body").prop("class","background_1");

    }else if($("body").prop("class")==="background_1"){

        $("body").prop("class","background_2")

    }else if($("body").prop("class")==="background_2"){

        $("body").prop("class","background_3")
    }else if($("body").prop("class")==="background_3"){

        $("body").prop("class","background_4")
    }else if($("body").prop("class")==="background_4"){

        $("body").prop("class","background_0")
    }
},5000);
var i=0;
var list=[
    '是佳文嘛?',
    '啊,你来了阿',
    '等你好久了呢',
    '首先祝你生日快乐啊',
    '不知不觉咱们也认识了一年多了呢',
    '你也已经十七岁啦',
    '记得以前每天给你讲哲学',
    '到后来我谈恋爱',
    '然后我们就没怎么说话啦',
    '这一年多真的发生了很多事',
    '不过比较庆幸的是',
    '还好我们都在',
    '这些年一个人',
    '辛苦你啦',
    '不过你也找到男朋友啦',
    '希望他能好好照顾你',
    '不要再让你一个人啦',
    '其实啊',
    '我们都是在不知不知觉中',
    '渐渐长大了',
    '想起以前在网易云看到的一句话',
    '长大这个词',
    '连偏旁都没有一看就很孤独',
    '还记得嘛?',
    '去年你说最幸运的事,就是遇见了我',
    '虽然最后还是给你讲到一半你就没时间听了',
    '但是',
    '我最希望的还是 你能天天开心阿',
    '只要你开心',
    '懂不懂什么哲学也没什么关系呀',
    '你也要答应我',
    '要每天开开心心的呀',
    '好不好?'];
var t1=  setInterval(function(){
    if(i<list.length){
        alert(list[i]);
        $(".list_text").append("<li class='list_li'>"+this.list[i]+"</li>");
        if($('.list_text li').length===16){
            $(".list_text").css("font-size","20px");
        }
        i++;
    }else{
        $("#mymodal-01").modal();
        window.clearInterval(t1);
        $(".list_li").click(function () {
            $("#mymodal-01").modal();
        });

    }

},2000);


