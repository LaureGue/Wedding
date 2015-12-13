<form method="post" action="invites.php">
 
                  <p>
                  <label>Votre prénom</label><input type="text" name="prenom" required autofocus />
                  
                  <label>Votre nom</label><input type="text" name="nom" required />
                  
                  Je serai au Vin D'Honneur</br>
                    <input type="radio" name="vin_honneur" value="oui_vin" id="oui_vin" required /> 
                    <label for="oui_vin">Oui</label><br />
                    
                    <input type="radio" name="vin_honneur" value="non_vin" id="non_vin" required /> 
                    <label for="non_vin">Non</label><br />
                    
                  Je serai au repas</br>  
                    <input type="radio" name="repas" value="oui_repas" id="oui_repas" required /> 
                    <label for="oui_repas">Oui</label><br />
                    
                    <input type="radio" name="repas" value="non_repas" id="non_repas" required /> 
                    <label for="non_repas">Non</label><br />
                    
                    <input type="submit" value="Envoyer" />
                  
                   
                  </p>
 
    </form>
