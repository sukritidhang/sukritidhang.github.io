/* Mobile Menu */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }



/* Close Menu When Link Clicked (Mobile) */
  links.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
    });
  });

});



/* Modal */
const cards=document.querySelectorAll(".project-card");
const modal=document.getElementById("modal");

cards.forEach(card=>{
card.onclick=()=>{
modal.style.display="block";
document.getElementById("modal-title").textContent=card.dataset.title;
document.getElementById("modal-desc").textContent=card.dataset.desc;
};
});

function closeModal(){modal.style.display="none";}

/* Filter */
function filterProjects(cat){
  document.querySelectorAll(".project-card").forEach(card=>{
    card.style.display=(cat==='all'||card.dataset.category===cat)
    ?'block':'none';
  });
}

/* Contact */
function sendMsg(e){
  e.preventDefault();
  alert("Message sent! (Connect EmailJS to make it live)");
}


function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(
    "Portfolio Contact from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  // Replace with  Gmail ID
  window.location.href =
    `mailto:@gmail.com?subject=${subject}&body=${body}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill');

    console.log("Found " + filterButtons.length + " buttons and " + skillCards.length + " cards.");

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            console.log("Filtering for: " + target);

            // 1. Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add active to clicked button
            button.classList.add('active');

            // 3. Show/Hide Cards
            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (target === 'all' || category === target) {
                    card.style.display = 'flex'; // Or 'block'
                    card.classList.add('show');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('show');
                }
            });
        });
    });
});