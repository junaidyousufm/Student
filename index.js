//  var todaysdate =new Date().getTime()
//  var  EidDate = new Date("April 22,2023").getTime()

//  console.log(todaysdate)
//   console.log(EidDate)
//   var diff =todaysdate-EidDate


//   console.log(diff)

//   var seconds = diff / 1000
//   var mins = seconds / 60
//   var hours = mins / 60
//   console.log(hours)

//  var todaysdate= new Date()
//  console.log(todaysdate)

//  todaysdate.setDate(30)
//  todaysdate.setMonth(4)
//  todaysdate.setFullYear(1996)

// // // todaysdate.setHours(8)
// // // todaysdate.setMinutes(15)
// // // todaysdate.setSeconds(16)
//  console.log(todaysdate)


var item=prompt("'Enter the item:','pizza','chicken biryani','burger','beef biryani','icecream'");
{
 eif(item =="pizza" );{

    var flavour=prompt("Enter the flavour:fajita,tikka, barbque,vegeitable");
    if(flavour=="fajita"||flavour=="tikka"||flavour=="barbque"||flavour=="vegeitable");

    var size=+prompt("Enter the size: small, medium,large");
    if(size=="small" ||size=="medium"||size=="large");
    var qunatity= +prompt("Enter the Quantity");
    var price=1100;
    alert("the pizza"+flavour+""+ size+""+ (price+price) );
    
    
   

}



  if (item =="chicken biryani" ){

    var flavours=prompt("Enter the flavour: sada,masla");
    if(flavours=="sada"||flavour=="masla");

    var size=+prompt(" full plate,half plate");
    if(size=="full plate" ||size=="half plate");

    var qunatity= +prompt("Enter the Quantity");
    var price=300;
    alert("chicken biryani"+flavours+""+ size+""+ (price+price));

 }

else{
    alert("not available")
  }

 if(item =="beef biryani" ){

    var flavours=prompt("Enter the flavour: , sada,masla");
    if(flavours=="sada"||flavours=="masla");

    var size=+prompt(" full plate,half plate");
    if(size=="full plate" ||size=="half plate");

    var qunatity= +prompt("Enter the Quantity");
    var price=400;
    alert("beef biryani"+flavours+""+ size+""+ (price+price));

 }
 else{
    alert("not available")
  }

  if(item =="burger" ){

     var anda=prompt("Enter the burger: andna burger,sada burger ,beef burger");
    if(anda=="anda burger"||anda=="sada burger"||anda=="beef burger");

   

     var qunatity= +prompt("Enter the Quantity");
     var price=100;
     alert("burger"+anda+"" + (price+price));

  }
  else{
    alert("not available")
  }
}