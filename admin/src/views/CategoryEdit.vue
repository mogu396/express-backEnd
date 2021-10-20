<template>
  <div class="about">
    <h1>新建分类</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      console.log(this);
      console.log("save");
      // 提交到categories接口
      const res = await this.$http.post("categories", this.model);
      // 创建完成跳转页面
      this.$router.push("/categories/list");
      // element-ui提示
      this.$message({
        type: "success",
        message: "保存成功",
      });
      console.log(res);
    },
  },
};
</script>

<style>
</style>