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
                            <h3>二、当地APP建设、改造和使用情况</h3>
                            <div class="form-list">
                                <p class="form-p1">4.本机构互联网技术相关的应用有（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '相关网站',value: '2'},{ label: ' 相关APP',value: '3'},{ label: '物联网技术',value: '4'},{ label: '远程医疗服务',value: '5'},{ label: '就诊环境免费提供wifi',value: '6'},{ label: '使用一卡通（机构内）',value: '7'},{ label: '使用一卡通（辖区内）',value: '8'},{ label: 'HIS等系统与区域卫生信息平台对接',value: '9'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">5.本机构使用的“互联网+妇幼保健”相关APP有（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '微信（包括微信公众号、订阅号或企业号，不包括面向服务对象和医务人员的微信群）',value: '2'},{ label: ' 支付宝',value: '3'},{ label: '本机构或本地区自主开发的APP',value: '4'},{ label: '包含母子健康手册功能的APP',value: '5'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">6.本机构APP面向服务对象提供的服务有（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '医院信息、就医、出诊等信息查询',value: '2'},{ label: ' 健康宣教',value: '3'},{ label: '预约挂号/预约医技检查',value: '4'},{ label: '线上孕妇学校',value: '5'},{ label: '线下课程预约',value: '6'},{ label: '自助缴费和相关费用查询',value: '7'},{ label: '产检、儿童体检或预防接种提醒服务',value: '8'},{ label: '产检或儿童体检信息上传',value: '9'},{ label: '医患互动咨询',value: '10'},{label:'就医满意度反馈/服务评价/投诉建议',value:'11'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">7.本机构APP面向医生提供的服务有（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '查询患者基本信息',value: '2'},{ label: ' 查看患者检查报告（包括检验、影像报告等）',value: '3'},{ label: '查看患者诊疗情况',value: '4'},{ label: '下医嘱、写病历',value: '5'},{ label: '院内外会诊',value: '6'},{ label: '远程会诊',value: '7'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">8.本机构APP与哪些系统实现了信息互联互通？（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '本院HIS系统',value: '2'},{ label: '医保系统',value: '3'},{ label: '公安系统',value: '4'},{ label: '计划免疫系统',value: '5'},{ label: '妇幼健康信息平台',value: '6'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">9.本机构APP实现的机构管理功能（可多选）</p>
                                <div class="check-list">
                                    <mt-checklist
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '移动办公',value: '2'},{ label: '资源调配',value: '3'},{ label: '成本效益分析',value: '4'},{ label: '绩效管理',value: '5'},{ label: '培训管理',value: '6'},{ label: '不良事件报告',value: '7'}]">
                                    </mt-checklist>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">10.本机构APP是否按照国家《母子健康APP》项目要求进行升级完善？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '未进行',value: '1'},{ label: '进行中',value: '2'},{ label: '已完成',value: '3'}]">
                                    </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">11.如进行了改造，改造内容包括？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '增加了《母子健康APP》应用功能（如母子手册浏览、记录等）',value: '1'},{ label: '引入了《母子健康APP》健康教育内容',value: '2'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">12.本机构如用《母子健康APP》，与哪些系统进行了信息互联互通？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '本院HIS系统',value: '2'},{ label: '医保系统',value: '3'},{ label: '公安系统',value: '4'},{ label: '计划免疫系统',value: '5'},{ label: '妇幼健康信息平台',value: '6'}]">
                                    </mt-radio>
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
                            <h3>三、《母子健康APP》宣传应用情况</h3>
                            <div class="form-list">
                                <p class="form-p1">13.本机构是否已经开始推广使用《母子健康APP》?</p>
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '使用',value: '1'},{ label: '未使用',value: '2'}]">
                                </mt-radio>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">14.该项目宣传推广是否具体到某个部门负责？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '无',value: '1'},{ label: '医院宣传科',value: '2'},{ label: '儿童保健科',value: '3'},{ label: '信息科',value: '4'},{ label: '健康教育科',value: '5'},{ label: '保健科',value: '6'}]">
                                    </mt-radio>
                                    <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">15.没有推广使用/或推广不顺畅的原因是：</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '领导不认可',value: '1'},{ label: '机构内wifi信息不通畅',value: '2'},{ label: '硬件设备不具备',value: '3'},{ label: '政策不允许',value: '4'},{ label: '本机构有类似APP',value: '5'},{ label: '担心信息安全',value: '6'},{ label: '服务对象认可度低',value: '7'},{ label: '医务人员认可度低',value: '8'},{ label: '缺乏经费进行推广',value: '9'}]">
                                    </mt-radio>
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
                            <h3>四、本机构健康教育开展情况</h3>
                            <div class="form-list">
                                <p class="form-p1">16.本机构是否有独立的健康教育部门？</p>
                                <div class="check-list">
                                    <mt-radio
                                        title=""
                                        v-model="dataList.c"
                                        :options="[{ label: '有',value: '1'},{ label: '无',value: '2'}]">
                                    </mt-radio>
                                 </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">17.本机构是否由专人负责健康教育工作？</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '有',value: '1'},{ label: '无',value: '2'}]">
                                </mt-radio>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">18.本机构提供的健康教育信息主要来源于？</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '网络',value: '1'},{ label: '医生经验总结',value: '2'},{ label: '项目总结',value: '3'}]">
                                </mt-radio>
                                <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">19.本机构对孕产妇进行健康教育的主要形式有（可多选）</p>
                                <div class="check-list">
                                <mt-checklist
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '孕妇学校',value: '1'},{ label: '家长学校',value: '2'},{ label: '医生咨询',value: '3'},{ label: '宣传折页、小册子等纸质材料',value: '4'},{ label: '医院互联网（如微信公众号）',value: '5'}]">
                                </mt-checklist>
                                <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
                                </div>
                            </div>
                            <div class="form-list">
                                <p class="form-p1">20.本机构对儿童家长进行健康教育的主要形式有</p>
                                <div class="check-list">
                                <mt-radio
                                    title=""
                                    v-model="dataList.c"
                                    :options="[{ label: '孕妇学校',value: '1'},{ label: '家长学校',value: '2'},{ label: '医生咨询',value: '3'},{ label: '宣传折页、小册子等纸质材料',value: '4'},{ label: '医院互联网（如微信公众号）',value: '5'}]">
                                </mt-radio>
                                <mt-field placeholder="其他（请详述）" type="textarea" rows="3" v-modal="dataList.c"></mt-field>
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
    </div>
</template>
<script>
import headers from '@/components/header/header'
import {yunCon}  from '@/utils/slotContent'
import {nations} from '@/utils/nations'
import drageInput from '@/components/nomal/drageInput'
export default {
    name:'hello',
    data(){
        return {
            dataList:{
                b:'1',
                iCstz:'',
                c:[]
            },
            page1:false,
            page2:true,
            page3:false,
            page4:false,
            page5:false,
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
        }
    },
    watch:{
        'dataList.iCstz'(val){
            console.log(val)
        }
    },
    components:{
        headers,
        drageInput
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