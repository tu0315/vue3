const app = Vue.createApp({
  data: () => ({
    counter1: 0,
    counter2: 0,
    message: "test",
    time: "",
  }),
  methods: {
    // clickHandler: function () {
    //   this.counter2++;
    // },
    // clickHandler: function (event) {
    //   this.counter2++;
    //   console.log(event.target.id);
    // },
    clickHandler: function ($event, message) {
      this.message = message;
      this.counter2++;
      console.log(message);
      console.log($event);
    },
    clickTimeHandler: function () {
      this.time = new Date().toLocaleTimeString();
    },
  },
});
app.mount("#app");
