
var __ECHARTS__ = {
     type: {
         "函数图像": "FunctionLine",
         "柱状图": "Bar",
         "柱状图(3D)": "Bar3D",
         "线型图": "Line",
         "线型图(3D)": "Line3D",
         "柱状&线型": "BarAndLine",
         "条形图": "TransversBar",
         "面积图": "AreaStyle",
         "极坐标柱状图": "PolarBar",
         "极坐标面积图": "PolarArea",
         "回归序列": "Regression",
         "散点图": "Scatter",
         "散点图(3D)": "Scatter3D",
         "分类集中": "WebkitDep"
     },
     themes: {
         "Default": "",
         "Chalk": "Chalk",
         "Dark": "Dark",
         "Essos": "Essos",
         "Infographic": "Infographic",
         "Light": "light",
         "Macarons": "Macarons",
         "Purple": "Purple",
         "Roma": "Roma",
         "Shine": "Shine",
         "Vintage": "Vintage",
         "Walden": "Walden",
         "Westeros": "Westeros",
         "Wonderland": "Wonderland"
     },
     configs: {
         groupwith: {name: "每行序列数", value: 2},
         seriesLoopPlayInterval: {name: "多序列播放间隔(秒)", value: 3},
         barLabelShow: {name: "柱状图显示标签", value: 'NO', options: ["YES", "NO"]},
         barLabelPosition: {
             name: "柱状图标签位置",
             value: 'top',
             options: ["top", "left", "right", "bottom", "insideTop", "insideLeft", "insideRight", "insideBottom"]
         },
         barLabelFontSize: {name: "柱状图标签字号(px)", value: 12},
         barLabelRotate: {name: "柱状图标签旋转度数", value: 0},

         lineStyleWidth: {name: "线形图线条宽度", value: 2},

         BoxWidthFor3D: {name: "3D图形宽度(X轴)", value: 200},
         BoxDepthFor3D: {name: "3D图形深度(Y轴)", value: 80},
         AutoRotateFor3D: {name: "3D图形自动旋转", value: "YES", options: ["YES", "NO"]},
         LabelShowFor3D: {name: "3D图形显示标签", value: "NO", options: ["YES", "NO"]},
         LabelFontSizeFor3D: {name: "3D图形标签字号(px)", value: 12},
         ItemStyleOpacityFor3D: {name: "3D图形透明度", value: 1},

         regressionType: {name: "趋势/回归类型", value: '直线', options: ["直线", "指数", "对数", "多项式"]},
         regressionPolynomialOrder: {name: "多项式阶数", value: 2},
         regressionForwardPeroids: {name: "趋势/回归前推周期", value: 0},
         richTextLabel: {name: "富文本标签", value: 'NO', options: ["YES", "NO"]},
         scatterSymbolSize: {name: "散点图数据点大小", value: 6},
         scatterSymbolShape: {name: "散点图数据点形状", value: "circle", options:['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none']},
     }
 };

var geoCoordMap = {
    "City": {
        "苏州": [120.58462810546875, 31.2975763136363],
        '深圳': [114.05886125, 22.540606755938043],
        "宁波": [121.55317230468746, 29.872695233325537],
        "大连": [121.61339062500001, 38.91163560790712],
        "青岛": [120.38530367187502, 36.0702536199054],
        "厦门": [118.08612505859378, 24.48405]
    },
    "CCB": {
        "分行营业部": [116.35441650364683, 39.89743763023299],
        "中关村分行": [116.3255934855728, 39.97594607553426],
        "通州分行": [116.64424528096006, 39.90181231860209],
        "宣武支行": [116.35721672985838, 39.88902493290284],
        "西四支行": [116.34299029324339, 39.922846429639215],
        "东四支行": [116.40975047562407, 39.93297851642338],
        "前门支行": [116.41136516545103, 39.89965999037026],
        "城建支行": [116.42684967857359, 39.8654511905414],
        "长安支行": [116.30266309192658, 39.90799712722112],
        "开发区支行": [116.52131140640259, 39.78064173468539],
        "鼎昆支行": [116.38564868717192, 39.96357105725681],
        "保利支行": [116.43232577909852, 39.933033145322206],
        "苏州桥支行": [116.3084999411392, 39.96422985863718],
        "望京支行": [116.46810924404143, 39.98632140037747],
        "地坛支行": [116.40858566158293, 39.95499856601777],
        "丰台支行": [116.28365982983397, 39.86757282213031],
        "铁道支行": [116.32556617462158, 39.89660383931801],
        "月坛支行": [116.35948514335631, 39.915161383272675],
        "阜成路支行": [116.31771781349183, 39.924246581970394],
        "西单支行": [116.37391244907377, 39.917476401295424],
        "安华支行": [116.40693443187716, 39.974640863944025],
        "光华支行": [116.45418315078733, 39.91383052046433],
        "安慧支行": [116.40652317790983, 39.991829318509666],
        "华贸支行": [116.47853436441802, 39.91212326134532],
        "东大街支行": [116.29375030014799, 39.85819699521394],
        "石景山支行": [116.21864308331297, 39.90668464367193],
        "朝阳支行": [116.4471458337097, 39.92249673687234],
        "大兴支行": [116.33653153393553, 39.7276962248458],
        "房山支行": [116.14051799007413, 39.74332826725758],
        "门头沟支行": [116.1108721865082, 39.93625766035245],
        "顺义支行": [116.65379431415559, 40.130518903732586],
        "昌平支行": [116.23950781349184, 40.22254601518041],
        "延庆支行": [115.98013717790984, 40.461168229288596],
        "怀柔支行": [116.63073676322934, 40.3111677351932],
        "密云支行": [116.8505806441803, 40.370657044797],
        "平谷支行": [117.11137734722138, 40.13446326684633],
    }
};

function getEchartsConfigs(container) {
    var m = document.createElement("div");
    m.type = "div";
    m.className = "echarts-configs-Content";
    m.id = "echarts-configs-Content";
    for (var name in __ECHARTS__.configs) {
        var d = document.createElement("div");
        m.appendChild(d);
        var s = document.createElement("span");
        s.innerHTML = __ECHARTS__.configs[name].name + ":";
        d.appendChild(s);
        if (typeof __ECHARTS__.configs[name].options === "undefined") {
            var input = document.createElement("input");
            input.style.cssFloat = "right";
            input.id = name;
            input.className = "editinput";
            input.value = __ECHARTS__.configs[name].value;
            input.onchange = function () {
                __ECHARTS__.configs[this.id].value = this.value;
            };
            d.appendChild(input);
        } else {
            var input = document.createElement("select");
            input.style.cssFloat = "right";
            input.id = name;
            input.className = "editinput";
            for (var i = 0; i < __ECHARTS__.configs[name].options.length; i++) {
                input.options.add(new Option(__ECHARTS__.configs[name].options[i]));
            }
            input.value = __ECHARTS__.configs[name].value;
            input.onchange = function () {
                __ECHARTS__.configs[this.id].value = this.value;
            };
            d.appendChild(input);
        }
    }
    var c = document.createElement("div");
    //c.className = "toolbar";
    m.appendChild(c);
    var b = document.createElement("a");
    b.className = "button";
    b.innerHTML = "确定";
    b.onclick = function () {
        var configs = $("echarts-configs-Content").getElementsByClassName("editinput");
        for (var i = 0; i < configs.length; i++) {
            __ECHARTS__.configs[configs[i].id].value = configs[i].value;
        }
        try {
            //var container = $("tableContainer");
            var _width = (getAbsolutePosition(container).width * 0.985) + "px";
            var _height = (getAbsolutePosition(container).height * 0.965) + "px";
            container.innerHTML = "";
            container.appendChild(getEcharts(__DATASET__.echarts.type, _width, _height, __DATASET__.echarts.theme));
        } catch (e) {

        }
        var m = $("echarts-configs-Content");
        m.parentNode.removeChild(m);
    };
    c.appendChild(b);

    b = document.createElement("a");
    b.className = "button";
    b.innerHTML = "退出";
    b.onclick = function () {
        var m = $("echarts-configs-Content");
        m.parentNode.removeChild(m);
    };
    c.appendChild(b);
    return m;
}

function getEcharts(type, width, height, themes) {
    var container = document.createElement("div");
    container.className = "echarts-container";
    container.id = "echarts-container";
    container.style.width = width;
    container.style.height = height;
    switch (type) {
        case "Bar":
            return getBar(container, themes);
            break;
        case "PolarBar":
            return getPolarBar(container, themes);
            break;
        case "PolarArea":
            return getPolarArea(container, themes);
            break;
        case "Line":
            return getLine(container, themes);
            break;
        case "Line3D":
            return getLine3D(container, themes);
            break;
        case "BarAndLine":
            return getBarAndLine(container, themes);
            break;
        case "AreaStyle":
            return getAreaStyle(container, themes);
            break;
        case "TransversBar":
            return getTransversBar(container, themes);
            break;
        case "Pie":
            return getPie(container, themes);
            break;
        case "Ring":
            return getRing(container, themes);
            break;
        case "Rose":
            return getRose(container, themes);
            break;
        case "Gauge":
            return getGaugeWithOne(container, themes);
            break;
        case "Radar":
            return getRadar(container, themes);
            break;
        case "Regression":
            return getRegression(container, themes);
            break;
        case "Relationship":
            return getRelationship(container, themes);
            break;
        case "OrganizationStructure":
            return getOrganizationStructure(container, themes);
            break;
        case "WebkitDep":
            return getWebkitDep(container, themes);
            break;
        case "Scatter":
            return getScatter(container, themes);
            break;
        case "Funnel":
            return getFunnel(container, themes);
            break;
        case "WordCloud":
            return getWordCloud(container, themes);
            break;
        case "Liqiud":
            return getLiqiud(container, themes);
            break;
        case "Calendar":
            return getCalendar(container, themes);
            break;
        case "GeoOfChina":
            return getGeoOfChina(container, themes);
            break;
        case "GeoOfBeijing":
            return getGeoOfBeijing(container, themes);
            break;
        case "Bar3D":
            return getBar3D(container, themes);
            break;
        case "Scatter3D":
            return getScatter3D(container, themes);
            break;
        case "CategoryLine":
            return getCategoryLine(container,themes);
            break;
        case "FunctionLine":
            return getFunctionLine(container,themes);
            break;
    }
}

