document.addEventListener('DOMContentLoaded', function() {

    // VARIABLES

    let userMenuOpen = document.querySelector('.avatar');
    let overlay = document.querySelector('.overlay');
    let userMenu = document.querySelector('.user-menu');
    let menuX = document.querySelector('.close-icon');
    let addBoardButton = document.querySelector('.add-menu-button');
    let addBoardMenu = document.querySelector('.add-board-menu');
    let closeBoardMenu = document.querySelector('.close-board-menu');
    let boardForm = document.querySelector('.board-form');
    let editBoardName = document.querySelector('.board-name');
    let editBoardNameForm = document.querySelector('.rename-board-form');
    let boardShowWrapper = document.querySelector('.board-show-wrapper');

    // if(window.location.pathname.match(/\/boards\/[0-9]/)) {
        // Edit Board Name Script on Board Show Page
        editBoardName.addEventListener('click', function() {
            if(editBoardNameForm.classList.contains('hide')) {
                editBoardNameForm.classList.remove('hide');
            } else {
                editBoardNameForm.classList.add('hide');
            }
        });

        let new_list_name = document.querySelector('.new-list-name');
        let new_list_form = document.querySelector('.new-list-form');
        
    // }
    
    // NAVBAR SCRIPTS ---------------------------------------------------------------------/
    addBoardButton.addEventListener('click', function() {
        overlay.classList.add('hide');
        closeBoardMenu.addEventListener('click', function() {
            addBoardMenu.classList.add('hide');
        });
        if(addBoardMenu.classList.contains('hide')) {
            addBoardMenu.classList.remove('hide');
        } else {
            addBoardMenu.classList.add('hide');
        };
        if(!boardForm.classList.contains('hide')) {
            boardForm.classList.add('hide');
        } 

    });


    userMenuOpen.addEventListener('click', function() {
        overlay.classList.add('hide');
        menuX.addEventListener('click', function() {
            userMenu.classList.add('hide');
        });
        if(userMenu.classList.contains('hide')) {
            userMenu.classList.remove('hide');
        } else {
            userMenu.classList.add('hide');
        }
        if(!boardForm.classList.contains('hide')) {
            boardForm.classList.add('hide');
        } 
    });


    let addBoardChoice = document.querySelector('.add-board');
    addBoardChoice.addEventListener('click', function() {
        addBoardMenu.classList.add('hide');
        overlay.classList.remove('hide');
        boardForm.classList.remove('hide');
        boardForm.addEventListener('submit', function() {
            overlay.classList.add('hide');
            boardForm.classList.add('hide');
        });
        overlay.addEventListener('click', function() {
            overlay.classList.add('hide');
            boardForm.classList.add('hide');
        })
    });


    if(window.location.pathname == "/") {
        let createNewBoard = document.querySelector('.create-new-board');
        createNewBoard.addEventListener('click', function() {
            overlay.classList.remove('hide');
            boardForm.classList.remove('hide');
            overlay.addEventListener('click', function() {
                overlay.classList.add('hide');
                boardForm.classList.add('hide');
            })
            boardForm.addEventListener('submit', function() {
                overlay.classList.add('hide');
                boardForm.classList.add('hide');
            });
        });
    }

    // END NAVBAR SCRIPTS ---------------------------------------------------------------------/
    
    



    // <%= button_to 'Remove', {:controller => :boards, :action => 'destroy', :id => board.id }, :method => :delete %>
    
    





});