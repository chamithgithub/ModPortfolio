// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.screenY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

//   // ================
//   let header = document.querySelector("header");
//   header.classList.toggle("stiicky", window.scrollY > 100);
// };
const form =document.querySelector('form');
const fullname =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject =document.getElementById("subject");
const message =document.getElementById("message");
;


function sendEmail(){
   const bodyMassage =`Name: ${fullname.value}<br> Email: ${email.value}<br> 
   Phone:${phone.value}<br> Subject: ${subject.value}<br> Massage: ${message.value}<br>`;

   Email.send({
      SecureToken :"c36a1072-d149-46d4-9530-6afe00d72e47",
      To : 'dchamith4@gmail.com',
      From : "dchamith4@gmail.com",
      Subject : subject.value,
      Body :bodyMassage
  }).then(
    message=>{
      if(message=="OK"){
         Swal.fire({
            title: "Success!",
            text: "Message Send successfully!",
            icon: "success"
          });
      }
    }
  );
}
form.addEventListener("submit",(e) => {
   e.preventDefault();
   sendEmail();
   form.reset()
   return false;

})