function getBar(container, themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {
                name: columns[c],
                type: "bar",
                data: [],
                label: {
                    show: __ECHARTS__.configs.barLabelShow.value == "NO"?false:true,
                    rotate: __ECHARTS__.configs.barLabelRotate.value,
                    align: 'center',
                    verticalAlign: 'middle',
                    position: __ECHARTS__.configs.barLabelPosition.value,
                    distance: 15,
                    formatter: '{value|{c}}',
                    rich: {
                        value: {
                            textBorderColor: '#fff',
                            fontSize: __ECHARTS__.configs.barLabelFontSize.value,
                        }
                    }
                }
            };
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        title: {
            text: "",
            link: "",
            subtext: "",
            sublink: ""
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        grid: {
            top: 40,
            left: 50,
            right: 40,
            bottom: 50
        },
        xAxis: {
            data: xAxis,
            axisLabel: {
                interval: "auto",
                textStyle: {
                    fontSize: 12
                },
                margin: 8,
                rotate: xAxis.length > 15 ? -45 : 0,
            },
        },
        yAxis: {},
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }],
        series: yAxis_series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);

    return container;
}

function getTransversBar(container, themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {name: columns[c], type: "bar", data: []};
            //series.stack = "true";
            series.label = {
                show: __ECHARTS__.configs.barLabelShow.value == "NO" ? false : true,
                rotate: __ECHARTS__.configs.barLabelRotate.value,
                align: 'center',
                verticalAlign: 'middle',
                position: __ECHARTS__.configs.barLabelPosition.value,
                distance: 15,
                formatter: '{value|{c}}',
                rich: {
                    value: {
                        textBorderColor: '#fff',
                        fontSize: __ECHARTS__.configs.barLabelFontSize.value,
                    }
                }
            };
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
            },
        toolbox: {
            show: true,
            feature:{
                //mark: {show: true},
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type:['stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        title: {
            text: "",
            subtext: "",
        },
        tooltip: {},
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: xAxis
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }],
        series: yAxis_series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    return container;
}

function getLine(container, themes) {
    console.log(__ECHARTS__.configs.lineStyleWidth.value);
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {
                name: columns[c],
                type: "line",
                smooth: true,
                //平滑线
                data: [],
                lineStyle: {
                    width: Number(__ECHARTS__.configs.lineStyleWidth.value),
                },
                itemStyle: {},
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            };
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    var option = {
        brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature: {
                //mark: {show: true},
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        xAxis: {
            data: xAxis,
            axisLabel: {
                interval: "auto",
                textStyle: {
                    fontSize: 12
                },
                margin: 8,
                rotate: xAxis.length>15?-45:0,
            },
        },
        yAxis: {},
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        },{
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            left: 10,
            width: 15,
            height: 100,
            bottom: 35
        },{
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100,
            width: 100,
            height: 15,
            left: 30,
            bottom: 10
        }],
        series: yAxis_series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    // 使用刚指定的配置项和数据显示图表。

    if (option.series.length > 1){
        option.tooltip = {
            //显示活动标尺线.
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        }
    }
    myChart.setOption(option);

    return container;
}

function getBarAndLine(container, themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var serie = {};
            if (c % 2 > 0) {
                serie = {
                    name: columns[c],
                    type: "line",
                    smooth: true,
                    //平滑线
                    data: [],
                    lineStyle: {
                        width: Number(__ECHARTS__.configs.lineStyleWidth.value),
                    },
                    itemStyle:{},
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    label: {}
                };

            }
            else {
                serie = {
                    name: columns[c],
                    type: "bar",
                    data: [],
                    label: {
                        show: __ECHARTS__.configs.barLabelShow.value == "NO" ? false : true,
                        rotate: __ECHARTS__.configs.barLabelRotate.value,
                        align: 'center',
                        verticalAlign: 'middle',
                        position: __ECHARTS__.configs.barLabelPosition.value,
                        distance: 15,
                        formatter: '{value|{c}}',
                        rich: {
                            value: {
                                textBorderColor: '#fff',
                                fontSize: __ECHARTS__.configs.barLabelFontSize.value,
                            }
                        }
                    }
                }
            }

            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                serie.data.push(r[columns[c]].value);
            }
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            yAxis_series.push(serie);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature:{
                //mark: {show: true},
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type:['stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        xAxis: {
            data: xAxis,
            axisLabel: {
                interval: "auto",
                textStyle: {
                    fontSize: 12
                },
                margin: 8,
                rotate: xAxis.length>15?-45:0,
            },
        },
        yAxis: {},
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        },{
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            left: 10,
            width: 15,
            height: 100,
            bottom: 35
        },{
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100,
            width: 100,
            height: 15,
            left: 30,
            bottom: 10
        }],
        series: yAxis_series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    return container;
}

function getAreaStyle(container, themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {
                name: columns[c],
                type: "line",
                smooth: true,
                //平滑线
                areaStyle: {
                    //可指定渐变颜色
                    //color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //    offset: 0,
                    //    color: 'rgb(255, 158, 68)'
                    //}, {
                    //    offset: 1,
                     //   color: 'rgb(255, 70, 131)'
                    //}])
                },
                //面积图
                symbol: 'circle',
                //节点形状
                symbolSize: 5,
                //节点大小
                sampling: 'average',
                //抽样
                itemStyle: {
                    //可指定系列颜色
                    //color: '#d68262'
                },
                data: [],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            };
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature:{
                //mark: {show: true},
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type:['stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        title: {
            text: ''
        },
        tooltip: {
            //显示活动标尺线.
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        xAxis: {
            data: xAxis,
            axisLabel: {
                interval: "auto",
                textStyle: {
                    fontSize: 12
                },
                margin: 8,
                rotate: xAxis.length>15?-45:0,
            },
        },
        yAxis: {},
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        },{
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            left: 10,
            width: 15,
            height: 100,
            bottom: 35
        },{
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100,
            width: 100,
            height: 15,
            left: 30,
            bottom: 10
        }],
        series: yAxis_series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    return container;
}

function getPolarBar(container, themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {name: columns[c], type: "bar", coordinateSystem: 'polar', data: []};
            //series.stack = "true";
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };

            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                magicType: {
                    show: true,
                    type:['stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        angleAxis: {},
        radiusAxis: {
            type: 'category',
            data: xAxis,
            z: 10
        },
        polar: {},
        series: yAxis_series,
        legend: {
            left: 20,
            show: true,
            data: columns.slice(1, columns.length)
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);
    return container;
}

function getPolarArea(container, themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var yAxis_series = [];
    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push(r[columns[c]].value);
            }
        } else {
            var series = {name: columns[c], type: "bar", coordinateSystem: 'polar', data: []};
            //series.stack = "true";
            series.animationDelay = function (idx) {
                return idx * 5 + 100;
            };

            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                series.data.push(r[columns[c]].value);
            }
            yAxis_series.push(series);
        }
    }
    var myChart = echarts.init(container, themes);
    //主题:dark,light
    var option = {
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                magicType: {
                    show: true,
                    type:['stack', 'tiled']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        angleAxis: {
            type: 'category',
            data: xAxis
        },
        radiusAxis: {},
        polar: {},
        series: yAxis_series,
        legend: {
            left: 20,
            show: true,
            data: columns.slice(1, columns.length)
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}'
        },
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);
    return container;
}

function getPie(container,themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var series = [];
    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                legends.push(r[columns[c]].value);
            }
        } else {
            var serie = {
                name: columns[c],
                type: "pie",
                radius: "70%",
                label: {
                    show: true,
                    //控制label是否显示
                    //position: 'center'
                },
                labelLine: {
                    show: true
                },
                data: []
            };
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                serie.data.push({"value": r[columns[c]].value, "name": legends[i]});
            }
            series.push(serie);
        }
    }

    var top = 5;
    var left = 10;
    var groupwith = __ECHARTS__.configs.groupwith.value;
    var lines = parseInt(series.length / groupwith + 0.5);
    var height = parseInt(80 / lines);
    var width = 80/groupwith;
    for (var i = 0; i < series.length; i++) {
        series[i].top = ((top + parseInt(i / groupwith) * height) + parseInt(i / groupwith) * top) + "%";
        series[i].left = (left + (i % groupwith) * width) + "%";
        series[i].width = width + "%";
        series[i].height = height + "%";
    }

    var myChart = echarts.init(container, themes);
    var option = {
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: false},
                magicType: {
                    show: false,
                    type: ['pie', 'funnel']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            left: 20,
            data: legends
        },
        series: series,
        label: {},
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };

    if (__ECHARTS__.configs.richTextLabel.value == "YES") {
        //富文本
        option.label = {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            //shadowBlur:3,
            //shadowOffsetX: 2,
            //shadowOffsetY: 2,
            //shadowColor: '#999',
            padding: [0, 7],
            rich: {
                a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                },
                abg: {
                    backgroundColor: '',
                    width: '100%',
                    align: 'right',
                    height: 22,
                    borderRadius: [4, 4, 0, 0]
                },
                hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                },
                b: {
                    fontSize: 16,
                    lineHeight: 33
                },
                per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                }
            }
        };
    }
    myChart.setOption(option);
    return container;
}

