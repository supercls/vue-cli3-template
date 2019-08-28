export {monthCont, dayCont,timaAge,fourSixth, frequencyCont,cardType,hourCont,minuteCont,heightCont,radixPoint,weightCont,tenCont,bitCon,sexCon,headCon,yunCon,booleanCon,weekCon,bornCon,alltenCon,hasCon,momAge,addressCon,hukCon}

let cardType=[    //证件类型
    {text: '身份证', value: '身份证'},
    {text: '护照', value: '护照'}
];

let hourCont=[]         //小时范围
for(let i =0; i< 24; i ++){
    let obj= {text: i+"小时", value: i};
    hourCont.push(obj)
}

let minuteCont=[]         //分钟范围
for(let i = 0; i< 60; i ++){
    let obj= {text: i+"分钟", value: i};
    minuteCont.push(obj)
}

let frequencyCont=[]         //次数
for(let i = 0; i< 100; i ++){
    let obj= {text: i, value: i};
    frequencyCont.push(obj)
}

let monthCont=[]         //次数
for(let i = 0; i< 100; i ++){
    let obj= {text: i+"月", value: i};
    monthCont.push(obj)
}

let dayCont=[]         //天数
for(let i = 0; i< 100; i ++){
    let obj= {text: i+"天", value: i};
    dayCont.push(obj)
}

let heightCont=[]         //身高范围
for(let i =20;i<201;i++){
    let obj= {text: i, value: i};
    heightCont.push(obj)
}
let radixPoint=[]       //.0
for(let i =0;i<10;i++){
    let obj= {text: '.'+i, value: '.'+i};
    radixPoint.push(obj)
}
let weightCont=[]       //体重
for(let i =1;i<151;i++){
    let obj= {text: i, value: i};
    weightCont.push(obj)
}
let tenCont=[]          //0~9
for(let i =0;i<10;i++){
    let obj= {text: i+'', value: i};
    tenCont.push(obj)
}
let bitCon=[           //是否
    {text: '是', value: '是'},
    {text: '否', value:  '否'}
]
let booleanCon=[           //是否
    {text: '是', value: 1},
    {text: '否', value:  0}
]
let sexCon=[
    {text: '男', value: true},
    {text: '女', value: false}
]
let headCon=[]  //1~100
for(let i =1;i<101;i++){
    let obj= {text: i, value: i};
    headCon.push(obj)
}
let yunCon=[]      //20-50
for(let i =0;i<43;i++){
    let obj= {text: i, value: i};
    yunCon.push(obj)
}
let weekCon=[]
for(let i =0;i<8;i++){
    let obj= {text: i, value: i};
    weekCon.push(obj)
}
let bornCon=[         //分娩方式
    {text: '顺产', value: '顺产'},
    {text: '剖宫产', value: '剖宫产'},
    {text: '产钳', value: '产钳'},
    {text: '吸引', value: '吸引'},
    {text: '臀牵', value: '臀牵'},
    {text: '臀助', value: '臀助'},
    {text: '其他', value: '其他'}
]
let alltenCon=[]
for(let i =0;i<11;i++){
    let obj= {text: i, value: i};
    alltenCon.push(obj)
}
let hasCon=[           //有，无
    {text: '有', value: '有'},
    {text: '无', value: '无'}
]

let momAge=[]
for(let i =10;i<71;i++){
    let obj= {text: i, value: i};
    momAge.push(obj)
}
let addressCon=[           //
    {text: '城镇', value: true},
    {text: '农村', value: false}
]
let hukCon=[           //
    {text: '本区县', value: '本区县'},
    {text: '本市', value: '本市'},
    {text: '本省外市', value: '本省外市'},
    {text: '外省', value: '外省'}
]
let timaAge=[]
for(let i =0;i*5<91;i++){
    let obj= {text: i*5, value: i*5};
    timaAge.push(obj)
}

let fourSixth=[]
for(let i =4;i<17;i++){
    let obj= {text: i+'个月', value: i+'个月'};
    fourSixth.push(obj)
}