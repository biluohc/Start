<template>
<div id="search_engines">
    <form :action="selected_search_engine.url" method="get" target="_self">
    <input id="input" :name="selected_search_engine.query" autofocus="autofocus" maxlength="64" size="86" type="text">
    <select id="select" v-model="selected_search_engine_name">
        <option disabled value="">请选择</option>
        <option v-for="search_engine in search_engines" :key="search_engine.name">{{search_engine.name}}</option>
    </select>
        <input id="submit" value="搜索" type="submit">
    </form>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      search_engines: window.store.search_engines,
      selected_search_engine_name: window.store.search_engines[0].name
    };
  },
  computed: {
    selected_search_engine: function() {
      for (var i = 0; i < this.search_engines.length; i++) {
        if (this.search_engines[i].name === this.selected_search_engine_name) {
          return this.search_engines[i];
        }
      }
    }
  }
};
</script>

<style scoped>
form {
  font-size: 32px;
  font-weight: bold;
  margin-left: 5%;
  width: 90%;
  height: 70%;
  text-align: center;
  /* 隐藏 */
  border: 0px; 
}
#input {
  background: transparent;
  border: 1px solid #aaa;
  width: 60%;
  height: 20%;
  font-size: 32px;
  font-weight: bold;
}
#select {
  border: 1px solid #aaa;
  font-size: 32px;
  font-weight: bold;
  width: 6%;
  height: 20%;
}
#submit {
  border: 1px solid #aaa;
  width: 10%;
  height: 20%;
  font-size: 32px;
  font-weight: bold;
}
</style>