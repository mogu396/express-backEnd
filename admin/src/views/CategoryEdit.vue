<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
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
      parents: [],
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
      const res = await this.$http.get(`categories/${this.id}`);
      this.model = res.data;
      console.log("model", this.model);
    },
    async fetchParents() {
      const res = await this.$http.get(`categories`);
      this.parents = res.data;
      console.log("Parents", this.parents);
    },
  },
  created() {
    this.fetchParents();
    // 如果有this.id再执行下面的代码
    this.id && this.fetch();
  },
};
</script>

<style>
</style>