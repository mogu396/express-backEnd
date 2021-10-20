<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
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
  props: ["id"],
  name: "CategoryEdit",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        // 修改
        res = await this.$http.put(`categories/${this.id}`, this.model);
      } else {
        // 提交到categories接口
        res = await this.$http.post("categories", this.model);
      }
      // 创建或修改完成跳转页面
      this.$router.push("/categories/list");
      // element-ui提示
      this.$message({
        type: "success",
        message: "保存成功",
      });
      console.log(res);
    },
    async fetch() {
      console.log("执行");
      const res = await this.$http.get(`categories/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    // 如果有this.id再执行下面的代码
    this.id && this.fetch();
  },
};
</script>

<style>
</style>