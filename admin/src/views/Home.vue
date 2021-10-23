<template>
  <!-- vh：页面百分之一的宽度 -->
  <el-container>
    <el-header>
      <div class="logo"></div>
    </el-header>
    <el-container style="height: 100vh">
      <div class="my-aside">
        <el-aside width="200px">
          <el-menu router :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>内容管理</template
              >
              <el-menu-item-group>
                <template slot="title">分类</template>
                <el-menu-item index="/categories/create">新建分类</el-menu-item>
                <el-menu-item index="/categories/list">分类列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </div>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    // const item = {
    //   date: "2016-05-02",
    //   name: "王小虎",
    //   address: "上海市普陀区金沙江路 1518 弄",
    // };
    // return {
    //   tableData: Array(20).fill(item),
    // };
  },
};
</script>

<style scoped>
.el-header {
  color: white;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
  background-color: #242b2d;
}
</style>