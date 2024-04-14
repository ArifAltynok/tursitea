<template>
    <body>
        <header>
			<div class="header-container">
                <a href="/"><img src="public/Logo2.png" width="60px" alt="NEWS"></a>
                <nav>
                    <a href="/">Главная</a>
                    <a href="https://yandex.ru/pogoda/krasnoyarsk?lat=56.010563&lon=92.852572">Погода</a>
                    <a href="/chat">Поддержка</a>
                    <a href="/about">О нас</a>
                    <a href="/email">Связь с нами</a>
                </nav>
                <div class="white-icons">
                    <a href="/user"><img class="icon1" src="public/user.png" alt="user" width="30px" height="30px"></a>
                    <a href="/addpage"><img class="icon1" src="public/add.png" alt="добавить новость" height="28px" width="28px"></a>
                </div>
            </div>
		</header>
    </body>

    <div v-if="username">
        <div class="chat">
            <h2>Обращение в тех. поддержку сайта</h2>
            <div class="text" v-for="message in messages" :key="message.id">
                {{ message.user }}: {{ message.text }}
            </div>
            <div v-show="emptyMsg" class="empty">
                Сообщений нет
            </div>
        </div>

        <input v-model="newMessage" placeholder="Введите сообщение" />
        <button @click="sendMessage" class="send">Отправить</button>
        <button @click="deleteMessage" class="delete">Удалить всё</button>
    </div>

    <div v-else>
        Для отправки сообщений нужно <router-link :to="{name: 'User'}" style="color: #fd8c53;">авторизоваться</router-link>
    </div>

</template>

<script>
export default {
    name: 'ChatComp',
    data(){
        return{
            messages: [],
            newMessage: '',
            emptyMsg: true,
            username: localStorage.getItem('username')
        }
    },
    computed(){
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage(){
            if(this.newMessage !== '') {
                this.emptyMsg = false
                this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
                this.saveChat(),
                this.newMessage = ''
            }else{
                alert('Введите сообщение')
            }
        },
        saveChat(){
            const save = this.messages
            localStorage.setItem(`messages_${this.username}`, JSON.stringify(save))
        },
        loadChatSave(){
            const save = JSON.parse(localStorage.getItem(`messages_${this.username}`))
            if(save){
                this.messages = save
                this.emptyMsg = false
            }
        },
        deleteMessage(){
            this.messages = []
            localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.messages))
            this.emptyMsg = true
        }
    },
    created(){
        this.loadChatSave()
    }
}
</script>

<style>
.send{
    margin-left: 5px;
    margin-top: 5px;
    float: center;
	border: none;
	margin-left: 5px;
	width: 150px;
	padding: 5px;
	text-align: center;
	background-color: #fd8c53;
	color: white;
	border-radius: 10px;
	cursor: pointer;
}

.delete{
    margin-left: 5px;
    margin-top: 5px;
    float: center;
	border: none;
	margin-left: 5px;
	width: 150px;
	padding: 5px;
	text-align: center;
	background-color: #fd8c53;
	color: white;
	border-radius: 10px;
	cursor: pointer;
}
</style>