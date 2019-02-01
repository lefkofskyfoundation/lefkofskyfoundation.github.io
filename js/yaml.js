var Yaml=function(){};Yaml.prototype={spec:"1.2",setSpecVersion:function(e){if("1.1"!=e&&"1.2"!=e)throw new InvalidArgumentException("Version "+e+" of the YAML specifications is not supported");this.spec=e},getSpecVersion:function(){return this.spec},loadFile:function(e,t){return void 0==t?(input=this.getFileContents(e),this.load(input)):void this.getFileContents(e,function(e){t((new Yaml).load(e))})},load:function(e){var t=new YamlParser,n=null;try{n=t.parse(e)}catch(i){if(void 0!=i.name&&"TypeError"==i.name.toString)throw i;throw"Syntax error: "+i.message}return n},dump:function(e,t){return void 0==t&&(t=2),yaml=new YamlDumper,yaml.dump(e,t)},getXHR:function(){if(window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)for(var e=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"],t=0;4>t;t++)try{return new ActiveXObject(e[t])}catch(n){}return null},getFileContents:function(e,t){var n=this.getXHR();return void 0==t?(n.open("GET",e,!1),n.send(null),200==n.status||0==n.status?n.responseText:null):(n.onreadystatechange=function(){4==n.readyState&&t(200==n.status||0==n.status?n.responseText:null)},n.open("GET",e,!0),void n.send(null))}};var YAML={encode:function(e){return(new Yaml).dump(e)},decode:function(e){return(new Yaml).load(e)},load:function(e,t){return(new Yaml).loadFile(e,t)}};"undefined"==typeof InvalidArgumentException&&(InvalidArgumentException=function(e){this.name="InvalidArgumentException",this.message=e});var YamlInline=function(){};YamlInline.prototype={i:null,load:function(e){var t=null;if(e=this.trim(e),0==e.length)return"";switch(e.charAt(0)){case"[":t=this.parseSequence(e);break;case"{":t=this.parseMapping(e);break;default:t=this.parseScalar(e)}return t},dump:function(e){var t,n,i=new Yaml;return"1.1"==i.getSpecVersion()?(t=["true","on","+","yes","y"],n=["false","off","-","no","n"]):(t=["true"],n=["false"]),"object"==typeof e&&null!=e?this.dumpObject(e):void 0==e||null==e?"null":"boolean"==typeof e?e?"true":"false":/^\d+/.test(e)?"string"==typeof e?"'"+e+"'":parseInt(e):this.isNumeric(e)?"string"==typeof e?"'"+e+"'":parseFloat(e):"number"==typeof e?1/0==e?".Inf":e==-1/0?"-.Inf":isNaN(e)?".NAN":e:-1!=(e+"").indexOf("\n")||-1!=(e+"").indexOf("\r")?'"'+e.split('"').join('\\"').split("\n").join("\\n").split("\r").join("\\r")+'"':/[\s\'"\:\{\}\[\],&\*\#\?]/.test(e)||/^[-?|<>=!%@`]/.test(e)?"'"+e.split("'").join("''")+"'":""==e?"''":this.getTimestampRegex().test(e)?"'"+e+"'":this.inArray(e.toLowerCase(),t)?"'"+e+"'":this.inArray(e.toLowerCase(),n)?"'"+e+"'":this.inArray(e.toLowerCase(),["null","~"])?"'"+e+"'":e},dumpObject:function(e){var t,n=this.getKeys(e),i=null,r=n.length;if(e instanceof Array){for(i=[],t=0;r>t;t++)i.push(this.dump(e[n[t]]));return"["+i.join(", ")+"]"}for(i=[],t=0;r>t;t++)i.push(this.dump(n[t])+": "+this.dump(e[n[t]]));return"{ "+i.join(", ")+" }"},parseScalar:function(e,t,n,i,r){void 0==t&&(t=null),void 0==n&&(n=['"',"'"]),void 0==i&&(i=0),void 0==r&&(r=!0);var s=null,a=null,u=null;if(this.inArray(e[i],n))s=this.parseQuotedScalar(e,i),i=this.i;else{if(t){if(!(u=new RegExp("^(.+?)("+t.join("|")+")").exec((e+"").substring(i))))throw new InvalidArgumentException("Malformed inline YAML string ("+e+").");s=u[1],i+=s.length}else s=(e+"").substring(i),i+=s.length,a=s.indexOf(" #"),-1!=a&&(s=s.substr(0,a).replace(/\s+$/g,""));s=r?this.evaluateScalar(s):s}return this.i=i,s},parseQuotedScalar:function(e,t){var n=null;if(!(n=new RegExp("^"+YamlInline.REGEX_QUOTED_STRING).exec((e+"").substring(t))))throw new InvalidArgumentException("Malformed inline YAML string ("+(e+"").substring(t)+").");var i=n[0].substr(1,n[0].length-2);return i='"'==(e+"").charAt(t)?i.split('\\"').join('"').split("\\n").join("\n").split("\\r").join("\r"):i.split("''").join("'"),t+=n[0].length,this.i=t,i},parseSequence:function(e,t){void 0==t&&(t=0);var n=[],i=e.length;for(t+=1;i>t;){switch(e.charAt(t)){case"[":n.push(this.parseSequence(e,t)),t=this.i;break;case"{":n.push(this.parseMapping(e,t)),t=this.i;break;case"]":return this.i=t,n;case",":case" ":break;default:isQuoted=this.inArray(e.charAt(t),['"',"'"]);var r=this.parseScalar(e,[",","]"],['"',"'"],t);if(t=this.i,!isQuoted&&-1!=(r+"").indexOf(": "))try{r=this.parseMapping("{"+r+"}")}catch(s){if(!(s instanceof InvalidArgumentException))throw s}n.push(r),t--}t++}throw new InvalidArgumentException("Malformed inline YAML string "+e)},parseMapping:function(e,t){void 0==t&&(t=0);var n={},i=e.length;t+=1;for(var r=!1,s=!1;i>t;){switch(s=!1,e.charAt(t)){case" ":case",":t++,s=!0;break;case"}":return this.i=t,n}if(!s){var a=this.parseScalar(e,[":"," "],['"',"'"],t,!1);for(t=this.i,r=!1;i>t;){switch(e.charAt(t)){case"[":n[a]=this.parseSequence(e,t),t=this.i,r=!0;break;case"{":n[a]=this.parseMapping(e,t),t=this.i,r=!0;break;case":":case" ":break;default:n[a]=this.parseScalar(e,[",","}"],['"',"'"],t),t=this.i,r=!0,t--}if(++t,r){s=!0;break}}}}throw new InvalidArgumentException("Malformed inline YAML string "+e)},evaluateScalar:function(e){e=this.trim(e);var t,n,i=new Yaml;"1.1"==i.getSpecVersion()?(t=["true","on","+","yes","y"],n=["false","off","-","no","n"]):(t=["true"],n=["false"]);var r=null,s=null;return"null"==e.toLowerCase()||""==e||"~"==e?null:-1!=(e+"").indexOf("!str")?(""+e).substring(5):-1!=(e+"").indexOf("! ")?parseInt(this.parseScalar((e+"").substring(2))):/^\d+/.test(e)?(r=e,s=parseInt(e),"0"==e.charAt(0)?this.octdec(e):""+r==""+s?s:r):this.inArray(e.toLowerCase(),t)?!0:this.inArray(e.toLowerCase(),n)?!1:this.isNumeric(e)?"0x"==(e+"").substr(0,2)?hexdec($scalar):floatval($scalar):".inf"==e.toLowerCase()?1/0:".nan"==e.toLowerCase()?0/0:"-.inf"==e.toLowerCase()?-1/0:/^(-|\+)?[0-9,]+(\.[0-9]+)?$/.test(e)?parseFloat(e.split(",").join("")):this.getTimestampRegex().test(e)?this.strtodate(e):""+e},getTimestampRegex:function(){return new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ 	]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:.([0-9]*))?(?:[ 	]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$","gi")},trim:function(e){return(e+"").replace(/^\s+/,"").replace(/\s+$/,"")},isNumeric:function(e){return e-0==e&&e.length>0&&""!=e.replace(/\s+/g,"")},inArray:function(e,t){var n,i=t.length;for(n=0;i>n;n++)if(e==t[n])return!0;return!1},getKeys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},octdec:function(e){return parseInt((e+"").replace(/[^0-7]/gi,""),8)},hexdec:function(e){return e=this.trim(e),"0x"==(e+"").substr(0,2)&&(e=(e+"").substring(2)),parseInt((e+"").replace(/[^a-f0-9]/gi,""),16)},strtodate:function(e){var t=new Date;return t.setTime(this.strtotime(e,(new Date).getTime())),t},strtotime:function(e,t){var n,i,r,s="",a="";if(s=e,s=s.replace(/\s{2,}|^\s|\s$/g," "),s=s.replace(/[\t\r\n]/g,""),"now"==s)return(new Date).getTime()/1e3;if(!isNaN(a=Date.parse(s)))return a/1e3;t=t?new Date(1e3*t):new Date,s=s.toLowerCase();var u={day:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},mon:{jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}},l=this.strtotime,o=function(e){var n=e[2]&&"ago"==e[2],i=(i="last"==e[0]?-1:1)*(n?-1:1);switch(e[0]){case"last":case"next":switch(e[1].substring(0,3)){case"yea":t.setFullYear(t.getFullYear()+i);break;case"mon":t.setMonth(t.getMonth()+i);break;case"wee":t.setDate(t.getDate()+7*i);break;case"day":t.setDate(t.getDate()+i);break;case"hou":t.setHours(t.getHours()+i);break;case"min":t.setMinutes(t.getMinutes()+i);break;case"sec":t.setSeconds(t.getSeconds()+i);break;default:var r;if("undefined"!=typeof(r=u.day[e[1].substring(0,3)])){var s=r-t.getDay();0==s?s=7*i:s>0?"last"==e[0]&&(s-=7):"next"==e[0]&&(s+=7),t.setDate(t.getDate()+s)}}break;default:if(!/\d+/.test(e[0]))return!1;switch(i*=parseInt(e[0],10),e[1].substring(0,3)){case"yea":t.setFullYear(t.getFullYear()+i);break;case"mon":t.setMonth(t.getMonth()+i);break;case"wee":t.setDate(t.getDate()+7*i);break;case"day":t.setDate(t.getDate()+i);break;case"hou":t.setHours(t.getHours()+i);break;case"min":t.setMinutes(t.getMinutes()+i);break;case"sec":t.setSeconds(t.getSeconds()+i)}}return!0};if(i=s.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/),null!=i){i[2]?i[3]||(i[2]+=":00"):i[2]="00:00:00",r=i[1].split(/-/g);for(n in u.mon)u.mon[n]==r[1]-1&&(r[1]=n);return r[0]=parseInt(r[0],10),r[0]=r[0]>=0&&r[0]<=69?"20"+(r[0]<10?"0"+r[0]:r[0]+""):r[0]>=70&&r[0]<=99?"19"+r[0]:r[0]+"",parseInt(l(r[2]+" "+r[1]+" "+r[0]+" "+i[2])+(i[4]?i[4]/1e3:""),10)}var h="([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";if(i=s.match(new RegExp(h,"gi")),null==i)return!1;for(n=0;n<i.length;n++)if(!o(i[n].split(" ")))return!1;return t.getTime()/1e3}},YamlInline.REGEX_QUOTED_STRING="(?:\"(?:[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|'(?:[^']*(?:''[^']*)*)')";var YamlParser=function(e){this.offset=this.isDefined(e)?e:0};YamlParser.prototype={offset:0,lines:[],currentLineNb:-1,currentLine:"",refs:{},parse:function(e){this.currentLineNb=-1,this.currentLine="",this.lines=this.cleanup(e).split("\n");for(var t=null;this.moveToNextLine();)if(!this.isCurrentLineEmpty()){if(/^\t+/.test(this.currentLine))throw new InvalidArgumentException("A YAML file cannot contain tabs as indentation at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")");var n=!1,i=!1,r=!1,s=null,a=null,u=null,l=null,o=null,h=null,c=null,f=null,p=null;if(s=/^\-((\s+)(.+?))?\s*$/.exec(this.currentLine)){if(this.isDefined(t)||(t=[]),!(t instanceof Array))throw new InvalidArgumentException("Non array entry at line "+(this.getRealCurrentLineNb()+1)+".");s={leadspaces:s[2],value:s[3]},this.isDefined(s.value)&&(a=/^&([^ ]+) *(.*)/.exec(s.value))&&(a={ref:a[1],value:a[2]},n=a.ref,s.value=a.value),this.isDefined(s.value)&&""!=s.value.split(" ").join("")&&"#"!=this.trim(s.value).charAt(0)?this.isDefined(s.leadspaces)&&" "==s.leadspaces&&(a=new RegExp("^("+YamlInline.REGEX_QUOTED_STRING+"|[^ '\"{].*?) *:(\\s+(.+?))?\\s*$").exec(s.value))?(a={key:a[1],value:a[3]},u=this.getRealCurrentLineNb(),l=new YamlParser(u),l.refs=this.refs,o=s.value,this.isNextLineIndented()||(o+="\n"+this.getNextEmbedBlock(this.getCurrentLineIndentation()+2)),t.push(l.parse(o)),this.refs=l.refs):t.push(this.parseValue(s.value)):(u=this.getRealCurrentLineNb()+1,l=new YamlParser(u),l.refs=this.refs,t.push(l.parse(this.getNextEmbedBlock())),this.refs=l.refs)}else{if(!(s=new RegExp("^("+YamlInline.REGEX_QUOTED_STRING+"|[^ '\"].*?) *:(\\s+(.+?))?\\s*$").exec(this.currentLine))){if(2==this.lines.length&&this.isEmpty(this.lines[1])){if(e=(new YamlInline).load(this.lines[0]),this.isObject(e)&&(first=e[0],"*"==(first+"").substr(0,1))){t=[],f=e.length;for(var d=0;f>d;d++)t.push(this.refs[e[d].substring(1)]);e=t}return e}throw new InvalidArgumentException('"'+this.currentLine+'" at line '+(this.getRealCurrentLineNb()+1))}if(this.isDefined(t)||(t={}),t instanceof Array)throw new InvalidArgumentException("Non mapped entry at line "+(this.getRealCurrentLineNb()+1)+".");if(s={key:s[1],value:s[3]},h=(new YamlInline).parseScalar(s.key),"<<"==h)if(this.isDefined(s.value)&&"*"==(s.value+"").charAt(0))i=s.value.substring(1);else{e=this.isDefined(s.value)&&""!=s.value?s.value:this.getNextEmbedBlock(),u=this.getRealCurrentLineNb()+1,l=new YamlParser(u),l.refs=this.refs,c=l.parse(e),this.refs=l.refs;var m=[];if(!this.isObject(c))throw new InvalidArgumentException("YAML merge keys used with a scalar value instead of an array at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")");if(this.isDefined(c[0])){p=this.reverseArray(c),f=p.length;for(var d=0;f>d;d++){{p[d]}if(!this.isObject(p[d]))throw new InvalidArgumentException("Merge items must be arrays at line "+(this.getRealCurrentLineNb()+1)+" ("+p[d]+").");m=this.mergeObject(p[d],m)}}else m=this.mergeObject(m,c);r=m}else this.isDefined(s.value)&&(a=/^&([^ ]+) *(.*)/.exec(s.value))&&(a={ref:a[1],value:a[2]},n=a.ref,s.value=a.value);r?t=r:this.isDefined(s.value)&&""!=s.value.split(" ").join("")&&"#"!=this.trim(s.value).charAt(0)?i?t=this.refs[i]:t[h]=this.parseValue(s.value):this.isNextLineIndented()?t[h]=null:(u=this.getRealCurrentLineNb()+1,l=new YamlParser(u),l.refs=this.refs,t[h]=l.parse(this.getNextEmbedBlock()),this.refs=l.refs)}if(n)if(t instanceof Array)this.refs[n]=t[t.length-1];else{var g=null;for(var v in t)t.hasOwnProperty(v)&&(g=v);this.refs[n]=t[v]}}return this.isEmpty(t)?null:t},getRealCurrentLineNb:function(){return this.currentLineNb+this.offset},getCurrentLineIndentation:function(){return this.currentLine.length-this.currentLine.replace(/^ +/g,"").length},getNextEmbedBlock:function(e){this.moveToNextLine();var t=null,n=null;if(this.isDefined(e))t=e;else if(t=this.getCurrentLineIndentation(),!this.isCurrentLineEmpty()&&0==t)throw new InvalidArgumentException("A Indentation problem at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")");for(var i=[this.currentLine.substring(t)];this.moveToNextLine();)if(this.isCurrentLineEmpty())this.isCurrentLineBlank()&&i.push(this.currentLine.substring(t));else{n=this.getCurrentLineIndentation();var r;if(r=/^( *)$/.exec(this.currentLine))i.push(r[1]);else{if(!(n>=t)){if(0==n){this.moveToPreviousLine();break}throw new InvalidArgumentException("B Indentation problem at line "+(this.getRealCurrentLineNb()+1)+" ("+this.currentLine+")")}i.push(this.currentLine.substring(t))}}return i.join("\n")},moveToNextLine:function(){return this.currentLineNb>=this.lines.length-1?!1:(this.currentLineNb++,this.currentLine=this.lines[this.currentLineNb],!0)},moveToPreviousLine:function(){this.currentLineNb--,this.currentLine=this.lines[this.currentLineNb]},parseValue:function(e){if("*"==(e+"").charAt(0)){if(e="#"==this.trim(e).charAt(0)?(e+"").substr(1,e.indexOf("#")-2):(e+"").substring(1),void 0==this.refs[e])throw new InvalidArgumentException('Reference "'+e+'" does not exist ('+this.currentLine+").");return this.refs[e]}var t=null;if(t=/^(\||>)(\+|\-|\d+|\+\d+|\-\d+|\d+\+|\d+\-)?( +#.*)?$/.exec(e)){t={separator:t[1],modifiers:t[2],comments:t[3]};var n=this.isDefined(t.modifiers)?t.modifiers:"";return this.parseFoldedScalar(t.separator,n.replace(/\d+/g,""),Math.abs(parseInt(n)))}return(new YamlInline).load(e)},parseFoldedScalar:function(e,t,n){void 0==t&&(t=""),void 0==n&&(n=0),e="|"==e?"\n":" ";for(var i="",r=null,s=this.moveToNextLine();s&&this.isCurrentLineBlank();)i+="\n",s=this.moveToNextLine();if(!s)return"";var a=null;if(!(a=new RegExp("^("+(n?this.strRepeat(" ",n):" +")+")(.*)$").exec(this.currentLine)))return this.moveToPreviousLine(),"";a={indent:a[1],text:a[2]};var u=a.indent,l=0;for(i+=a.text+e;this.currentLineNb+1<this.lines.length;)if(this.moveToNextLine(),a=new RegExp("^( {"+u.length+",})(.+)$").exec(this.currentLine))a={indent:a[1],text:a[2]}," "==e&&l!=a.indent&&(i=i.substr(0,i.length-1)+"\n"),l=a.indent,r=a.indent.length-u.length,i+=this.strRepeat(" ",r)+a.text+(0!=r?"\n":e);else{if(!(a=/^( *)$/.exec(this.currentLine))){this.moveToPreviousLine();break}i+=a[1].replace(new RegExp("^ {1,"+u.length+"}","g"),"",a[1])+"\n"}switch(" "==e&&(i=i.replace(/ (\n*)$/g,"\n$1")),t){case"":i=i.replace(/\n+$/g,"\n");break;case"+":break;case"-":i=i.replace(/\n+$/g,"")}return i},isNextLineIndented:function(){for(var e=this.getCurrentLineIndentation(),t=this.moveToNextLine();t&&this.isCurrentLineEmpty();)t=this.moveToNextLine();if(0==t)return!1;var n=!1;return this.getCurrentLineIndentation()<=e&&(n=!0),this.moveToPreviousLine(),n},isCurrentLineEmpty:function(){return this.isCurrentLineBlank()||this.isCurrentLineComment()},isCurrentLineBlank:function(){return""==this.currentLine.split(" ").join("")},isCurrentLineComment:function(){var e=this.currentLine.replace(/^ +/g,"");return"#"==e.charAt(0)},cleanup:function(e){e=e.split("\r\n").join("\n").split("\r").join("\n"),/\n$/.test(e)||(e+="\n");for(var t=0,n=/^\%YAML[: ][\d\.]+.*\n/;n.test(e);)e=e.replace(n,""),t++;return this.offset+=t,n=/^(#.*?\n)+/,n.test(e)&&(trimmedValue=e.replace(n,""),this.offset+=this.subStrCount(e,"\n")-this.subStrCount(trimmedValue,"\n"),e=trimmedValue),n=/^\-\-\-.*?\n/,n.test(e)&&(trimmedValue=e.replace(n,""),this.offset+=this.subStrCount(e,"\n")-this.subStrCount(trimmedValue,"\n"),e=trimmedValue,e=e.replace(/\.\.\.\s*$/g,"")),e},isObject:function(e){return"object"==typeof e&&this.isDefined(e)},isEmpty:function(e){return void 0==e||null==e||""==e||0==e||"0"==e||0==e},isDefined:function(e){return void 0!=e&&null!=e},reverseArray:function(e){for(var t=[],n=e.length,i=n-1;i>=0;i--)t.push(e[i]);return t},merge:function(e,t){var n={};for(i in e)/^\d+$/.test(i)?n.push(e):n[i]=e[i];for(i in t)/^\d+$/.test(i)?n.push(t):n[i]=t[i];return n},strRepeat:function(e,t){var n,i="";for(n=0;t>n;n++)i+=e;return e},subStrCount:function(e,t,n,i){var r=0;e=""+e,t=""+t,void 0!=n&&(e=e.substr(n)),void 0!=i&&(e=e.substr(0,i));for(var s=e.length,a=t.length,u=0;s>u;u++)t==e.substr(u,a)&&r++;return r},trim:function(e){return(e+"").replace(/^\s+/,"").replace(/\s+$/,"")}},YamlDumper=function(){},YamlDumper.prototype={dump:function(e,t,n){void 0==t&&(t=0),void 0==n&&(n=0);var i,r="",s=n?this.strRepeat(" ",n):"";if(0>=t||!this.isObject(e)||this.isEmpty(e))i=new YamlInline,r+=s+i.dump(e);else{var a,u=!this.arrayEquals(this.getKeys(e),this.range(0,e.length-1));for(var l in e)e.hasOwnProperty(l)&&(a=0>=t-1||!this.isObject(e[l])||this.isEmpty(e[l]),u&&(i=new YamlInline),r+=s+""+(u?i.dump(l)+":":"-")+(a?" ":"\n")+this.dump(e[l],t-1,a?0:n+2)+(a?"\n":""))}return r},strRepeat:function(e,t){var n,i="";for(n=0;t>n;n++)i+=e;return e},isObject:function(e){return"object"==typeof e&&this.isDefined(e)},isEmpty:function(e){return void 0==e||null==e||""==e||0==e||"0"==e||0==e},isDefined:function(e){return void 0!=e&&null!=e},getKeys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},range:function(e,t){if(e>t)return[];for(var n=[],i=e;t>=i;i++)n.push(i);return n},arrayEquals:function(e,t){if(e.length!=t.length)return!1;for(var n=e.length,i=0;n>i;i++)if(e[i]!=t[i])return!1;return!0}};