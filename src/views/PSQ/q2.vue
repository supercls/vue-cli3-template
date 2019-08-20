<template>
    <div class="zf-wrapper">
        <headers heaTitle='孕产妇调查表' :showBack="false"></headers>
        <div class="qs-content mint-tab-container">
            <div class="page1" v-if="page1">
                <div class="top">
                    <p>尊敬的孕妈妈：</p>
                    <p>您好！感谢您参加本次调查，请在题目后相应横线处填写答案或选择相应序号。</p>
                    <p>如无特殊说明，题目均为单选。</p>
                </div>
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <drage-input v-model="dataList.a" :keyValue.sync="dataList.a"
                                        :slotContent="slotContent1" typeItem="pickeMore" :required="true"
                                        :disabled="true"  label="填表所在地" >
                            </drage-input>
                            <drage-input v-model="dataList.cMqxm" label="填表所在机构"  type="text" :required="true">
                            </drage-input>
                            <drage-input v-model="dataList.dMqcsrq" :required="true" :keyValue.sync="dataList.dMqcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="填表时间" >
                            </drage-input>
                            <div style="margin:20px auto;"></div>
                        </div>
                    </div>        
                </div>
                <div class="bottom" style="position:absolute;bottom:0;left:0;right:0;">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "true" :class= "{ disabledBtn: true }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1"> 1 </span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('1','2')" :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>    
            <!--page2-->
            <div class="page2" v-if="page2">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>一、基本情况</h3>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input v-model="dataList.dMqcsrq"  :keyValue.sync="dataList.dMqcsrq" typeItem="date" :disabled="true"  :iconRight="true" label="1.您的出生日期" >
                                </drage-input>
                            </div>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input v-model="dataList.cMqmz" :keyValue.sync="dataList.cMqmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     :disabled="true" :iconRight="true" label="2.您的民族" >
                                </drage-input>
                            </div>
                            <div class="form-list"  style="margin-top:20px;">
                                <drage-input v-model="dataList.cMqmz" :keyValue.sync="dataList.cMqmz"
                                     :slotContent="slotContent2"  typeItem="pickeMore"
                                     :disabled="true" :iconRight="true" label="2.丈夫民族" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">4.您的户籍</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">5.丈夫户籍</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '城市',value: '1'},{ label: '农村',value: '2'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">6.您的文化程度</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">7.丈夫文化程度</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '文盲',value: '1'},{ label: '小学',value: '2'},{ label: '初中',value: '3'},{ label: '高中/中专',value: '4'},{ label: '大专',value: '5'},{ label: '本科',value: '6'},{ label: '硕士及以上',value: '7'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">8.您的职业</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">9.丈夫职业</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '行政干部',value: '1'},{ label: '工人',value: '2'},{ label: '专业技术人员',value: '3'},{ label: '农民',value: '4'},{ label: '公司职员',value: '5'},{ label: '商业服务人员',value: '6'},{ label: '无业',value: '7'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">10.家庭平均月收入</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '3000元及以下',value: '1'},{ label: '3001-5000元',value: '2'},{ label: '5001-10000元',value: '3'},{ label: '10000元以上',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">11.您目前处于以下哪个阶段</p>
                                <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                    placeholder=""
                                     :slotContent="slotContent9" typeItem="pickeMore"  
                                     :disabled="true" unit="周"  label="怀孕" >
                                </drage-input>
                                <drage-input v-model="dataList.iCstz" :keyValue.sync="dataList.iCstz"  type="number"
                                    placeholder=""
                                      maxlength="3"
                                       unit="天"  label="产后" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">12.您的孩子的体重(g)</p>
                                <drage-input v-model="dataList.iCstz" :keyValue.sync="dataList.iCstz"  type="number"
                                    placeholder=""
                                    unit="g"  label="出生体重" >
                                </drage-input>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">13.您宝宝的分娩方式是</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '自然分娩',value: '1'},{ label: '剖宫产',value: '2'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">14.本次怀孕是您第几个孩子？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '第一个',value: '1'},{ label: '第二个',value: '2'},{ label: '三个及以上',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('2','1')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">2</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('2','3')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
        <!--page3-->
        <!--page2-->
            <div class="page3" v-if="page3">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>二、孕产期知识和行为</h3>
                            <div class="form-list">
                                <p class="form-p1">15.备孕期间何时开始补充叶酸？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不需要补充',value: '2'},{ label: '怀孕前3个月开始补充 ',value: '3'},{ label: '怀孕后立即开始补充',value: '4'}]">
                                    </mt-radio>
                                   
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">16.您知道什么是胎儿致畸最敏感时期吗？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '不知道',value: '1'},{ label: '怀孕3-8周内',value: '2'},{ label: '怀孕8-12周内 ',value: '3'},{ label: '怀孕12-16周',value: '4'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">17.您知道我国目前重点干预的母婴传播性疾病有哪几种吗？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '艾滋病',value: '1'},{ label: '乙肝',value: '2'},{ label: ' 梅毒',value: '3'},{ label: '甲肝',value: '4'},{ label: '结核',value: '5'},{ label: '其他',value: '6',other:true,filed:dataList.asd,name:'dataList.asd'},{ label: '不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.您知道什么是体重指数和计算方法吗？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '不知道体重指数，不了解计算方法',value: '1'},{ label: '知道体重指数，不了解计算方法',value: '2'},{ label: '知道，体重指数=体重（kg）/身高（m）',value: '3'},{ label: '知道，体重指数=体重（kg）/身高（m）',value: '4'},{ label: '知道，体重指数=身高（m）/体重（kg）',value: '5'},{ label: '知道，体重指数=身高（m）/体重（kg）2',value: '6'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.您知道孕前标准体重的女性，整个孕期体重增长多少合适吗？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '不知道',value: '1'},{ label: '10.5kg左右',value: '2'},{ label: '12.5kg左右',value: '3'},{ label: '14.5kg左右',value: '4'},{ label: '15kg及以上',value: '5'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">20.孕期血压正常值是不高于（    ）mmHg？ </p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '不知道',value: '1'},{ label: '120/70',value: '2'},{ label: '130/80',value: '3'},{ label: '140/90',value: '4'}]">
                                    </mt-radio>
                                </div>
                            </div>
                             <div class="form-list">
                                <p class="form-p1">21.您认为怀孕期间身体出现哪些现象就要上医院？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '阴道出血',value: '1'},{ label: '腹痛',value: '2'},{ label: ' 头疼/头晕',value: '3'},{ label: '胎动异常',value: '4'},{ label: '下肢浮肿',value: '5'},{ label: '其他',value: '6',other:true,filed:dataList.asd,name:'dataList.asd'},{ label: '不知道',value: '7'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">22.您知道哪种维生素可以促进铁的吸收吗？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '维生素A ',value: '1'},{ label: '维生素B',value: '2'},{ label: '维生素C',value: '3'},{ label: '维生素D',value: '4'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">23.您知道孩子出生多长时间应该第一次给孩子吃母乳吗？ </p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '不知道',value: '1'},{ label: '出生后立刻 ',value: '2'},{ label: '出生后1小时内',value: '3'},{ label: '出生后1小时以后24小时以内 ',value: '4'},{ label: '出生后1天以上 ',value: '5'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">24.您认为产后42天妈妈和孩子需要到医院接受母婴健康检查吗？ </p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '需要',value: '1'},{ label: '不需要 ',value: '2'},{ label: '不知道',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">25.您有没有做过婚前或孕前检查？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '都没做过',value: '1'},{ label: '做过婚前检查 ',value: '2'},{ label: '做过孕前检查',value: '3'},{ label: '都做过',value: '4'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">26.您第一次产前检查的孕周</span></p>
                                <div class="form-inp">
                                    <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                        placeholder=""
                                        :slotContent="slotContent9" typeItem="pickeMore"  
                                        :disabled="true" unit="周"  label="孕——周" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="橙色例数未统计" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">27.您何时建立母子健康手册？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '未建立',value: '1'},{ label: '孕3月前 ',value: '2'},{ label: '孕4-7月',value: '3'},{ label: '孕7个月后',value: '4'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">28.铁剂和叶酸的服用情况</span></p>
                                <p>28.1服用铁剂</p>
                                <p>开始服用孕周</p>
                                <div class="form-inp">
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="孕前" >
                                    </drage-input>
                                    <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                        placeholder=""
                                        :slotContent="slotContent9" typeItem="pickeMore"  
                                        :disabled="true" unit="周"  label="孕——周" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="未服用" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                    <p style="margin:15px 0px">结束时间</p>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="至今仍服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                        placeholder=""
                                        :slotContent="slotContent9" typeItem="pickeMore"  
                                        :disabled="true" unit="周"  label="孕____周停止服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                     <p style="margin:15px 0px">服用方法</p>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="每天服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="间断服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                    <p style="margin:15px 0px">每天服用量</p>
                                    <drage-input v-model="dataList.cMqxm" label="______mg"  type="text" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">28.2服用叶酸</span></p>
                                <p>开始服用孕周</p>
                                <div class="form-inp">
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="孕前" >
                                    </drage-input>
                                    <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                        placeholder=""
                                        :slotContent="slotContent9" typeItem="pickeMore"  
                                        :disabled="true" unit="周"  label="孕——周" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="未服用" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                    <p style="margin:15px 0px">结束时间</p>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="至今仍服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.iFmyz" :keyValue.sync="dataList.iFmyz"
                                        placeholder=""
                                        :slotContent="slotContent9" typeItem="pickeMore"  
                                        :disabled="true" unit="周"  label="孕____周停止服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                     <p style="margin:15px 0px">服用方法</p>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="每天服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="间断服用" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                                <div class="form-inp">
                                    <p style="margin:15px 0px">每天服用量</p>
                                    <drage-input v-model="dataList.cMqxm" label="______mg"  type="text" >
                                    </drage-input>
                                    <drage-input v-model="dataList.b"  :keyValue.sync="dataList.b" 
                                        placeholder="请选择"
                                        typeItem="checkRight"
                                        :disabled="true"  label="记不清" >
                                    </drage-input>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">29.您孕期计划的分娩方式是什么？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '自然分娩',value: '1'},{ label: '剖宫产 ',value: '2'},{ label: '没想过',value: '3'},{ label: '不确定',value: '4'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">30.产后您打算给孩子喂母乳吗？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '喂',value: '1'},{ label: '不喂 ',value: '2'},{ label: '不知道/看情况',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">31.您是否有以下孕产期并发症/合并症？（可多选）</p>
                                <div class="check-list">
                                     <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :options="[{ label: '无',value: '1'},{ label: '妊娠期高血压',value: '2'},{ label: '妊娠期糖尿病',value: '3'},{ label: '妊娠期贫血',value: '4',other:true,filed:dataList.asd,name:'dataList.asd',placeholder:'最近一次血色素g/L'},{ label: '妊娠合并甲状腺疾病',value: '5'},{ label: '妊娠合并肝脏疾病',value: '6'}]">
                                    </super-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('3','2')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">3</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('3','4')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page4-->
            <div class="page4" v-if="page4">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>三、孕产期知识需求</h3>
                            <div class="form-list">
                                <p class="form-p1">32.请选出三种您最需要的孕产期保健知识（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :max="3"
                                        :options="[{ label: '如何科学备孕',value: '1'},{ label: '孕产期生理知识',value: '2'},{ label: '孕期保健和自我监护',value: '3'},{ label: '孕妇营养和运动',value: '4'},{ label: '孕期心理',value: '5'},{ label: '孕期疾病防治',value: '6'},{ label: '分娩相关知识',value: '7'},{ label: '母乳喂养和乳房保健',value: '8'}]">
                                    </super-checklist>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">33.请选出三种您最常采用的孕产期保健知识获取渠道（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :max="3"
                                        :options="[{ label: '如何科学备孕',value: '1'},{ label: '孕产期生理知识',value: '2'},{ label: '孕期保健和自我监护',value: '3'},{ label: '孕妇营养和运动',value: '4'},{ label: '孕期心理',value: '5'},{ label: '孕期疾病防治',value: '6'},{ label: '分娩相关知识',value: '7'},{ label: '母乳喂养和乳房保健',value: '8'}]">
                                    </super-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">34.请选出您最喜欢的三种网络健康教育知识呈现形式（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :max="3"            
                                        :options="[{ label: '文字形式',value: '1'},{ label: '音频',value: '2',picker:true,filed:dataList.asd,name:'dataList.asd',placeholder:'请选择音频时长'},{ label: '视频',value: '3',picker:true,filed:dataList.asd,name:'dataList.asd',placeholder:'请选择视频时长'},{ label: '微信课堂',value: '4'},{ label: '图片',value: '5'}]">
                                    </super-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('4','3')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">4</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="changePage('4','5')"   :class= "{ disabledBtn: false }"> 下一页</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--page5-->
            <div class="page5" v-if="page5">
                <div class="center">
                    <div class="zf-wrapper-mom">
                        <div class="form-component">
                            <h3>四、对《母子健康APP》了解和需求</h3>
                            <div class="form-list">
                                <p class="form-p1">35.您是否下载使用《母子健康APP》?</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '是',value: '1'},{ label: '否',value: '2'}]">
                                    </mt-radio>
                                 </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">36.s未下载使用的原因是</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value: '2'},{ label: '不需要',value: '3'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">37.您是否看过《母子健康APP》健康教育内容？</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '看过',value: '1'},{ label: '未看过',value: '2'}]">
                                </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">38.您未看过的原因是</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '不知道',value: '1'},{ label: '不感兴趣',value: '2'},{ label: '不需要',value: '3'}]">
                                </mt-radio>
                                <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">39.您能否在《母子健康APP》中得到您需要的知识？</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '全部能找到',value: '1'},{ label: '大部分能得到',value: '2'},{ label: '只能得到一部分',value: '3'},{ label: '完全不能',value: '4'}]">
                                </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">40.您对母子健康app健康教育内容是否满意?</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value: '2'},{ label: '一般',value: '3'},{ label: '比较不满意',value: '4'},{ label: '非常不满意',value: '5'}]">
                                </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">41.您对母子健康app健康教育呈现形式是否满意?</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '非常满意',value: '1'},{ label: '比较满意',value: '2'},{ label: '一般',value: '3'},{ label: '比较不满意',value: '4'},{ label: '非常不满意',value: '5'}]">
                                </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">42.您认为《母子健康APP》健康教育内容存在哪些问题？（可多选）</p>
                                <div class="check-list">
                                    <super-checklist
                                        title=""
                                        v-model="dataList.g"
                                        :max="3"            
                                        :options="[{ label: '没有问题',value: '1'},{ label: '查找不方便',value: '2'},{ label: '文字太多，不爱看',value: '3'},{ label: '内容太专业，看不懂  ',value: '4'},{ label: '内容不全面，想看的内容查不到',value: '5'},{ label: '形式单一，不够吸引人',value: '6'},{ label: '图片不合适',value: '7'}]">
                                    </super-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">43.您认为针对《母子健康APP》健康教育内容应如何进一步完善？</p>
                                <div class="check-list">
                                    <mt-field placeholder="应用APP的回答" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">44.您希望《母子健康APP》的健康教育内容是什么？</p>
                                <div class="check-list">
                                    <mt-field placeholder="未用APP的回答" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="bottom">
                    <div class= "pagination">
                        <div class="pag-box">
                            <button  class="btn" :disabled= "false" @click="changePage('5','4')" :class= "{ disabledBtn: false }" >上一页</button>
                            <div class= "pag-center">
                            <span class= "num1">5</span>
                            <span>/</span>
                            <span>5</span>
                            </div>
                            <button  class="btn" @click="submitForm"   :class= "{ disabledBtn: false }"> 提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <message-toast :hideOn="hideOn" mtitle="知情同意书" type="3" :conts="articleArray"></message-toast>    
    </div>
