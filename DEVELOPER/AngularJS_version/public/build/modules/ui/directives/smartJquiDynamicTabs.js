define(["modules/ui/module","jquery","jquery-ui"],function(a,b){"use strict";a.registerDirective("smartJquiDynamicTabs",["$timeout",function(a){function c(){function a(){var a=c.val()||"Tab "+f,h="tabs-"+f,i=b(e.replace(/#\{href\}/g,"#"+h).replace(/#\{label\}/g,a)),j=d.val()||"Tab "+f+" content.";g.find(".ui-tabs-nav").append(i),g.append("<div id='"+h+"'><p>"+j+"</p></div>"),g.tabs("refresh"),f++,b("#tab_title").val(""),b("#tab_content").val("")}b("#tabs2").tabs();{var c=b("#tab_title"),d=b("#tab_content"),e="<li style='position:relative;'> <span class='air air-top-left delete-tab' style='top:7px; left:7px;'><button class='btn btn-xs font-xs btn-default hover-transparent'><i class='fa fa-times'></i></button></span></span><a href='#{href}'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #{label}</a></li>",f=2,g=b("#tabs2").tabs(),h=b("#addtab").dialog({autoOpen:!1,width:600,resizable:!1,modal:!0,buttons:[{html:"<i class='fa fa-times'></i>&nbsp; Cancel","class":"btn btn-default",click:function(){b(this).dialog("close")}},{html:"<i class='fa fa-plus'></i>&nbsp; Add","class":"btn btn-danger",click:function(){a(),b(this).dialog("close")}}]});h.find("form").submit(function(b){a(),h.dialog("close"),b.preventDefault()})}b("#add_tab").button().click(function(){h.dialog("open")}),b("#tabs2").on("click","span.delete-tab",function(){var a=b(this).closest("li").remove().attr("aria-controls");b("#"+a).remove(),g.tabs("refresh")})}function d(b){a(function(){c(b)})}return{restrict:"A",link:d}}])});