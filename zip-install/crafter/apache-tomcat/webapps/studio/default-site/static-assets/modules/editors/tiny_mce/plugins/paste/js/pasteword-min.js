tinyMCEPopup.requireLangPack();
var PasteWordDialog={init:function(){var a=tinyMCEPopup.editor,c=document.getElementById("iframecontainer"),f,e,b,d="";
c.innerHTML='<iframe id="iframe" src="javascript:\'\';" frameBorder="0" style="border: 1px solid gray"></iframe>';
f=document.getElementById("iframe");
e=f.contentWindow.document;
b=[a.baseURI.toAbsolute("themes/"+a.settings.theme+"/skins/"+a.settings.skin+"/content.css")];
b=b.concat(tinymce.explode(a.settings.content_css)||[]);
tinymce.each(b,function(g){d+='<link href="'+a.documentBaseURI.toAbsolute(""+g)+'" rel="stylesheet" type="text/css" />'
});
e.open();
e.write("<html><head>"+d+'</head><body class="mceContentBody" spellcheck="false"></body></html>');
e.close();
e.designMode="on";
this.resize();
window.setTimeout(function(){f.contentWindow.focus()
},10)
},insert:function(){var a=document.getElementById("iframe").contentWindow.document.body.innerHTML;
tinyMCEPopup.editor.execCommand("mceInsertClipboardContent",false,{content:a,wordContent:true});
tinyMCEPopup.close()
},resize:function(){var a=tinyMCEPopup.dom.getViewPort(window),b;
b=document.getElementById("iframe");
if(b){b.style.width=(a.w-20)+"px";
b.style.height=(a.h-90)+"px"
}}};
tinyMCEPopup.onInit.add(PasteWordDialog.init,PasteWordDialog);