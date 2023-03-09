const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("closeMenu")

menuIcon.addEventListener("click", (e) => {
  // e.preventDefault()
  // console.log("hello")
  // sidebar.style.display="block"
  // sidebar.style.left="0"
  // sidebar.classList.add("showMenu")
  sidebar.classList.toggle("show")
  console.log("sidebar >>", sidebar);
});

closeMenu.addEventListener("click", (e) => {
    // e.preventDefault()
    // console.log("hello")
    // sidebar.style.display="block"
    // sidebar.style.left="0"
    // sidebar.classList.add("showMenu")
    sidebar.classList.toggle("show")
    console.log("sidebar >>", sidebar);
  });
  
// $(document).ready(function(){
//     $('#menuIcon').click(function(){
//         console.log("sidebar >> ", sidebar)
//         $('#sidebar').toggleClass('show');
//     });
// });
