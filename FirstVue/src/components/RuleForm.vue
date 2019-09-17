<template>
    <div id="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入活动名称"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择地点">
                    <el-option :label="Region.name" :key="Region.id" v-for="Region in RegionList" :value="Region.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width:100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <!-- <el-date-picker type="fixed-time" placeholder="选择日期" v-model="ruleForm.date2" style="width:100%;"></el-date-picker> -->
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width:100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox :key="Type.id" :label="Type.name" v-for="Type in TypeList" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio :label="Resource.name" :key="Resource.id" v-for="Resource in ResourceList"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立刻创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            <el-form-item>
                <el-tree>
                    <el-tree :data="tree.TreeList" :props="tree.defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-tree>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            RegionList:[
                {
                    id:1,
                    name:"上海"
                },
                {
                    id:2,
                    name:"北京"
                },
                {
                    id:3,
                    name:"深圳"
                }
            ],
            TypeList:[
                {
                    id:1,
                    name:"美食/餐厅线上活动"
                },
                {
                    id:2,
                    name:"地推活动"
                },
                {
                    id:3,
                    name:"线下主题活动"
                },
                {
                    id:4,
                    name:"单纯品牌曝光"
                }
            ],
            ResourceList:[
                {
                    id:1,
                    name:"线上品牌商赞助"
                },
                {
                    id:2,
                    name:"线下场地免费"
                }
            ],
            ruleForm:{
                name:"",
                region:"",
                date1:"",
                date2:"",
                delivery:false,
                type:[],
                resource:"",
                desc:""
            },
            rules:{
                name:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }  
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                   { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            tree:{
                treeList:[
                    {
                        label:'一级1',
                        children:[
                            {
                                label:'123'
                            }
                        ]
                    }
                ],
                defaultProps:{
                    children:'children',
                    label:'label'
                }
            }
        }
    },
    created(){
        // this.ruleForm.region=this.RegionList[0].id;
    },
    name:'RuleForm',
    methods:{
        resetForm:function(formName){
            this.$refs[formName].resetFields();
        },  
        submitForm:function(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    alert("submit!")
                    console.log(this.ruleForm);
                }
                else
                {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
}
</script>
