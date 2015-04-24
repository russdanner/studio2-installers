(function(){var h=tinymce.DOM,f=tinymce.dom.Event,g=tinymce.each,e=tinymce.explode;
tinymce.create("tinymce.plugins.TabFocusPlugin",{init:function(c,b){function d(l,k){if(k.keyCode===9){return f.cancel(k)
}}function a(r,v){var t,i,w,x,s;
function u(l){x=h.select(":input:enabled,*[tabindex]:not(iframe)");
function m(o){return o.nodeName==="BODY"||(o.type!="hidden"&&!(o.style.display=="none")&&!(o.style.visibility=="hidden")&&m(o.parentNode))
}function k(o){return o.attributes.tabIndex.specified||o.nodeName=="INPUT"||o.nodeName=="TEXTAREA"
}function j(){return tinymce.isIE6||tinymce.isIE7
}function n(o){return((!j()||k(o)))&&o.getAttribute("tabindex")!="-1"&&m(o)
}g(x,function(o,p){if(o.id==r.id){t=p;
return false
}});
if(l>0){for(i=t+1;
i<x.length;
i++){if(n(x[i])){return x[i]
}}}else{for(i=t-1;
i>=0;
i--){if(n(x[i])){return x[i]
}}}return null
}if(v.keyCode===9){s=e(r.getParam("tab_focus",r.getParam("tabfocus_elements",":prev,:next")));
if(s.length==1){s[1]=s[0];
s[0]=":prev"
}if(v.shiftKey){if(s[0]==":prev"){x=u(-1)
}else{x=h.get(s[0])
}}else{if(s[1]==":next"){x=u(1)
}else{x=h.get(s[1])
}}if(x){if(x.id&&(r=tinymce.get(x.id||x.name))){r.focus()
}else{window.setTimeout(function(){if(!tinymce.isWebKit){window.focus()
}x.focus()
},10)
}return f.cancel(v)
}}}c.onKeyUp.add(d);
if(tinymce.isGecko){c.onKeyPress.add(a);
c.onKeyDown.add(d)
}else{c.onKeyDown.add(a)
}},getInfo:function(){return{longname:"Tabfocus",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/tabfocus",version:tinymce.majorVersion+"."+tinymce.minorVersion}
}});
tinymce.PluginManager.add("tabfocus",tinymce.plugins.TabFocusPlugin)
})();