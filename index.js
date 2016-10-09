$(function(){
    var audio=$('audio').get(0);
    var bofang=$('.bofang');
    var dangqian=$('.dangqian');
    var zongshichang=$('.zongshichang');
    var shijian=$('.shijianjingdu');
    var yinliang=$('.yinliang');
    var jingdu=$('.jingdu');
    var zuo=$('.zuo');
    var you=$(".you");
    var xinxi=$('.xinxi');
    var picture=$('.picture');
    var gcbj=$(".gecibuju");
    var del=$('.del');
    var lrc = $(".lyric-inner");
    var bigmask=$('.bigmask');
    var database=[
        {name:"薛之谦(Jacky Xue)-演员",src:"mp3/薛之谦 (Jacky Xue) - 演员.mp3",img:'wave.gif',geshou:"薛之谦",time:"04:21",gcurl:"lrc/yanyuan.lrc",lyrics:[{time:"0:02",lyric:"演员"},
            {time:"0:04",lyric:"演员 - 薛之谦"},
            {time:"0:06",lyric:"词：薛之谦"},
            {time:"0:08",lyric:"曲：薛之谦"},
            {time:"0:21",lyric:"简单点说话的方式简单点"},
            {time:"0:30",lyric:"递进的情绪请省略"},
            {time:"0:34",lyric:"你又不是个演员"},
            {time:"0:37",lyric:"别设计那些情节"},
            {time:"0:42",lyric:"没意见我只想看看你怎么圆"},
            {time:"0:52",lyric:"你难过的太表面 像没天赋的演员"},
            {time:"0:58",lyric:"观众一眼能看见"},
            {time:"1:02",lyric:"该配合你演出的我演视而不见"},
            {time:"1:08",lyric:"在逼一个最爱你的人即兴表演"},
            {time:"1:13",lyric:"什么时候我们开始收起了底线"},
            {time:"1:18",lyric:"顺应时代的改变看那些拙劣的表演"},
            {time:"1:23",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"1:29",lyric:"我该变成什么样子才能延缓厌倦"},
            {time:"1:34",lyric:"原来当爱放下防备后的这些那些"},
            {time:"1:40",lyric:"才是考验"},
            {time:"1:45",lyric:"没意见你想怎样我都随便"},
            {time:"1:55",lyric:"你演技也有限"},
            {time:"1:59",lyric:"又不用说感言"},
            {time:"2:01",lyric:"分开就平淡些"},
            {time:"2:05",lyric:"该配合你演出的我演视而不见"},
            {time:"2:11",lyric:"别逼一个最爱你的人即兴表演"},
            {time:"2:16",lyric:"什么时候我们开始没有了底线"},
            {time:"2:22",lyric:"顺着别人的谎言被动就不显得可怜"},
            {time:"2:27",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"2:32",lyric:"我该变成什么样子才能配合出演"},
            {time:"2:37",lyric:"原来当爱放下防备后的这些那些"},
            {time:"2:42",lyric:"都有个期限"},
            {time:"2:47",lyric:"其实台下的观众就我一个"},
            {time:"2:53",lyric:"其实我也看出你有点不舍"},
            {time:"2:59",lyric:"场景也习惯我们来回拉扯"},
            {time:"3:02",lyric:"还计较着什么"},
            {time:"3:08",lyric:"其实说分不开的也不见得"},
            {time:"3:14",lyric:"其实感情最怕的就是拖着"},
            {time:"3:20",lyric:"越演到重场戏越哭不出了"},
            {time:"3:24",lyric:"是否还值"},
            {time:"3:29",lyric:"该配合你演出的我尽力在表演"},{time:"3:35",lyric:"像情感节目里的嘉宾任人挑选"},
            {time:"3:40",lyric:"如果还能看出我有爱你的那面"},
            {time:"3:45",lyric:"请剪掉那些情节让我看上去体面"},
            {time:"3:50",lyric:"可你曾经那么爱我干嘛演出细节"},
            {time:"3:55",lyric:"不在意的样子是我最后的表演"},
            {time:"4:01",lyric:"是因为爱你我才选择表演 这种成全"}]},
        {name:"气球",src:"mp3/气球.mp3",img:'wave.gif',geshou:"佚名",time:"04:17",gcurl:"lrc/qiqiu.lrc"},
        {name:"Almost Lover",src:"mp3/Almost Lover.mp3",img:'wave.gif',geshou:"meimei",time:"04:30",gcurl:"lrc/Almost Lover.lrc"},
        {name:"G.E.M.邓紫棋-画",src:"mp3/G.E.M.邓紫棋-画(Live Piano Session II).mp3",img:'wave.gif',geshou:"邓紫棋",time:"02:48",gcurl:"lrc/hua.lrc"},
        {name:"丑八怪",src:"mp3/丑八怪.mp3",img:'wave.gif',geshou:"薛之谦",time:"04:13",gcurl:"lrc/choubaguai.lrc"},
        {name:"好久不见",src:"mp3/好久不见.mp3",img:'wave.gif',geshou:"陈奕迅",time:"04:10",gcurl:"lrc/haojiubujian.lrc"},
        {name:"小提琴 - 卡农",src:"mp3/小提琴 - 卡农.mp3",img:'wave.gif',geshou:"佚名",time:"03:43",gcurl:"lrc/kanong.lrc"},
        {name:"经过",src:"mp3/经过.mp3",img:'wave.gif',geshou:"佚名",time:"03:59",gcurl:"lrc/jingguo.lrc"},
        {name:"阴天",src:"mp3/阴天.mp3",img:'wave.gif',geshou:"莫文蔚",time:"04:09",gcurl:"lrc/yintian.lrc",lyrics:[
            {time:"0:02",lyric:"阴天"},
            {time:"0:04",lyric:"莫文蔚"},
            {time:"0:06",lyric:"作品李"},
            {time:"0:08",lyric:"Amin"},
            {time:"0:10",lyric:"李宗盛"},
            {time:"0:12",lyric:"李宗盛"},
            {time:"0:19",lyric:"阴天在不开灯的房间"},
            {time:"0:23",lyric:"当所有思绪都一点一点沉淀"},
            {time:"0:26",lyric:"爱情究竟是精神鸦片"},
            {time:"0:29",lyric:"还是世纪末的无聊消遣"},
            {time:"0:34",lyric:"香烟氲成一摊光圈"},
            {time:"0:37",lyric:"和他的照片就摆在手边"},
            {time:"0:41",lyric:"傻傻两个人笑得多甜"},
            {time:"0:47",lyric:"开始总是分分钟都妙不可言"},
            {time:"0:51",lyric:"谁都认为热情它永不会减"},
            {time:"0:54",lyric:"除了激情褪去后的那一点点倦"},
            {time:"1:01",lyric:"也许像谁说过的贪得无厌"},
            {time:"1:05",lyric:"活该应了谁说过的不知检点"},
            {time:"1:09",lyric:"总之那几年感性赢了理性那一面"},
            {time:"1:31",lyric:"阴天在不开灯的房间"},
            {time:"1:34",lyric:"当所有思绪都一点一点沉淀"},
            {time:"1:38",lyric:"爱恨情欲里的疑点盲点"},
            {time:"1:41",lyric:"呼之欲出那么明显"},
            {time:"1:45",lyric:"女孩通通让到一边"},
            {time:"1:48",lyric:"这歌里的细微末节就算都体验"},
            {time:"1:52",lyric:"若想真明白真要好几年"},
            {time:"2:27",lyric:"回想那一天喧闹的喜宴"},
            {time:"2:35",lyric:"耳边想起的究竟是序曲或完结篇?"},
            {time:"2:42",lyric:"感情不就是你情我愿"},
            {time:"2:45",lyric:"最好爱狠扯平俩不相欠"},
            {time:"2:49",lyric:"感情说穿了一人挣脱的一人去捡"},
            {time:"2:55",lyric:"男人大可不必百口莫辨"},
            {time:"3:00",lyric:"女人实在无须楚楚可怜"},
            {time:"3:03",lyric:"总之那几年你们俩个没有缘"},
            {time:"3:13",lyric:"阴天在不开灯的房间"},
            {time:"3:16",lyric:"当所有思绪都一点一点沉淀"},
            {time:"3:20",lyric:"爱情究竟是精神鸦"},
            {time:"3:23",lyric:"还是世纪末的无聊消遣"},
            {time:"3:27",lyric:"香烟氲成一摊光圈"},
            {time:"3:31",lyric:"和他的照片就摆在手边"},
            {time:"3:34",lyric:"傻傻两个人笑得多甜"},
            {time:"3:41",lyric:"傻傻两个人笑得多甜"}]},


    ]
    var index=0;
    var box=$('.box');
    var lis=$('.lis');

    var index=0;
    //重绘
    function dawlist(){
        $('.play-list').empty();
        $.each(database,function(i,v){
            // $('<li>').text(v.name).appendTo('.play-list');
            $('<li id='+ i +'><div class="list5"></div><div class="list2">'+ v.name +' </div><div class="listicon"><div class="icon1"></div><div class="icon2"></div><div class="icon3"></div><div class="icon4"></div></div><div class="list3">'+ v.geshou+' </div> <div class="list4">'+ v.time +' </div></li>').appendTo('.play-list');
            // $('<div class="shuzi">'+i+'</div>').appendTo('li');
        })
        for(var i=0;i<database.length;i++){
            $(database[i].lyrics).each(function(i,v){
                $('<p class="'+ i +'">'+ v.lyric +'</p>').appendTo('.geci');
            })
        }
    }

    dawlist();
    //歌曲列表
    var picbase=['img/x1.jpg','img/x.jpg','img/x4.jpg','img/x1.jpg','img/x5.jpg','img/x5.jpg','img/x5.jpg','img/x.jpg','img/x3.jpg'];
    
    var flag=true;
    $('.play-list').on('click','li',function(){

        $('.gecibuju').empty();
        //移出字体的类
        if(flag){
            $(this).addClass('ziticolor');
            $(this).find('.list5').addClass('list6');
            // $(this).find('.icon1').removeClass('icon1').addClass('icon1a');
            
        }else{
            $('li').removeClass('ziticolor');
            $('li>div:nth-child(1)').removeClass('list6');
            $(this).find('.list5').addClass('list6');
            $(this).addClass('ziticolor');
            // $(this).find('.icon1a').removeClass('.icon1a').addClass('.icon1');
            flag=true;
        }

        index=$(this).index();
        audio.src=database[index].src;
        xinxi.text(database[index].name);
        $('.picture img').attr('src',picbase[index]);
        $('.top .gequ').text(database[index].name);
        $('.ertop .geshou').text(database[index].geshou);
        $.ajax({
            url:""+database[ index ].gcurl+"",
            dataType:"text"
        }).done(function(data){
            var text=data;
            lyric=parseLyric(text)
        });
        bigmask.css({
            backgroundImage:'url( '+picbase[index]+')'
        })

        flag=false;
        audio.play();
    })
    //歌词运动
    var mov=0;
    function move(){
$('p').css({
    opacity:'0'
})
       var h= $('p').height();
        console.log(h);
        $('p').eq(mov).css({
            opacity:'1',
            // top:-(1000*(audio.currentTime/audio.duration)),
            color:"#fff"
        })
        mov++;
    }

    //鼠标经过效果
    num='';
    $('ul').on('mouseenter','li',function(){
        $(this).find('.listicon').css({
            visibility:'visible'
        })
        num=$(this).find('.list4').text();
        $(this).find('.list4').text('');
        $(this).find('.list4').removeClass('list4').addClass('list4a');
    })
    $('ul').on('mouseleave','li',function(){
        $(this).find('.listicon').css({
            visibility:'hidden'
        })
        $(this).find('.list4a').removeClass('list4a').addClass('list4');
        $(this).find('.list4').text(num);
    })
    var tt=true
   // -------------------------------------------------
   // 这个函数错误
   $('ul').on('click','.icon1',function(){

       $(this).removeClass('icon1').addClass('icon1a');

       // $(this).toggleClass('icon1a')
       audio.play();

   })
    $('ul').on('click','.icon1a',function(){
        // audio.pause();

        $(this).removeClass('icon1a').addClass('icon1');
    })
    //点击对应的删除
    $('ul').on('click','.list4a',function(){
        // $(this).parent().remove();
        var inn=$(this).parent().attr('id');
        database.splice(inn,1);
        audio.pause();
        dawlist();
    })
    //点击上面删除的发生的删除
    del.on('click',function(){
        // console.log($('.display-list li:last'))
        $('.display-list li:last').remove();
        database.pop();
        audio.pause();
        dawlist();

    })
    //上一首
    zuo.on('click',function(){
        $('li').removeClass('ziticolor')
        $('li').find('.list5').removeClass('list6');
        index--;
        if(index==-1){
            index=database.length-1;
        }
        audio.src=database[index].src;
        $('li').eq(index).addClass('ziticolor');
        xinxi.text(database[index].name);
        $('.picture img').attr('src',picbase[index]);
        $('.top .gequ').text(database[index].name);
        $('.ertop .geshou').text(database[index].geshou);

        $('li').eq(index).find('.list5').addClass('list6');
        bigmask.css({
            backgroundImage:'url( '+picbase[index]+')'
        })
        $.ajax({
            url:""+database[ index ].gcurl+"",
            dataType:"text"
        }).done(function(data){
            var text=data;
            lyric=parseLyric(text)
        });

        audio.play();
    })
        //下一首
        you.on('click',function(){
            $('li').removeClass('ziticolor')
            $('li').find('.list5').removeClass('list6');

            index++;
            if(index==database.length){
                index=0;
            }
            audio.src=database[index].src;
            $('li').eq(index).addClass('ziticolor');
            xinxi.text(database[index].name);
            $('.picture img').attr('src',picbase[index]);
            $('.top .gequ').text(database[index].name);
            $('.ertop .geshou').text(database[index].geshou);

            $('li').eq(index).find('.list5').addClass('list6');
            bigmask.css({
                backgroundImage:'url( '+picbase[index]+')'
            })
            $.ajax({
                url:""+database[ index ].gcurl+"",
                dataType:"text"
            }).done(function(data){
                var text=data;
                lyric=parseLyric(text)
            });
            audio.play();
        })
    //时间变更的函数
    function time(t){
        var s=parseInt(t%60);
        var m=parseInt(t/60);
        s=(s<10)?('0'+s):s;
        var time=m+':'+s;
        return time;
    }
    //点击播放按钮
    bofang.on('click',function(){
        // $(this).toggleClass('zanting');

        if(audio.paused){
            $(this).addClass('zanting');
            audio.play();
        }else{
            $(this).removeClass('zanting');
            audio.pause();
        }

    })
    //播放的时候
    $('audio').on('play',function(){
        $('.picture').addClass('imglei');
       $('.bofang').addClass('zanting');

    })
    //暂停的时候
    $('audio').on('pause',function(){
        bofang.removeClass('zanting');
    })
    //
    $('audio').on('timeupdate',function(){

        dangqian.text(time(audio.currentTime));
        zongshichang.text(time(audio.duration));
        $('.shijianjingdu .yuan').css({
            // left:(e.offsetX/$(this).width())*audio.duration
            left:audio.currentTime/audio.duration*$('.shijianjingdu').width()
        })
        //遍历所有歌词，看哪句歌词的时间与当然时间吻合
        for (var i = 0; i < lyric.length; i++) {
            if (this.currentTime /*当前播放的时间*/ > lyric[i][0]) {
                //显示到页面
                lrc.text(lyric[i][1])
            };
        };
        //在数组中取出歌词
        $(database[index].lyrics).each(function(i,v){
            if(time(audio.currentTime) == v.time){
                // console.log(i)
                var a=i;
                $(".geci").empty()
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                for(var j=i;j<database[index].lyrics.length;j++){
                    $("<p class="+ j +">"+database[index].lyrics[j].lyric+"</p>").appendTo(" .geci")
                }
                $("."+a).addClass("active")
            }
        })
    })
    //播放的精度条
    shijian.on('click',function(e){
        audio.currentTime=(e.offsetX/$(this).width())*audio.duration;

        console.log(audio.currentTime);
        $('.shijianjingdu .yuan').css({
            left:audio.currentTime/audio.duration*$(this).width()
        })
    })
    //拖动进度条
    $('.shijianjingdu .yuan').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var gjd=(e.pageX-$('.shijianjingdu').offset().left)/$('.shijianjingdu').width()*audio.duration;
            gjd=gjd>=audio.duration?audio.duration:gjd;
            gjd=gjd<=0?0:gjd;
            audio.currentTime=gjd;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })
    //音量的点击
    yinliang.on('click',function(){

        if(!(audio.volume==0)){
            jingdu.attr('datavolume',audio.volume);
            $(this).addClass('yinliangguan')
            $('.jingdu .yuan').css({
                left:0
            })
            audio.volume=0;
        }else{
            $(this).removeClass('yinliangguan');
            audio.volume=jingdu.attr('datavolume');
            console.log(audio.volume);
            $('.jingdu .yuan').css({
                left:audio.volume*jingdu.width()

            })
        }

    })
    //音量拖动
    $('.jingdu .yuan').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var v=(e.pageX-$('.jingdu').offset().left)/$('.jingdu').width();
            v=(v>1)?1:v;
            v=(v<0)?0:v;
            audio.volume=v
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
        })
    })
    //拖动音量的精度条
    jingdu.on('click',function(e){

        console.log(e.offsetX/$(this).width());

       audio.volume=(e.offsetX/$(this).width());
        jingdu.attr('datavolume',audio.volume);
        $('.jingdu .yuan').css({
            // left:(e.offsetX/$(this).width())*audio.duration
            left:e.offsetX

        })

    })

