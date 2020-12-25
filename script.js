var Name_array=["Mother", "Father", "Brother", "Sister"];

var Image_array=["Mother.png", "Father.png", "Brother.png", "Sister.png"];

console.log(Name_array);
console.log(Image_array);

var i=0;
function Next(){
    document.getElementById("Images").src=Image_array[i];
    document.getElementById("Name_of_member").innerHTML=Name_array[i];
    i++;
}