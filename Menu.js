// Menu Dropdown
$("#cssmenu ul ul li:odd").addClass("odd"),$("#cssmenu ul ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($("#cssmenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length});
// Menu Slide
$(document).ready( function() {  
    $('.menu').click(function () {
    $('#css-menu').css({right:'0'});
});
    $('.close-menu').click(function() {
    $('#css-menu').css({right:'-340px'});
});
 });
// External Link
 $(document).ready(function(){$("a[href^='http://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")}),$("a[href^='https://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")})});
// Back Top
function scrollToTop(){verticalOffset="undefined"!=typeof verticalOffset?verticalOffset:0,element=$("body"),offset=element.offset(),offsetTop=offset.top,$("html, body").animate({scrollTop:offsetTop},600,"linear")}$(function(){$(document).on("scroll",function(){$(window).scrollTop()>100?$(".smoothscroll-top").addClass("show"):$(".smoothscroll-top").removeClass("show")}),$(".smoothscroll-top").on("click",scrollToTop)});
//Sticky Popular
$(function(){if($("#PopularPosts1").length){var o=$("#PopularPosts1"),t=$("#PopularPosts1").offset().top,i=$("#PopularPosts1").height();$(window).scroll(function(){var s=$("#banner728-bottom").offset().top-i-20,n=$(window).scrollTop(),f=$(window).width();if(n>t&&f>759?o.css({position:"fixed",top:60}):o.css("position","static"),n>s){var c=s-n;o.css({top:c})}})}});
//Disqus
var disqus_shortname="fotobogil",disqus_url=disqus_blogger_current_url;!function(){"use strict";var e=function(){var e=document.getElementById("comments");return e||(e=document.getElementById("disqus-blogger-comment-block")),e},t=e();if(t){var d=document.createElement("div");d.id="disqus_thread",t.innerHTML="",t.appendChild(d),t.style.display="block";var n=document.createElement("script");n.async=!0,n.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.body).appendChild(n)}}();
!function(){var e=document.createElement(&quot;script&quot;);e.type=&quot;text/javascript&quot;,e.async=!0,e.src=&quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_item.js&quot;,(document.getElementsByTagName(&quot;head&quot;)[0]||document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(e)}();
