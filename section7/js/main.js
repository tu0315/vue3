const app = Vue.createApp({
    data: () => ({
        message: 'Hello vue.js!',
        km: 0,
        m: 0,
        firstName: '',
        lastName: '',
        // fullName: '' // 算出プロパティの際は不要
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'}
        ]
    }),
    watch: {
        message: function(newValue, oldValue){
            console.log('new: %s, old: %s', newValue, oldValue)
        },
        km: function(value){
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m: function(value){
            console.log(value)
            this.km = value / 1000
            this.m = value
        },
        // firstName: function(value) {
        //     this.fullName = value + ' ' + this.lastName
        // },
        // lastName: function(value) {
        //     this.fullName = this.firstName + ' ' + value
        // }
        colors: {
            handler: function(newValue, oldValue){
                console.log('Update!')
            },
            deep: true
        }
    },
    // 算出プロパティで書くとこうなる。基本的にこちらを推奨する
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    },
    methods: {
        onClick: function(event){
            this.colors[1].name = 'White'
        }
    }
})
app.mount('#app')