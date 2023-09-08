const app = Vue.createApp({
    data: () => ({
        message: 'hello <span style="color:red;">vue.js</span>'
    }),
    methods: {
        clickHandler: function(event){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
app.mount('#app')