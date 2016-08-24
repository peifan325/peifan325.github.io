$.fn.stick = function (handler) {
        var $node = this,
                nodeWidth = $node.width(),
                nodeHeight = $node.height(),
                nodeLeft = $node.offset().left,
                nodeTop = $node.offset().top,
                $nodeClone = $node.clone();
                
                $nodeClone.addClass('cloneFixed');
        $nodeClone.css ({
            'position':'fixed',
            'top':0,
            'left':nodeLeft,
            'width':nodeWidth,
            'height':nodeHeight,
//            'opacity':0
        });

        $(window).on("resize",function (e) {
            nodeWidth = $node.width();
            nodeHeight = $node.height();
            nodeLeft = $node.offset().left;
            nodeTop = $node.offset().top;

            $nodeClone.css ({
                'left':nodeLeft,
                'width':nodeWidth,
                'height':nodeHeight
            });

        });
        $(window).on("scroll",function (e) {
            var winScroll = $(this).scrollTop();

            if (winScroll >= nodeTop) {
                setFixed();
            } else if (winScroll < nodeTop) {
                clearFixed();
            }
        });

        function setFixed() {
            $node.after($nodeClone);           //需要设置时，才添加到页面，防止 后面的覆盖前面的。导致无法点击
            $nodeClone.data('isFixed',true);
            $node.css({'opacity':0});
//            $nodeClone.css({'opacity':1});
        }
        function clearFixed() {
            if ($nodeClone.data('isFixed')){
                $nodeClone.data('isFixed',false);
                $node.css({'opacity':1});
                $nodeClone.remove();
            }

        }

    };