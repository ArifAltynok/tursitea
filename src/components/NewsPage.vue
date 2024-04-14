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
					<div class="tag purple">ТЕАТР</div>
					<span class="data">Когда: </span>
				</div>
				<h1>СИНЯЯ ПТИЦА</h1>
				<img src="/public/SP.jpg" alt="news" style="width: 620px;">
				<div class="full-text">
					<br>
					<p>Премьера состоялась 12 декабря 2021 года.</p>
					<br>
					<a class="tic" href="https://krasopera.ru/play/view/sinyaya-ptica/" style="color: white; border: 2px solid black; background-color: black; border-radius: 7px; padding: 3px;">Купить билет</a>
				</div>
			</div>

			<div class="last-news">
				<div class="last-news-container">
					<a href="#">
						<p style="color: grey;">Актуально для города Красноярск</p>
					</a>
				</div>

				<!-- <div class="last-news-container">
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

		<div class="name">Коментарии: <span>нет</span>
			<!-- <div class="add-container">
				<img class="user-comment-image" src="/public/user.png" width="30px" height="30px">
				<div>
					<input class="text" type="text" placeholder="Оставьте комментарий">
					<div class="button-container">
						<button class="add-button">Оставить комментарий</button>
					</div>
				</div>
			</div> -->
		</div>
		
		<!-- <div class="added-comments-container">
			<div class="comment-container">
				<img class="user-comment-image" src="/public/user.png" width="30px" height="30px">
				<div>
					<span class="username"><b>Андрей Свиридов</b></span>
					<div class="comment-text">
						С возвращением!
					</div>
					<span class="answer">Ответить</span>
					<br> -->
					<!-- <span class="hide-show"> <img class="arrow" src="/public/arrow.png" alt="" width="12px" height="12px">Скрыть все ответы</span> -->
					<!-- <div class="comment-container">
						<img src="/public/user.png" alt="" class="subcomment-user-logo" width="20px" height="20px">
						<div>
							<span class="username-small"><b>Максим Давыдов</b></span>
							<div class="comment-text">
								Спасибо за комментарий
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	 -->


	</body>
</template>

<script>
export default {
    name: 'NewsPage'
}
</script>