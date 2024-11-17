const app = Vue.createApp({
    data() {
        return {
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
    methods: {
        async getData() {
            let response = await fetch('https://randomuser.me/api/?results=15');
            
            // Exibindo os dados no console do navegador
            // console.log(response.json());

            // Armazenando os dados do json
            let data = await response.json();
            // console.log(data);

            // Removendo todos os itens do array listContacts
            this.listContacts = [];

            data.results.forEach(item => {
                var contact = new Object();
                
                contact.picture = item.picture.large;
                contact.firstName = item.name.first;
                contact.lastName = item.name.last;
                contact.email = item.email;
                contact.city = item.location.city;

                // console.log('--------')
                // console.log(contact)

                this.listContacts.push(contact);
            });
        }
    }
})
app.mount('#app')
