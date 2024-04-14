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

		<main>
			
			<div class="statistics-container">
				
			</div>

			<div class="full-news-container">
				<div class="info-container">
					<div class="tag green">ТУРИЗМ</div>
					<span class="data">Когда:</span>
				</div>
				<h1>Экскурсия в заповедник "Столбы"</h1>
				<img src="/public/ST.jpg" alt="news" style="width: 620px;">
				<div class="full-text">
					<br>
					<p>Львиные ворота и Царская калитка, Перья, Мухомор и Прадед — всё это не просто слова, а живописные скалы, которые мы с вами увидим во время этой экскурсии. Мы проведём день на лесных тропинках среди тайги и каменных скульптур, созданных самой природой, а также поднимемся на смотровые площадки с лучшим видом.</p>
					<br>
					<p><b>Место встречи:</b> остановка Турбаза, Красноярск</p>
					<br>
					<p><b>Место окончания:</b> остановка Турбаза, Красноярск</p>
					<br>
					<p><b>Как добраться:</b> автобусы: 19, 50, 78, 109</p>
					<br>
					<a class="tic" href="https://www.sputnik8.com/ru/krasnoyarsk/activities/34803-krasnoyarskie-stolby-mesto-dlya-polnoy-perezagruzki?from_cards=true#to_order_form" style="color: white; border: 2px solid black; background-color: black; border-radius: 7px; padding: 3px;">Купить билет</a>
				</div>
			</div>

			<div class="last-news">
				<div class="last-news-container">
					<a href="#">
						<p style="color: grey;">Актуально для города: Красноярск</p>
					</a>
				</div>

				<!-- <div class="last-news-container">
					<a href="https://ria.ru/20220827/bank-1812510133.html">
						<p><span>20:11</span>ЦБ расширил возможности по продаже наличной валюты населению. Банк России расширил возможности по продаже наличных долларов и евро населению</p>
					</a>
				</div>

				<div class="last-news-container">
					<a href="#">
						<p><span>7:11</span>Аналитик Васильев заявил о готовности Италии, Греции и Испании отказаться от евро</p>
					</a>
				</div>

				<div class="last-news-container">
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

		<div class="name">Коментарии: <span>21,2 тыс</span>
			<div class="add-container">
				<img class="user-comment-image" src="/public/user.png" width="30px" height="30px">
				<div>
					<input class="text" type="text" placeholder="Оставьте комментарий">
					<div class="button-container">
						<button class="add-button">Оставить комментарий</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="added-comments-container">
			<div class="comment-container">
				<div>

				</div>
			</div>
		</div>	


	</body>
</template>

<script>
export default {
    name: 'NewsPage2'
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

.full-news-container{
	margin-top: 1em;
	margin-left: 20em;
	width: 640px;
}

.last-news-container{
	margin: 1em 5em;
}

.name{
	margin: 1em 20em;
	width: 640px;
	color: grey;
}

.name span{
	color: black;
}

.add-container{
	margin-top: 1em;
	width: 640px;
}

.add-container img{
	float: left;
}

.text{
	border: none;
	border-bottom: 1px solid grey;
	width: 570px;
	height: 50px;
	margin-left: 10px;
	margin-bottom: 15px;
	border-radius: 10px;
}

.add-button{
	float: left;
	border: none;
	margin-left: 465px;
	width: 150px;
	padding: 5px;
	text-align: center;
	background-color: #fd8c53;
	color: white;
	border-radius: 10px;
	cursor: pointer;
}

.hide-show{
	margin-top: 20px;
	color: #fd8c53;
}

.added-comments-container{
	margin: 1em 20em;
	width: 640px;
}

.user-comment-image , .subcomment-user-logo{
	float: left;
}

.comment-text{
	margin: 1em 1.75em;
}

.answer{
	margin-top: 20px;
	color: grey;
}

.comment-container{
	margin-left: 1em;
	margin-top: 20px;
}
</style>