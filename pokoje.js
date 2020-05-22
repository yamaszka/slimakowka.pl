//definicje funkcji
function morePok1() {
    document.querySelector('#pok1').innerHTML=more_pok1;
};

function lessPok1() {
    document.querySelector('#pok1').innerHTML=pok1;
};
function morePok2() {
    document.querySelector('#pok2').innerHTML=more_pok2;
};

function lessPok2() {
    document.querySelector('#pok2').innerHTML=pok2;
};
function morePok3() {
    document.querySelector('#pok3').innerHTML=more_pok3;
};

function lessPok3() {
    document.querySelector('#pok3').innerHTML=pok3;
};
function morePok4() {
    document.querySelector('#pok4').innerHTML=more_pok4;
};

function lessPok4() {
    document.querySelector('#pok4').innerHTML=pok4;
};
function morePok5() {
    document.querySelector('#pok5').innerHTML=more_pok5;
};

function lessPok5() {
    document.querySelector('#pok5').innerHTML=pok5;
};
//funkcje uzywane na mapie
function openLazienka() {
    document.querySelector('#tresc').innerHTML=lazienka;
};
//
function openPrzedpokoj() {
    document.querySelector('#tresc').innerHTML=przedpokoj;
};

function openPokoje() {
    document.querySelector('#tresc').innerHTML=pokoje;
};


//definicje zmiennych/ tekstów
var more_pok1 = `
<br>
<hr>
<h4>POKÓJ 1</h4>
</a>
<p>
Mały (11mkw), dwuosobowy, przytulny pokoik z widokiem na góry, które można podziwiać z balkonu. Kiedy otworzysz okno usłyszysz szumiący potok Bystry.  Dwa osobne tapczany ustawiamy w zależności od potrzeb.
</p>
<img class="more" src="zdjecia/pokoje/pokoj1/IMG_3483.jpg" alt=""/>
<img class="more" src="zdjecia/pokoje/pokoj1/IMG_3595.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj1/IMG_3598.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj1/IMG_3609.jpg" alt=""/>
<br>
<a onclick="lessPok1()"><em>.....zwiń</em></a>`;

var more_pok2 = `
<br><br>
<hr>
<h4>POKÓJ 2</h4>
</a>
<p>
Jasny dwuosobowy pokój(14mkw) z dużym drewnianym łóżkiem, typowo góralsk&#261 szafk&#261 i balkonem z widokiem na góry i uspakajaj&#261cym szumem pobliskiego potoku.<a href="pokoj2.html#pok2"><em>.....więcej zdjęć</em></a>
</p>
<img class="more" src="zdjecia/pokoje/pokoj2/IMG_3509.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj2/IMG_3519.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj2/IMG_3533.jpg" alt="" />
<br>
<a onclick="lessPok2()"><em>.....zwiń</em></a>`;

var more_pok3 = `
<br><br>
<hr>
<h4>POKÓJ 3</h4>
</a>
<p>
Pokój dwuosobowy z dostawką (12,5mkw), z dużym drewnianym łóżkiem oraz widokiem na zielony, pełen owoców ogród.<a href="pokoj3.html#pok3"><em>.....więcej zdjęć</em></a>
</p>
<img class="more" src="zdjecia/pokoje/pokoj3/IMG_3541.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj3/IMG_3543.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj3/IMG_3548.jpg" alt="" />
<br>
<a onclick="lessPok3()"><em>.....zwiń</em></a>`;

var more_pok4 = `
<br><br>
<hr>
<h4>POKÓJ 4</h4>
</a>
<p>
Pokój dwuosobowy z dostawką (14mkw), z dostępem do balkonu ozdobionego zgodnie ze starymi góralskimi wzorami. Dwa osobne tapczany ustawiamy w zależności od potrzeb.<a href="pokoj4.html#pok4"><em>.....więcej zdjęć</em></a>
</p>
<img class="more" src="zdjecia/pokoje/pokoj4/IMG_3570.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj4/IMG_3576.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj4/IMG_3580.jpg" alt="" />
<br>
<a onclick="lessPok4()"><em>.....zwiń</em></a>
`;

var more_pok5 = `
<br><br>
<hr>
<h4>POKÓJ 5</h4>
</a>
<p>
Mały (11mkw), przytulny pokoik z dostępem do balkonu i widokiem na pobliski potok Bystry. Dwa osobne tapczany ustawiamy w zależno&#347ci od potrzeb.<a href="pokoj5.html#pok5"><em>.....więcej zdjęć</em></a>
</p>
<img class="more" src="zdjecia/pokoje/pokoj5/IMG_3586.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj5/IMG_3587.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/pokoj5/IMG_3592.jpg" alt="" />
<br>
<a onclick="lessPok5()"><em>.....zwiń</em></a>
</center>`;


