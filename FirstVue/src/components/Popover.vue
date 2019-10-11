<template>
    <div id="popover">
              <el-table :data="tableData" class="table" resizable="true" border>
                <el-table-column prop="id"></el-table-column>
                <el-table-column label="操作" width="200" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="edit(scope.$index,scope.row)">编辑</el-button>
                        <el-popover
                        :ref="'popover-'+scope.row.id"
                        placement="top"
                        width="160"
                        trigger="manual"
                        >
                        <p>确定删除该题目？</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="handleDelete(scope.row.id,false)">取消</el-button>
                            <el-button type="primary" size="mini" @click="handleDelete(scope.row.id,true)">确定</el-button>
                        </div>
                        <el-button type="text" icon="el-icon-delete" class="red" slot="reference" @click="showPop(scope.row.id)">删除</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    name:"popover",
    data(){
        return{
            tableData:[
                {
                   id:1
                },
                {
                   id:2
                }
                
            ],
            popoverVisible:true
        }
    },
    methods:{
        showPop:function(id){
            this.$refs['popover-'+id].doShow();
        },
        handleDelete(id,doDelete)
        {
            this.$refs['popover-'+id].doClose();
            if(doDelete)
            {
                console.log("do delete");
            }
        }
    }
}
</script>