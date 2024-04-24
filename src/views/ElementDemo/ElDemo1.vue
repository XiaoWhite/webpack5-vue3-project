<template>
  <div class="page">
    <h1>ELDemo1</h1>
    <MySwitch v-model.abc="status"></MySwitch>

    <div class="search-condition">
      <el-form ref="conditionForm" :model="formData" :rules="rules">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formData.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="年龄" prop="age">
              <el-input v-model="formData.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地区" prop="area">
              <el-input v-model="formData.area" placeholder="请输入地区"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学校" prop="school">
              <el-input v-model="formData.school" placeholder="请输入学校"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="学历" prop="education">
              <el-input v-model="formData.education" placeholder="请输入学历"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="clickConfirm">确定</el-button>
          <el-button @click="clickCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onDeactivated } from 'vue';
import MySwitch from './components/MySwitch.vue';
const status = ref(false);
// let status = false;
const conditionForm = ref();
// 表单
const formData = reactive({
  name: '',
  age: '',
  area: '',
  school: '',
  education: '',
});

// 校验规则
const rules = reactive({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  education: [{ required: true, message: '请输入学历', trigger: 'blur' }],
});

// 点击确定
function clickConfirm() {
  console.log('conditionForm = ', conditionForm);
  conditionForm.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
}

// 点击取消
function clickCancel() {
  conditionForm.value.resetFields();
}

onDeactivated(() => {
  // 验证：页面切换时，页面内的组件与页面的 deactivated 回调函数的调用顺序
  console.log('ELDemo1 -- onDeactivated ----');
});
</script>

<style scoped lang="scss">
.search-condition {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 20px;
}
</style>