function getRing(container,themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var series = [];
    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                legends.push(r[columns[c]].value);
            }
        } else {
            var serie = {
                name: columns[c],
                type: "pie",
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    //position: 'center'
                },
                labelLine: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                data: []
            };
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                serie.data.push({"value": r[columns[c]].value, "name": legends[i]});
            }
            series.push(serie);
        }
    }

    var top = 5;
    var left = 10;
    var groupwith = __ECHARTS__.configs.groupwith.value;
    var lines = parseInt(series.length / groupwith + 0.5);
    var height = parseInt(80 / lines);
    var width = 80 / groupwith;
    for (var i = 0; i < series.length; i++) {
        series[i].top = ((top + parseInt(i / groupwith) * height) + parseInt(i / groupwith) * top) + "%";
        series[i].left = (left + (i % groupwith) * width) + "%";
        series[i].width = width + "%";
        series[i].height = height + "%";
    }

    var myChart = echarts.init(container, themes);
    var option = {
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: false},
                magicType: {
                    show: false,
                    type: ['pie', 'funnel']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        legend: {
            left: 20,
            data: legends,//columns.slice(1, columns.length)
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: series,
        label: {},
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }

    };
    if (__ECHARTS__.configs.richTextLabel.value == "YES") {
        //富文本
        option.label = {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            //shadowBlur:3,
            //shadowOffsetX: 2,
            //shadowOffsetY: 2,
            //shadowColor: '#999',
            padding: [0, 7],
            rich: {
                a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                },
                abg: {
                    backgroundColor: '',
                    width: '100%',
                    align: 'right',
                    height: 22,
                    borderRadius: [4, 4, 0, 0]
                },
                hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                },
                b: {
                    fontSize: 16,
                    lineHeight: 33
                },
                per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                }
            }
        };
    }
    myChart.setOption(option);

    return container;
}

function getRose(container,themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var series = [];
    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                legends.push(r[columns[c]].value);
            }
        } else {
            var serie = {
                name: columns[c],
                type: "pie",
                radius: ['35%', '70%'],
                center: ['50%', '50%'],
                roseType: 'area',
                label: {
                    show: true,
                    //position: 'center'
                },
                labelLine: {
                    show: true
                },
                data: []
            };
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                serie.data.push({"value": r[columns[c]].value,"name": legends[i]});
            }
            series.push(serie);
        }
    }
    var top = 5;
    var left = 10;
    var groupwith = __ECHARTS__.configs.groupwith.value;
    var lines = parseInt(series.length / groupwith + 0.5);
    var height = parseInt(80 / lines);
    var width = 80/ groupwith;
    for (var i = 0; i < series.length; i++) {
        series[i].top = ((top + parseInt(i / groupwith) * height) + parseInt(i / groupwith) * top) + "%";
        series[i].left = (left + (i % groupwith) * width) + "%";
        series[i].width = width + "%";
        series[i].height = height + "%";
    }

    var myChart = echarts.init(container, themes);
    var option = {
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: false},
                magicType: {
                    show: false,
                    type:['pie','funnel']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        legend: {
            left: 20,
            data: legends,//columns.slice(1, columns.length)
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: series,
        label: {},
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    if (__ECHARTS__.configs.richTextLabel.value == "YES") {
        //富文本
        option.label = {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            //shadowBlur:3,
            //shadowOffsetX: 2,
            //shadowOffsetY: 2,
            //shadowColor: '#999',
            padding: [0, 7],
            rich: {
                a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                },
                abg: {
                    backgroundColor: '',
                    width: '100%',
                    align: 'right',
                    height: 22,
                    borderRadius: [4, 4, 0, 0]
                },
                hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                },
                b: {
                    fontSize: 16,
                    lineHeight: 33
                },
                per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                }
            }
        };
    }
    myChart.setOption(option);
    return container;
}

function getRadar(container, themes) {
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var xAxis = [];
    var series = [];
    var xAxis_max = {};
    //每个系类的最大值
    for (var c=1;c<columns.length;c++) {
        var _max = 0;
        for (var i = 0; i < dataset["data"].length; i++) {
            var r = dataset["data"][i];
            if (r[columns[c]].value > _max )
                _max = r[columns[c]].value;
        }
        xAxis_max[columns[c]] = _max;
    }

    for (var c=0;c<columns.length;c++) {
        if ( c==0 ){
           for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                xAxis.push({
                    name: r[columns[c]].value,
                    max: xAxis_max[columns[c]],
                });
            }
        } else {
            var serie = {
                name: columns[c],
                type: "radar",
                data: []
            };
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            var d = {name:columns[c], value:[]};
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                d.value.push(r[columns[c]].value);
            }
            serie.data.push(d);
            series.push(serie);
        }
    }

    var myChart = echarts.init(container, themes);
    var option = {
        legend: {
            left: 20,
            data: columns.slice(1, columns.length)
        },
        tooltip: {},
        toolbox: {
            feature: {
                saveAsImage: {},
                restore: {},
                dataView: {show: true, readOnly: true}
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: xAxis
        },
        series: series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);
    return container;

}

function getRegression(container, themes) {
    var regressionType = {"直线": "linear", "指数": "exponential", "对数": "logarithmic", "多项式": "polynomial"};
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var columns_add = [];
    var xAxis = [];
    var series = [];

    var selectType = __ECHARTS__.configs.regressionType.value;
    var forwardPeroids = Number(__ECHARTS__.configs.regressionForwardPeroids.value);
    var regressionPolynomialOrder = Number(__ECHARTS__.configs.regressionPolynomialOrder.value);

    function init() {
        for (var c = 0; c < columns.length; c++) {
            if (c == 0) {
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    xAxis.push(r[columns[c]].value);
                }
            } else {
                var serie = {
                    name: columns[c],
                    type: "line",
                    lineStyle: {
                        opacity: __ECHARTS__.configs.ItemStyleOpacityFor3D.value,
                        width: Number(__ECHARTS__.configs.lineStyleWidth.value),
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'left',
                            color: 'blue',
                            fontSize: 12
                        }
                    },
                    smooth: true,
                    data: []
                };
                serie.animationDelay = function (idx) {
                    return idx * 5 + 100;
                };
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    serie.data.push([i, r[columns[c]].value]);
                }
                serie.animationDelay = function (idx) {
                    return idx * 5 + 100;
                };
                series.push(serie);

                for (var regression in regressionType) {
                    if (regression == selectType) {
                        getRegLine(columns[c], serie, selectType, regressionPolynomialOrder);
                        break;
                    }
                }
            }
        }
    }

    function getRegLine(column, serie, type, order) {
        var myRegression = ecStat.regression(regressionType[type], washData(serie.data), order);
        myRegression.points.sort(function (a, b) {
            return a[0] - b[0];
        });

        columns_add.push(type + "(" + column + ")");
        var data = appendData(myRegression.points, myRegression.parameter, regressionType[type]);
        var regline = {
            name: type + "(" + column + ")",
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data,
            lineStyle: {
                type: 'dotted',     //'solid/dashed/dotted'
            },
            markPoint: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'left',
                    formatter: myRegression.expression,
                    color: '#333',
                    fontSize: 10
                },
                data: [{
                    coord: data[data.length - 1]
                }],
            }
        };
        regline.animationDelay = function (idx) {
            return idx * 5 + 100;
        };
        series.push(regline);
    }

    function checkxAxis(result) {
        //计算X轴标示与初始是否一致,如不一致则添加
        if (xAxis.length < result.length) {
            for (var i = xAxis.length; i < result.length; i++) {
                xAxis.push("P" + result[i][0]);
            }
        }
    }

    function appendData(data, parameter, type) {
        var period = 1;
        var max = data.length - 1;
        //var period = (data[data.length - 1][0] - data[0][0]) / (data.length - 1);
        //var max = data[data.length - 1][0];
        var data_add = [];
        var i = 1;
        switch (type) {
            case "linear":  //直线
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.gradient * x + parameter.intercept]);
                    i += 1;
                }
                break;
            case "exponential": //指数
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.coefficient * Math.pow(Math.E, x * parameter.index)]);
                    i += 1;
                }
                break;
            case "logarithmic"://对数
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.gradient * Math.log(x) + parameter.intercept]);
                    i += 1;
                }
                break;
            case "polynomial"://多项式
                while (i <= forwardPeroids) {
                    var value = 0;
                    var x = max + i * period;
                    for (var s = 0; s < parameter.length; s++) {
                        value += parameter[s] * Math.pow(x, s);
                    }
                    data_add.push([x, value]);
                    i += 1;
                }
                break;
        }

        var result = data.slice().concat(data_add);
        checkxAxis(result);
        return result;
    }

    function washData(source) {
        //对非数值型数据进行清洗
        var target = [];
        for (var i = 0; i < source.length; i++) {
            var row = source[i];
            if (row[1] != "" && row[1] != null && !isNaN(Number(row[1]))) {
                target.push(row);
            }
        }
        return target;
    }

    init();

    var option = {
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: true,
            feature: {
                //mark: {show: true},
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
                dataZoom: {show: true},
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        title: {
            text: '',
            subtext: '',
            sublink: '',
            left: 'center'
        },
        legend: {
            left: 20,
            data: columns.slice(1, columns.length).concat(columns_add)
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            data: xAxis,
            //type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitNumber: 20,
            axisLabel: {
                interval: "auto",
                textStyle: {
                    fontSize: 12
                },
                margin: 8,
                rotate: xAxis.length > 15 ? -45 : 0,
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }, {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            left: 10,
            width: 15,
            height: 100,
            bottom: 35
        }, {
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100,
            width: 100,
            height: 15,
            left: 30,
            bottom: 10
        }],
        series: series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);
    return container;
}

