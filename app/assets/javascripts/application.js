document.addEventListener('DOMContentLoaded', function() {

    let listCount = document.getElementsByClassName('.list').length;
    let placeholder = listCount > 1 ? "+ Add another list..." : "+ Add a list";
    console.log(listCount)


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
    new_list_name.addEventListener('focus', function() {
            var new_list_bottom = document.querySelector('.new-list-bottom');
            new_list_bottom.style.display = 'flex';
            var form = document.querySelector('.new-list-name');
            form.placeholder = 'Enter a title...';
            new_list_form.style.backgroundColor = "#dfe3e6";
            new_list_form.style.padding = "5px 5px 0";
            new_list_name.style.backgroundColor = "white";
    });

    new_list_name.addEventListener('focusout', function() {
        var new_list_bottom = document.querySelector('.new-list-bottom');
        new_list_bottom.style.display = 'none';
        new_list_form.style.backgroundColor = "rgba(0,0,0,0.2)";
        new_list_name.style.backgroundColor = "transparent";
        new_list_name.placeholder = placeholder;
        new_list_form.style.padding = "0px";


        // .new-list-form {
        //     padding: 5px;
        //     margin-top: 5px;
        //     width: 275px;
        //     background-color: rgba(0,0,0,0.2);
        //     border-radius: 5px;
        //     display: flex;
        //     flex-direction: column;
        //     align-items: flex-start;
        //     justify-content: flex-start;
        //     .new-list-name {
        //         padding: 10px;
        //         background-color: transparent;
        //         border: none;
        //         outline: none;
        //         width: 100%;
        //         border-radius: 3px;
        //         &::placeholder {
        //             color: rgba(255,255,255,1);
        //             font-size: 14px;
        //         }
        //         &:focus::placeholder {
        //             color: rgba(0,0,0,0.7);
        //         }
        //     }

        // .new-list-bottom {
        //     display: none;
        //     flex-direction: row;
        //     justify-content: flex-start;
        //     transition: 0.3s;
        //     align-items: center;
        //     height: auto;
        //     padding: 10px 0;
        //     width: 100%;
        //     position: relative;

        //     .submit-form {
        //         background-color:#61BD4F;
        //         box-shadow: 0 1px 0 0 #3F6F21;
        //         color: white;
        //         border: none;
        //         cursor: pointer;
        //         display: inline-block;
        //         font-weight: 700;
        //         line-height: 20px;
        //         padding: 6px 25px;
        //         text-align: center;
        //         border-radius: 5px;
        //         font-size: 14px;
        //         &:hover {
        //             background-color: #519839;
        //         }
        //     }

        //     .close-new-list {
        //         width: 13px;
        //         margin-left: 10px;
        //         cursor: pointer;
        //     }
        // }
    
    });
        
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