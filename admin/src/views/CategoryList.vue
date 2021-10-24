<template>
  <div class="about">
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="300"></el-table-column>
      <el-table-column prop="parent" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
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
          <el-button type="primary" size="small" @click="remove(scope.row)"
            >刪除</el-button
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
    async remove(row) {
      this.$confirm(`是否要删除分类"${row.name}"?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        // _id是因为数据库里面的是_id
        console.log(row._id);
        console.log(row.name);
        await this.$http.delete(`/categories/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>