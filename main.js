const app = Vue.createApp({
    data() {
        return {
            searchText: '',
            listContacts: [
                {
                    firstName: 'Leticia',
                    lastName: 'Amado',
                    email: 'leticia.amadoaa@campuscode.com.br',
                    city: 'São Roque',
                    picture: 'https://randomuser.me/api/portraits/women/95.jpg'
                },
                {
                    firstName: 'Renata',
                    lastName: 'Soares',
                    email: 'renata@campuscode.com.br',
                    city: 'São Paulo',
                    picture: 'https://randomuser.me/api/portraits/women/12.jpg'
                },
                {
                    firstName: 'Marcos',
                    lastName: 'Guimarães',
                    email: 'marcos.grocha@campuscode.com.br',
                    city: 'Aracaju',
                    picture: 'https://randomuser.me/api/portraits/men/3.jpg'
                }
            ]
        }
    },
    computed: {
        listResult() {
            if(this.searchText) {
                return this.listContacts.filter(contact => {
                    return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase())
                });
            } else {
                return this.listContacts;
            }
        }
    },
    methods: {
        removeContact(index) {
            this.listContacts.splice(index, 1)
        },
        async getData() {
            let response = await fetch('https://randomuser.me/api/?results=15');
            this.listContacts = [];
            let data = await response.json();
            data.results.forEach(item => {
                var contact = new Object(); 
                contact.picture = item.picture.large;
                contact.firstName = item.name.first;
                contact.lastName = item.name.last;
                contact.email = item.email;
                contact.city = item.location.city;

                this.listContacts.push(contact);
            });
        }
    }
})
app.mount('#app')
