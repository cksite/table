
// var y = num.defaultValue;
function get(){
    var y = document.getElementById("num").value;

    var x = document.getElementById("demo");

    var text = " ";
    for(let j=1;j<=y;j++)
    {
        text+="<br><br>Table of "+j+" is <br><br>"
        for(let i=1;i<=10;i++)
        {
            text+= + j +" X "+i+" = " + j*i + "<br>"
        }
    }

    x.innerHTML = text;
    
    

    
    // console.log(y);
}
