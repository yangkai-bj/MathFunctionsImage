
var __CONFIGS__ = {
    STORAGE: {SCRIPTS: "__WEB_FUNCTIONS_STRING__"},
};

 var __DATASET__ = {
     functions: [],
     xRange:{
         min: {name: "最小x值", value: -100},
         max: {name: "最大x值", value: 100},
         interval:{name: "x的间隔", value: 0.5},
     },
     time: "",
     result: [],
     default: 0,
     pages: {size: 200, total: 0, default: 1},
     echarts: {
         type: "FunctionLine",
         theme: "",
     }
 };

 var __FUNCTION_EDITOR__ = {
     title: null,
     codeMirror: null,
     themes: {
         Default: {name: "mdn-like", href: "codemirror/theme/mdn-like.css"},
         Cobalt: {name: "cobalt", href: "codemirror/theme/cobalt.css"},
         Blackboard: {name: "blackboard", href: "codemirror/theme/blackboard.css"},
         Darcula: {name: "darcula", href: "codemirror/theme/darcula.css"},
         LightDuotone: {name: "duotone-light", href: "codemirror/theme/duotone-light.css"},
         Rubyblue: {name: "rubyblue", href: "codemirror/theme/rubyblue.css"},
         DarkSolarized: {name: "solarized dark", href: "codemirror/theme/solarized.css"},
         LightSolarized: {name: "solarized light", href: "codemirror/theme/solarized.css"},
         Zenburn: {name: "zenburn", href: "codemirror/theme/zenburn.css"}
     },
     fontSize: {
         options: {
             "100%": "100%",
             "110%": "110%",
             "120%": "120%",
             "130%": "130%",
             "140%": "140%",
             "150%": "150%"
         },
         default: 1
     },
     options: {
         mode: "text/javascript",
         theme: "mdn-like",
         indentWithTabs: true,
         smartIndent: true,
         lineNumbers: true,
         matchBrackets: true,
         autofocus: true,
         gutters: ["CodeMirror-linenumbers", "breakpoints"],
         extraKeys: {
             "F10": "autocomplete",
             "F11": function (cm) {
                 cm.setOption("fullScreen", !cm.getOption("fullScreen"));
             },
             "Esc": function (cm) {
                 if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
             },
             "Shift-F": "findPersistent"
         },
         hintOptions: {tables: {}}
     },
     init: function (textarea) {
         textarea.placeholder= "\n" +
        "F10 自动完成\n" +
        "F11 全屏编辑切换;Esc 取消全屏\n"  +
        "Shift-F 查找\n" +
        "Shift-Ctrl-F 查找替换\n" +
        "Shift-Ctrl-R 查找全部并替换\n";
         this.codeMirror = CodeMirror.fromTextArea(textarea, this.options);
         var colors = ["#fcc", "#ccf", "#fcf", "#aff", "#cfc", "#f5f577"];
         var rulers = [];
         for (var i = 1; i <= 6; i++) {
             rulers.push({color: colors[i], column: i * 40, lineStyle: "dotted"});
             //solid//dashed//dash-dot//dotted
         }
         this.codeMirror.setOption("rulers", rulers);
         this.codeMirror.on("gutterClick", function (cm, n) {
             var info = cm.lineInfo(n);
             cm.setGutterMarker(n, "breakpoints", info.gutterMarkers ? null : marker());
         });
         function marker() {
             var marker = document.createElement("div");
             marker.style.color = "#822";
             marker.innerHTML = "●";
             return marker;
         }
     }
 };

 function $(id){
     try{
         return document.getElementById(id);
     } catch (e) {
         return null;
     }
 }

 function messageEncode(str){
    var encodedStr = "" ;
    if (str=="")
        return encodedStr ;
    else {
        for (var i = 0 ; i < str.length ; i ++){
            encodedStr += "&#" + str.substring(i, i + 1).charCodeAt().toString(10) + ";" ;
        }
    }
    return encodedStr;
}

function messageDecode(str){
    var decodeStr = "";
    if (str == "")
        return decodeStr ;
　　var toParse = str.split(";");
　　for (var i=0;i<toParse.length;i++) {
　　　　var s = toParse[i];
　　　　decodeStr += String.fromCharCode(parseInt(s.substring(2)))
　　}
　　return decodeStr;
}

