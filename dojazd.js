var dojazd=`
<br>

<h4>DOJAZD DO ŚLIMAKÓWKI</h4>

<p>
<iframe class="mapa_pietra" src="https://www.google.com/maps/d/u/0/embed?mid=zMAwMhpdsEhE.k6kEewhEEe0o" height="480"></iframe>

</p>

`;
//menu
document.querySelector('#dojazd').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=dojazd;
});

//sitenav
document.querySelector('#s_dojazd').addEventListener('click', function(){
    document.querySelector('#tresc').innerHTML=dojazd;
});
