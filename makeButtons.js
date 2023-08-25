






//MAKE BUTTONS
for(let i=0 ; i < data.length ;  i++){

    var current_link_data = data[i]; // cycle through all of the objects in data array

    var button = document.createElement("button"); //create link

    button.className = "link";
    button.id =  i;
    button.innerHTML = current_link_data.name; // set name from data
    button.setAttribute('value', current_link_data.url); //set url from data

    var button_style = "color: " + current_link_data.font_color + "; ";
    button_style += "background-color: " + current_link_data.bg_color + "; ";
    button.setAttribute('style', button_style);


    
    var onclick_value = "changeImage(" + button.value+ ")";
    button.setAttribute('onClick', onclick_value);



    // button.addEventListener("click", changeImage); // TRIGGER CHANGEIMAGE() WHEN CLICKED


 
    var image_menu = document.getElementById("IMAGE_MENU");
    image_menu.appendChild(button); //append link to end of container
    
    // var menu_style = "display: grid; width: 20px; ";
    // menu_style += "";

    // image_menu.setAttribute('style', menu_style);


}



function changeImage(clicked_id){

    console.log(clicked_id);

    document.getElementById("GALLERY_IMAGE").src = clicked_id;

}