function  getRelationship(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var nodes = [];
    var links = [];
    //############################################
    // 数据转换方法,以每行的每个单元为source节点,次单元为target节点,无论多少单元依次下推n个节点.
    // {S:1,T:2]},{S:2,T:3},....
    // 为每个节点按值建立唯一索引,如有重复将引发报错.
    // 坐标值可以按照图像大小的百分比计算,取100以内随机数.也可以采用window.innerWidth和window.innerHeight限制范围.
    //############################################
    for (var i = 0; i < dataset["data"].length; i++) {
        var r = dataset["data"][i];
        for (var c=0; c<columns.length; c++) {
            var ex = true;
            for (var x = 0;x<nodes.length;x++){
                if (nodes[x].name == r[columns[c]].value || r[columns[c]].value == "") {
                    ex = false;
                    break;
                }
            }
            if (ex) {
                var node = {
                    name: r[columns[c]].value,
                    x: Math.floor(Math.random() * window.innerWidth),
                    y: Math.floor(Math.random() * window.innerHeight),
                    value: nodes.length + 1,
                    //如果修改为layout= force,则draggable配置生效
                    draggable: true,
                };
                nodes.push(node);
            }

            if ((c + 1) < (columns.length) ) {
                if (r[columns[c]].value !== r[columns[c + 1]].value && r[columns[c]].value != "" && r[columns[c+1]].value !="") {
                    links.push({
                        source: r[columns[c]].value,
                        target: r[columns[c + 1]].value,
                    });
                }
            }
        }
    }

    var serie = {
        type: 'graph',
        layout: 'none',
        //如果修改为force,则force配置生效，暂不需要。
        force: {
            repulsion: 1000
        },
        symbolSize: 50,
        roam: true,
        label: {
            show: true,
            fontSize: 12
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            fontSize: 9
        },
        data: nodes,
        links: links,
        lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0.2
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(251, 118, 123)'
            }, {
                offset: 1,
                color: 'rgb(204, 46, 72)'
            }])
        },
        roam: true,
        focusNodeAdjacency: true,
        emphasis: {
            lineStyle: {
                opacity: 1,
                width: 2.5
            }
        }
    };
    serie.animationDelay = function (idx) {
        return idx * 5 + 100;
    };

    var option = {
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10px",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        title: {
            text: ''
        },
        tooltip: {
        },
        series: [serie],
        lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0.2
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
    };

    myChart.setOption(option);

     //以下代码是为解决节点拖动
    initInvisibleGraphic();
    function initInvisibleGraphic() {
        myChart.setOption({
            graphic: echarts.util.map(option.series[0].data, function (item, dataIndex) {
                //使用图形元素组件在节点上划出一个隐形的图形覆盖住节点，小于原节点，留出部分用户显示当前节点与其他节点关系显示。
                var tmpPos = myChart.convertToPixel({'seriesIndex': 0},[item.x,item.y]);
                return {
                    type: 'circle',
                    id: dataIndex,
                    position: tmpPos,
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: 20
                    },
                    // silent:true,
                    invisible: true,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    z: 100
                };
            })
        });
        window.addEventListener('resize', updatePosition);
        myChart.on('dataZoom', updatePosition);
    }
    myChart.on('graphRoam', updatePosition);
    function updatePosition(){
        myChart.setOption({
            graphic: echarts.util.map(option.series[0].data, function (item, dataIndex) {
                var tmpPos = myChart.convertToPixel({'seriesIndex': 0},[item.x,item.y]);
                return {
                    position: tmpPos
                };
            })
        });
    }
    function onPointDragging(dataIndex) {
        //节点上图层拖拽执行的函数
        var tmpPos = myChart.convertFromPixel({'seriesIndex': 0},this.position);
        option.series[0].data[dataIndex].x = tmpPos[0];
        option.series[0].data[dataIndex].y = tmpPos[1];
        myChart.setOption(option);
        updatePosition();
    }
    return container;
}

function  getOrganizationStructure(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
    }
    var nodes = [];

    function createNode(name) {
        //增加一个节点，如果同名节点已存在，则返回已存在节点。
        var node = null;
        var ex = true;
        for (var x = 0;x<nodes.length;x++){
            if (nodes[x].name == name) {
                ex = false;
                node = nodes[x];
                break;
            }
        }
        if (ex) {
            node = {
                name: name,
                parent: null,
                children:[],
            };
            nodes.push(node);
        }
        return node;
    }

    for (var i = 0; i < dataset["data"].length; i++) {
        var r = dataset["data"][i];
        for (var c=0; c<columns.length; c++) {
            if ((c + 1) < columns.length) {
                if (r[columns[c]].value !== r[columns[c + 1]].value && r[columns[c]].value != "" && r[columns[c+1]].value !="") {
                    var node = createNode(r[columns[c]].value);
                    var child = createNode(r[columns[c+1]].value);
                    child.parent = node.name;
                }
            } else {
                if (r[columns[c]].value != "")
                    createNode(r[columns[c]].value);
            }
        }
    }

    function getChildren(parent) {
        //递归获取子节点
        var children = [];
        for(var i=0;i<nodes.length;i++){
            if (nodes[i].parent == parent){
                children.push({name:nodes[i].name,children:getChildren(nodes[i].name)});
            }
        }
        return children;
    }

    function getType() {
        var i = Math.floor(Math.random() * 10);
        if(i >= 7){
            //##################树型结构###########################
            return {
                top: '2%',
                left: '15%',
                bottom: '2%',
                right: '20%',
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            };
        } else if (i >= 4){
            return {
                top: '20%',
                left: '10%',
                bottom: '30%',
                right: '10%',
                orient: 'vertical',
                edgeShape: 'polyline',
                edgeForkPosition: '63%',
                initialTreeDepth: 3,

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    //fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
            };
        } else {
            //#####################圆型结构#######################
            return {
                top: '18%',
                bottom: '14%',
                layout: 'radial',
                symbol: 'emptyCircle',
                initialTreeDepth: 3,
                animationDurationUpdate: 750
            };
        }

    }

    //转换为JSON系列
    var series = [];
    var legends = [];
    for (var i=0; i<nodes.length; i++) {
        if (nodes[i].parent == null) {
            legends.push({name: nodes[i].name, icon: 'rectangle'});
            var serie = {
                type: 'tree',
                name: nodes[i].name,
                data: [{
                    name: nodes[i].name,
                    children: getChildren(nodes[i].name)
                }],
                symbolSize: 7,
            };
            series.push(Object.assign(serie, getType()));
        }
    }

    var option = {
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: legends,
            borderColor: '#c23531'
        },
        series:series,
        draggable: true,
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
    };

    myChart.setOption(option);
    return container;
}

function getWebkitDep(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset =  __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    var categories = [];
    for (var i=0; i<dataset["columns"].length;i++){
        columns.push(dataset["columns"][i].name);
        categories.push({name: dataset["columns"][i].name,keyword:{},base:dataset["columns"][i].name});
    }
    var nodes = [];
    var links = [];
    //############################################
    // 数据转换方法:
    // 每行第一单元为source节点,从第二个单元开始,每个单元为target节点,
    // createNode为每个节点按值建立唯一索引,如有重复返回原节点index.
    //############################################

    function createNode(name, category) {
        var index;
        var ex = true;
        for (var x = 0;x<nodes.length;x++){
            if (nodes[x].name == name || name == "") {
                index = x;
                ex = false;
                break;
            }
        }
        if (ex) {
            var node = {
                name: name,
                value: name,
                category: category
            };
            nodes.push(node);
            index = nodes.length - 1;
        }
        return index;
    }

    for (var i = 0; i < dataset["data"].length; i++) {
        var r = dataset["data"][i];
        var source;
        for (var c=0; c<columns.length; c++) {
            if (c == 0) {
                source = createNode(r[columns[c]].value, c);
            } else {
                var target;
                target = createNode(r[columns[c]].value, c);
                if (source != target) {
                    links.push({
                        source: source,
                        target: target,
                    });
                }
            }
        }
    }

    var webkitDep = {
        type: "force",
        categories: categories,
        nodes: nodes,
        links: links
    };

    var option = {
        legend: {
            left: 20,
            data: columns
        },
        toolbox: {
            show: true,
            feature:{
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis:{
            iconStyle:{
                textPosition: 'left'
                }
            },
        },
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                position: 'right',
                formatter: '{b}'
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                edgeLength: 5,
                repulsion: 40,
                gravity: 0.2
            },
            edges: webkitDep.links
        }]
    };

    myChart.setOption(option);
    return container;
}

function getScatter(container, themes) {
    var regressionType = {"直线": "linear", "指数": "exponential", "对数": "logarithmic", "多项式": "polynomial"};
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];

    var series = [];
    var columns = [];
    var minvalue = 0;
    var maxvalue = 1;
    var columns_add = [];
    var selectType = __ECHARTS__.configs.regressionType.value;
    var forwardPeroids = Number(__ECHARTS__.configs.regressionForwardPeroids.value);
    var regressionPolynomialOrder = Number(__ECHARTS__.configs.regressionPolynomialOrder.value);

    function init() {
        for (var i = 0; i < dataset["columns"].length; i++) {
            columns.push(dataset["columns"][i].name);
        }

        for (var c = 1; c < columns.length; c++) {
            var serie = {
                name: columns[c],
                data: [],
                type: 'scatter',//"scatterGL"
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[1];
                        },
                        position: 'top'
                    }
                },
                //symbolSize: [10, 70],
                symbol: __ECHARTS__.configs.scatterSymbolShape.value,
                symbolSize: function (data) {
                    //if (maxvalue != minvalue) {
                    //    if ((maxvalue - minvalue) >= (30 - 5))
                    //        return ((30 - 5) / (maxvalue - minvalue)) * Math.abs(data[1]) + 5;
                    //    else
                    //        return ((maxvalue - minvalue) / (30 - 5)) * Math.abs(data[1]) + 5;

                    //} else
                        return __ECHARTS__.configs.scatterSymbolSize.value;
                },
                itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                }
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var d = [];
                var row = dataset["data"][i];
                if (isNaN(Number(row[columns[0]].value)))
                    d.push(i + 1);
                else
                    d.push(row[columns[0]].value);

                d.push(row[columns[c]].value);
                if (row[columns[c]].value != "" && row[columns[c]].value != null && !isNaN(Number(row[columns[c]].value))) {
                    serie.data.push(d);
                    if (Math.abs(d[1]) < minvalue)
                        minvalue = Math.abs(d[1]);
                    if (Math.abs(d[1]) > maxvalue)
                        maxvalue = Math.abs(d[1]);
                }
            }
            series.push(serie);
            for (var regression in regressionType) {
                if (regression == selectType) {
                    getRegLine(columns[c], serie, selectType, regressionPolynomialOrder);
                    break;
                }
            }
        }
    }

    function appendData(data, parameter, type) {
        var period = (data[data.length - 1][0] - data[0][0]) / (data.length - 1);
        var max = data[data.length - 1][0];
        var data_add = [];
        var i = 1;
        switch (type) {
            case "linear":  //直线
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.gradient * x + parameter.intercept]);
                    i += 1;
                }
                break;
            case "exponential": //指数
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.coefficient * Math.pow(Math.E, x * parameter.index)]);
                    i += 1;
                }
                break;
            case "logarithmic"://对数
                while (i <= forwardPeroids) {
                    var x = max + i * period;
                    data_add.push([x, parameter.gradient * Math.log(x) + parameter.intercept]);
                    i += 1;
                }
                break;
            case "polynomial"://多项式
                while (i <= forwardPeroids) {
                    var value = 0;
                    var x = max + i * period;
                    for (var s = 0; s < parameter.length; s++) {
                        value += parameter[s] * Math.pow(x, s);
                    }
                    data_add.push([x, value]);
                    i += 1;
                }
                break;
        }
        return data.slice().concat(data_add);
    }

    function getRegLine(column, serie, type, order) {
        var myRegression = ecStat.regression(regressionType[type], serie.data, order);
        myRegression.points.sort(function (a, b) {
            return a[0] - b[0];
        });
        //console.log(serie.data);
        //console.log(myRegression.parameter);
        columns_add.push(type + "(" + column + ")");
        var data = appendData(myRegression.points, myRegression.parameter, regressionType[type]);
        var regline = {
            name: type + "(" + column + ")",
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data,
            lineStyle: {
                type: 'dotted',     //'solid/dashed/dotted'
            },
            markPoint: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'left',
                    formatter: myRegression.expression,
                    color: '#333',
                    fontSize: 10
                },
                data: [{
                    coord: data[data.length - 1]
                }],
            }
        };
        regline.animationDelay = function (idx) {
            return idx * 5 + 100;
        };
        series.push(regline);
    }

    init();

    var option = {
        legend: {
            left: 20,
            data: columns.slice().concat(columns_add)
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
        }, {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            left: 10,
            width: 15,
            height: 100,
            bottom: 35
        }, {
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100,
            width: 100,
            height: 15,
            left: 30,
            bottom: 10
        }],
        series: series,
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
    };

    myChart.setOption(option);
    return container;
}

