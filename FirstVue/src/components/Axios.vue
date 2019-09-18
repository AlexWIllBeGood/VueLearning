<template>
    <div id="axios">
        <p>studyCourseStatus:{{studyCourseStatusObject.studyCourseStatus}}</p>
        <p>studyTaskType:{{studyCourseStatusObject.studyTaskType}}</p>
        <p>{{testQs}}</p>
    </div>
</template>

<script>
export default {
    name:"axios",
    data(){
        return {
            testQs:"",
            studyCourseStatusObject:{
                studyCourseStatus:"",
                studyTaskType:""   
            }
        }
    },
    mounted(){
        //加载课程状态
        this.$ajax({
            method:"Get",
            url:"http://localhost:5000/api/services/app/StudyCourse/GetStudyCourseStatus",
            params:{
                    "StudyCourseId":"d99adfe6-4a91-4285-a08a-de1c179035d8"
                },
            headers:{
                "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMGE3OGU0NGMzM2M0YThmNzI5ZDc2ZGM3ZjhhNTMxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1Njg3NzkxMDcsImV4cCI6MTU2OTM4MzkwNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9yZXNvdXJjZXMiLCJNZXRlbi5QcmFjdGljYWxXb3JkLkFQSSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyX3VpX2NsaWVudCIsInNjb3BlIjpbIk1ldGVuLlByYWN0aWNhbFdvcmQuQVBJIl19.SB0TSyURUnWD8O1EkiAxZ6_hRt_z1OrXVS57krs02s36UCZoUtTsqPFjiMHYkb4Sur1UG4hyxRn1HQEx1rAM092A8Dvv-kNklzHTFefgbjdk9keV_LQ6uOuXZVkCOco50p_Dj1We00jC2kDk0niMTqVM_JWDxqIhlu2H9ZEYeag4uhMuq1ViubwqmgQbzCzHKmCrPTVnjuWiaek50vWtx4xFj2f-2XBX9xPiFPpdE2AeOIqFEuwNGpBF6wlgbpI3Ua8IlBR_Lnh4SralGbYQq4hRzLNzBdA3ltebP65W85HDjkw6caLAJZUkjjXCxBo5KN56dcGqBjw6x2FQeSni1A"
            }
        }).then(response=>{
            var result=response.data.result;
            this.studyCourseStatusObject.studyCourseStatus=result.studyCourseStatus;
            this.studyCourseStatusObject.studyTaskType=result.studyTaskType;
        })
        .catch(function(error){
            console.log(error);
        });
        
        //获取学习数据
        this.$ajax({
            method:"Get",
            url:"http://localhost:5000/api/services/app/StudyCourse/GetStudyCourseTaskAsync?studyCourseId=d99adfe6-4a91-4285-a08a-de1c179035d8&studyTaskType=2",
            headers:{
                "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMGE3OGU0NGMzM2M0YThmNzI5ZDc2ZGM3ZjhhNTMxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1Njg3NzkxMDcsImV4cCI6MTU2OTM4MzkwNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9yZXNvdXJjZXMiLCJNZXRlbi5QcmFjdGljYWxXb3JkLkFQSSJdLCJjbGllbnRfaWQiOiJzd2FnZ2VyX3VpX2NsaWVudCIsInNjb3BlIjpbIk1ldGVuLlByYWN0aWNhbFdvcmQuQVBJIl19.SB0TSyURUnWD8O1EkiAxZ6_hRt_z1OrXVS57krs02s36UCZoUtTsqPFjiMHYkb4Sur1UG4hyxRn1HQEx1rAM092A8Dvv-kNklzHTFefgbjdk9keV_LQ6uOuXZVkCOco50p_Dj1We00jC2kDk0niMTqVM_JWDxqIhlu2H9ZEYeag4uhMuq1ViubwqmgQbzCzHKmCrPTVnjuWiaek50vWtx4xFj2f-2XBX9xPiFPpdE2AeOIqFEuwNGpBF6wlgbpI3Ua8IlBR_Lnh4SralGbYQq4hRzLNzBdA3ltebP65W85HDjkw6caLAJZUkjjXCxBo5KN56dcGqBjw6x2FQeSni1A"
            }
        }).then(response=>{
            console.log(response.data.result);
            // var result=response.data.result;
            // this.studyCourseStatusObject.studyCourseStatus=result.studyCourseStatus;
            // this.studyCourseStatusObject.studyTaskType=result.studyTaskType;
        })
        .catch(function(error){
            console.log(error);
        });
        
        var o1={
            id:1,
            name:'Alex'
        }
        var o2={
            occupation:'SoftwareEngineer'
        }
        var o={...o1,...o2}
        this.testQs=this.qs.stringify(o)
        var jsonString=JSON.stringify(o)
        var object=JSON.parse(jsonString)
        console.log(jsonString)
        console.log(object)
    },
    created(){
    },
    methods:{
    }
}
</script>