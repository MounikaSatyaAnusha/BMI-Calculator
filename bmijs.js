function calculator()
        {
            var weight = parseInt(document.getElementById("weight").value);
        var height = parseInt(document.getElementById("height").value);
        var resultsX = document.getElementById("resultsX");
           if(isNaN(weight)&&isNaN(height))
                {
                    alert("enter valid weight and height");
                }
            else if(isNaN(weight))
                {
                    alert("enter valid weight");
                } else if(isNaN(height))
                    {
                        alert("enter valid height");
                    }
                else{
                    var x;
        x=(weight*10000)/(height**2);
var resultsX;
        resultsX.textContent = ` BMI= ${x} kg/m`;
        if(x<=18.5){
            resultsX.textContent += " --- category: UNDERWEIGHT";
            }else if(x>18.5&&x<24.9){
                resultsX.textContent += " --- category: NORMAL";
            }else if(x>25&&x<29.9){
                resultsX.textContent += " --- category: OVER WEIGHT";
            }else if(x>30&&x<34.9){
                resultsX.textContent += " --- category: OBESE";
            }else{
                resultsX.textContent += " --- category: EXTREMELY OBESE";
            }
        }
    }