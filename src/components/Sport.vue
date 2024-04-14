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

    <div>
        <div>Популярные команды:</div>
        <div v-if="isLoad">Загрузка...</div>
        <div v-else>
            <div v-for="el in teamData" :key="el.id">
                {{ el.id }}. {{ el.first_name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeatherApi',
    data(){
        return{
            teamData: [],
            isLoad: true     
        }
    },
    mounted(){
        const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
        const options = {
            method: 'GET', 
            headers: { 
                'X-RapidAPI-Key': '6a6ffb4e6fmsh5f1877d5ea79c55p183086jsn00792ed13f4d',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };
        fetch(url, options).then((res) => res.json()).then((res) => {
            console.log(res);
            this.teamData = res.data
            this.isLoad = false
        })
    }
}
</script>