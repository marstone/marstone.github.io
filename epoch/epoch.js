function EpochToHuman(){var e=document.ef.TimeStamp.value*1;var t=e;var n="";var r=0;if(e>=1e14){n+="<b>Assuming that this timestamp is in microseconds (1/1,000,000 second):</b><br/>";t=Math.round(e/1e6);e=Math.round(e/1e3)}else if(e>=1e11){n+="<b>Assuming that this timestamp is in milliseconds:</b><br/>";t=Math.round(e/1e3)}else{if(e>1e10)r=1;e=e*1e3}var i=new Date(e);var s=i.toLocaleString();var o=s.search(/GMT/i);if(o>0){s=s.substring(0,o)}n+="<b>GMT</b>: "+i.toGMTString()+'<br/><b>Your time zone</b>: <span title="'+i.toLocaleString()+'">'+s+'</span> <a title="convert to other time zones" href="http://www.epochconverter.com/epoch/timezones.php?epoch='+t+'">'+localTimezone(i)+"</a>";if(r)n+="<br/>This conversion uses your timestamp in seconds. Remove the last 3 digits if you are trying to convert milliseconds.";n+='<hr class="lefthr">';document.getElementById("result1").innerHTML=n}function HumanToEpoch(){var e=new Date(Date.UTC(document.hf.yyyy.value,document.hf.mm.value-1,document.hf.dd.value,document.hf.hh.value,document.hf.mn.value,document.hf.ss.value));document.getElementById("result2").innerHTML="<b>Epoch timestamp</b>: "+e.getTime()/1e3+"<br>Human time:  "+e.toGMTString()}function HumanToEpochTZ(){var e=$("#hf select[name=tz]").val();var t;if(e==2){t=new Date(document.hf.yyyy.value,document.hf.mm.value-1,document.hf.dd.value,document.hf.hh.value,document.hf.mn.value,document.hf.ss.value)}else{t=new Date(Date.UTC(document.hf.yyyy.value,document.hf.mm.value-1,document.hf.dd.value,document.hf.hh.value,document.hf.mn.value,document.hf.ss.value))}var n="<b>Epoch timestamp</b>: "+t.getTime()/1e3;if(e==2){n+="<br/>Human time (your time zone): "+t.toLocaleString();n+="<br/>Human time (GMT):  "+t.toGMTString()}else{n+="<br/>Human time (GMT):  "+t.toGMTString();n+="<br/>Human time (your time zone): "+t.toLocaleString()}document.getElementById("result2").innerHTML=n}function HumanToEpoch2(){var e=document.fs.DateTime.value;e=e.replace(/  /g," ");e=e.replace("Mon, ","").replace("Tue, ","").replace("Wed, ","").replace("Thu, ","").replace("Fri, ","").replace("Sat, ","").replace("Sun, ","");e=e.replace(", "," ");var t=0;var n=0;var r="";var i="";var s="";var o=1970;var u=1;var a=1;var f=0;var l=0;var c=0;var h=1;if(!t){var p=e.split(" ");var d=p[0].split("-");if(d.length==1)d=p[0].split(".");if(d.length==1){h=0;d=p[0].split("/")}if(d.length==1){h=1;if(p.length>2){if(p[2].split(":").length==1){e=e.replace(p[0]+" "+p[1]+" "+p[2],p[0]+"-"+p[1]+"-"+p[2]);p=e.split(" ");d=p[0].split("-")}}}if(d.length==1){d=p;if(p.length>3)v=p[4]}if(d.length>2){if(d[0]>100){o=d[0];u=parseMonth(d[1]);a=d[2];s="YMD"}else{if(h){a=d[0];u=parseMonth(d[1]);o=d[2];s="DMY";if(!parseFloat(u)||!parseFloat(a)){a=d[1];u=parseMonth(d[0]);s="MDY"}}else{u=parseMonth(d[0]);a=d[1];o=d[2];s="MDY";if(!parseFloat(u)||!parseFloat(a)){a=d[0];u=parseMonth(d[1]);s="DMY"}}}t=1}if(t&&p[1]){var v=p[1].split(":");if(v.length>=2){f=v[0];l=v[1]}if(v.length>=3){c=v[2]}if(p[2]&&p[2].toLowerCase()=="pm"&&parseFloat(f)<12)f=parseFloat(f)+12;if(p[2]&&p[2].toLowerCase()=="am"&&parseFloat(f)==12)f=0}}if(!t){i=new Date(e);if(i.getFullYear()>1900){t=1;n=1}}if(t){if(!n){if(u!=parseFloat(u))u=parseMonth(u);if(o<30)o=2e3+parseFloat(o);if(o<200)o=1900+parseFloat(o);if(e.toUpperCase().indexOf("GMT")>0||e.toUpperCase().indexOf("UTC")>0){i=new Date(Date.UTC(o,u-1,a,f,l,c))}else{i=new Date(o,u-1,a,f,l,c)}}r+="<b>Epoch timestamp</b>: "+i.getTime()/1e3;r+="<br/>Human time (your time zone): "+i.toLocaleString();r+="<br/>Human time (GMT):  "+i.toGMTString()}if(!r||i.getTime()!=parseFloat(i.getTime()))r="Sorry, can't parse this date.";document.getElementById("result3").innerHTML=r}function TimeCounter(){var e=parseInt(document.tc.DateTime.value);var t=parseInt(e/86400);e=e-t*86400;var n=parseInt(e/3600);e=e-n*3600;var r=parseInt(e/60);e=e-r*60;var i="";if(t)i+=t+" days";if(n||t){if(i)i+=", ";i+=n+" hours"}if(i)i+=", ";i+=r+" minutes and "+e+" seconds.";document.getElementById("result4").innerHTML=i}function updateBe(e){if(e!=currentBeginEnd){if(e=="day"){document.br.mm.disabled=0;document.br.dd.disabled=0}if(e=="month"){document.br.mm.disabled=0;document.br.dd.disabled=1}if(e=="year"){document.br.mm.disabled=1;document.br.dd.disabled=1}currentBeginEnd=e;beginEnd()}}function beginEnd(){var e=$("#br select[name=tz]").val();var t="<table cellpadding=2 border=0><tr><td></td><td><b>Epoch</b></td><td>  <b>Human date</b></td></tr><tr><td>Start of "+currentBeginEnd+": </td><td>";var n=0;var r=1;var i=document.br.yyyy.value;if(currentBeginEnd!="year"){n=document.br.mm.value-1}if(currentBeginEnd=="day"){r=document.br.dd.value}var s;if(e==2){s=new Date(i,n,r,0,0,0)}else{s=new Date(Date.UTC(i,n,r,0,0,0))}if(currentBeginEnd=="year")i++;if(currentBeginEnd=="month")n++;if(currentBeginEnd=="day")r++;var o;if(e==2){o=new Date(i,n,r,0,0,-1)}else{o=new Date(Date.UTC(i,n,r,0,0,-1))}t+=s.getTime()/1e3+"</td><td>  ";if(e==2){t+=s.toLocaleString()}else{t+=s.toGMTString()}t+="</td></tr>";t+="<tr><td>End of "+currentBeginEnd+": </td><td>";t+=o.getTime()/1e3+"</td><td>  ";if(e==2){t+=o.toLocaleString()}else{t+=o.toGMTString()}t+="</td></tr>";document.getElementById("resultbe").innerHTML=t}function addbookmark(){if(document.all)window.external.AddFavorite(bookmarkurl,bookmarktitle)}function localTimezone(e){if(!e){e=new Date}var t=-e.getTimezoneOffset()/60;var n="";if(t>-1)n="+";return"GMT"+n+t}function now(){var e=new Date;document.getElementById("now").innerHTML=Math.round(e.getTime()/1e3);if(clockActive){timerID=setTimeout("now()",1e3)}}function startClock(){clockActive=1;now()}function stopClock(){clockActive=0;clearTimeout(timerID)}function homepageStart(){if($("#now").length!=0)now();if($("#ecclock").length!=0){var e=1;$("#ecclock").mouseover(function(){e=0;$(this).css("backgroundColor","#dadafc");$("#clocknotice").html("[stopped]")});$("#ecclock").mouseout(function(){e=1;$(this).css("backgroundColor","#eaeafa");$("#clocknotice").html("")});setInterval(function(){if(e){var t=Math.round((new Date).getTime()/1e3);$("#ecclock").html(t)}},1e3)}var t=new Date;$("#ef input:text[name=TimeStamp]").val(Math.round(t.getTime()/1e3));if(preferredtz==2){$("select[name=mm],input:text[name=mm]").val(t.getMonth()+1);$("input:text[name=yyyy]").val(t.getFullYear());$("input:text[name=dd]").val(t.getDate());$("input:text[name=hh]").val(t.getHours());$("input:text[name=mn]").val(t.getMinutes())}else{$("select[name=mm],input:text[name=mm]").val(t.getUTCMonth()+1);$("input:text[name=yyyy]").val(t.getUTCFullYear());$("input:text[name=dd]").val(t.getUTCDate());$("input:text[name=hh]").val(t.getUTCHours());$("input:text[name=mn]").val(t.getUTCMinutes())}$("input:text[name=ss]").val(t.getUTCSeconds());$("#fs input:text[name=DateTime]").val(t.toGMTString());$(document).keypress(function(e){if(!$(e.target).is("input#rcinput")){if(!(e.ctrlKey||e.altKey||e.metaKey)){if(String.fromCharCode(e.which).match(/[a-zA-Z]/))e.preventDefault();switch(e.which){case 101:case 69:kp("ecinput");jumpTo("top");break;case 99:case 67:emptyFields();break;case 104:case 72:kp("hcinput");jumpTo("top");break;case 114:case 82:kp("rcinput");jumpTo("fs");break;case 115:case 83:kp("scinput");jumpTo("tchead");break;case 121:case 89:$("input:radio[name=cw]:nth(0)").attr("checked",true);updateBe("year");jumpTo("brhead");kp("ycinput");break;case 109:case 77:$("input:radio[name=cw]:nth(1)").attr("checked",true);updateBe("month");jumpTo("brhead");if(dateformat=="3"){kp("ycinput")}else{kp("mcinput")}break;case 100:case 68:$("input:radio[name=cw]:nth(2)").attr("checked",true);updateBe("day");jumpTo("brhead");if(dateformat=="2"){kp("dcinput")}else if(dateformat=="3"){kp("ycinput")}else{kp("mcinput")}break}}}})}function timezoneStart(){$(document).keypress(function(e){if(!(e.ctrlKey||e.altKey||e.metaKey)){if(String.fromCharCode(e.which).match(/[a-zA-Z]/))e.preventDefault();switch(e.which){case 101:case 69:kp("ecinput");jumpTo("top");break}}})}function jumpTo(e){var t=$("#"+e).offset();window.scrollTo(t.left,t.top)}function emptyFields(){$("input:text").val("")}function kp(e){$("#"+e).focus();$("#"+e).select()}function parseMonth(e){switch(e.toLowerCase()){case"january":case"jan":case"enero":return 1;case"february":case"feb":case"febrero":return 2;case"march":case"mar":case"marzo":return 3;case"april":case"apr":case"abril":return 4;case"may":case"mayo":return 5;case"jun":case"june":case"junio":return 6;case"jul":case"july":case"julio":return 7;case"aug":case"august":case"agosto":return 8;case"sep":case"september":case"septiembre":case"setiembre":return 9;case"oct":case"october":case"octubre":return 10;case"nov":case"november":case"noviembre":return 11;case"dec":case"december":case"diciembre":return 12}return e}var currentBeginEnd="month";var clockActive=1;var timerID=0