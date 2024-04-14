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
		
		<form action="#" method="post" class="full-news-container">
			<div class="info-container">
				<h4>Категория:</h4>
				<select>
					<option value="property">Туризм</option>
					<option value="property">Эстрада</option>
					<option value="property">Туризм</option>
					<option value="property">Наука</option>
				</select>
			</div>
			<input type="text" placeholder="Текст заголовка" class="news-name">
			<div class="image-container">
				<img class="addnewsimg" src="public/addnews.png">
			</div>
			<div class="full-text" contenteditable=true data-text="Основоной текст события"></div>
			<div class="button-container">
				<button class="cancel">Отмена</button>
				<button class="add-button-addpage">Опубликовать</button>
			</div>
			<div class="sorry">
				Страница временно не работает поэтому опубликовать свое событие пока не возможно. Приносим свои извинения.
			</div>
		</form>
	</body>
</template>

<script>
export default {
    name: 'AddPage'
}
</script>