<p>Texte avant le formulaire</p>

<form method="post" action="traitement.php">
   <label for="nom">Votre Nom :</label><input type="text" name="nom" id="nom" />
   <label for="Prénom">Votre Prénom :</label><input type="text" name="prenom" id="prenom" />
   <label for="accompagnants">Nombre de personnes vous accompagnant :</label><input type="number" name="accompagnant" id="accompagnant" />

   <<p>
       Veuillez indiquer à quel(s) évenement(s) vous serez présents?<br />
       <input type="radio" name="event" value="vin" id="vin" /> <label for="vin">Vin d'honneur</label><br />
       <input type="radio" name="event" value="repas" id="repas" /> <label for="repas">Repas</label><br />
       <input type="radio" name="event" value="deux" id="deux" /> <label for="deux">Les deux</label><br />
       
   </p>
</form>

<p>Texte après le formulaire</p>