Date.prototype.Format = function(fmt) {
    //#######################################################################
    // 来自网络算法,用于日期格式定义，不支持yyyyMMdd格式
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    //#######################################################################
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                     //日
        "h+": this.getHours(),                    //小时
        "m+": this.getMinutes(),                  //分
        "s+": this.getSeconds(),                  //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),  //季度
        "S": this.getMilliseconds()              //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


function getAbsolutePosition(obj)
//获取控件绝对位置
{
    var position = {"left":0,"top":0,"width":0,"height":0};
    var w=0,h=0;
    position.width = obj.offsetWidth;
    position.height = obj.offsetHeight;
    while(obj.offsetParent)
    {
        w += obj.offsetLeft;
        h += obj.offsetTop;
        obj = obj.offsetParent;
    }
    position.left = w;
    position.top = h;
    return position;
}

function isNumber(str) {
    //用于判断字符串是否是符合数字
    var reg = new RegExp(/^([-+])?\d+(\.[0-9]{1,9})?$/)
    //var result = reg.exec(str);
    var result = str.match(reg,"g");
    var re = false;
    if (result != null) {
        for (var i = 0; i < result.length; i++) {
            if (result[i] == str) {
                re = true;
                break;
            }
        }
    }
    return re;
}

function  isIDnumber(str) {
    //用于简单判断18位身份证号码
    //校验年份范围1900-2099
    var reg = RegExp(/^\d{6}((19|20)\d{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)\d{3}[0-9xX])/,"g");
    var result = str.match(reg,"g");
    var re = false;
    if (result != null) {
        for (var i = 0; i < result.length; i++) {
            if (result[i] == str) {
                re = true;
                break;
            }
        }
    }
    return re;
}

function isDateTime(str) {
    try {
        var d = new Date(str);
        if (d.toString() == "Invalid Date")
            return false;
        else
            return true;
    } catch (e) {
        return false;
    }
}

function getDataType(str){
     //判断字符是否符合数字规则
     try {
         str = str.trim();
         if (isDateTime(str) && str.length == 10)
             return "date";
         else if (isDateTime(str) && str.indexOf(":") != -1)
             return "datetime";
         else if (isIDnumber(str))
             return "nvarchar";
         else if (isNumber(str) && isNaN(Number.parseInt(str)) == false && str.indexOf(".") == -1)
             return "int";
         else if (isNumber(str) && isNaN(Number.parseFloat(str)) == false)
             return "float";
         else
             return "nvarchar"
     }
     catch (e){
         return "nvarchar"
     }
}

function getTypeOf(d) {
    //判断数据类型,可能是非字符类型
    //由于数据库在本地,数据没有经过通讯字符转换,数据全部为元类型.
    //通过元类型判断
     var type = typeof(d);
     if (type == "string") {
         if (isDateTime(d)) {
             if (d.length == 10)
                 type = "date";
             else if (d.length > 10)
                 type = "datetime";
             else
                 type = "string";
         }
     }
     return type;
}



function checkStorage(){
    try {
        if (typeof window.localStorage !== "undefined")
            return true;
        else
            return false;
    }catch (e) {
        return false;
    }
}


function getNow() {
    var date = new Date();
	var time = date.toLocaleString("zh", { hour12: false });
	time += " " + date.getMilliseconds();
	return time;
}

function orderDataset(colid){
    // 对数据排序
    // 中文比较大小使用localeCompare
    var index = __DATASET__["default"];
    var columns = __DATASET__["result"][index].columns;
    var data = __DATASET__["result"][index].data;
    switch (columns[colid].order) {
        case "":
            columns[colid].order = "asc";
            break;
        case "asc":
            columns[colid].order = "desc";
            break;
        case "desc":
            columns[colid].order = "asc";
            break;
    }
    __DATASET__["result"][index].columns = columns;

    var tmp = [];
    for (var i=0; i<data.length; i++) {
        var row = data[i];
        for (var x = 0; x < tmp.length; x++) {
            switch (columns[colid].order) {
                case "asc":
                    if (row[columns[colid].name].type == "number") {
                        if (row[columns[colid].name].value < tmp[x][columns[colid].name].value) {
                            var t = tmp[x];
                            tmp[x] = row;
                            row = t;
                        }
                    } else {
                        if (row[columns[colid].name].value.toString().localeCompare(tmp[x][columns[colid].name].value.toString()) < 0) {
                            var t = tmp[x];
                            tmp[x] = row;
                            row = t;
                        }
                    }
                    break;
                case "desc":
                    if (row[columns[colid].name].type == "number") {
                        if (row[columns[colid].name].value > tmp[x][columns[colid].name].value) {
                            var t = tmp[x];
                            tmp[x] = row;
                            row = t;
                        }
                    } else {
                        if (row[columns[colid].name].value.toString().localeCompare(tmp[x][columns[colid].name].value.toString()) > 0) {
                            var t = tmp[x];
                            tmp[x] = row;
                            row = t;
                        }
                    }
                    break;
            }
        }
        tmp[tmp.length] = row;
    }
    __DATASET__["result"][index].data = tmp;
    viewDataset(index);
}

function datasetTranspose(index) {
    try {
        var columns = __DATASET__["result"][index].columns;
        var data = __DATASET__["result"][index].data;
        var dataset = {columns: [], data: []};
        var col = {
            id: 0,
            name: columns[0].name,
            order: "",
            type: "string",
            style: columns[0].style
        };
        dataset.columns.push(col);
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            col = {
                id: i + 1,
                name: row[columns[0].name].value,
                order: "",
                type: row[columns[0].name].type,
                style: row[columns[0].name].style
            };
            dataset.columns.push(col);
        }

        for (var c = 1; c < columns.length; c++) {
            var nr = {};
            nr[columns[0].name] = {
                rowid: c - 1,
                colid: 0,
                value: columns[c].name,
                type: "string",
                style: columns[c].style
            };
            for (var i = 0; i < data.length; i++) {
                var row = data[i];
                nr[row[columns[0].name].value] = {
                    rowid: c - 1,
                    colid: i + 1,
                    value: row[columns[c].name].value,
                    type: row[columns[c].name].type,
                    style: row[columns[c].name].style
                };
            }
            dataset.data.push(nr);
        }
        __DATASET__["result"][index] = dataset;
    }catch (e) {
        console.log(e);
    }
}

