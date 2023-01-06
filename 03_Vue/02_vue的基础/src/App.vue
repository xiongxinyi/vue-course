<script>
//组件，一个组件可以创建多个组件实例。组件是组件实例的模板
//组件就是一个普通的js对象
export default {
  //data是一个函数
  //在data中，this就是当前的组件实例vm
  //如果使用箭头函数，则无法通过this访问组件实例
  //使用vue时，减少使用箭头函数的次数
  data() {
    //console.log("data",this);
    //直接向组件实例中添加一个属性，这个属性不会被Vue所代理，不是响应数据，修改后页面不会发生变化
    this.name = "孙悟空";
    //data返回一个对象作为返回值，Vue会对该对象进行代理
    //从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
    return {
      msg: "这里是Vue",
    };
  },
};
</script>
<template>
  <h1>{{ msg }}</h1>
  <h2>{{ name }}</h2>
</template>