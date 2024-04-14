<template>


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

<main>
    
    <div class="main-news-container">
        
        <div class="big-news-container">
            <a href="/newspage2">
                <img src="public/ST.jpg" alt="" style="width: 640px; border-radius: 10px;">
            </a>
            <div class="info-container">
                <div class="tag green" style="border-radius: 5px;">ЭКСКУРСИИ</div>
                <span class="data">Когда:</span>
                <div class="statistic">
                    <div>
                        <img src="public/heart.png" alt="" width="70px"> 
                        <p>3,8 тыс</p>
                    </div>
                    <!-- <div>
                        <img src="public/Comment.png" alt="" width="50px">
                        <p>21,2 тыс</p>
                    </div> -->
                </div>	
            </div>
            <a href="/newspage2">
                <h1>Экскурсия в заповедник "Столбы"</h1>

                <p></p>
            </a>
        </div>

        <div class="big-news-container">
            <a href="/newspage5">
                <img src="public/VKs.png" alt="" style="width: 640px; border-radius: 10px;">
            </a>
            <div class="info-container">
                <div class="tag orange" style="border-radius: 5px;">ВЫСТАВКИ</div>
                <span class="data">Когда: 14.03.2024 - 12.05.2024</span>
                <div class="statistic">
                    <div>
                        <img src="public/heart.png" alt="" width="70px"> 
                        <p>3,8 тыс</p>
                    </div>
                    <!-- <div>
                        <img src="public/Comment.png" alt="" width="50px">
                        <p>21,2 тыс</p>
                    </div> -->
                </div>	
            </div>
            <a href="/newspage5">
                <h1>Выставка "Внутренний космос"</h1>

                <p></p>
            </a>
        </div>

        <div class="big-news-container">
            <a href="/newspage">
                <img src="public/SP.jpg" alt="" style="width: 640px; border-radius: 10px;">
            </a>
            <div class="info-container">
                <div class="tag purple" style="border-radius: 5px;">ТЕАТР</div>
                <span class="data">Когда: </span>
                <div class="statistic">
                    <div>
                        <img src="public/heart.png" alt="" width="70px"> 
                        <p>35,9 тыс</p>
                    </div>
                    <!-- <div>
                        <img src="public/Comment.png" alt="" width="50px">
                        <p>1,2 тыс</p>
                    </div> -->
                </div>	
            </div>
            <a href="/newspage">
                <h1>СИНЯЯ ПТИЦА</h1>

                <p></p>
            </a>
        </div>
    </div>

    <div class="hot-container">
        
        <div class="small-news-container">
            <a href="/newspage3" class="image-link">
                <img class="news3img" src="/public/DFMDP.jpg" alt="" style="width: 360px; border-radius: 10px;">
            </a>
            <div class="tag yellow" style="border-radius: 5px;">ВЫСТУПЛЕНИЯ</div>
            <a class="header" href="/newspage3">
                <h2>DFM Dance Party</h2>
                <p>Радио DFM продолжает серию фирменных вечеринок DFM Dance Party.</p>
            </a>
            <div class="statistic">
                <div>
                    <img src="public/heart.png" alt="" width="60px"> 
                    <p>5,9 тыс</p>
                </div>
                <!-- <div>
                    <img src="public/Comment.png" alt="" width="40px">
                    <p>14,9 тыс</p>
                </div> -->
            </div>
        </div>

        <div class="small-news-container">
            <a href="/newspage4" class="image-link">
                <img src="/public/BKZ.jpeg" alt="" style="width: 360px; border-radius: 10px;">
            </a>
            <div class="tag blue" style="border-radius: 5px;">КОНЦЕРТЫ</div>
            <a class="header" href="/newspage4">
                <h2>"Рождение танца. Класс-урок" Ансамбль танца Сибири имени М.С.Годенко</h2>
            </a>
            <div class="statistic">
                <div>
                        <img src="public/heart.png" alt="" width="60px"> 
                        <p>9,1 тыс</p>
                    </div>
                    <!-- <div>
                        <img src="public/Comment.png" alt="" width="40px">
                        <p>4,7 тыс</p>
                    </div> -->
                </div>
            </div>
        </div>

    <div class="last-news">
        
        <div class="last-news-container">
            <a href="#">
                <p style="color: grey;">Актуально для города: 
                <select>
					<option value="property">Красноярск</option>
					<option value="property">Москва</option>
					<option value="property">Новосибирск</option>
				</select></p>
            </a>
        </div>

        <!-- <div class="last-news-container">
            <a href="#">
                <p><span>2:11</span>Власти Энергодара сообщили о попадании снаряда ВСУ в энергоблок ЗАЭС</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>14:11</span>Эксперт Альхаджи: потолок цен на российскую нефть дорого обойдется Западу</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>11:58</span>Bloomberg: Великобританию охватила паника из-за перекрытия Россией «Северного потока»</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>15:11</span>Причиной смерти туристов на Ключевском вулкане на Камчатке стало падение с высоты</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>20:39</span>Красноярский телеканал ТВК начал использовать метку иностранного агента</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>11:11</span>В трех районах Красноярска отключили холодную воду до вечера</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>15:48</span>Водитель «Волги» на правобережье Красноярска врезался в МАЗ, погибли два человека</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>14:11</span>На «Столбах» за сутки трое туристов получили травмы</p>
            </a>
        </div>

        <div class="last-news-container">
            <a href="#">
                <p><span>22:43</span>Evrensel: ЕС, затруднив выдачу виз россиянам, лицемерно опускает «железный занавес»</p>
            </a>
        </div> -->
    </div>

