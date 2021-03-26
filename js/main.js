var app = new Vue({
    el: '#root',

    data:
    {   
        imgPrefix: 'img/avatar',
        imgExt: '.jpg',
        chatIndex: "",
        txt: '',
        newText: '',
        new: {},
        newContacts: [],
        temporaryLast: 'Ultimo accesso il ',
        hideShow: {
            index: "",
            visibility: 'hide'
        },
        user: {
            name: 'Stefano',
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
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
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
            this.scrollToBottom();

        },
        sendMessage(text) {
            this.new = {};
            this.new.date = dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
            this.new.status = 'sent';
            console.log(this.new);
            this.new.text = text;
            this.contacts[this.chatIndex].messages.push(this.new);
            this.temporaryLast = 'sta scrivendo...'
            setTimeout(this.getMessage, 2000);
            this.newText = "";
            this.scrollToBottom();
        },
        getMessage() {
            this.new = {};
            this.new.date = dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
            this.new.status = 'received';
            console.log(this.new);
            this.new.text = 'ok';
            this.contacts[this.chatIndex].messages.push(this.new);
            this.temporaryLast = 'Ultimo accesso oggi alle ';
            this.scrollToBottom();
        },
        lastMsg(array){
            let textMsg = array[array.length - 1].text;
            return textMsg;
        },
        getLastDate(array) {
            var hour = array[array.length - 1].date;
            return hour;
        },
        chatFilter(txt) {
            this.contacts.forEach(element => {
                if (element.name.includes(txt) == false)
                    element.visible = false;
                else 
                    element.visible = true;
            });
            console.log(this.contacts);
        },
        showMenu(index) {
            this.hideShow.index = index;
            if (this.hideShow.visibility === 'hide')
                this.hideShow.visibility = 'show';
                else
                this.hideShow.visibility = 'hide';
            
        },
        scrollToBottom() {
            this.$nextTick(() => {
                let elmnt = document.getElementsByClassName("msg");
                elmnt[elmnt.length - 1].scrollIntoView(false);
            });
        },
        msgDelete(index) {
            this.contacts[this.chatIndex].messages.splice(index,  1);
        }
    }

});
Vue.config.devtools = true