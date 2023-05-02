



function sendEmail() {
 
  document.getElementById('from').innerHTML=`
  <div class="alert alert-success" role="alert" style="font-size:15px; height: 40px !important; border:none !important; display:flex !important; align-items:center !important; margin-right:5px">
 Thank you for filling up the form, We get in touch with you shortly... 
  </div>`


  document.getElementById('form').style.color='green'
  let name=document.getElementById("inp1").value
  let myemail=document.getElementById("inp2").value
  let phone=document.getElementById("inp3").value
  let textarea=document.getElementById("textarea").value

//   $.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
//     alert("success");
//     $("#mypar").html(response.amount);
// });



    


// Email.send({        
//       Host: "smtp.elasticemail.com",
//       Username: "sadcompiler@gmail.com",
//       Password: "6F10C1E9B25V2023270C5A6234C1A82C299A",
//       To: "sadcompiler@gmail.com",
//       From: myemail,
//       Subject:name,
//       Body: `You have new message from ${name} ,
//       Email: ${myemail}
//       Phone: ${phone}
//       message: ${textarea}
//       `,
//     })
//       .then(function (message) {
      
//       });
      // return false
      

     
    
  }

  const message=()=>{
    document.getElementById('messeage').innerHTML=`
    <div class="alert alert-success" role="alert" style="font-size:15px; height: 45px !important; border:none !important; display:flex !important; align-items:center !important; margin-right:5px">
    Thank you for filling up the form, We get in touch with you shortly...
     </div>
    `
  }
