const drop_down = document.querySelector('.hamburger');
const tooltip = document.querySelector('.dropMenu');
const  menu_wrapper= document.querySelector('.hamburgerContent');
const menu_bar = document.querySelector('.dropContent');
const service = document.querySelector('.service-drop');
const book = document.querySelector('.book-list');
const service_item = document.querySelector('.serviceitem');
const book_item = document.querySelector('.bookitem');
const service_btn = document.querySelector('.service_back');
const book_btn = document.querySelector('.book_back');
const close = document.querySelector('.close');

close.onclick = () => {
  console.log('hehe');
  menu_wrapper.classList.remove("show");
  
}

drop_down.onclick = () => {
    console.log('hello')
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
};
service_item.onclick = () => {
    menu_bar.style.marginLeft = "-100%";
    setTimeout(() => {
        service.style.display = "block";
    }, 100);
  };
  book_item.onclick = () => {
    menu_bar.style.marginLeft = "-100%";
    setTimeout(() => {
        book.style.display = "block";
    }, 100);
  };
  service_btn.onclick = () => {
    menu_bar.style.marginLeft = "0%";
    service.style.display = "none";
  };
  book_btn.onclick = () => {
    menu_bar.style.marginLeft = "0%";
    book.style.display = "none";
  };