function getFunnel(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];

    var series = [];
    var columns = [];
    var legends = [];

    function init() {
        for (var i = 0; i < dataset["columns"].length; i++) {
            columns.push(dataset["columns"][i].name);
        }

        for (var c = 0; c < columns.length; c++) {
            if (c == 0) {
                for (var i = 0; i < dataset["data"].length; i++) {
                    var row = dataset["data"][i];
                    legends.push(row[columns[c]].value);
                }
            } else {
                var serie = {
                    name: columns[c],
                    type: 'funnel',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'ascending',//descending/ascending
                    //gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: []
                };
                for (var i = 0; i < dataset["data"].length; i++) {
                    var row = dataset["data"][i];
                    serie.data.push({name: row[columns[0]].value, value: row[columns[c]].value});
                }
                series.push(serie);
            }
        }

        var top = 5;
        var left = 10;
        var lines = parseInt(series.length / 2 + 0.5);
        var height = parseInt(80 / lines);
        var width = 80;
        if (series.length > 1)
            width = 40;
        for (var i = 0; i < series.length; i++) {
            series[i].top = ((top + parseInt(i / 2) * height) + parseInt(i / 2)*top) + "%";
            series[i].left = (left + (i % 2) * 40) + "%";
            if (series.length == 1) {
                series[i].funnelAlign = "center";
                series[i].label.position = "inside";
            }

            if (series.length > 1 && (i % 2) == 0) {
                series[i].funnelAlign = "right";
                series[i].label.position = "inside";
            }

            if (series.length > 1 && (i % 2) != 0) {
                series[i].funnelAlign = "left";
                series[i].label.position = "inside";
            }
            series[i].width = width + "%";
            series[i].height = height + "%";
        }
    }

    init();

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legends,//columns.slice(1),
        },
        series: series
    };

    myChart.setOption(option);
    return container;
}

