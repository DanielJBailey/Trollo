document.addEventListener('DOMContentLoaded', function() {

    let userMenuOpen = document.querySelector('.avatar');
    let overlay = document.querySelector('.overlay');
    let userMenu = document.querySelector('.user-menu');
    let menuX = document.querySelector('.close-icon');
    let addBoardButton = document.querySelector('.add-menu-button');
    let addBoardMenu = document.querySelector('.add-board-menu');
    let closeBoardMenu = document.querySelector('.close-board-menu');
    let menuList = [userMenu, addBoardMenu]


    closeBoardMenu.addEventListener('click', function() {
        addBoardMenu.classList.add('hide');
        overlay.classList.add('hide');
    });

    // Open add board menu on "+" click
    addBoardButton.addEventListener('click', function() {
        menuList.forEach((menu) => {
            menu.classList.add('hide')
        });
        if(addBoardMenu.classList.contains('hide')) {
            addBoardMenu.classList.remove('hide');
            overlay.classList.remove('hide');
            overlay.addEventListener('click', function() {
                addBoardMenu.classList.add('hide');
                overlay.classList.add('hide');
            });
        } else {
            addBoardMenu.classList.add('hide');
            overlay.classList.add('hide');
        };
    });

    // Close User Menu on "X" click
    menuX.addEventListener('click', function() {
        userMenu.classList.add('hide');
        overlay.classList.add('hide');
    });

    // Open User Menu when profile image is clicked
    userMenuOpen.addEventListener('click', function() {

        menuList.forEach((menu) => {
            menu.classList.add('hide')
        });
        
        if(userMenu.classList.contains('hide')) {
            userMenu.classList.remove('hide');
            overlay.classList.remove('hide');
            overlay.addEventListener('click', function() {
                userMenu.classList.add('hide');
                overlay.classList.add('hide');
            });
        } else {
            userMenu.classList.add('hide');
            overlay.classList.add('hide');
        }
    });


    


});