</template>
<script>
import headers from '@/components/header/header'
import {yunCon}  from '@/utils/slotContent'
import {nations} from '@/utils/nations'
import drageInput from '@/components/nomal/drageInput'
import superChecklist from '@/components/nomal/checklist'
import messageToast  from '@/components/nomal/messageToast'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                b:'1',
                iCstz:'',
                g:[],
                asd:''
            },
            page1:false,
            page2:false,
            page3:false,
            page4:false,
            hideOn:false,
            page5:true,
            slotContent1: {   //
                columns: 1,
                default: [{text: '贵州', value: '1'}],
                pData1: [
                    {text: '贵州', value: '1'},
                    {text: '宁夏', value: '2'},
                    {text: '新疆', value: '3'},
                    {text: '江苏', value: '4'},
                    {text: '河南', value: '5'},
                    {text: '湖南', value: '6'},
                ]
            },
            slotContent2: {  //名族
                columns: 1,
                default: [{text: '', value: ''}],
                pData1: nations
            },
            slotContent9: {   //孕周
                columns: 1,
                default: [{text: '15', value: '15'}],
                pData1:yunCon
            },
            articleArray:[
                {detail:'尊敬的孕妈妈：'},
                {detail:'您好！'},
                {detail:'诚邀您参加《母子健康APP推广应用效果评价研究》，本研究由中国疾病预防控制中心妇幼保健中心及本县医疗机构共同参与，目的是了解APP应用对孕产妇及儿童监护人在妇幼健康方面的知识、行为和妇幼健康服务的可及性、服务利用和服务质量产生的影响，从而为项目成果的远期推广和实施策略的制定提供重要的参考依据。'},
                {detail:'此项研究通过问卷向您询问您的基本情况、孕产期相关知识知晓情况、对母子健康APP的应用情况和建议，请您协助我们完成调查，问卷调查大约占用您10分钟左右的时间。调查过程中您可以随时提出想了解的问题，我们会尽力解答。调查结束后我们会赠送小礼品表示感谢。'},
                {detail:'您参加本项调查一次完成，匿名进行，所有您的个人的信息及问题答案将受到严格保密，仅供研究使用，不会向与研究无关的人提供任何信息。调查相关资料也将在研究结束后销毁。本研究以自愿为原则，您有权选择参加或不参加。调查过程中，您有权在任何时间、无需任何理由退出本调查，这将不会给您或您孩子的常规保健带来任何不良影响。'},
                {detail:'如果您有关于本研究的任何问题，可以随时向我们询问，我们将耐心为您解释。如果您同意参加本研究，请点击同意按钮进入问卷调查部分。'},
                {detail:'期待您的参与！'},
            ]
        }
    },
    watch:{
        'dataList.r'(val){
            console.log(val)
        }
    },
    components:{
        headers,
        drageInput,
        superChecklist,
        messageToast
    },
    methods:{
        changePage(before,next){  //点击上一页，下一页
            let pageBefore='page'+before;
            let pageNext='page'+next;
            this[pageBefore]=false;
            this[pageNext]=true
        },
        submitForm(){
            this.$messagebox.confirm('确定执行此操作?').then(action => {
                console.log(action)
            }).catch(error=>{
                console.log(error)
            })
        },
    },
    created(){

    },
    mounted(){
       this.hideOn=true
    },
    computed:{

    },
    filters:{

    },
}
</script>
<style scoped lang="less">
    .zf-wrapper{
        margin:0 auto;
        .qs-content{
            padding:0 30px;
            top:100px;
            h3{
                font-size: 36px;
                margin:30px 10px 0 10px;
            }
            .top{
                padding:20px 10px;
                p{
                    margin:10px auto;
                    text-indent: 2em;
                    font-size: 30px;
                }
            }
        }
    }
    .pagination {
        width: 100%;
        margin:20px auto;
        .pag-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .btn {
                width: 30%;
                height: 98px;
                font-size: 36px;
                color:#026dbb;
            }
            .disabledBtn {
                 color:#666;
            }
            .pag-center{
                height: 98px;
                display: flex;
                flex-direction: row;
                align-items: center;
                span{
                    font-size: 36px;
                    color:#999; 
                }
                .num1 {
                    font-size: 36px;
                    color:#666; 
                }
            }
        }
    }
    .form-list{margin-bottom: 20px;}
    .form-inp{margin:20px 0px;}
    .check-list{background: #fff;padding:10px 10px 20px 10px;border:1px solid #E4E4E4;}
    .form-p1{
        font-size: 32px;
        color: #333;
        margin:20px 0  20px 0;
        span{font-size: 28px;color: #999}
    }
</style>