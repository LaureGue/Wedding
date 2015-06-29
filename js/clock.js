var Affiche=document.getElementById("Compte");
 function Rebour() {
 var date1 = new Date();
 var date2 = new Date ("May 14, 2016 00:00:00");
 var sec = (date2 - date1) / 1000;
 var n = 24 * 3600;
 if (sec > 0) {
 j = Math.floor (sec / n);
 h = Math.floor ((sec - (j * n)) / 3600);
 mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
 sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
 Affiche.innerHTML = "Il reste : " + j +" j "+ h +" h "+ mn +" min "+ sec + " s" avant l'évenement;
 window.status = "Temps restant : " + j +" j "+ h +" h "+ mn +" min "+ sec + " s ";
 }
 tRebour=setTimeout ("Rebour();", 1000);
 }
 Rebour();
En savoir plus sur http://sophie-webmaster-test.e-monsite.com/pages/script/compte-a-rebours.html#djcr15ewmgD3E4ak.99
