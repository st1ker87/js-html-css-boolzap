var app = new Vue({
    el: '#root',

    data:
    {   
        imgPrefix: 'img/avatar',
        imgExt: '.jpg',
        chatIndex: 0,
        txt: '',
        newText: '',
        new: {},
        newContacts: [],
        user: {
            name: 'Me',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]


    },

    methods: {
        chatSelected(index) {
            this.chatIndex = index;
        },
        sendMessage(text) {
            this.new = {};
            var data = new Date();
            var Hh, Mm, Ss;
            Hh = data.getHours() + ":";
            Mm = data.getMinutes() + ":";
            Ss = data.getSeconds();
            var gg, mm, aaaa;
            gg = data.getDate() + "/";
            mm = data.getMonth() + 1 + "/";
            aaaa = data.getFullYear();
            this.new.date = gg + mm + aaaa + "  " + Hh + Mm + Ss;
            this.new.status = 'sent';
            console.log(this.new);
            this.new.text = text;
            this.contacts[this.chatIndex].messages.push(this.new);
            setTimeout(this.getMessage, 2000);
            this.newText = "";

        },
        getMessage() {
            this.new = {};
            var data = new Date();
            var Hh, Mm, Ss;
            Hh = data.getHours() + ":";
            Mm = data.getMinutes() + ":";
            Ss = data.getSeconds();
            var gg, mm, aaaa;
            gg = data.getDate() + "/";
            mm = data.getMonth() + 1 + "/";
            aaaa = data.getFullYear();
            this.new.date = gg + mm + aaaa + "  " + Hh + Mm + Ss;
            this.new.status = 'received';
            console.log(this.new);
            this.new.text = 'ok';
            this.contacts[this.chatIndex].messages.push(this.new);
        },
        chatFilter(txt) {
            this.contacts.forEach(element => {
                if (element.name.includes(txt))
                    this.newContacts.push(element);
            });
            console.log(this.newContacts);
        }
    }

});
Vue.config.devtools = true