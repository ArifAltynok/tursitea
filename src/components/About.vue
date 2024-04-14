<template>
    <body class="page-about">
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

        <section class="about">
            <div class="about-me">
                Этот сайт был создан в качестве индивидуального проекта. Надеюсь Вам было интересно его изучить
            </div>
            <!-- <div class="partners">
                Наши партнёры: 
                <ul>
                    <li style="color: yellow;"></li>
                </ul>
            </div> -->
            <!-- <div class="mail">
                Связаться с нами можно по почте:
                <a href="/email" class="link">Связаться с нами</a>
            </div> -->
        </section>
    </body>
</template>

<script>
export default {
    name: 'AboutPage'
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
</style>