const app = Vue.createApp({
    data: () => ({
        items:[],
        keyword:'',
        message:''
    }),
    watch: {
        keyword: function(newKeyword,oldKeyword){
            console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    mounted: function(){
        // this.keyword = 'Vue.js'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function(){
            if(this.keyword===''){
                console.log('空文字')
                this.items=null
                return
            }

            this.message = 'Loading...'
            const vm = this
            const params = {page:1,per_page:20,query:this.keyword}
            axios.get('https://qiita.com/api/v2/items', { params })
            .then(function(response){
            //   console.log(response)
              vm.items = response.data
            })
            .catch(function(error){
              vm.message = 'Error!' + error
            })
            .finally(function() {
              vm.message = ''
            })
        }
    }
})
app.mount('#app')