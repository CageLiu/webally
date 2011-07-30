$(document).ready(
	function()
	{	
		$('a,#so-butn').focus(
			function()
			{if(this.blur){this.blur();}}
		);
		//navigate
		var a=$('#nav li').eq(0).width();
		var b=$('#nav li').eq(0).children('a').width();
		$('#m-hline').css({'width':b,'left':(a-b)/2});
		var lw;
		var aw;
		var hw;
		$('#nav li').hover(
			function()
			{
				lw=$(this).width();
				aw=$(this).children('a').width();
				hw=$(this).position().left;
				$('#m-hline').css({'width':0,'left':lw/2+hw}).stop().animate({'width':aw,'left':(lw-aw)/2+hw},500,'swing');
			},
			function(){}
		);
		//search box value  focus
		$('#so-box').focus(
			function()
			{
				var $samp=$('#sim-select samp');
				var $li=$('#sim-select li')
				for(var i=0;i<$li.length;i++)
				{
					if($('#so-box').val()==$('#so-text input[type="hidden"]').eq(i).val())
					{
						$(this).val('').css('color','#333');
					}
				}
					
			}
		);
		//search box value  blur
		$('#so-box').blur(
			function()
			{	
				var $samp=$('#sim-select samp');
				var $li=$('#sim-select li')
				if($('#so-box').val()=="")
				{
				for(var i=0;i<$li.length;i++)
				{
					if($samp.text()==$li.eq(i).text())
					{
						$('#so-box').val($('#so-text input[type="hidden"]').eq(i).val()).css('color','#aaa');
					}
				}
				}
			}
		);
		//show search select
		$('#sim-select').hover(
			function()
			{
					$(this).children('ul').css('display','block');
					$('#sim-select samp').css('backgroundPosition','35px -74px');
					$(this).children('ul').children('li').click(
						function()
						{
							$('#sim-select samp').text($(this).text());
							$('#so-box').focus();
							$('#sim-select ul').css('display','none');
							$('#sim-select samp').css('backgroundPosition','35px -41px');
						}
					);
					$(this).children('ul').children('li').hover(
						function()
						{
							$(this).css({'background':'#555','color':'#fff'});
						},
						function()
						{$(this).css({'background':'#fff','color':'#333'});}
					);
			},
			function()
			{
				$(this).children('ul').css('display','none');
				$('#sim-select samp').css('backgroundPosition','35px -41px');
			}
		);
		
		//banner
		$('#banner ul').css('width',$('#banner li').length*$('#banner li').width());
		var timer;
		var dplay=$('#banner li').width();
		var current=0;
		timer=setInterval(moive,4000);
		function moive()
		{
			if(current<$('#banner li').length-1)
			{current++;}
			else
			{current=0;}
			$('#banner ul').stop().animate({'left':-current*dplay},400,'swing');
			$('#slide-toggle a').removeClass();
			$('#slide-toggle a').eq(current).addClass('current');
		}
		$('#slide-toggle a').mouseover(
			function()
			{
				$('#slide-toggle a').removeClass();
				$(this).addClass('current');
				current=$(this).index();
				$('#banner ul').stop().animate({'left':-current*dplay},400,'swing');
				current-=1;
			}
		);
	}
);