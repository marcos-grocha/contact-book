const app = Vue.createApp({
    data() {
        return {
            searchText: '',
            listContacts: [
                {
                    firstName: 'Roberto',
                    lastName: 'Soares',
                    email: 'roberto@campuscode.com.br',
                    city: 'São Roque',
                    picture: 'https://randomuser.me/api/portraits/men/58.jpg'
                },
                {
                    firstName: 'Renata',
                    lastName: 'Soares',
                    email: 'renata@campuscode.com.br',
                    city: 'São Paulo',
                    picture: 'https://randomuser.me/api/portraits/women/24.jpg'
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
                // Procurar pelo contato
                return this.listContacts.filter(contact => {
                    return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase())
                });
            } else {
                // Se não encontra, retorna todos os contatos
                return this.listContacts;
            }
        }
    },
    methods: {
        removeContact(index) {
            // console.log('Index do objeto selecionado: ' + index)

            // Excluindo um objeto do item selecionado
            this.listContacts.splice(index, 1)
        },
        async getData() {
            let response = await fetch('https://randomuser.me/api/?results=15');
            this.listContacts = []; // Removendo todos os itens do array listContacts
            let data = await response.json(); // Armazenando os dados do json
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