function viewDataset(index){
    var container = $("tableContainer");
    container.innerText = "";
    var columns = __DATASET__["result"][index].columns;
    var data = __DATASET__["result"][index].data;
    var table = document.createElement("table");
    table.className = "table";
    table.id = "table";
    var tr = document.createElement("tr");
    tr.type = "tr";
    table.appendChild(tr);
    //调整宽度
    var _tomove_;
    for (var c =0; c < columns.length; c++) {
        var th = document.createElement("th");
        th.type = "th";
        th.innerText = columns[c].name;
        th.style.textAlign = columns[c].style.textAlign;
        var order = document.createElement("span");
        order.className = "order";
        order.id = c;
        switch (columns[c].order) {
            case "":
                order.innerText = "●";
                break;
            case "asc":
                order.innerText = "▲";
                break;
            case "desc":
                order.innerText = "▼";
                break;
        }
        order.onclick = function(){
            orderDataset(this.id);
        };
        th.appendChild(order);
        tr.appendChild(th);
        th.onmousedown = function () {
            _tomove_ = this;
            if (event.offsetX > _tomove_.offsetWidth - 5) {
                _tomove_.mouseDown = true;
                _tomove_.oldX = event.x;
                _tomove_.oldWidth = _tomove_.offsetWidth;
            }
        };

        th.onmouseup = function () {
            if (_tomove_ == undefined) _tomove_ = this;
            _tomove_.mouseDown = false;
            _tomove_.style.cursor = 'default';
        };

        th.onmousemove = function () {
            if (event.offsetX > this.offsetWidth - 5)
                this.style.cursor = 'col-resize';
            else
                this.style.cursor = 'default';
            if (_tomove_ == undefined) _tomove_ = this;
            if (_tomove_.mouseDown != null && _tomove_.mouseDown == true) {
                _tomove_.style.cursor = 'default';
                if ((_tomove_.oldWidth + (event.x - _tomove_.oldX)) > 0)
                    _tomove_.width = _tomove_.oldWidth + (event.x - _tomove_.oldX);
                _tomove_.style.width = _tomove_.width;
                _tomove_.style.cursor = 'col-resize';
                for (var j = 0; j < $("table").rows.length; j++) {
                    $("table").rows[j].cells[_tomove_.cellIndex].width = _tomove_.width;
                }
                $("table").offsetWidth += (event.x - _tomove_.oldX);
            }
        };
    }

    for (var i = 0; i < data.length; i++) {
        if (i >= (__DATASET__.pages.default - 1) * __DATASET__.pages.size && i < __DATASET__.pages.default * __DATASET__.pages.size) {
            var tr = document.createElement("tr");
            tr.type = "tr";
            tr.id = i;
            if (i % 2 > 0) {
                tr.className = "alt-line";
                //单数行
            }
            table.appendChild(tr);
            var row = data[i];
            for (var c = 0; c < columns.length; c++) {
                var item = row[columns[c].name];
                var td = document.createElement("td");
                td.type = "td";
                td.id = item.rowid + "," + item.colid;
                td.setAttribute("name", columns[c].name);
                td.setAttribute("value", JSON.stringify(item));
                try {
                    if (item.type == "number")
                        td.innerText = formatNumber(item.value, item.format);
                    else if (item.type == "date" || item.type == "datetime")
                        td.innerText = new Date(item.value).Format(item.format);
                    else
                        td.innerText = item.value;
                    var _style = "";
                    for (var key in item.style) {
                        _style += key + ": " + item.style[key] + ";";
                    }
                    td.style.cssText = _style;

                    td.ondblclick = function () {
                        var msg = "";
                        var value = JSON.parse(this.getAttribute("value"));
                        for (var key in value) {
                            msg += key + ": " + JSON.stringify(value[key]) + ";\n";
                        }
                    };
                } catch (e) {
                    td.innerText = row[columns[c].name].value;
                }
                tr.appendChild(td);
            }
        }
    }
    container.appendChild(table);
}

function formatNumber(num,pattern){
    // 用法
    // formatNumber(12345.999,'#,##0.00');
    // formatNumber(12345.999,'#,##0.##');
    // formatNumber(123,'000000');
    var is = false;
    if (num <0)
        is = true;
    num = Math.abs(num);
    var strarr = num?num.toString().split('.'):['0'];
    var fmtarr = pattern?pattern.split('.'):[''];
    var retstr='';
    // 整数部分
    var str = strarr[0];
    var fmt = fmtarr[0];
    var i = str.length-1;
    var comma = false;
    for(var f=fmt.length-1;f>=0;f--){
        switch(fmt.substr(f,1)){
            case '#':
                if(i>=0 ) retstr = str.substr(i--,1) + retstr;
                break;
            case '0':
                if(i>=0) retstr = str.substr(i--,1) + retstr;
                else retstr = '0' + retstr;
                break;
            case ',':
                comma = true;
                retstr=','+ retstr;
            break;
        }
    }
    if(i>=0){
    if(comma){
        var l = str.length;
        for(;i>=0;i--){
            retstr = str.substr(i,1) + retstr;
            if(i>0 && ((l-i)%3)==0) retstr = ',' + retstr;
        }
    }
        else retstr = str.substr(0,i+1) + retstr;
    }
    retstr = retstr+'.';
    // 处理小数部分
    str=strarr.length>1?strarr[1]:'';
    fmt=fmtarr.length>1?fmtarr[1]:'';
    i=0;
    for(var f=0;f<fmt.length;f++){
        switch(fmt.substr(f,1)){
            case '#':
                if(i<str.length) retstr+=str.substr(i++,1);
                break;
            case '0':
                if(i<str.length) retstr+= str.substr(i++,1);
                else retstr+='0';
            break;
        }
    }
    return is?"-" + retstr.replace(/^,+/,'').replace(/\.$/,''): retstr.replace(/^,+/,'').replace(/\.$/,'');
}