function getWordCloud(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];

    var series = [];
    var columns = [];
    var legends = [];
    var maskImage = new Image();
    maskImage.src = 'logo.png';

    function init() {
        for (var i = 0; i < dataset["columns"].length; i++) {
            columns.push(dataset["columns"][i].name);
        }

        for (var c = 0; c < columns.length; c++) {
            if (c == 0) {
                for (var i = 0; i < dataset["data"].length; i++) {
                    var row = dataset["data"][i];
                    legends.push(row[columns[c]].value);
                }
            } else {
                var serie = {
                    name: columns[c],
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [__ECHARTS__.configs.wordCloudMinFontSize.value, __ECHARTS__.configs.wordCloudMaxFontSize.value],//[最小字号,最大字号],
                    rotationRange: [-90, 90],//[旋转角度,旋转角度]
                    shape: __ECHARTS__.configs.wordCloudShape.value,
                    //'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
                    drawOutOfBound: true,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Sam S Club',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        }
                    ]
                };
                serie.data = [];
                for (var i = 0; i < dataset["data"].length; i++) {
                    var row = dataset["data"][i];
                    serie.data.push({name: row[columns[0]].value, value: row[columns[c]].value});
                }
                series.push(serie);
            }
        }

        var top = 5;
        var left = 10;
        var groupwith = __ECHARTS__.configs.groupwith.value;
        var lines = parseInt(series.length / groupwith + 0.5);
        var height = parseInt(80 / lines);
        var width = 80 / groupwith;
        for (var i = 0; i < series.length; i++) {
            series[i].top = ((top + parseInt(i / groupwith) * height) + parseInt(i / groupwith) * top) + "%";
            series[i].left = (left + (i % groupwith) * width) + "%";
            series[i].width = width + "%";
            series[i].height = height + "%";
        }
    }

    init();

    var option = {
        tooltip: {
            formatter: function (param) {
                return param.name + '<br>' + param.seriesName + ':'
                    + param.value;
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: columns.slice(1),
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        series: series
    };

    myChart.setOption(option);
    return container;
}

function getLiqiud(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var series = [];

    function init() {
        for (var i = 0; i < dataset["data"].length; i++) {
            var r = dataset["data"][i];
            var serie = {
                name: r[columns[0]].value,
                type: 'liquidFill',
                data: [],
                color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
                //center: ['50%', '50%'],
                //radius: '50%',
                amplitude: '8%',
                waveLength: '80%',
                phase: 'auto',
                period: 'auto',
                direction: 'right',
                smooth: true,

                shape: __ECHARTS__.configs.liqiudShape.value,

                waveAnimation: true,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                animationDuration: 2000,
                animationDurationUpdate: 1000,

                outline: {
                    show: true,
                    borderDistance: 3,
                    itemStyle: {
                        color: '#1598ED',//'none',
                        borderColor: '#294D99',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.25)'
                    }
                },

                backgroundStyle: {
                    color: '#E3F7FF'
                },

                itemStyle: {
                    opacity: 0.6,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                },

                label: {
                    show: true,
                    color: '#294D99',
                    insideColor: '#fff',
                    fontSize: __ECHARTS__.configs.liqiudFontSize.value,
                    fontWeight: 'bold',
                    align: 'center',
                    baseline: 'middle',
                    position: 'inside'
                },

                emphasis: {
                    itemStyle: {
                        opacity: 0.8
                    }
                }
            };
            for (var c = 0; c < columns.length; c++) {
                if (c == 0) {
                    legends.push(r[columns[c]].value);
                }
                else {
                    serie.data.push({
                        name: columns[c],
                        value: r[columns[c]].value
                    });
                }
            }
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            series.push(serie);
        }

        var groupwith = __ECHARTS__.configs.groupwith.value;
        var lines = parseInt(series.length / groupwith + 0.5);
        var radius = 80 / (lines>groupwith?lines:groupwith);
        for (var i = 0; i < series.length; i++) {
            series[i].radius = radius + "%";
            var x = radius * 2 / 3 + (i % groupwith) * (radius + 5);
            var y = radius * 2 / 3 + parseInt(i / groupwith) * (radius + 5);
            series[i].center = [x + "%", y + "%"];
        }
    }

    init();
    var option = {
        //tooltip: {},
        legend: {
            orient: 'vertical',
            left: 'left',
            data: legends,
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        label: {
            formatter: function (param) {
                return param.seriesName + '\n\n'
                    + param.name + '\n\n'
                    + Math.round(param.value * 10000) / 100 + "%";
            },
        },
        series: series
    };

    myChart.setOption(option);

    myChart.on('mouseover', function (params) {
        stopTimer();
    });
    myChart.on('mouseout', function (params) {
        startTimer();
    });

    var timer;
    function doing() {
        let option = myChart.getOption();
        for (var i=0;i<option.series.length;i++){
            if (option.series[i].data.length > 1) {
                var data = option.series[i].data.slice(1);
                data.push(option.series[i].data[0]);
                option.series[i].data = data;
            }
        }
        myChart.setOption(option);
    }

    function startTimer() {
        timer = setInterval(doing,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer=null;
    }

    setTimeout(startTimer,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    return container;
}

function getGaugeWithAll(container, themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var series = [];

    for (var i = 0; i < dataset["data"].length; i++) {
        var r = dataset["data"][i];
        var serie = {
            name: legends[i],
            type: "gauge",
            title: {
                fontWeight: 'bolder',
                fontSize: __ECHARTS__.configs.gaugeTitleFontSize.value,
                color: 'gray',
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowBlur: 10,
            },
            axisLine: {
                lineStyle: {
                    width: __ECHARTS__.configs.gaugeAxisLineWidth.value,//10, //圆X轴宽度
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    color:[[0.2, '#3CB371'], [0.8, '#6388ae'], [1, '#DB7093']]
                        //默认[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                }
            },
            axisLabel: {
                fontSize: __ECHARTS__.configs.gaugeAxisLabelFontSize.value,
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowBlur: 10,
            },
            splitLine:{
                length: 15,
            },
            pointer: {
                width: 5, //指针宽度
                length: '60%'  //指针长度
            },
            detail: {
                formatter: ['{value}%', ''].join("\n"),
                fontSize:  __ECHARTS__.configs.gaugeLabelFontSize.value,
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowBlur: 10,
            },
            data: []
        };
        for (var c = 0; c < columns.length; c++) {
            if (c == 0)
                legends.push(r[columns[c]].value);
            else {
                serie.data.push({
                    "name": legends[i] + "\n\n" + columns[c],
                    "value": r[columns[c]].value,
                    itemStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    }
                })
            }
        }
        serie.animationDelay = function (idx) {
            return idx * 5 + 100;
        };
        series.push(serie);
    }

    var groupwith = __ECHARTS__.configs.groupwith.value;
    var lines = parseInt(series.length / groupwith + 0.5);
    var radius = 80 / (lines > groupwith ? lines : groupwith);
    for (var i = 0; i < series.length; i++) {
        series[i].radius = radius + "%";
        var x = radius * 2 / 3 + (i % groupwith) * (radius + 5);
        var y = radius * 2 / 3 + parseInt(i / groupwith) * (radius + 5);
        series[i].center = [x + "%", y + "%"];
    }

    var myChart = echarts.init(container, themes);
    var option = {
        legend: {
            left: 10,
            orient: 'vertical',
            data: legends
        },
        tooltip: {
            formatter: '{b} : {c}%'
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                restore: {},
                dataView: {show: true, readOnly: true}
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        series: series,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);
    var timer;
    myChart.on('mouseover', function (params) {
        stopTimer();
    });
    myChart.on('mouseout', function (params) {
        startTimer();
    });
    function doing() {
        let option = myChart.getOption();
        for (var i = 0; i < option.series.length; i++) {
            if (option.series[i].data.length > 1) {
                var data = option.series[i].data.slice(1);
                data.push(option.series[i].data[0]);
                option.series[i].data = data;
            }
        }
        myChart.setOption(option);
    }

    function startTimer() {
        timer = setInterval(doing,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer=null;
    }

    setTimeout(startTimer,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    return container;
}

function getGaugeWithOne(container, themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var legends = [];
    var seriesgroup = [];
    var index = 0;

    for (var c = 0; c < columns.length; c++) {
        var series = [];
        for (var i = 0; i < dataset["data"].length; i++) {
            var r = dataset["data"][i];
            if (c == 0) {
                legends.push(r[columns[c]].value);
            } else {
                var serie = {
                    name: legends[i],
                    type: "gauge",
                    title: {
                        fontWeight: 'bolder',
                        fontSize: __ECHARTS__.configs.gaugeTitleFontSize.value,
                        color: 'gray',
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowBlur: 10,
                    },
                    axisLine: {
                        lineStyle: {
                            width: __ECHARTS__.configs.gaugeAxisLineWidth.value,//10, //圆X轴宽度
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10,
                            color: [[0.2, '#3CB371'], [0.8, '#6388ae'], [1, '#DB7093']]
                            //默认[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                        }
                    },
                    axisLabel: {
                        fontSize: __ECHARTS__.configs.gaugeAxisLabelFontSize.value,
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowBlur: 10,
                    },
                    splitLine: {
                        length: 15,
                    },
                    pointer: {
                        width: 5, //指针宽度
                        length: '60%'  //指针长度
                    },
                    detail: {
                        formatter: ['{value}%', ''].join("\n"),
                        fontSize: __ECHARTS__.configs.gaugeLabelFontSize.value,
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowBlur: 10,
                    },
                    data: []
                };
                serie.data.push({
                    "name": legends[i] + "\n\n" + columns[c],
                    "value": r[columns[c]].value,
                    itemStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    }
                });
                serie.animationDelay = function (idx) {
                    return idx * 5 + 100;
                };
                series.push(serie);
            }
        }
        seriesgroup.push(series);
    }

    var groupwith = __ECHARTS__.configs.groupwith.value;
    for (var g = 0; g < seriesgroup.length; g++) {
        var lines = parseInt(seriesgroup[g].length / groupwith + 0.5);
        var radius = 80 / (lines > groupwith ? lines : groupwith);
        for (var i = 0; i < seriesgroup[g].length; i++) {
            var x = radius * 2 / 3 + (i % groupwith) * (radius + 5);
            var y = radius * 2 / 3 + parseInt(i / groupwith) * (radius + 5);
            seriesgroup[g][i].radius = radius + "%";
            seriesgroup[g][i].center = [x + "%", y + "%"];
        }
    }

    var myChart = echarts.init(container, themes);
    var option = {
        //legend: {
        //    left: 10,
        //    orient: 'vertical',
        //    data: legends
        //},
        tooltip: {
            formatter: '{b} : {c}%'
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                restore: {},
                dataView: {show: true, readOnly: true}
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        series: seriesgroup[index],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 3;
        }
    };
    myChart.setOption(option);

    var timer;
    myChart.on('mouseover', function (params) {
        stopTimer();
    });
    myChart.on('mouseout', function (params) {
        startTimer();
    });
    function doing() {
        let option = myChart.getOption();
        if (index < (seriesgroup.length-1)){
            index+=1;
        } else {
            index=0;
        }
        option.series = seriesgroup[index];
        myChart.setOption(option);
    }

    function startTimer() {
        timer = setInterval(doing,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer=null;
    }

    setTimeout(startTimer,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    return container;
}

function getCalendar(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));
    var series = [];
    var visualMaps = [];
    var calendars = [];
    var rangeMin;
    var rangeMax;

    function init() {
        for (var c = 0; c < columns.length; c++) {
            if (c == 0) {
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    if (i == 0) {
                        rangeMin = echarts.format.formatTime('yyyy-MM-dd', r[columns[0]].value);
                        rangeMax = echarts.format.formatTime('yyyy-MM-dd', r[columns[0]].value);
                    } else {
                        rangeMin = echarts.format.formatTime('yyyy-MM-dd', r[columns[c]].value) < rangeMin ? echarts.format.formatTime('yyyy-MM-dd', r[columns[c]].value) : rangeMin;
                        rangeMax = echarts.format.formatTime('yyyy-MM-dd', r[columns[c]].value) > rangeMax ? echarts.format.formatTime('yyyy-MM-dd', r[columns[c]].value) : rangeMax;
                    }
                }
            } else {
                var serie = {
                    name: columns[c],
                    type: __ECHARTS__.configs.calendarType.value, //['heatmap','scatter','effectScatter']
                    coordinateSystem: 'calendar',
                    calendarIndex: c - 1,
                    data: []
                };
                var visualMap = {
                    //type: 'piecewise',
                    calculable: true,
                    //orient: 'vertical',//'horizontal'
                    //left: 10,
                    //top: 10,
                    seriesIndex: c - 1,//影射数据系列
                    dimension: 1,//影射数据纬度
                    textStyle: {
                        color: 'gray'
                    }
                };
                var calendar = {
                    orient: __ECHARTS__.configs.calendarOrient.value, //'vertical',//'horizontal'
                    left: "10%",
                    right: "10%",
                    cellSize: ['auto', 'auto'],
                    itemStyle: {
                        borderWidth: 0.5,
                    },
                    yearLabel: {show: true, margin: 20},
                    dayLabel: {nameMap: "cn", color: "gray", margin: 5},
                    monthLabel: {nameMap: "cn", color: "gray"},
                };
                var valueMin = null;
                var valueMax = null;
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    if (r[columns[c]].value != "" && r[columns[c]].value != null && !isNaN(Number(r[columns[c]].value))) {
                        serie.data.push([r[columns[0]].value, r[columns[c]].value]);
                        if (valueMin == null || valueMax == null) {
                            valueMin = Number(r[columns[c]].value);
                            valueMax = Number(r[columns[c]].value);
                        } else {
                            if (Number(r[columns[c]].value) < valueMin)
                                valueMin = Number(r[columns[c]].value);
                            if (Number(r[columns[c]].value) > valueMax)
                                valueMax = Number(r[columns[c]].value);
                        }
                    }
                }
                if (__ECHARTS__.configs.calendarType.value == 'effectScatter' || __ECHARTS__.configs.calendarType.value == 'scatter') {
                    serie.symbolSize = function (val) {
                        var value = val[1] / (valueMax / __ECHARTS__.configs.scatterSymbolSize.value);
                        return value < 5 ? 5 : value;
                    };
                }
                visualMap.min = valueMin;
                visualMap.max = valueMax;
                calendar.range = [rangeMin, rangeMax];
                serie.animationDelay = function (idx) {
                    return idx * 5 + 100;
                };
                calendars.push(calendar);
                series.push(serie);
                visualMaps.push(visualMap);
            }
        }
        if (__ECHARTS__.configs.calendarOrient.value == "vertical") {
            var width = (80 - 15 * calendars.length) / calendars.length;
            for (var i = 0; i < calendars.length; i++) {
                calendars[i].top =  "15%";
                calendars[i].left = (15 * (i + 1) + width * i) + "%";
                visualMaps[i].left = containerWidth * (15 * (i + 1) + width * i)/100 - 40 ;
                calendars[i].width = width + "%";
                visualMaps[i].itemHeight = containerWidth * width / 100;
                calendars[i].bottom = "10%";
                visualMaps[i].top = "90%";
                visualMaps[i].orient = 'horizontal';
            }
        } else {
            var height = (95 - 10 * calendars.length) / calendars.length;
            for (var i = 0; i < calendars.length; i++) {
                calendars[i].top = (10 * (i + 1) + height * i) + "%";
                visualMaps[i].top = containerHeight * (10 * (i + 1) + height * i)/100 - 10;
                calendars[i].left = "10%";
                visualMaps[i].left = "1%";
                calendars[i].width = "80%";
                calendars[i].height = (height + "%");
                visualMaps[i].itemHeight = containerHeight * height / 100;
                visualMaps[i].orient = "vertical";
            }
        }
    }

    init();
    var option = {
        tooltip: {
            position: 'top',
            formatter: function (p) {
                var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
                return format + '<br> ' + p.seriesName + ": " + p.data[1];
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                restore: {},
                dataView: {show: true, readOnly: true}
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        visualMap: visualMaps,
        calendar: calendars,
        series: series
    };
    myChart.setOption(option);
    return container;

}

function getGeoOfChina(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));
    var series = [];
    var index = 0;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap.City[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    function init() {
        for (var c = 0; c < columns.length; c++) {
            if (c >0 ) {
                var data = [];
                var min = null;
                var max = null;
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    if (r[columns[c]].value != "" && r[columns[c]].value != null && !isNaN(Number(r[columns[c]].value))) {
                        data.push({name: r[columns[0]].value, value: r[columns[c]].value});
                        if (min == null || max == null) {
                            min = Number(r[columns[c]].value);
                            max = Number(r[columns[c]].value);
                        } else {
                            if (Number(r[columns[c]].value) < min)
                                min = Number(r[columns[c]].value);
                            if (Number(r[columns[c]].value) > max)
                                max = Number(r[columns[c]].value);
                        }
                    }
                }
                series.push({name:columns[c],data:data,min:min,max:max});
            }
        }
    }

    init();

    var option = {
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                var value = "";
                try {
                    value = params.name + '<br>' +  params.seriesName + ': ' + ((params['value'].length == 3) ? params.data['value'][2] : params.data['value'])
                }catch (e) {
                }
                return value
            },
        },
        visualMap: {
            min: series[index].min,
            max: series[index].max,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 10,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        },
        //backgroundColor: '#013954',
        geo: {
            map: "china",
            roam: true,
            scaleLimit: {
                min: 1,
                max: 10
            },
            label: {
                normal: {
                    show: true,
                    color: "gray",
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [
            {
                name:series[index].name,
                type: "map",
                geoIndex: 0,
                data: series[index].data,
            },
            {
                name:series[index].name,
                type: 'effectScatter',//'scatter',//'effectScatter'
                coordinateSystem: 'geo',
                data: convertData(series[index].data.sort(function (a, b) {
                    return b.value - a.value;
                })),
                symbolSize: function (val) {
                    var value = val[2] / (series[index].max / __ECHARTS__.configs.scatterSymbolSize.value);
                    return value<5?5:value;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'top',
                        show: true,
                        color: "gray"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "brown",
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                    }
                },
                zlevel: 1
            }
        ],

        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
    };

    myChart.setOption(option);

    var timer;
    myChart.on('mouseover', function (params) {
        stopTimer();
    });
    myChart.on('mouseout', function (params) {
        startTimer();
    });

    function doing() {
        var option = myChart.getOption();
        if (index < (series.length-1)) {
            index += 1;
        } else {
            index = 0;
        }
        option.series[0].name = series[index].name;
        option.series[1].name = series[index].name;
        option.visualMap = {
            min: series[index].min,
            max: series[index].max,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 10,
            itemWidth: 15,
            itemHeight: containerHeight/3,
            textStyle: {
                color: 'gray'
            },
        };
        option.series[0].data = series[index].data;
        option.series[1].data = convertData(series[index].data.sort(function (a, b) {
                    return b.value - a.value;
                }));

        myChart.setOption(option);
    }

    function startTimer() {
        timer = setInterval(doing,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    setTimeout(startTimer,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);

    return container;
}

function getGeoOfBeijing(container, themes) {
    var myChart = echarts.init(container, themes);
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));
    var series = [];
    var index = 0;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap.CCB[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    function init() {
        for (var c = 0; c < columns.length; c++) {
            if (c >0 ) {
                var data = [];
                var min = null;
                var max = null;
                for (var i = 0; i < dataset["data"].length; i++) {
                    var r = dataset["data"][i];
                    if (r[columns[c]].value != "" && r[columns[c]].value != null && !isNaN(Number(r[columns[c]].value))) {
                        data.push({name: r[columns[0]].value, value: r[columns[c]].value});
                        if (min == null || max == null) {
                            min = Number(r[columns[c]].value);
                            max = Number(r[columns[c]].value);
                        } else {
                            if (Number(r[columns[c]].value) < min)
                                min = Number(r[columns[c]].value);
                            if (Number(r[columns[c]].value) > max)
                                max = Number(r[columns[c]].value);
                        }
                    }
                }
                series.push({name:columns[c],data:data,min:min,max:max});
            }
        }
    }

    init();

    var option = {
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },

        tooltip: {
            show: true,
            formatter: function (params) {
                var value = "";
                try {
                    value = params.name + '<br>' +  params.seriesName + ': ' + ((params['value'].length == 3) ? params.data['value'][2] : params.data['value'])
                }catch (e) {
                }
                return value
            },
        },
        visualMap: {
            min: series[index].min,
            max: series[index].max,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 10,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        },
        //backgroundColor: '#013954',
        geo: {
            map: "北京",
            roam: true,
            scaleLimit: {
                min: 1,
                max: 10
            },
            label: {
                normal: {
                    show: true,
                    color: "gray",

                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [
            {
                name: series[index].name,
                type: "map",
                geoIndex: 0,
                data: series[index].data,
            },
            {
                name: series[index].name,
                type: 'effectScatter',//'scatter',//'effectScatter'
                coordinateSystem: 'geo',
                data: convertData(series[index].data.sort(function (a, b) {
                    return b.value - a.value;
                })),
                symbolSize: function (val) {
                    var value = val[2] / (series[index].max / __ECHARTS__.configs.scatterSymbolSize.value);
                    return value<5?5:value;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'top',
                        show: true,
                        color: "gray"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "brown",
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                    }
                },
                zlevel: 1
            }
        ],

        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
    };

    myChart.setOption(option);

    var timer;
    myChart.on('mouseover', function (params) {
        stopTimer();
    });
    myChart.on('mouseout', function (params) {
        startTimer();
    });

    function doing() {
        var option = myChart.getOption();
        if (index < (series.length-1)) {
            index += 1;
        } else {
            index = 0;
        }
        option.series[0].name = series[index].name;
        option.series[1].name = series[index].name;
        option.visualMap = {
            min: series[index].min,
            max: series[index].max,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 10,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        };
        option.series[0].data = series[index].data;
        option.series[1].data = convertData(series[index].data.sort(function (a, b) {
                    return b.value - a.value;
                }));

        myChart.setOption(option);
    }

    function startTimer() {
        timer = setInterval(doing, __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    setTimeout(startTimer,  __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000);

    return container;
}

function getBar3D(container, themes) {
    var myChart = echarts.init(container, themes);
    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));

    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    var rows = [];
    var valueMin = null;
    var valueMax = null;
    var series = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                rows.push(r[columns[c]].value)
            }
        } else {
            var data = [];
            var serie = {
                name: columns[c],
                type: 'bar3D',
                data: [],
                bevelSize: 0.1,
                //柱子的倒角尺寸。支持设置为从 0 到 1 的值。默认为 0，即没有倒角。
                bevelSmoothness: 4,
                //柱子倒角的光滑/圆润度，数值越大越光滑/圆润

                shading: 'realistic',
                //'color' 只显示颜色，不受光照等其它因素的影响。
                //'lambert' 通过经典的 lambert 着色表现光照带来的明暗。
                //'realistic' 真实感渲染，
                realisticMaterial: {
                    roughness: 0.5,
                    //用于表示材质的粗糙度，0为完全光滑，1完全粗糙，中间的值则是介于这两者之间。
                    metalness: 0,
                    //表示材质是金属还是非金属，0为非金属，1为金属，中间的值则是介于这两者之间。通常设成0和1就能满足大部分场景了。
                },
                postEffect: {
                    enable: true,
                    SSAO: {
                        enable: true,
                        radius: 5
                    }
                },

                itemStyle: {
                    opacity: __ECHARTS__.configs.ItemStyleOpacityFor3D.value,
                    //柱子的透明度,取值范围[0-1]
                    color: "red"
                },

                label: {
                    show: __ECHARTS__.configs.LabelShowFor3D.value == "YES",
                    textStyle: {
                        fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                        borderWidth: 1
                    },
                    formatter: function (params) {
                        return rows[params.value[0]] + "\n" + columns[params.value[1] + 1] + ": " + params.value[2];
                    },
                },
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                },
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicOut"
            };
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                data.push([i, c - 1, r[columns[c]].value]);
                if (valueMin == null || valueMin > r[columns[c]].value)
                    valueMin = r[columns[c]].value;
                if (valueMax == null || valueMax < r[columns[c]].value)
                    valueMax = r[columns[c]].value;
            }
            serie.data = data.map(function (item) {
                return {
                    value: [item[0], item[1], item[2]],
                }
            });
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            series.push(serie);
        }
    }

    var option = {
        legend: {
            left: 10,
            data: columns.slice(1, columns.length)
        },
        tooltip: {
            show: false
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        visualMap: {
            min: valueMin,
            max: valueMax,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 50,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        },
        xAxis3D: {
            type: 'category',
            data: rows,
        },
        yAxis3D: {
            type: 'category',
            data: columns.slice(1),
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: __ECHARTS__.configs.BoxWidthFor3D.value,
            boxDepth: __ECHARTS__.configs.BoxDepthFor3D.value,
            viewControl: {
                autoRotate: __ECHARTS__.configs.AutoRotateFor3D.value == "YES",
                autoRotateSpeed: 10,
                projection: 'orthographic',
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicInOut",
                animationDelay: function (idx) {
                    return idx * 5 + 100;
                },
            },
            light: {
                main: {
                    intensity: 1.2,
                    //shadow: true
                },
                ambient: {
                    intensity: 0.3
                }
            },
        },
        series: series,
    };
    myChart.setOption(option);
    return container;
}

function getLine3D(container, themes) {
    var myChart = echarts.init(container, themes);
    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));

    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    var rows = [];
    var series = [];
    var valueMin = null;
    var valueMax = null;
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                rows.push(r[columns[c]].value)
            }
        } else {
            var serie = {
                name: columns[c],
                type: "line3D",
                data: [],
                smooth: true,//平滑线
                lineStyle: {
                    opacity: __ECHARTS__.configs.ItemStyleOpacityFor3D.value,
                    width: __ECHARTS__.configs.lineStyleWidth.value,
                },
                itemStyle : {},
                label: {
                    show: __ECHARTS__.configs.LabelShowFor3D.value == "YES",
                    textStyle: {
                        fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                        borderWidth: 1
                    },
                    formatter: function (params) {
                        return rows[params.value[0]] + "\n" + columns[params.value[1] + 1] + ": " + params.value[2];
                    },
                },
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                },
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicOut"
            };
            var data = [];
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                data.push([i, c - 1, r[columns[c]].value]);
                if (valueMin == null || valueMin > r[columns[c]].value)
                    valueMin = r[columns[c]].value;
                if (valueMax == null || valueMax < r[columns[c]].value)
                    valueMax = r[columns[c]].value;
            }
            serie.data = data.map(function (item) {
                return {
                    value: [item[0], item[1], item[2]],
                }
            });
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            series.push(serie);
        }
    }

    var option = {
        legend: {
            left: 10,
            data: columns.slice(1, columns.length)
        },
        tooltip: {
            show: false
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        visualMap: {
            min: valueMin,
            max: valueMax,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 50,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        },

        xAxis3D: {
            type: 'category',
            data: rows,
        },
        yAxis3D: {
            type: 'category',
            data: columns.slice(1),
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: __ECHARTS__.configs.BoxWidthFor3D.value,
            boxDepth: __ECHARTS__.configs.BoxDepthFor3D.value,
            viewControl: {
                autoRotate: __ECHARTS__.configs.AutoRotateFor3D.value == "YES",
                autoRotateSpeed: 10,
                projection: 'orthographic',
                //animationDurationUpdate: 1000,
                //animationEasingUpdate: "cubicInOut"
            },
        },
        series: series,
    };
    myChart.setOption(option);
    return container;
}

