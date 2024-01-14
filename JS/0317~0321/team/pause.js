function openPopup() {
    let popup = document.querySelector('.jeong_pause_background');

    console.log(popup.className);
    console.log(popup.classList);

    if (popup.classList.contains('is_active')) {
        popup.classList.remove('is_active')
    } else {
        popup.classList.add('is_active')
    }
}