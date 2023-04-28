






function sendEmail() {
let name=document.getElementById("inp1").value
let myemail=document.getElementById("inp2").value
let phone=document.getElementById("inp3").value
let textarea=document.getElementById("textarea").value
    
Email.send({        
      Host: "smtp.elasticemail.com",
      Username: "sadcompiler@gmail.com",
      Password: "6F10C1E9B25V2023270C5A6234C1A82C299A",
      To: "sadcompiler@gmail.com",
      From: myemail,
      Subject:name,
      Body: `You have new message from ${name} ,
      Email: ${myemail}
      Phone: ${phone}
      message: ${textarea}
      `,
    })
      .then(function (message) {
        alert("mail sent successfully",message)
      });
      console.log(name,myemail,phone,textarea);
  }
