const app = Vue.createApp({
  data: () => ({
    message: "hello vue.js",
    checked: false,
    colors: [],
    selected: "",
    selected2: [],
    age: 0,
  }),
});
app.mount("#app");
