tinyMCEPopup.requireLangPack();
var SearchReplaceDialog={init:function(b){var c=this,d=document.forms[0],a=tinyMCEPopup.getWindowArg("mode");
c.switchMode(a);
d[a+"_panel_searchstring"].value=tinyMCEPopup.getWindowArg("search_string");
d[a+"_panel_searchstring"].focus();
mcTabs.onChange.add(function(e,f){c.switchMode(e.substring(0,e.indexOf("_")))
})
},switchMode:function(a){var c,b=this.lastMode;
if(b!=a){c=document.forms[0];
if(b){c[a+"_panel_searchstring"].value=c[b+"_panel_searchstring"].value;
c[a+"_panel_backwardsu"].checked=c[b+"_panel_backwardsu"].checked;
c[a+"_panel_backwardsd"].checked=c[b+"_panel_backwardsd"].checked;
c[a+"_panel_casesensitivebox"].checked=c[b+"_panel_casesensitivebox"].checked
}mcTabs.displayTab(a+"_tab",a+"_panel");
document.getElementById("replaceBtn").style.display=(a=="replace")?"inline":"none";
document.getElementById("replaceAllBtn").style.display=(a=="replace")?"inline":"none";
this.lastMode=a
}},searchNext:function(n){var h=tinyMCEPopup.editor,j=h.selection,c=j.getRng(),i,e=this.lastMode,t,l,p=0,o=h.getWin(),q=h.windowManager,k=0;
if(tinymce.isIE11&&!window.find){h.windowManager.alert("This feature is not available in IE 11+. Upgrade TinyMCE to 4.x to get this functionallity back.");
return
}i=document.forms[0];
t=i[e+"_panel_searchstring"].value;
l=i[e+"_panel_backwardsu"].checked;
ca=i[e+"_panel_casesensitivebox"].checked;
rs=i.replace_panel_replacestring.value;
if(tinymce.isIE){c=h.getDoc().selection.createRange()
}if(t==""){return
}function g(){c=j.getRng().cloneRange();
h.getDoc().execCommand("SelectAll",false,null);
j.setRng(c)
}function d(){h.selection.setContent(rs)
}if(ca){p=p|4
}switch(n){case"all":h.execCommand("SelectAll");
h.selection.collapse(true);
if(tinymce.isIE){h.focus();
c=h.getDoc().selection.createRange();
while(c.findText(t,l?-1:1,p)){c.scrollIntoView();
c.select();
d();
k=1;
if(l){c.moveEnd("character",-(rs.length))
}}tinyMCEPopup.storeSelection()
}else{while(o.find(t,ca,l,false,false,false,false)){d();
k=1
}}if(k){tinyMCEPopup.alert(h.getLang("searchreplace_dlg.allreplaced"))
}else{tinyMCEPopup.alert(h.getLang("searchreplace_dlg.notfound"))
}return;
case"current":if(!h.selection.isCollapsed()){d()
}break
}j.collapse(l);
c=j.getRng();
if(!t){return
}if(tinymce.isIE){h.focus();
c=h.getDoc().selection.createRange();
if(c.findText(t,l?-1:1,p)){c.scrollIntoView();
c.select()
}else{tinyMCEPopup.alert(h.getLang("searchreplace_dlg.notfound"))
}tinyMCEPopup.storeSelection()
}else{if(!o.find(t,ca,l,false,false,false,false)){tinyMCEPopup.alert(h.getLang("searchreplace_dlg.notfound"))
}else{g()
}}}};
tinyMCEPopup.onInit.add(SearchReplaceDialog.init,SearchReplaceDialog);