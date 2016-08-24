/**
 * 无缝滚动轮播 模块
 */
var Carousel = function($carousel){
    var _this = this;
    _this.$carousel = $carousel;
    _this.$carousel_wrap = _this.$carousel.parent();
    _this.$tamll_num = _this.$carousel_wrap.siblings(".tamll-hd").children("strong").children("span");
    _this.$bullet = _this.$carousel_wrap.find('.bullet');
    _this.$arrow = _this.$carousel_wrap.find('.arrow');
    _this.$bulletItems = _this.$bullet.children();
    cloneFirstAndLast();
    _this.items = _this.$carousel.children();
    _this.count = _this.items.size();
    _this.itemWidth = _this.$carousel_wrap.width();
    setCarouslAndItemWidth();
    _this.current = 0;
    _this.clock ;
    _this.isAnimate =false;

    _this.init();


    function cloneFirstAndLast(){
        var itemsTemp = _this.$carousel.children();
        _this.$carousel.append(itemsTemp.first().clone());
        _this.$carousel.prepend(itemsTemp.last().clone());
    }
    function setCarouslAndItemWidth(){
        _this.$carousel.css({
            width:_this.count * _this.itemWidth,
            left:-_this.itemWidth
        });
        _this.items.css({
            width:_this.itemWidth
        });
    }
};
Carousel.prototype = {
    init:function(){
        var _this = this;
        _this.bind();
        _this.autoPlay();
    },
    play:function(index){
        var _this = this;

        if (_this.isAnimate) return;

        _this.$carousel.animate({'left':-_this.itemWidth*index},500,function(){
            if (index == 0){
                index = _this.count-1;
                _this.$carousel.css('left',-_this.itemWidth*index);
            }else if(index == _this.count-1) {
                index = 1;
                _this.$carousel.css('left',-_this.itemWidth);
            }
            _this.setBullet(index-1);
            _this.setNum(index);
            _this.current = index;
            _this.isAnimate = false;
        });
    },
    playNext:function(){
        var _this = this;
        _this.play(parseInt((_this.current+1)%_this.count));
    },
    playPre:function(){
        var _this = this;
        _this.play(parseInt((_this.current-1+_this.count)%_this.count));
    },
    autoPlay:function(){
        var _this = this;
        _this.clock = _this.clock | setInterval(function(){
            _this.playNext();
        },3000);

    },
    stopPlay:function(){
        var _this = this;
        if (!!_this.clock ){
            _this.clock = clearInterval(_this.clock);
        }
    },
    setBullet:function(index){
        var _this = this;
        _this.$bulletItems.removeClass('active').eq(index).addClass('active');
    },
    setNum:function (index) {
        var _this = this;
        _this.$tamll_num && _this.$tamll_num.text(index);
    },
    bind:function(){
        var _this = this;
        _this.$bullet.on('click','li',function(e){
            event.preventDefault();
            var index = $(this).index();
            _this.play(index+1);

        });
        _this.$carousel_wrap.hover(function(){
            _this.$arrow.css('display','block');
            _this.stopPlay();
        },function () {
            _this.$arrow.css('display','none');
            setTimeout(function(){
                if (!_this.clock) {
                    _this.autoPlay();
                }
            },2000);
        });
        _this.$arrow.on('click',function () {
            event.preventDefault();
           if ($(this).hasClass('pre')){
               _this.playPre();
           } else if ($(this).hasClass('next')) {
               _this.playNext();
           }
        })
    }
};