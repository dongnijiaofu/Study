function dopicadd() {
    var gsxxnz = $('#gsxxn').val();
    if (!gsxxnz) {
        alert("请填写属性名称！");
        return '';
    }
    var i;
    var str = "";
    var oldi = 0;
    oldi = parseInt(document.add.gccn.value);
    newRow = document.all.ctable.insertRow( - 1);
    var j = oldi + 1;
    newcell = newRow.insertCell(0);
    newcell.innerHTML = "<div align='center'>" + j + "<input name=gsx_id[] type=hidden value='" + j + "' ></div>";
    newcell = newRow.insertCell(1);
    newcell.innerHTML = "<div align=center><input name=gsx_n[] type=text size=7  ></div>";
    newcell = newRow.insertCell(2);
    newcell.innerHTML = "<div align=center><input name=gsx_s[] type=text size=20  id='ssn" + j + "'   onBlur='gnt(\"" + j + "\")' value='" + gsxxnz + "' ></div>";   
	newcell = newRow.insertCell(3);
    newcell.innerHTML = "<div align=center><input name=gsx_d[] type=hidden  id='ssdd" + j + "'  value='0'><input id='ssd" + j + "' onchange='gnd(\"" + j + "\")' type=checkbox  value='1'></div>";
    newcell = newRow.insertCell(4);
    newcell.innerHTML = "<div align=center><a href='javascript:;' onClick='delrow(\"" + j + "\");'>删除</a></div>";
    document.all.ctable.focus();
	$('#gccn').val(j);
	$('#gsxxn').val("");
    addflb(j, gsxxnz);
}

function dopicaddt(gj) {

    var i;
    var str = "";
    var oldi = 0;
    var gccnz = "gccn" + gj;
    var ctablez = "ctable" + gj;
    var gccnzz = $('#'+gccnz).val();
    var ctablet = document.getElementById(ctablez);
    oldi = parseInt(gccnzz);
    newRow = ctablet.insertRow( - 1);
    var j = oldi + 1;
    if (gj == '1') {
        newcell = newRow.insertCell(0);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_n[] type=text  size=25 value='' ></div>";
        newcell = newRow.insertCell(1);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_s[] type=text  size=10 value='' ></div>";
        newcell = newRow.insertCell(2);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_j[] type=text  size=10 value='' ></div>";
        newcell = newRow.insertCell(3);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_k[] type=text  size=10 value='' ></div>";
        newcell = newRow.insertCell(4);
        newcell.innerHTML = "<div align=center><a href='javascript:;' onClick='delrowt(\"" + j + "\");'>删除</a></div>";
    } else {
        newcell = newRow.insertCell(0);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_n[] type=text  size=25 value='' ></div>";
        newcell = newRow.insertCell(1);
        newcell.innerHTML = "<div align=center><input name=gsx_" + gj + "_j[] type=text  size=45 value='' ></div>";
        newcell = newRow.insertCell(2);
        newcell.innerHTML = "<div align=center><a href='javascript:;' onClick='delrowt(\"" + j + "\");'>删除</a></div>";
    }

    ctablet.focus();
	$('#'+gccnz).val(j);
}

function addflb(gj, gsxxnz) {
    var ddj = "gflb" + gj;
    $('#flb').append('<div id="' + ddj + '">  <input name="gccn' + gj + '" type="hidden" id="gccn' + gj + '" value="1">  <input name="button22" type="button" onClick="dopicaddt(\'' + gj + '\')"  id="butt' + gj + '"  value="增加' + gsxxnz + '">  <table width=650 border=0 align=center cellpadding=3 cellspacing=1 id="ctable' + gj + '">  	<tr bgcolor="#DBEAF5">           <td width="40%" bgcolor="#DBEAF5"><div align=center>名称 <span class="ss">*</span></div></td>  		<td width="50%" bgcolor="#DBEAF5"><div align=center>价格规则 <span class="ss">*</span></div></td>  	    <td width="10%" bgcolor="#DBEAF5"><div align=center>操作</div></td>      </tr>  	<tr>   	    <td width="40%" ><div align=center><input name=gsx_' + gj + '_n[] type=text  size=25 value="" ></div></td>  		<td width="50%" ><div align=center><input name=gsx_' + gj + '_j[] type=text  size=45 value="" ></div></td>  	    <td width="10%" ><div align=center></div></td>  	</tr>  	</table>      </div>');

}

function delflb(gj) {
    var ddj = "gflb" + gj;
    var box = document.getElementById(ddj);
    box.parentNode.removeChild(box);
}

function delrow(v) {
    var oElement = event.srcElement;
    while (oElement.tagName != "TR") {
        oElement = oElement.parentElement;
    }
    var oTBody = oElement.parentElement;
    oTBody.removeChild(oElement);
    delflb(v);
}

function delrowt(v) {
    var oElement = event.srcElement;
    while (oElement.tagName != "TR") {
        oElement = oElement.parentElement;
    }
    var oTBody = oElement.parentElement;
    oTBody.removeChild(oElement);
}

function gnt(v) {
    var ssnz = "ssn" + v;
    var buttz = "butt" + v;
    var ssnzz = $('#'+ssnz).val();
    //alert(ssnzz);
	$('#'+buttz).val("增加" + ssnzz);
}


function gnd(v) {
    var ssdz = "ssd" + v;
    var ssddz = "ssdd" + v;

	
	if($("#"+ssdz).is(':checked')){
		 $('#'+ssddz).val('1');
	}else{
	     $('#'+ssddz).val('0');
	}
}