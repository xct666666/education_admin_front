<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
import subject from '@/api/edu/subject'
export default {

  data() {
    return {
      filterText: '',
      data2: [], //返回所有分类数据
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  created(){
    this.getAllSubjectList()
  },

  methods: {
    getAllSubjectList(){
      subject.getSubjectList()
      .then(response => {
        this.data2 = response.data.list
      })
    },
    //用于快速搜索关键字的方法
    filterNode(value,data){
      if(!value) return true
      //toLowerCase()统一将输入的字母变成大写或者小写
      return data.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    }
  }
}
</script>