</main>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	font-family: 'Montserrat' , sans-serif;
}

a{
	text-decoration: none;
}

header{
	background: #181818;
	height: 70px;
	display: flex;
	align-items: center;
}

header a{
	color: white;
}

main{
	display: flex;
}

.white-icons{
	filter: invert(100%);
	display: flex;
}

.icon1{
	margin-left: 15px;
}

.header-container{
	width: 1230px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
}

.header-container nav{
	display: flex;
	color: #ffffff;
	width: 900px;
	justify-content: space-between;
}

.header-container nav div:hover{
	color: #888888;
	cursor: pointer;
}

.header-container div{
	width: 93px;
	display: flex;
	justify-content: space-between;
}

.main-news-container a{
	color: black;
}

.info-container{
	display: flex;
	align-items: center;
}

.statistic{
	display: flex;
	align-items: center;
}

.statistic div{
	display: flex;
	align-items: center;
	margin-left: 20px;
}

.data{
	font-size: 10px;
	color: grey;
}

.yellow{
	width: 120px;
	padding: 5px;
	text-align: center;
	background-color: #ebe300;
	color: white;
}

.green{
	width: 120px;
	padding: 5px;
	text-align: center;
	background-color: #00bd00;
	color: white;
}

.blue{
	width: 120px;
	padding: 5px;
	text-align: center;
	background-color: #0099ff;
	color: white;
}

.orange{
    width: 120px;
	padding: 5px;
	text-align: center;
	background-color: #ff9900;
	color: white;
}

.purple{
    width: 120px;
	padding: 5px;
	text-align: center;
	background-color: #bf00ff;
	color: white;
}

.big-news-container{
	width: 600px;
	margin: 1em 1em;
	margin-left: 9em;
}

.small-news-container{
	width: 360px;
	margin: 1em 1em;
	margin-left: 3em;
}

.small-news-container a{
	color: black;
}

.hot-container{
	display: flex;
	flex-direction: column;
}

.last-news-container{
	margin: 1em 1em;
	margin-left: 1em;
}

.last-news-container a{
	color: black;
}

.last-news-container span{
	color: grey;
}

.full-news-container h1{
	margin-top: 10px;
	margin-bottom: 15px;
}

.username{
	line-height: 30px;
	margin-left: 5px;
}

.username-small{
	line-height: 20px;
	margin-left: 5px;
}

[contenteditable=true]:empty:not(:focus):before{
	content: attr(data-text);
	color: grey;
}

.addnewsimg{
	margin-top: 20px;
	margin-bottom: 20px;
	width: 640px;
	height: auto;
}

.news-name{
	border: none;
	margin-top: 10px;
	width: 640px;
	height: 50px;
}

.news-name::placeholder{
	font-size: 30px;
}

.cancel{
	float: left;
	border: none;
	margin-left: 333px;
	width: 150px;
	padding: 5px;
	text-align: center;
	background-color: #000000;
	color: white;
	border-radius: 10px;
	cursor: pointer;
}

.add-button-addpage{
	float: left;
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

.info-container select{
	border: none;
}

.info-container option{
	text-transform: capitalize;
}

select:hover{
	background-color: transparent;
}

.full-text{
	border-bottom: 1px solid grey;
	margin-bottom: 10px;
}

.sorry{
	display: block;
	margin-top: 65px;
	font-size: 20px;
	color: red;
}

.about{
	display: block;
	justify-content: center;
	text-align: center;
	align-items: center;
	
}

.about-me{
	margin-top: 30px;
	align-items: center;
}

.partners{
	margin-top: 20px;
}

.page-about{
	background-color: #c7c7c7;
}

.mail{

	margin-top: 30px;
	align-items: center;
}

.link{
	text-decoration: none;
	color: #fd8c53;
}

header{
	background: #181818;
	height: 70px;
	display: flex;
	align-items: center;
}

.hot-container h2{
	margin-top: 15px;
}

.last-news span{
	margin-right: 10px;
}

.news3img{
    width: 450px;
}
</style>