var pokoje = `
<br>
<h4>POKOJE Z ŁAZIENKĄ NA KORYTARZU</h4>

<p>
To najtańsze pokoje w naszej ofercie.<br>
Cześć pokoi posiada przyporządkowaną prywatną łazienkę, dla innych łazienka jest wspólna max dla 6 osób.<br>
<img src="zdjecia/zestaw.jpg" alt="" width="333" height="250" align="right"/>
Posiadamy pokoje dwuosobowe i dwuosobowe z dostawką.<br>
W każdym z nich znajduje się :</p>
<ul>
<li>	telewizor</li>
<li>	zestaw śniadaniowy widoczny na zdjęciu</li>
<li>	radio</li>
<li>	wieszak na ubrania</li>
<li>	szafka lub komoda</li>
<li>	stół i krzesła</li>
</ul>

<p>Większość posiada także balkon (prosimy zgłosić zainteresowanie podczas rezerwacji).<br>
Do dyspozycji gości przeznaczona jest wspólna lodówka i mikrofalówka.

</p>
<center>
<div class="jablka">
<img class="mapa_pietra" src="zdjecia/Kopia rzut.jpg" usemap="#mapa" alt="" border="0" />
  <map name="mapa">
   <area shape="rect"coords="40,160,139,316" onclick="openPokoje()" alt="pokój nr 1">
	 <area shape="rect"coords="39,21,205,159" onclick="openPokoje()" alt="pokój nr 2">
	 <area shape="rect"coords="208,21,401,158" onclick="openPokoje()" alt="pokój nr 3">
	 <area shape="rect"coords="402,20,615,158" onclick="openPokoje()" alt="pokój nr 4">
	 <area shape="rect"coords="482,164,611,315" onclick="openPokoje()" alt="pokój nr 5">
	 <area shape="rect"coords="149,205,229,267" onclick="openLazienka()" alt="łazienka nr 1">
	 <area shape="rect"coords="304,258,378,316" onclick="openLazienka()" alt="łazienka nr 2">
	 <area shape="rect"coords="385,206,462,267" onclick="openLazienka()" alt="łazienka nr 3">
	 <area shape="rect"coords="148,162,477,198" onclick="openPrzedpokoj()" alt="przedpokoj">
	 <area shape="rect"coords="234,204,378,251" onclick="openPrzedpokoj()" alt="przedpokoj">
   <area shape="rect"coords="235,259,299,315" onclick="openPrzedpokoj()" alt="przedpokoj">
</div>`;

var pok1 = `<div id="pok1" name="pok2">
<br>
<hr>
<h4 id="pok1">POKÓJ 1</h4>
</a>
<p>
Mały (11mkw), dwuosobowy, przytulny pokoik z widokiem na góry, które można podziwiać z balkonu. Kiedy otworzysz okno usłyszysz szumiący potok Bystry.  Dwa osobne tapczany ustawiamy w zależności od potrzeb.<a onclick="morePok1()"><em>.....więcej zdjęć</em></a>
</p>
<img src="zdjecia/pokoje/pokoj1/mIMG_3595.jpg" alt="" width="300" height="200" />
<img src="zdjecia/pokoje/pokoj1/mIMG_3598.jpg" alt="" width="300" height="200" />
</div>`;


var pok2 = `<div id="pok2">
<br><br>
<hr>
<h4>POKÓJ 2</h4>
</a>
<p>
Jasny dwuosobowy pokój(14mkw) z dużym drewnianym łóżkiem, typowo góralską szafką i balkonem z widokiem na góry i uspakajającym szumem pobliskiego potoku.<a onclick="morePok2()"><em>.....więcej zdjęć</em></a>
</p>
<img src="zdjecia/pokoje/pokoj2/mIMG_3519.jpg" alt="" width="300" height="200" />
<img src="zdjecia/pokoje/pokoj2/mIMG_3533.jpg" alt="" width="300" height="200" />
</div>`;


var pok3 = `<div id="pok3">
<br><br>
<hr>
<h4>POKÓJ 3</h4>
</a>
<p>
Pokój dwuosobowy z dostawką (12,5mkw), z dużym drewnianym łóżkiem oraz widokiem na zielony, pełen owoców ogród.<a onclick="morePok3()"><em>.....więcej zdjęć</em></a>
</p>
<img src="zdjecia/pokoje/pokoj3/mIMG_3541.jpg" alt="" width="300" height="200" />
<img src="zdjecia/pokoje/pokoj3/mIMG_3543.jpg" alt="" width="300" height="200" />
</div>`;

var pok4= `<div id="pok4">
<br><br>
<hr>
<h4>POKÓJ 4</h4>
</a>
<p>
Pokój dwuosobowy z dostawką (14mkw), z dostępem do balkonu ozdobionego zgodnie ze starymi góralskimi wzorami. Dwa osobne tapczany ustawiamy w zależności od potrzeb.<a onclick="morePok4()"><em>.....więcej zdjęć</em></a>
</p>
<img src="zdjecia/pokoje/pokoj4/mIMG_3576.jpg" alt="" width="300" height="200" />
<img src="zdjecia/pokoje/pokoj4/mIMG_3580.jpg" alt="" width="300" height="200" />
</div>`;

