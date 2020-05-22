var willa = `
<img src="zdjecia/IMGP0884.JPG" alt="" width="315" height="236" align="right"/>
<p>
<b>Willa Ślimakówka</b> położona jest w samym sercu Zakopanego. Wg Map Google na piechotę można dotrzeć  w:</p>
<ul>
<li>8min na Krupówki</li>
<li>10min do Ronda Kuźnickiego, z którego odjeżdżają busy do Kuźnic, gdzie znajduje się dolna stacja kolejki na Kasprowy Wierch oraz rozpoczyna się wiele szlaków turystycznych</li>
<li>15min na dworzec PKS i PKP</li>
</ul>

<p>Dodatkowo w najbliższej okolicy znajdują się:</p>
<ul>
<li>liczne sklepy spożywcze</li>
<li>restauracje i karczmy</li>
<li>	skocznia Wielka Krokiew</li>
<li>	Aqua Park w Zakopanem</li>
<li>	stoki narciarskie dla początkujących</li>
<li>	tor łyżwiarski</li>
</ul>

<p>Choć Willa położona jest w centrum, otoczona dużym ogrodem odizolowana jest od hałasu Zakopanego. Jedyny dźwięk który nieustannie nam towarzyszy to szum pobliskiego potoku.
Zachęcamy do grillowania. Do potrzeb turystów posiadamy grill wraz ze stołami i krzesłami.<br><br>

<a href="zdjecia/p7.jpg"><img src="zdjecia/p7.jpg" alt="" width="330" height="181" align="right"/></a>
Dodatkowe udogodnienia to:</p>
<ul>
<li>	bezpłatny parking tuż obok wejścia</li>
<li>	dostęp do  WI- FI</li>
<li>	z przyjemnością przyjmujemy czworonogi</li>
<li>	informacja turystyczna udzielana na miejscu przez przewodnika tatrzańskiego (prosimy zgłosić zainteresowanie podczas rezerwacji)</li>
<li>	catering dań obiadowych w świetnej cenie</li>
</ul>

<p>Dodatkowym atutem Willi jest jej architektura. Została zbudowana w 1929r w typowym dla regionu stylu zakopiańskim.  Budynek jest z płazów (przepołowione drewniane okrąglaki), na wysokiej, granitowej podmurówce, zwieńczony  strzelistym dachem. Liczne facjaty oraz obszerne werandy dodają mu uroku, natomiast szczyty zdobione są motywem wschodzącego słońca.
</p>`;
//menu
document.querySelector('#willa').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=willa;
});
//sitenav
document.querySelector('#s_willa').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=willa;
});
