var apartament = `
<br>

<h4>POKÓJ Z ANEKSEM KUCHENNYM I ŁAZIENKĄ</h4>
<p>
Pokój z aneksem kuchennym, łazienka w pokoju, osobnym wejściem oraz drewnianym tarasem.<br>
Przeznaczony jest dla dwóch osób (łóżko małżeńskie).<br>
Aneks wyposażony jest w kuchenkę elektryczną, czajnik bezprzewodowy i lodówkę.<br>
W pokoju dostępny jest telewizor.<br>
Taras wychodzi do dużego, zielonego ogrodu.<br>
</p><br><br>
<center>
<img class="more" src="zdjecia/pokoje/apar/IMG_2369.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/apar/IMG_2373.jpg" alt="" />

<img class="more" src="zdjecia/pokoje/apar/IMG_2374.jpg" alt="" />
<img class="more" src="zdjecia/pokoje/apar/IMG_2364.jpg" alt="" /><br>
<img class="more" src="zdjecia/pokoje/apar/IMG_2346.jpg" alt="" />
</center>
`;
//menu
var ap = document.querySelectorAll(".apartament");
[...ap].forEach(function(el) {
    el.addEventListener('click', function(){
        document.querySelector('#tresc').innerHTML=apartament;
    });
});

//sitenav
var ap = document.querySelectorAll(".s_apartament");
[...ap].forEach(function(el) {
    el.addEventListener('click', function(){
        document.querySelector('#tresc').innerHTML=apartament;
    });
});
