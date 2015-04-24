tinyMCEPopup.requireLangPack();
function init(){tinyMCEPopup.resizeToInnerSize();
document.getElementById("backgroundimagebrowsercontainer").innerHTML=getBrowserHTML("backgroundimagebrowser","backgroundimage","image","table");
document.getElementById("bgcolor_pickcontainer").innerHTML=getColorPickerHTML("bgcolor_pick","bgcolor");
var f=tinyMCEPopup.editor;
var e=f.dom;
var k=e.getParent(f.selection.getStart(),"tr");
var g=document.forms[0];
var m=e.parseStyle(e.getAttrib(k,"style"));
var c=k.parentNode.nodeName.toLowerCase();
var h=e.getAttrib(k,"align");
var j=e.getAttrib(k,"valign");
var l=trimSize(getStyle(k,"height","height"));
var i=e.getAttrib(k,"class");
var o=convertRGBToHex(getStyle(k,"bgcolor","backgroundColor"));
var n=getStyle(k,"background","backgroundImage").replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)","gi"),"$1");
var a=e.getAttrib(k,"id");
var b=e.getAttrib(k,"lang");
var d=e.getAttrib(k,"dir");
selectByValue(g,"rowtype",c);
setActionforRowType(g,c);
if(e.select("td.mceSelected,th.mceSelected",k).length==0){addClassesToList("class","table_row_styles");
TinyMCE_EditableSelects.init();
g.bgcolor.value=o;
g.backgroundimage.value=n;
g.height.value=l;
g.id.value=a;
g.lang.value=b;
g.style.value=e.serializeStyle(m);
selectByValue(g,"align",h);
selectByValue(g,"valign",j);
selectByValue(g,"class",i,true,true);
selectByValue(g,"dir",d);
if(isVisible("backgroundimagebrowser")){document.getElementById("backgroundimage").style.width="180px"
}updateColor("bgcolor_pick","bgcolor")
}else{tinyMCEPopup.dom.hide("action")
}}function updateAction(){var f=tinyMCEPopup.editor,h=f.dom,g,b,a=document.forms[0];
var e=getSelectValue(a,"action");
if(!AutoValidator.validate(a)){tinyMCEPopup.alert(AutoValidator.getErrorMessages(a).join(". ")+".");
return false
}tinyMCEPopup.restoreSelection();
g=h.getParent(f.selection.getStart(),"tr");
b=h.getParent(f.selection.getStart(),"table");
if(h.select("td.mceSelected,th.mceSelected",g).length>0){tinymce.each(b.rows,function(k){var j;
for(j=0;
j<k.cells.length;
j++){if(h.hasClass(k.cells[j],"mceSelected")){updateRow(k,true);
return
}}});
f.addVisual();
f.nodeChanged();
f.execCommand("mceEndUndoLevel");
tinyMCEPopup.close();
return
}switch(e){case"row":updateRow(g);
break;
case"all":var d=b.getElementsByTagName("tr");
for(var c=0;
c<d.length;
c++){updateRow(d[c],true)
}break;
case"odd":case"even":var d=b.getElementsByTagName("tr");
for(var c=0;
c<d.length;
c++){if((c%2==0&&e=="odd")||(c%2!=0&&e=="even")){updateRow(d[c],true,true)
}}break
}f.addVisual();
f.nodeChanged();
f.execCommand("mceEndUndoLevel");
tinyMCEPopup.close()
}function updateRow(h,j,k){var f=tinyMCEPopup.editor;
var g=document.forms[0];
var d=f.dom;
var a=h.parentNode.nodeName.toLowerCase();
var b=getSelectValue(g,"rowtype");
var m=f.getDoc();
if(!j){d.setAttrib(h,"id",g.id.value)
}d.setAttrib(h,"align",getSelectValue(g,"align"));
d.setAttrib(h,"vAlign",getSelectValue(g,"valign"));
d.setAttrib(h,"lang",g.lang.value);
d.setAttrib(h,"dir",getSelectValue(g,"dir"));
d.setAttrib(h,"style",d.serializeStyle(d.parseStyle(g.style.value)));
d.setAttrib(h,"class",getSelectValue(g,"class"));
d.setAttrib(h,"background","");
d.setAttrib(h,"bgColor","");
d.setAttrib(h,"height","");
h.style.height=getCSSSize(g.height.value);
h.style.backgroundColor=g.bgcolor.value;
if(g.backgroundimage.value!=""){h.style.backgroundImage="url('"+g.backgroundimage.value+"')"
}else{h.style.backgroundImage=""
}if(a!=b&&!k){var o=h.cloneNode(1);
var c=d.getParent(h,"table");
var l=b;
var n=null;
for(var e=0;
e<c.childNodes.length;
e++){if(c.childNodes[e].nodeName.toLowerCase()==l){n=c.childNodes[e]
}}if(n==null){n=m.createElement(l);
if(c.firstChild.nodeName=="CAPTION"){f.dom.insertAfter(n,c.firstChild)
}else{c.insertBefore(n,c.firstChild)
}}n.appendChild(o);
h.parentNode.removeChild(h);
h=o
}d.setAttrib(h,"style",d.serializeStyle(d.parseStyle(h.style.cssText)))
}function changedBackgroundImage(){var a=document.forms[0],c=tinyMCEPopup.editor.dom;
var b=c.parseStyle(a.style.value);
b["background-image"]="url('"+a.backgroundimage.value+"')";
a.style.value=c.serializeStyle(b)
}function changedStyle(){var a=document.forms[0],c=tinyMCEPopup.editor.dom;
var b=c.parseStyle(a.style.value);
if(b["background-image"]){a.backgroundimage.value=b["background-image"].replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1")
}else{a.backgroundimage.value=""
}if(b.height){a.height.value=trimSize(b.height)
}if(b["background-color"]){a.bgcolor.value=b["background-color"];
updateColor("bgcolor_pick","bgcolor")
}}function changedSize(){var b=document.forms[0],d=tinyMCEPopup.editor.dom;
var c=d.parseStyle(b.style.value);
var a=b.height.value;
if(a!=""){c.height=getCSSSize(a)
}else{c.height=""
}b.style.value=d.serializeStyle(c)
}function changedColor(){var a=document.forms[0],c=tinyMCEPopup.editor.dom;
var b=c.parseStyle(a.style.value);
b["background-color"]=a.bgcolor.value;
a.style.value=c.serializeStyle(b)
}function changedRowType(){var a=document.forms[0];
var b=getSelectValue(a,"rowtype");
setActionforRowType(a,b)
}function setActionforRowType(a,b){if(b==="tbody"){a.action.disabled=false
}else{selectByValue(a,"action","row");
a.action.disabled=true
}}tinyMCEPopup.onInit.add(init);