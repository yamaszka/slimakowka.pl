var sg=`
<div id="tresc1">
<div id="red_tekst" style="color: red;"><b>ŚLIMAKÓWKA już OTWARTA.<BR>
  ZAPRASZAMY</b>
    <br><br>
    W związku z epidemią wirusa COVID-19 uprzejmie prosimy o zapoznanie się z następującymi informacjami:<br>

1.Ogólne zasady bezpieczeństwa znajdują się przy głównych drzwiach wejściowych do budynku.<br>
2.Płyn do dezynfekcji znajduje się przy wszystkich drzwiach wejściowych do budynku oraz przy wspólnym aneksie kuchennym wraz z instrukcją jak skutecznie dezynfekować ręce.<br>
3.Instrukcja jak skutecznie myć ręce znajduje się we wszystkich łazienkach i kuchniach na terenie obiektu.<br>
4.Instrukcje jak prawidłowo nałożyć i zdjąć rękawice oraz maseczkę znajdują się przy głównych drzwiach wejściowych do budynku.<br><br>

Odwiedzających nas Gości uprzejmie prosimy o zapoznanie się ze wszystkimi informacjami, o których mowa powyżej, od razu po przyjeździe do Ślimakówki.

</div>



<div id="polecane">
Polecamy także:
<ul>

    <li><a href="http://www.zakopaneprzewodnik.com.pl" target="_blank">Przewodnictwo</a></li>
    <li><a href="http://www.bordery.pl" target="_blank">Hodowla border collie</a> </li>
    <li><a href="http://www.szkoladlapsow.com.pl" target="_blank">Szkoła dla psów</a></li>
</ul>
</div><!-- polecana -->

<img class="giewont" src="zdjecia/1000938.JPG"/>

<p id="fb" style="color: blue;">
    <span style="text-align: left;">
    <a href="https://www.facebook.com/willaslimakowka" target="blank"><img src="zdjecia/facebook.gif" alt="" width="60" height="60" align="left" style="border: none; margin-right: 20px;"/>
    </span>
    Zachęcamy także do obejrzenia naszej strony na Facebook-u. Znajdziecie tam Państwo najświeższe informacje na temat dostępności i promocji, a także wiele ciekawostek z życia Zakopanego oraz poradniki dotyczące wycieczek w góry oraz narciarstwa.
</a></p>

<br>
<hr size="1px" width="90%" align="center" color="#400000">
<h4>NASI PARTNERZY</h4>
<div id="partnerzy">
    <span class="partner">
        <a href="http://www.noclegi-online.pl/noclegi/zakopane/o22121" target="_blank" rel="nofollow"><img alt="Ślimakówka" src="http://www.noclegi-online.pl/afi/12.gif" border="0" /></a>
    </span>
    <span class="partner">
        <a href="http://www.eholiday.pl/noclegi-kq9395.html" title="Willa Ślimakówka" target="_blank"><img src="http://eholiday.smcloud.net/eholiday/img/gfx/1211.png" alt="Willa Ślimakówka" border="0" width="150" height="77" style="border:none;" /></a>
    </span>
    <span class="partner">
        <a href='http://www.nocowanie.pl/noclegi/zakopane/willa/93857/' target='_blank' title='WILLA ŚLIMAKÓWKA'><img src='http://img.nocowanie.pl/files/photos/exban/7_1.gif' border='0' alt='WILLA ŚLIMAKÓWKA' width='108' height='70' /></a>
        <a href='http://www.nocowanie.pl/noclegi/zakopane/' target='_blank' title='Noclegi Zakopane'><img src='http://img.nocowanie.pl/files/photos/exban/7_2.gif' border='0' alt='Noclegi Zakopane' width='21' height='70' /></a>
        <a href='http://www.nocowanie.pl/' target='_blank' title='noclegi'><img src='http://img.nocowanie.pl/files/photos/exban/7_3.gif' border='0' alt='noclegi' width='31' height='70' /></a>
    </span>
    <span class="partner">
        <a href="http://www.noclegowo.pl/noclegi/zakopane/wille/"><img alt="wygodne wille w Zakopanem" src="http://www.noclegowo.pl/img/logo-noclegowo-partner-mini.png" /></a>
    </span>
    <span class="partner">
        <a href="http://www.skocz.com" onclick="window.location='http://www.skocz.com/Polecajacy/www.slimakowka.republika.pl/'; return false;"><img src="http://skocz.com/pic/skocz.png" alt="Katalog Stron www" width="80" height="15" border="0"><br></a>
    </span>
    <!-- <span class="partner">
        <a rel="nofollow" href="http://www.iha.com.pl/Domy-goscinne-Zakopane/Ślimakowka_6586_1.htm"><img style="border:none;" src="http://img.iha.com.pl/IHA_widget_r49C98*p44F$f26648.2D_76_1948A372-glq1akAg_y.png"></a><script src="http://js.iha.com.pl/IHA_widget_r49C98*p44F$f26648.2D_76_1948A372-glq1akAg_y.js" language="javascript"></script>
    </span> -->
    <span class="partner">
    <a href="https://www.travelmyth.com/Zakopane/Hotels/dog_friendly"><img src="https://photos.travelmyth.com/awards/travelmyth_220903__dog_friendly_p0_yen_web.png" width="160" border="0" alt="Zakopane dog friendly hotels" /></a>
    </span>

</div> <!-- partnerzy -->
</div><!-- tresc1 -->
`;

// document.querySelector('#tresc').innerHTML=sg;//wartośc domyślna strony

document.querySelector('#sg').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=sg;
});// event listener for the button
document.querySelector('#s_sg').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=sg;
});// event listener for the button

//off canvas menu open
function openNav() {
    document.getElementById("sitenav").style.width = "60%";
}
//close inside menu
document.querySelector('.closebtn').addEventListener('click', function(){
    document.querySelector('#sitenav').style.width = "0px";
});// event listener for the button
//close sitenav when cursor leave sitenav
document.querySelector('#sitenav').addEventListener('mouseleave', function(){
    document.querySelector('#sitenav').style.width = "0px";
});// event listener for the button
//open inside menu for menu
document.querySelector('.open_inside').addEventListener('mouseover', function(){
    document.querySelector('#inside_menu').style.display = "block";
});// event listener for the button
//close inside menu for menu
document.querySelector('#inside_menu').addEventListener('mouseleave', function(){
    document.querySelector('#inside_menu').style.display = "none";
});// event listener for the button

//for sitenav
//open inside menu for sitenav
document.querySelector('.s_open_inside').addEventListener('mouseover', function(){
    document.querySelector('#s_inside_menu').style.display = "block";
});// event listener for the button
//close inside menu for sitenav
document.querySelector('#s_inside_menu').addEventListener('mouseleave', function(){
    document.querySelector('#s_inside_menu').style.display = "none";
});// event listener for the button
