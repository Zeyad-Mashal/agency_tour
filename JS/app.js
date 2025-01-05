function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}
function openJoinUs() {
    const openJoinUs = document.querySelector('.join_us_popup');
    openJoinUs.style.display = "flex";
}
function closeJoinUs() {
    const openJoinUs = document.querySelector('.join_us_popup');
    openJoinUs.style.display = "none";
}