var pok5 = `<div id="pok5">
<br><br>
<hr>
<h4>POKÓJ 5</h4>
</a>
<p>
Mały (11mkw), przytulny pokoik z dostępem do balkonu i widokiem na pobliski potok Bystry. Dwa osobne tapczany ustawiamy w zależności od potrzeb.<a onclick="morePok5()"><em>.....więcej zdjęć</em></a>
</p>
<img src="zdjecia/pokoje/pokoj5/mIMG_3586.jpg" alt="" width="300" height="200" />
<img src="zdjecia/pokoje/pokoj5/mIMG_3587.jpg" alt="" width="300" height="200" />
<br><br>
</div>
</center>`;

var lazienka = `
<br>

<h4>ŁAZIENKI</h4>

<div class="jablka">
<img class="mapa_pietra" src="zdjecia/Kopia rzut.jpg" usemap="#mapa" alt="" border="0" />
  <map name="mapa">
  <area shape="rect"coords="40,160,139,316" onclick="openPokoje()" alt="pokój nr 1">
   <area shape="rect"coords="39,21,205,159" onclick="openPokoje()" alt="pokój nr 2">
   <area shape="rect"coords="208,21,401,158" onclick="openPokoje()" alt="pokój nr 3">
   <area shape="rect"coords="402,20,615,158" onclick="openPokoje()" alt="pokój nr 4">
   <area shape="rect"coords="482,164,611,315" onclick="openPokoje()" alt="pokój nr 5">
   <area shape="rect"coords="149,205,229,267" onclick="openLazienka()" alt="łazienka nr 1">
   <area shape="rect"coords="304,258,378,316" onclick="openLazienka()" alt="łazienka nr 2">
   <area shape="rect"coords="385,206,462,267" onclick="openLazienka()" alt="łazienka nr 3">
   <area shape="rect"coords="148,162,477,198" onclick="openPrzedpokoj()" alt="przedpokoj">
   <area shape="rect"coords="234,204,378,251" onclick="openPrzedpokoj()" alt="przedpokoj">
  <area shape="rect"coords="235,259,299,315" onclick="openPrzedpokoj()" alt="przedpokoj">
</div>

<a name="laz1">
<br>
<hr>
<h4>ŁAZIENKA nr 1</h4>
</a>
<img class="more" src="zdjecia/pokoje/lazienka1/IMG_3505.jpg" alt="" />

<a name="laz2">
<br>
<hr>
<h4>ŁAZIENKA nr 2</h4>
</a>
<img class="more" src="zdjecia/pokoje/lazienka2/IMG_3558.jpg" alt="" />

<a name="laz3">
<br>
<hr>
<h4>ŁAZIENKA nr 3</h4>
</a>
<img class="more" src="zdjecia/pokoje/lazienka3/IMG_3565.jpg" alt="" />`;

var przedpokoj = `
<br>

<h4>PRZEDPOKÓJ</h4>

<div class="jablka">
<img class="mapa_pietra" src="zdjecia/Kopia rzut.jpg" usemap="#mapa" alt="" border="0" />
  <map name="mapa">
  <area shape="rect"coords="40,160,139,316" onclick="openPokoje()" alt="pokój nr 1">
   <area shape="rect"coords="39,21,205,159" onclick="openPokoje()" alt="pokój nr 2">
   <area shape="rect"coords="208,21,401,158" onclick="openPokoje()" alt="pokój nr 3">
   <area shape="rect"coords="402,20,615,158" onclick="openPokoje()" alt="pokój nr 4">
   <area shape="rect"coords="482,164,611,315" onclick="openPokoje()" alt="pokój nr 5">
   <area shape="rect"coords="149,205,229,267" onclick="openLazienka()" alt="łazienka nr 1">
   <area shape="rect"coords="304,258,378,316" onclick="openLazienka()" alt="łazienka nr 2">
   <area shape="rect"coords="385,206,462,267" onclick="openLazienka()" alt="łazienka nr 3">
   <area shape="rect"coords="148,162,477,198" onclick="openPrzedpokoj()" alt="przedpokoj">
   <area shape="rect"coords="234,204,378,251" onclick="openPrzedpokoj()" alt="przedpokoj">
  <area shape="rect"coords="235,259,299,315" onclick="openPrzedpokoj()" alt="przedpokoj">
</div>

<img class="more" src="zdjecia/pokoje/przedpokoj/IMG_3607.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/przedpokoj/IMG_3603.jpg" alt="" />`;

pokoje = pokoje+pok1+pok2+pok3+pok4+pok5;
//menu
document.querySelector('#pokoje').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=pokoje;
});//pokoje
//sitenav
document.querySelector('#s_pokoje').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=pokoje;
});//pokoje
