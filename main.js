let animalArray = [];

document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("addAnimal").addEventListener("click", addToArray);
function addToArray(){
    var animal = new animalObj (document.getElementById("name").value,document.getElementById("color").value,document.getElementById("select-group").value, document.getElementById("select-fluffiness").value);
    if (animal.isValid()){
       animalArray.push(animal);
       document.getElementById("name").value = "";
       document.getElementById("color").value = ""; 
       document.getElementById("select-group").value = "";
       document.getElementById("select-fluffiness").value = ""; 
    }
    else {
        alert("please enter valid fields" ); 
    }
}
})
function animalObj(name, color,group, fluffiness) {
    this.name = name;
    this.color = color;
    this.group = group; 
    this.fluffiness = fluffiness;
    this.isValid = function () {
      if ((this.name != "") && (this.color != "") && (this.group != null) && (this.fluffiness >=1)){
        return true
      }
      else{ 
        return false;
      }
    };
    
    this.getAll = function() {
      return name + " " + color + " " + group + "fluffiness: " + fluffiness;
    };
  }