function getScatter3D(container, themes) {
    var myChart = echarts.init(container, themes);
    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));

    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    var rows = [];
    var series = [];
    var valueMin = null;
    var valueMax = null;
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    for (var c = 0; c < columns.length; c++) {
        if (c == 0) {
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                rows.push(r[columns[c]].value)
            }
        } else {
            var serie = {
                name: columns[c],
                type: "scatter3D",
                data: [],
                symbolSize: __ECHARTS__.configs.scatterSymbolSize.value,
                symbol: __ECHARTS__.configs.scatterSymbolShape.value,
                //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                itemStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.8)',
                    opacity: __ECHARTS__.configs.ItemStyleOpacityFor3D.value,
                },
                label: {
                    show: __ECHARTS__.configs.LabelShowFor3D.value == "YES",
                    textStyle: {
                        fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                        borderWidth: 1
                    },
                    formatter: function (params) {
                        return rows[params.value[0]] + "\n" + columns[params.value[1] + 1] + ": " + params.value[2];
                    },
                },
                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: __ECHARTS__.configs.LabelFontSizeFor3D.value,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                },
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicOut"
            };
            var data = [];
            for (var i = 0; i < dataset["data"].length; i++) {
                var r = dataset["data"][i];
                data.push([i, c - 1, r[columns[c]].value]);
                if (valueMin == null || valueMin > r[columns[c]].value)
                    valueMin = r[columns[c]].value;
                if (valueMax == null || valueMax < r[columns[c]].value)
                    valueMax = r[columns[c]].value;
            }
            serie.data = data.map(function (item) {
                return {
                    value: [item[0], item[1], item[2]],
                }
            });
            serie.animationDelay = function (idx) {
                return idx * 5 + 100;
            };
            series.push(serie);
        }
    }

    var option = {
        legend: {
            left: 10,
            data: columns.slice(1, columns.length)
        },
        tooltip: {
            show: false
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                restore: {show: true},
                dataView: {show: true, readOnly: true},
            },
            right: "10",
            orient: "vertical",
            top: "top",
            emphasis: {
                iconStyle: {
                    textPosition: 'left'
                }
            },
        },
        visualMap: {
            min: valueMin,
            max: valueMax,
            //type: 'piecewise',
            calculable: true,
            orient: 'vertical',//'horizontal'
            left: 10,
            top: 50,
            itemWidth: 15,
            itemHeight: containerHeight / 3,
            textStyle: {
                color: 'gray'
            },
        },

        xAxis3D: {
            type: 'category',
            data: rows,
        },
        yAxis3D: {
            type: 'category',
            data: columns.slice(1),
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: __ECHARTS__.configs.BoxWidthFor3D.value,
            boxDepth: __ECHARTS__.configs.BoxDepthFor3D.value,
            viewControl: {
                autoRotate: __ECHARTS__.configs.AutoRotateFor3D.value == "YES",
                autoRotateSpeed: 10,
                projection: 'orthographic',
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicInOut",
                animationDelay: function (idx) {
                    return idx * 5 + 100;
                },
            },
        },
        series: series,
    };
    myChart.setOption(option);
    return container;
}

