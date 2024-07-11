import React from 'react';
import '../styles/App.css';
import '../styles/Main.css'
import '../styles/TextAnim.css'
import '../styles/OpacityPrewie.css'
import '../styles/MainTextAnim.css'
function Main() {
    return (
        <div style={{ padding: 10 }} class='for_main_div'>
            <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '32px' }} class='text-load' data-text="Добро пожаловать в">
                Добро пожаловать в<br />
            </h1>
            <h1 style={{ fontFamily: 'MyCustomFont', fontSize: '32px' }} class='text-load' data-text="WEB-ПРИЛОЖЕНИЕ MKIT!">
                WEB-ПРИЛОЖЕНИЕ MKIT!
            </h1>


            <div class='text-opacity'>

                <p class='perenos'>
                    Здесь, в Московском Колледже Информационных Технологий, мы гордимся своей приверженностью к передовому образованию и подготовке высококвалифицированных специалистов в области информационных технологий.<br />
                    На нашем веб-сайте вы сможете найти все необходимое, чтобы сделать свой опыт обучения максимально продуктивным и комфортным. Вот что мы можем вам предложить:
                    <ul>
                        <li>
                            <b style={{ fontFamily: 'MyCustomFont', fontSize: '32px' }} class ='color_li'>Расписание</b><br />
                            Легко ориентируйтесь в учебном процессе, имея под рукой актуальное расписание. Узнавайте, когда у вас пары, какие предметы вам предстоит изучать, и планируйте свое время эффективно.
                        </li>
                        <li>
                            <b style={{ fontFamily: 'MyCustomFont', fontSize: '32px' }} class ='color_li'>Домашние задания</b><br />
                            Никогда не упускайте важных домашних работ! Все ваши ДЗ собраны в одном месте, чтобы вы могли их легко отслеживать и вовремя выполнять.
                        </li>
                        <li>
                            <b style={{ fontFamily: 'MyCustomFont', fontSize: '32px' }} class ='color_li'>Новости колледжа</b><br />

                            Будьте в курсе последних событий, мероприятий и объявлений от администрации. Следите за новостями, чтобы быть в курсе всего, что происходит в нашем колледже.
                        </li>
                    </ul>
                    Присоединяйтесь к нам и откройте для себя мир современного образования в МКИТ. Мы ждем вас!❤
                </p>
            </div>
        </div>

    );
}

export default Main;
