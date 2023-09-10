const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!',
        basePrice: 100,
    }),
    computed: {
        reverseMessage: function(){
            return this.message.split('').reverse().join('')
        },
        taxIncludedPrice: {
            get: function() {
                return this.basePrice * 1.1
            },
            set: function(value) {
                this.basePrice / 1.1
            },
        },
        computedNumber: function(){
            console.log('computed!')
            return Math.random()
        }
    },
    methods: {
        reverseMessageMethod: function(){
            return this.message.split('').reverse().join('')
        },
        methodsNumber: function(){
            console.log('methods!')
            return Math.random()
        }
    }
})
app.mount('#app')