String.prototype.replaceAll = function(search, replacement) {
    // 没有解决search参数中存在正则表达式符号的问题,
    // 不能采用replace(new RegExp(search, 'g'), replacement)方法;
    var target = this;
    try {
        while (target.includes(search)) {
            target = target.replace(search, replacement);
        }
    }catch (e) {
        console.log(e);
    }
    return target;
};

function execute() {
    var selection = "";
    if (__FUNCTION_EDITOR__.codeMirror.somethingSelected())
        selection = __FUNCTION_EDITOR__.codeMirror.getSelection();
    else
        selection = __FUNCTION_EDITOR__.codeMirror.getValue();
    var funs = [];
    if (selection.trim() != "") {
        funs = selection.split(";");
        __DATASET__["functions"] = [];
        __DATASET__["time"] = getNow();
        __DATASET__["result"] = [];
        var data = [];
        for (var x = __DATASET__.xRange.min.value; x <= __DATASET__.xRange.max.value; x += __DATASET__.xRange.interval.value) {
            var row = [x];
            for (var s = 0; s < funs.length; s++) {
                row.push(eval("(" + funs[s].toString() + ")"));
            }
            data.push(row);
        }
        __DATASET__["result"].push(transferResultDataset(funs, data));
        if (__DATASET__["result"].length > 0) {
            __DATASET__["default"] = 0;
            __DATASET__.pages.total = Math.ceil(__DATASET__.result[0].data.length / __DATASET__.pages.size);
            __DATASET__.pages.default = 1;
            $("page-label").innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            $("dataset-label").innerText = (__DATASET__.default + 1) + " ● " + __DATASET__.result.length;
            viewDataset(0);
        }
    }
}

function transferResultDataset(funs, dataset){
    var col = ["X"].concat(funs);
    var columns = [];
    for (var i=0;i<col.length;i++) {
        columns.push({id: i, name: col[i], type:"string", style: {textAlign: "center"}, order: ""});
    }
    var data = [];
    for (var i=0;i<dataset.length;i++) {
        var row = {};
         var r = dataset[i];
         for (var c = 0; c < columns.length; c++) {
             var _value = r[c];
             var _type = getDataType(_value);
             var _format  = null;
             var _align = "left";
             var _color = "black";

             switch (_type) {
                 case "float":
                     _type = "number";
                     _value = Number.parseFloat(r[c]);
                     _format = "#,##0.######";
                     _align = "right";
                     break;
                 case "int":
                     _type = "number";
                     _value = Number.parseInt(r[c]);
                     _format = "#,##0.######";
                     _align = "right";
                     break;
                 case "date":
                     _format = "yyyy-MM-dd";
                     _align = "center";
                     break;
                 case "datetime":
                     _format = "yyyy-MM-dd hh:mm:ss";
                     _align = "center";
                     break;
                default:
                    _format = null;
                    _align = "left";
             }
            if (_type == "number" && _value <0 )
                _color = "red";

            row[columns[c].name] = {
                rowid: i,
                colid: c,
                value: _value,
                type: _type,
                format: _format,
                style: {"text-align": _align, "color": _color},
            };
         }
         data.push(row);
    }
    var result = {
        columns: columns,
        total: data.length,
        data: data
    };
    return result;
}

