<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-select v-model="model" placeholder="切换颜色" @change="changeTheme">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      /* eslint-disable */
      model: "blue",
      options: [
        {
          label: "蓝色",
          value: "blue",
        },
        {
          label: "红色",
          value: "red",
        },
      ],
    };
  },
  methods: {
    changeTheme() {
      document.head.querySelector('#el-theme-link').setAttribute('href', `./style/theme-${this.model}/theme/index.css`)
      document.head.querySelector('#theme-link').setAttribute('href', `./style/${this.model}/index.css`)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1 {
  /* color:black; */
  color: var(--bgColor);
 }
 .hello {
  display: inline-block;
  border: 5px solid var(--bgColor);
  padding: 15px;
 }
</style>
