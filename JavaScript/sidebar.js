$("#menu-toggle").click((e) => {
    e.preventDefault();

    // Get class Icon
    let classIcon = $('#icon-menu').attr('class');

    // Remove current class
    $('#icon-menu').removeClass(classIcon);

    // Adds the opposite class of the icon
    classIcon = classIcon == 'cil-indent-increase' ? 'cil-indent-decrease' : 'cil-indent-increase';

    $('#icon-menu').addClass(classIcon);
    $("#wrapper").toggleClass("toggled");
});