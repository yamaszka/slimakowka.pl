var cennik = `
<img src="zdjecia/z-071.jpg" alt="" width="240" height="320" hspace="20" align="right"/><br>
<h3><b>!!! ŚLIMAKÓWKA ZAPRASZA PRZEZ CAŁY ROK !!!</b></h3><br>


<h4>OFERTA WILLI</h4>
<p>
Proponujemy zakwaterowanie w cetrum Zakopanego.<br><br>
Posiadamy pokoje dwuosobowe i dwuosobowe z dostawką w różnym standardzie oraz mieszkanie dwupokojowe z aneksem kuchennym.<br> <br>
Każdy pokój ma dostep do prywatnego bądź wspólnego aneksu kuchennego.<br><br>
Parking GRATIS<br><br />
Dzieci &#347;pi&#261;ce z rodzicami GRATIS.<br><br />
Za każd&#261; dob&#281; pobierana jest op&#322;ata klimatyczna w wysoko&#347;ci 2z&#322;<br><br />
Przy każdej rezerwacji wymagany jest bezzwrotny zadatek w wysokości min 100zł<br><br />
Przyjazdy Gości są możliwe w godzinach 14:00-22:00. Niedojazd skutkuje anulacją rezerwacji<br><br />
Bezpłatny dostęp do WIFI<br><br />
Opłata za pobyt zwierzęcia- 10zł/doba</p>
<br>
`;
//menu
document.querySelector('#cennik').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=cennik;
});
sitenav
document.querySelector('#s_cennik').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=cennik;
});