function getCategoryLine(container, themes) {
    var myChart = echarts.init(container, themes);
    var containerWidth = Number(container.style.width.slice(0).replace(/px/i, ""));
    var containerHeight = Number(container.style.height.slice(0).replace(/px/i, ""));

    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    var times = [];
    var options = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }

    for (var i = 0; i < dataset["data"].length; i++) {
        var opt = {
            series: []
        };
        var row = dataset["data"][i];
        times.push(row[columns[0]].value);
        var data = [];
        for (var c = 1; c < columns.length; c++) {
            data.push({name: columns[c], value: row[columns[c]].value});
        }
        var serie = {name: row[columns[0]].value, data: data};
        if (__ECHARTS__.configs.categoryLineType.value == "bar") {
            serie.label = {
                show: __ECHARTS__.configs.barLabelShow.value == "YES",
                rotate: __ECHARTS__.configs.barLabelRotate.value,
                align: 'center',
                verticalAlign: 'middle',
                position: __ECHARTS__.configs.barLabelPosition.value,
                distance: 15,
                formatter: '{value|{c}}',
                rich: {
                    value: {
                        textBorderColor: '#fff',
                        fontSize: __ECHARTS__.configs.barLabelFontSize.value,
                    }
                }
            };
        }
        if (__ECHARTS__.configs.categoryLineType.value == "pie") {
            serie.radius = "70%";
            serie.label = {
                show: true,
            };
            if (__ECHARTS__.configs.richTextLabel.value == "YES") {
                serie.label = {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    //shadowBlur:3,
                    //shadowOffsetX: 2,
                    //shadowOffsetY: 2,
                    //shadowColor: '#999',
                    padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '',
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [4, 4, 0, 0]
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                };
            }
            serie.labelLine = {
                show: true
            };
        }
        if (__ECHARTS__.configs.categoryLineType.value == "line" || __ECHARTS__.configs.categoryLineType.value == "areaStyle") {
            serie.smooth = true;
            serie.lineStyle = {
                width: Number(__ECHARTS__.configs.lineStyleWidth.value),
            };
            if (__ECHARTS__.configs.categoryLineType.value == "areaStyle") {
                serie.areaStyle = {};
            }
        }
        serie.animationDelay = function (idx) {
            return idx * 5 + 100;
        };
        opt.series.push(serie);
        options.push(opt);
    }

    var option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                //考虑数据通用性，使用类目轴
                //'value' 数值轴，适用于连续数据。
                // 'category' 类目轴，适用于离散的类目数据。
                // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                realtime: true,
                //事实时更新数据
                loop: true,
                //循环播放
                autoPlay: true,
                //自动播放
                // currentIndex: 2,
                playInterval: __ECHARTS__.configs.seriesLoopPlayInterval.value * 1000,
                // controlStyle: {
                //     position: 'left'
                // },
                symbol: 'emptyCircle',
                //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                symbolSize: 2,
                data: times,
                label: {
                    formatter: function (s) {
                        return s;
                    }
                },
                bottom: 15
            },
            tooltip: {},
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {show: true},
                    restore: {show: true},
                    dataView: {show: true, readOnly: true},
                },
                right: "10",
                orient: "vertical",
                top: "top",
                emphasis: {
                    iconStyle: {
                        textPosition: 'left'
                    }
                },
            },
            calculable: __ECHARTS__.configs.categoryLineType.value != "pie",
            grid: {
                top: 80,
                bottom: 100,
                tooltip: {
                    show: __ECHARTS__.configs.categoryLineType.value != "pie",
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: __ECHARTS__.configs.categoryLineType.value != "pie",
                            formatter: function (params) {
                                return params.value;
                            }
                        }
                    }
                }
            },
            xAxis: {
                show: __ECHARTS__.configs.categoryLineType.value != "pie",
                'type': 'category',
                'axisLabel': {'interval': 0},
                'data': columns.slice(1),
                splitLine: {show: false}
            },
            yAxis: {
                show: __ECHARTS__.configs.categoryLineType.value != "pie",
                type: 'value',
            },
            series: {
                type: __ECHARTS__.configs.categoryLineType.value == "areaStyle" ? "line" : __ECHARTS__.configs.categoryLineType.value,
            },
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 3;
            }
        },
        options: options
    };
    myChart.setOption(option);
    return container;
}

function getFunctionLine(container, themes) {
    var dataset = __DATASET__["result"][__DATASET__["default"]];
    var columns = [];
    for (var i = 0; i < dataset["columns"].length; i++) {
        columns.push(dataset["columns"][i].name);
    }
    var series = [];
    for (var c=1;c<columns.length;c++) {
        var serie = {
            name: columns[c],
            type: 'line',
            showSymbol: true,
            clip: true,
            smooth: true,
            //平滑线
            data: [],
            lineStyle: {
                width: Number(__ECHARTS__.configs.lineStyleWidth.value),
            },
            itemStyle: {},

        };
        serie.animationDelay = function (idx) {
            return idx * 5 + 100;
        };
        for (var i = 0; i < dataset["data"].length; i++) {
            var row = dataset["data"][i];
            serie.data.push([row[columns[0]].value, row[columns[c]].value]);
        }
        series.push(serie);
    }

    var myChart = echarts.init(container, themes);
    var option = {
        legend: {
            left: 10,
            data: columns.slice(1)
        },
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        animation: true,
        grid: {
            top: 40,
            left: 50,
            right: 40,
            bottom: 50
        },
        xAxis: {
            name: 'x',
            minorTick: {
                show: true
            },
            splitLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            name: 'y',
            min: Number(__DATASET__.yRange.min.value),
            max: Number(__DATASET__.yRange.max.value),
            minorTick: {
                show: true
            },
            splitLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            }
        },
        dataZoom: [{
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
            startValue: -20,
            endValue: 20
        }, {
            show: true,
            type: 'inside',
            filterMode: 'none',
            yAxisIndex: [0],
            startValue: -20,
            endValue: 20
        }],
        series: series
    };
    myChart.setOption(option);
    return container;
}





