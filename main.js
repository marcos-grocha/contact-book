const app = Vue.createApp({
    data() {
        return {
            firstName: 'Marcos',
            lastName: 'Guimarães',
            email: 'marcos.grocha@campuscode.com.br',
            city: 'Aracaju',
            picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        }
    },
    methods: {
        changeData() {
            this.firstName = 'Caie'
            this.lastName = 'Duarte'
            this.email = 'caio.duarte@campuscode.com.br'
            this.city = 'Cajamar'
            this.picture = 'https://randomuser.me/api/portraits/women/65.jpg'
        }
    }
})

app.mount('#app')