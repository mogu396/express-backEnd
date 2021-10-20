<template>
  <div class="about">
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
        width="240"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <!-- 这里的scope是点击的那一行 -->
        <!-- 注意router.push后面的路径，开头要加/，不然不是从根路径进来的 -->
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>