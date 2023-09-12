const app = Vue.createApp({
    data: () => ({
        hasError: true,
        largeClass: {
            'large': true,
            'bg-gray': true
        },
        dangerClass: {
            'text-danger':true
        },
        classObject: {
            large: true,
            'text-danger': true
        },
        isLarge: true,
        color: 'blue',
        fontSize: 36,
        styleObject: {
            color: 'blue',
            fontSize: '48px'
        }
    })
})
app.mount('#app')