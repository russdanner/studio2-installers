var ImageDialog={preInit:function(){var a;
tinyMCEPopup.requireLangPack();
if(a=tinyMCEPopup.getParam("external_image_list_url")){document.write('<script language="javascript" type="text/javascript" src="'+tinyMCEPopup.editor.documentBaseURI.toAbsolute(a)+'"><\/script>')
}},init:function(){var b=document.forms[0],a=tinyMCEPopup.editor;
document.getElementById("srcbrowsercontainer").innerHTML=getBrowserHTML("srcbrowser","src","image","theme_advanced_image");
if(isVisible("srcbrowser")){document.getElementById("src").style.width="180px"
}e=a.selection.getNode();
this.fillFileList("image_list",tinyMCEPopup.getParam("external_image_list","tinyMCEImageList"));
if(e.nodeName=="IMG"){b.src.value=a.dom.getAttrib(e,"src");
b.alt.value=a.dom.getAttrib(e,"alt");
b.border.value=this.getAttrib(e,"border");
b.vspace.value=this.getAttrib(e,"vspace");
b.hspace.value=this.getAttrib(e,"hspace");
b.width.value=a.dom.getAttrib(e,"width");
b.height.value=a.dom.getAttrib(e,"height");
b.insert.value=a.getLang("update");
this.styleVal=a.dom.getAttrib(e,"style");
selectByValue(b,"image_list",b.src.value);
selectByValue(b,"align",this.getAttrib(e,"align"));
this.updateStyle()
}},fillFileList:function(g,c){var f=tinyMCEPopup.dom,a=f.get(g),d,b;
c=typeof(c)==="function"?c():window[c];
if(c&&c.length>0){a.options[a.options.length]=new Option("","");
tinymce.each(c,function(h){a.options[a.options.length]=new Option(h[0],h[1])
})
}else{f.remove(f.getParent(g,"tr"))
}},update:function(){var g=document.forms[0],a=g.elements,b=tinyMCEPopup.editor,c={},d;
tinyMCEPopup.restoreSelection();
if(g.src.value===""){if(b.selection.getNode().nodeName=="IMG"){b.dom.remove(b.selection.getNode());
b.execCommand("mceRepaint")
}tinyMCEPopup.close();
return
}if(!b.settings.inline_styles){c=tinymce.extend(c,{vspace:a.vspace.value,hspace:a.hspace.value,border:a.border.value,align:getSelectValue(g,"align")})
}else{c.style=this.styleVal
}tinymce.extend(c,{src:g.src.value.replace(/ /g,"%20"),alt:g.alt.value,width:g.width.value,height:g.height.value});
d=b.selection.getNode();
if(d&&d.nodeName=="IMG"){b.dom.setAttribs(d,c);
tinyMCEPopup.editor.execCommand("mceRepaint");
tinyMCEPopup.editor.focus()
}else{tinymce.each(c,function(h,f){if(h===""){delete c[f]
}});
b.execCommand("mceInsertContent",false,tinyMCEPopup.editor.dom.createHTML("img",c),{skip_undo:1});
b.undoManager.add()
}tinyMCEPopup.close()
},updateStyle:function(){var d=tinyMCEPopup.dom,b={},a,c=document.forms[0];
if(tinyMCEPopup.editor.settings.inline_styles){tinymce.each(tinyMCEPopup.dom.parseStyle(this.styleVal),function(g,f){b[f]=g
});
a=getSelectValue(c,"align");
if(a){if(a=="left"||a=="right"){b["float"]=a;
delete b["vertical-align"]
}else{b["vertical-align"]=a;
delete b["float"]
}}else{delete b["float"];
delete b["vertical-align"]
}a=c.border.value;
if(a||a=="0"){if(a=="0"){b.border="0"
}else{b.border=a+"px solid black"
}}else{delete b.border
}a=c.hspace.value;
if(a){delete b.margin;
b["margin-left"]=a+"px";
b["margin-right"]=a+"px"
}else{delete b["margin-left"];
delete b["margin-right"]
}a=c.vspace.value;
if(a){delete b.margin;
b["margin-top"]=a+"px";
b["margin-bottom"]=a+"px"
}else{delete b["margin-top"];
delete b["margin-bottom"]
}b=tinyMCEPopup.dom.parseStyle(d.serializeStyle(b),"img");
this.styleVal=d.serializeStyle(b,"img")
}},getAttrib:function(d,a){var c=tinyMCEPopup.editor,g=c.dom,b,f;
if(c.settings.inline_styles){switch(a){case"align":if(b=g.getStyle(d,"float")){return b
}if(b=g.getStyle(d,"vertical-align")){return b
}break;
case"hspace":b=g.getStyle(d,"margin-left");
f=g.getStyle(d,"margin-right");
if(b&&b==f){return parseInt(b.replace(/[^0-9]/g,""))
}break;
case"vspace":b=g.getStyle(d,"margin-top");
f=g.getStyle(d,"margin-bottom");
if(b&&b==f){return parseInt(b.replace(/[^0-9]/g,""))
}break;
case"border":b=0;
tinymce.each(["top","right","bottom","left"],function(h){h=g.getStyle(d,"border-"+h+"-width");
if(!h||(h!=b&&b!==0)){b=0;
return false
}if(h){b=h
}});
if(b){return parseInt(b.replace(/[^0-9]/g,""))
}break
}}if(b=g.getAttrib(d,a)){return b
}return""
},resetImageData:function(){var a=document.forms[0];
a.width.value=a.height.value=""
},updateImageData:function(){var b=document.forms[0],a=ImageDialog;
if(b.width.value==""){b.width.value=a.preloadImg.width
}if(b.height.value==""){b.height.value=a.preloadImg.height
}},getImageData:function(){var a=document.forms[0];
this.preloadImg=new Image();
this.preloadImg.onload=this.updateImageData;
this.preloadImg.onerror=this.resetImageData;
this.preloadImg.src=tinyMCEPopup.editor.documentBaseURI.toAbsolute(a.src.value)
}};
ImageDialog.preInit();
tinyMCEPopup.onInit.add(ImageDialog.init,ImageDialog);