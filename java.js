document.addEventListener("DOMContentLoaded", function() {

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        const textSection = item.querySelector('.text');
        if (textSection.style.display === "none") {
          textSection.style.display = "block";
          textSection.style.maxHeight = "1000px";
        } else {
          textSection.style.maxHeight = "0";
          textSection.style.display = "none";
        }
      });
    });
  });
  