function openDownloadDialog(url, saveName)
{
	if(typeof url == 'object' && url instanceof Blob)
	{
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || '';
	// HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if(window.MouseEvent) event = new MouseEvent('click');
	else
	{
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

function str2ab(str) {
    //使用UTF8编码规则,涉及中文的转换.
    var codes = [];
    for (var i = 0; i != str.length; ++i) {
        var code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {
            codes.push(code);
        } else if (0x80 <= code && code <= 0x7ff) {
            codes.push((192 | (31 & (code >> 6))));
            codes.push((128 | (63 & code)))
        } else if ((0x800 <= code && code <= 0xd7ff)
            || (0xe000 <= code && code <= 0xffff)) {
            codes.push((224 | (15 & (code >> 12))));
            codes.push((128 | (63 & (code >> 6))));
            codes.push((128 | (63 & code)))
        }
    }
    var buf = new ArrayBuffer(codes.length);
    var result = new Uint8Array(buf);
    for (i = 0; i < codes.length; i++) {
        result[i] = codes[i] & 0xff;
    }
    return result;
}

function sheet2blob(sheet, sheetName) {
	sheetName = sheetName || 'sheet1';
	var workbook = {
		SheetNames: [sheetName],
		Sheets: {}
	};
	workbook.Sheets[sheetName] = sheet;
	// 生成excel的配置项
	var wopts = {
		bookType: 'xlsx',
		bookSST: false,
		type: 'binary'
	};
	var wbout = XLSX.write(workbook, wopts);
	var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
	// 字符串转ArrayBuffer
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
	return blob;
}

function getFunctionConfigs(m) {
    m.type = "div";
    m.className = "function-configs-Content";
    m.id = "function-configs-Content";
    for (var name in __DATASET__.xRange) {
        var d = document.createElement("div");
        d.style.cssFloat = "left";
        d.style.width = "100%";
        m.appendChild(d);
        var s = document.createElement("span");
        s.innerHTML = __DATASET__.xRange[name].name + ":";
        d.appendChild(s);
        if (typeof __DATASET__.xRange[name].options === "undefined") {
            var input = document.createElement("input");
            input.id = name;
            input.className = "editinput";
            input.value = __DATASET__.xRange[name].value;
            input.onchange = function () {
                __DATASET__.xRange[this.id].value = Number(this.value);
            };
            d.appendChild(input);
        } else {
            var input = document.createElement("select");
            //input.style.cssFloat = "left";
            input.id = name;
            input.className = "editinput";
            for (var i = 0; i < __DATASET__.xRange[name].options.length; i++) {
                input.options.add(new Option(__DATASET__.xRange[name].options[i]));
            }
            input.value = __DATASET__.xRange[name].value;
            input.onchange = function () {
                __DATASET__.xRange[this.id].value = Number(this.value);
            };
            d.appendChild(input);
        }
    }
    var c = document.createElement("div");
    m.appendChild(c);
}

function init() {
    //#######################################
    //初始化SQL菜单
    //#######################################
    var sqltools = $("editer-tools");
    var paramtools = $("params-tools");

    var newsql = document.createElement("div");
    newsql.type = "div";
    newsql.className = "button";
    newsql.innerText = "新建";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "新建数据库脚<br>本";
    newsql.appendChild(tip);

    newsql.onclick = function () {
        var openfile = $("openfile");
        openfile.value = "";
        __FUNCTION_EDITOR__.title = null;
        __FUNCTION_EDITOR__.codeMirror.setValue("");
    };
    sqltools.appendChild(newsql);

    var input = document.createElement("input");
    input.type = "file";
    input.id = "openfile";
    input.style.display = "none";
    input.className = "openfile";
    input.onchange = function () {
        if (window.FileReader) {
            try {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function () {
                    __FUNCTION_EDITOR__.codeMirror.setValue(this.result);
                    __FUNCTION_EDITOR__.title = null;
                };
                reader.readAsText(file, __CONFIGS__.Charset.options[__CONFIGS__.Charset.value]);
            } catch (e) {
                alert("请选择需要导入的文件.")
            }
        } else {
            showMessage("本应用适用于Chrome浏览器或IE10及以上版本。")
        }
    };
    sqltools.appendChild(input);

    var opensql = document.createElement("div");
    opensql.type = "div";
    opensql.className = "button";
    opensql.innerText = "打开";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "从浏览器存储<br>中打开脚本";
    opensql.appendChild(tip);
    opensql.onclick = function () {
        var posi = getAbsolutePosition(this);
        var tb = storageSqlDialog("", __FUNCTION_EDITOR__);
        var main = $("container");
        tb.style.top = posi.top + "px";
        tb.style.lef = posi.left + "px";
        main.appendChild(tb);
    };
    sqltools.appendChild(opensql);

    var saveto = document.createElement("div");
    saveto.type = "div";
    saveto.className = "button";
    saveto.innerText = "保存";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "保存脚本到浏<br>览器存储";
    saveto.appendChild(tip);
    saveto.onclick = function () {
        if (__FUNCTION_EDITOR__.title == null) {
            var posi = getAbsolutePosition(this);
            var sql = __FUNCTION_EDITOR__.codeMirror.getValue();
            var tb = storageSqlDialog(sql, __FUNCTION_EDITOR__, "_TO_SAVE_");
            var main = $("container");
            tb.style.top = posi.top + "px";
            tb.style.lef = posi.left + "px";
            main.appendChild(tb);
        } else {
            var name = __FUNCTION_EDITOR__.title;
            var res = confirm("您确定覆盖保存脚本 " + name + " 吗?");
            if (res == true) {
                var sql = __FUNCTION_EDITOR__.codeMirror.getValue();
                if (name != "" && sql != "") {
                    var storage = window.localStorage;
                    var sqllist = JSON.parse(storage.getItem(__CONFIGS__.STORAGE.SCRIPTS));
                    sqllist[name] = messageEncode(sql);
                    storage.setItem(__CONFIGS__.STORAGE.SCRIPTS, JSON.stringify(sqllist));
                } else
                    alert("脚本及脚本名称不能为空!");
            }
        }
    };
    sqltools.appendChild(saveto);

    var loadfile = document.createElement("div");
    loadfile.type = "div";
    loadfile.className = "button";
    loadfile.innerText = "导入";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "导入外部脚本<br>文件";
    loadfile.appendChild(tip);
    loadfile.onclick = function () {
        $("openfile").click();
    };
    paramtools.appendChild(loadfile);

    var saveas = document.createElement("div");
    saveas.type = "div";
    saveas.className = "button";
    saveas.innerText = "导出";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "脚本另存为文<br>本文件";
    saveas.appendChild(tip);
    saveas.onclick = function () {
        var blob = new Blob([str2ab(__FUNCTION_EDITOR__.codeMirror.getValue())], {type: "application/octet-stream"});
        openDownloadDialog(blob, "WebSQLiteDataView.sql");
    };
    paramtools.appendChild(saveas);

    var execsql = document.createElement("div");
    execsql.type = "div";
    execsql.className = "button";
    execsql.innerText = "执行";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "执行函数并获<br>取图像";
    execsql.appendChild(tip);

    execsql.onclick = function () {
        if (checkStorage()) {
            execute();
        }
    };
    paramtools.appendChild(execsql);

    var tofull = document.createElement("div");
    sqltools.appendChild(tofull);
    tofull.className = "button";
    tofull.innerText = "❏";
    tofull.style.fontSize = "150%";
    tofull.style.cssFloat = "right";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "全屏幕编<br>辑窗口";
    tip.style.fontSize = "55%";
    tofull.appendChild(tip);
    tofull.onclick = function () {
        __FUNCTION_EDITOR__.codeMirror.setOption("fullScreen", !__FUNCTION_EDITOR__.codeMirror.getOption("fullScreen"));
    };

    var setFontSize = document.createElement("select");
    setFontSize.type = "select";
    for (var size in __FUNCTION_EDITOR__.fontSize.options) {
        setFontSize.options.add(new Option(size, __FUNCTION_EDITOR__.fontSize.options[size]));
    }
    setFontSize.style.cssFloat = "right";
    setFontSize.selectedIndex = __FUNCTION_EDITOR__.fontSize.default;
    setFontSize.onchange = function () {
        var editor = document.getElementsByClassName("CodeMirror")[0];
        editor.style.fontSize = this.value;
    };
    sqltools.appendChild(setFontSize);

    var editorThemes = document.createElement("select");
    editorThemes.type = "select";
    for (var theme in __FUNCTION_EDITOR__.themes) {
        editorThemes.options.add(new Option(theme));
    }
    editorThemes.onchange = function () {
        var theme = __FUNCTION_EDITOR__.themes[this.value];
        $("sqlediterTheme").href = theme.href;
        __FUNCTION_EDITOR__.codeMirror.setOption("theme", theme.name);
    };
    sqltools.appendChild(editorThemes);

    //#######################################
    //初始化数据菜单
    //#######################################
    var datatools = $("data-tools");

    var toup = document.createElement("div");
    datatools.appendChild(toup);
    toup.className = "button";
    toup.innerText = "«";
    toup.style.fontSize = "150%";
    toup.setAttribute("label", "dataset-label");
    toup.setAttribute("pagelabel", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示上一个数<br>据集";
    toup.appendChild(tip);

    toup.onclick = function () {
        if (__DATASET__["result"].length > 0) {
            if (__DATASET__["default"] > 0) {
                __DATASET__["default"] -= 1;
                __DATASET__.pages.total = Math.ceil(__DATASET__.result[__DATASET__.default].data.length / __DATASET__.pages.size);
                __DATASET__.pages.default = 1;
            }
            $(this.getAttribute("label")).innerText = (__DATASET__.default + 1) + " ● " + __DATASET__.result.length;
            $(this.getAttribute("pagelabel")).innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__["default"]);
        }
    };

    var to = document.createElement("div");
    datatools.appendChild(to);
    to.className = "button";
    to.id = "dataset-label";
    to.innerText = "●";
    to.style.fontSize = "100%";
    to.setAttribute("pagelabel", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示当前数据<br>集";
    to.appendChild(tip);
    to.onclick = function () {
        if (__DATASET__.result.length > 0) {
            __DATASET__.pages.total = Math.ceil(__DATASET__.result[__DATASET__.default].data.length / __DATASET__.pages.size);
            __DATASET__.pages.default = 1;
            this.innerText = (__DATASET__.default + 1) + " ● " + __DATASET__.result.length;
            $(this.getAttribute("pagelabel")).innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };

    var todown = document.createElement("div");
    datatools.appendChild(todown);
    todown.className = "button";
    todown.innerText = "»";
    todown.style.fontSize = "150%";
    todown.setAttribute("label", "dataset-label");
    todown.setAttribute("pagelabel", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示下一个数<br>据集";
    todown.appendChild(tip);
    todown.onclick = function () {
        if (__DATASET__.result.length > 0) {
            if (__DATASET__.default < (__DATASET__.result.length - 1)) {
                __DATASET__.default += 1;
                __DATASET__.pages.total = Math.ceil(__DATASET__.result[__DATASET__.default].data.length / __DATASET__.pages.size);
                __DATASET__.pages.default = 1;
            }
            $(this.getAttribute("label")).innerText = (__DATASET__.default + 1) + " ● " + __DATASET__.result.length;
            $(this.getAttribute("pagelabel")).innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };

    var datatran = document.createElement("div");
    datatools.appendChild(datatran);
    datatran.className = "button";
    datatran.innerText = "☇";
    datatran.style.fontSize = "150%";
    datatran.setAttribute("pagelabel", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "转置当前数据<br>集";
    datatran.appendChild(tip);
    datatran.onclick = function () {
        if (__DATASET__.result.length > 0) {
            datasetTranspose(__DATASET__.default);
            __DATASET__.pages.total = Math.ceil(__DATASET__.result[__DATASET__.default].data.length / __DATASET__.pages.size);
            __DATASET__.pages.default = 1;
            $(this.getAttribute("pagelabel")).innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };

    var download = document.createElement("div");
    datatools.appendChild(download);
    download.type = "div";
    download.className = "button";
    download.style.fontSize = "150%";
    download.innerText = "⚘";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "导出当前数据<br>集";
    download.appendChild(tip);
    download.onclick = function () {
        if (__DATASET__["result"].length > 0) {
            var dataset = __DATASET__["result"][__DATASET__["default"]];
            var aoa = [];
            var columns = [];
            for (var i = 0; i < dataset["columns"].length; i++) {
                columns.push(dataset["columns"][i].name);
            }
            aoa.push(columns);
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                var row = [];
                for (var c = 0; c < columns.length; c++) {
                    row.push(r[columns[c]].value);
                }
                aoa.push(row);
            }
            var sheet = XLSX.utils.aoa_to_sheet(aoa);
            openDownloadDialog(sheet2blob(sheet), 'WebSQLiteDataView.xlsx');
        }
    };

    var pageup = document.createElement("div");
    datatools.appendChild(pageup);
    pageup.className = "button";
    pageup.innerText = "«";
    pageup.style.fontSize = "150%";
    pageup.setAttribute("label", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示当前数据<br>集的上一页";
    pageup.appendChild(tip);
    pageup.onclick = function () {
        if (__DATASET__.pages.default > 1) {
            __DATASET__.pages.default -= 1;
            var label = $(this.getAttribute("label"));
            label.innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };
    var pagecurrent = document.createElement("div");
    datatools.appendChild(pagecurrent);
    pagecurrent.className = "button";
    pagecurrent.style.fontSize = "100%";
    pagecurrent.id = "page-label";
    pagecurrent.innerText = "●";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示当前数据<br>集的当前页";
    pagecurrent.appendChild(tip);
    pagecurrent.onclick = function () {
        if (__DATASET__.result.length > 0) {
            this.innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };
    var pagedown = document.createElement("div");
    datatools.appendChild(pagedown);
    pagedown.className = "button";
    pagedown.innerText = "»";
    pagedown.style.fontSize = "150%";
    pagedown.setAttribute("label", "page-label");
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "显示当前数据<br>集的下一页";
    pagedown.appendChild(tip);
    pagedown.onclick = function () {
        if (__DATASET__.pages.default < __DATASET__.pages.total) {
            __DATASET__.pages.default += 1;
            var label = $(this.getAttribute("label"));
            label.innerText = __DATASET__.pages.default + " ● " + __DATASET__.pages.total;
            viewDataset(__DATASET__.default);
        }
    };

    var toecharts = document.createElement("div");
    datatools.appendChild(toecharts);
    toecharts.className = "button";
    toecharts.innerText = "❏";
    toecharts.style.fontSize = "150%";
    toecharts.style.cssFloat = "right";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "重绘并显示大<br>视图";
    tip.style.fontSize = "55%";
    toecharts.appendChild(tip);
    toecharts.onclick = function () {
        try {
            var mecharts = document.createElement("div");
            mecharts.className = "echarts";
            mecharts.id = "echarts-full-screen";
            mecharts.style.width = (getAbsolutePosition($("container")).width - 10) + "px";
            mecharts.style.height = getAbsolutePosition($("container")).height + "px";
            mecharts.style.top = "0px";
            mecharts.style.left = "0px";
            window.addEventListener("keydown", function (e) {
                //keypress无法获取Esc键值,keydown和keyup可以.
                var keycode = e.which || e.keyCode;
                if (keycode == 27) {
                    if ($("echarts-full-screen") != null)
                        $("echarts-full-screen").parentElement.removeChild($("echarts-full-screen"));
                }
            });
            mecharts.appendChild(getEcharts(__DATASET__.echarts.type, (getAbsolutePosition($("container")).width - 30) + "px", (getAbsolutePosition($("container")).height - 20) + "px", __DATASET__.echarts.theme));
            $("container").appendChild(mecharts);
        } catch (e) {
            console.log(e);
        }
    };

    var toconfigs = document.createElement("div");
    datatools.appendChild(toconfigs);
    toconfigs.className = "button";
    toconfigs.innerText = "┅";
    toconfigs.style.fontSize = "150%";
    toconfigs.style.cssFloat = "right";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "更多图形参数";
    toconfigs.appendChild(tip);
    toconfigs.onclick = function () {
        var posi = getAbsolutePosition($("container"));
        var configs = getEchartsConfigs($("tableContainer"));
        var main = $("container");
        configs.style.top = posi.top + "px";
        configs.style.lef = posi.left + "px";
        main.appendChild(configs);
    };

    var echartsThemes = document.createElement("select");
    echartsThemes.className = "select";
    echartsThemes.type = "select";
    for (var theme in __ECHARTS__.themes) {
        echartsThemes.options.add(new Option(theme, __ECHARTS__.themes[theme]));
    }
    echartsThemes.onchange = function () {
        try {
            __DATASET__.echarts.theme = this.value;
            var container = $("tableContainer");
            var _width = (getAbsolutePosition(container).width * 0.985) + "px";
            var _height = (getAbsolutePosition(container).height * 0.965) + "px";
            container.innerHTML = "";
            container.appendChild(getEcharts(__DATASET__.echarts.type, _width, _height, __DATASET__.echarts.theme));
        } catch (e) {
            console.log(e);
        }
    };
    datatools.appendChild(echartsThemes);

    var echartsType = document.createElement("select");
    echartsType.type = "select";
    for (var type in __ECHARTS__.type) {
        echartsType.options.add(new Option(type, __ECHARTS__.type[type]));
    }
    echartsType.onchange = function () {
        try {
            __DATASET__.echarts.type = this.value;
            var container = $("tableContainer");
            var _width = (getAbsolutePosition(container).width * 0.985) + "px";
            var _height = (getAbsolutePosition(container).height * 0.965) + "px";
            container.innerHTML = "";
            container.appendChild(getEcharts(__DATASET__.echarts.type, _width, _height, __DATASET__.echarts.theme));
        } catch (e) {
            console.log(e);
        }
    };
    datatools.appendChild(echartsType);

    var echarts = document.createElement("div");
    datatools.appendChild(echarts);
    echarts.className = "button";
    echarts.innerText = "视图";
    echarts.style.cssFloat = "right";
    var tip = document.createElement("span");
    tip.className = "tooltiptext";
    tip.innerHTML = "绘制当前数据<br>集的视图";
    echarts.appendChild(tip);
    echarts.onclick = function () {
        try {
            var container = $("tableContainer");
            var _width = (getAbsolutePosition(container).width * 0.985) + "px";
            var _height = (getAbsolutePosition(container).height * 0.965) + "px";
            container.innerHTML = "";
            container.appendChild(getEcharts(__DATASET__.echarts.type, _width, _height, __DATASET__.echarts.theme));
        } catch (e) {
            console.log(e);
        }
    };

   getFunctionConfigs($("paramContainer"));

    //#######################################
    //配置脚本编辑器
    //#######################################
    __FUNCTION_EDITOR__.init($("Editer"));
    resize();
    window.onresize = function () {
        resize();
    };
    //#########################body init end#######################################
}

function getBrowserSize(){
    var winWidth = 0;
    var winHeight = 0;
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }

    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    return {
        width: winWidth,
        height: winHeight
    };
};
function resize() {
    //#######################################
    //由于使用百分比设置节点大小容易造成屏幕跳动，将节点大小调整为绝对值.
    //#######################################
    $("container").style.width = (getBrowserSize().width - 15) + "px";
    $("container").style.height= (getBrowserSize().height - 30) + "px";
    $("menu").style.height =$("content").style.height = (getBrowserSize().height - getAbsolutePosition($("header")).height - getAbsolutePosition($("footer")).height - 36) + "px";
    $("params").style.height = (getAbsolutePosition($("menu")).height - getAbsolutePosition($("editer")).height) + "px";
    $("header").style.width = $("footer").style.width =(getBrowserSize().width - 15) + "px";
    $("tableContainer").style.height = (getAbsolutePosition($("tableContainer").parentElement).height - 36) + "px";

}

function isScroll(el) {
     //检查节点是否 出现滚动条
    var elems = el ? [el] : [document.documentElement, document.body];
    var scrollX = false, scrollY = false;
    for (var i = 0; i < elems.length; i++) {
        var o = elems[i];
        // test horizontal
        var sl = o.scrollLeft;
        o.scrollLeft += (sl > 0) ? -1 : 1;
        o.scrollLeft !== sl && (scrollX = scrollX || true);
        o.scrollLeft = sl;
        // test vertical
        var st = o.scrollTop;
        o.scrollTop += (st > 0) ? -1 : 1;
        o.scrollTop !== st && (scrollY = scrollY || true);
        o.scrollTop = st;
    }
    // ret
    return {
        scrollX: scrollX,
        scrollY: scrollY
    };
 }

function readWorkbookFromLocalFile(file) {
    function getData(result, sep) {
        var data = [];
        var lines = result.split("\n");
        for (var i = 0; i < lines.length; i++) {
            data.push(lines[i].split(sep));
        }
        return data;
    }

    function fixData(data) {
        //文件流转BinaryString
        var tmp = "";
        var l = 0;
        var w = 10240;
        for (; l < data.byteLength / w; ++l) tmp += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        tmp += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return tmp;
    }

    var reader = new FileReader();
    var rABS = true;
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook;
        if (rABS) {
            workbook = XLSX.read(data, {type: "binary"});
        } else {
            workbook = XLSX.read(btoa(fixData(data)), {type: "base64"});
        }
        var sheetNames = workbook.SheetNames;
        var worksheet = workbook.Sheets[sheetNames[0]];//默认第一个sheet
        var csv = XLSX.utils.sheet_to_csv(worksheet);
        __IMPORT__.SourceFile.data = csv;
        //return csv;
    };
    try {
        reader.readAsBinaryString(file);
    } catch (e) {
        reader.readAsArrayBuffer(file);
        rABS = false;
    }
}