//图片的改变
    var s=0;
    $('.player').on('click',function(){
        s++;
        if(s>2){
            s=0;
        }
        if(s==0){
            $('.player').removeClass('shunxu').removeClass('suiji').addClass('shunxu');
        }else if(s==1){
            $('.player').removeClass('shunxu').addClass('danqu');
        }else if(s==2){
            $('.player').removeClass('danqu').addClass('suiji');
            console.log(s)
        }
    })
    $('audio').on('ended',function(){
        if($('.player').hasClass('shunxu')){
            index++;
        }else if($('.player').hasClass('danqu')){
            index=index;
        }else if($('.player').hasClass('suiji')){
            index=parseInt(Math.random()*(database.length-1));

        }
        $('li').removeClass('ziticolor')
        $('li').find('.list5').removeClass('list6');
        bofang.addClass('zanting');
        audio.src=database[index].src;
        $('li').eq(index).addClass('ziticolor');
        xinxi.text(database[index].name);
        $('.picture img').attr('src',picbase[index]);
        $('.top .gequ').text(database[index].name);
        $('.ertop .geshou').text(database[index].geshou);

        $('li').eq(index).find('.list5').addClass('list6');
        audio.play();
    })
    //歌词
    function parseLyric(text) {
        //将文本分隔成一行一行，存入数组
        var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
            pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
            result = [];
        //去掉不含时间的行
        while (!pattern.test(lines[0])) {
            lines = lines.slice(1);
        };
        //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
        lines[lines.length - 1].length === 0 && lines.pop();
        lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
            //提取出时间[xx:xx.xx]
            var time = v.match(pattern),
            //提取歌词
                value = v.replace(pattern, '');
            //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
            time.forEach(function(v1, i1, a1) {
                //去掉时间里的中括号得到xx:xx.xx

                var t = v1.slice(1, -1).split(':');
                //将结果压入最终数组
                result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
            });
        });
        //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
        result.sort(function(a, b) {
            return a[0] - b[0];
        });
        return result;
    }

//    点击纯净
    var kaiguan=true;
    $('.chunjing').on('click',function(){
        $(this).toggleClass('chunjingguan');
        if(kaiguan){
            $('.topbox').css({
                display:'none'
            })
            $('.gecibox').css({
                display:'block'
            })
            kaiguan=false;
            return;
        }else{
            $('.topbox').css({
                display:'block'
            })
            $('.gecibox').css({
                display:'none'
            })
            kaiguan=true;
        }

    })


})