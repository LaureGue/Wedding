function afficheMenu(obj){
   
   var idmain_menu_btn    = obj.id;
   var idmain_menu_block = 'sous' + idMenu;
   var main_menu_block  = document.getElementById(main_menu_block);
   
   /*****************************************************/
   /**   on cache tous les sous-menus pour n'afficher    **/
   /** que celui dont le menu correspondant est cliqué **/
   /** où 4 correspond au nombre de sous-menus        **/
   /*****************************************************/
 
   
   if(main_menu_block){
      //alertmain_menu_block.style.display);
      if(main_menu_block.style.display == "block"){
         main_menu_block.style.display = "none";
      }
      else{
         main_menu_block.style.display = "block";
      }
   }
}


