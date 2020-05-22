var kontakt = `
<center>
<h4 style="text-align: center;">K O N T A K T</h4>

<p style="text-align: center;">
Barbara Czuba<br>ul. Chałubińskiego 21 c<br>34-500 Zakopane
</p>

<h3 style="text-align: center;">tel. (+48) 660 387 523 <br>(+48) 692 466 229<br><br>e-mail:<a href="mailto:willaslimakowka@gmail.com"><em>willaslimakowka@gmail.com</em></a></h3>

<p style="text-align: center;">nr. konta do wpłat:<br> Pekao SA<br> 79 1240 1587 1111 0010 7105 9434</p>

<img class="mapa_pietra" src="zdjecia/P1050789.JPG" alt="" />
</center>
<br><br>
`;
//menu
document.querySelector('#kontakt').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=kontakt;
});

//sitenav
document.querySelector('#s_kontakt').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=kontakt;
});
