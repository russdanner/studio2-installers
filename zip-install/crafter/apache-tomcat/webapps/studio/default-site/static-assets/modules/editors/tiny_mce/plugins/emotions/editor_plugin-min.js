(function(b){b.create("tinymce.plugins.EmotionsPlugin",{init:function(a,d){a.addCommand("mceEmotion",function(){a.windowManager.open({file:d+"/emotions.htm",width:250+parseInt(a.getLang("emotions.delta_width",0)),height:160+parseInt(a.getLang("emotions.delta_height",0)),inline:1},{plugin_url:d})
});
a.addButton("emotions",{title:"emotions.emotions_desc",cmd:"mceEmotion"})
},getInfo:function(){return{longname:"Emotions",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/emotions",version:b.majorVersion+"."+b.minorVersion}
}});
b.PluginManager.add("emotions",b.plugins.EmotionsPlugin)
})(tinymce);