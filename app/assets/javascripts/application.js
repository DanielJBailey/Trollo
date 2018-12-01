document.addEventListener('DOMContentLoaded', function() {

    let listCount = document.getElementsByClassName('.list').length;
    let placeholder = listCount > 1 ? "+ Add another list..." : "+ Add a list";


    // // VARIABLES

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
    let new_list_name = document.querySelector('.new-list-name');
    let new_list_form = document.querySelector('.new-list-form');
    let createNewBoard = document.querySelector('.create-new-board');
    let listTitles = document.querySelectorAll('.list-title');

    if(listTitles != null || undefined) {
        listTitles.forEach((title) => {
            title.addEventListener('click', () => {
                title.style.display = "none";
            })
        });
    }


    //Edit Board Name Script on Board Show Page
    if(editBoardName != null || undefined) {
        editBoardName.addEventListener('click', function() {
            if(editBoardNameForm.classList.contains('hide')) {
                editBoardNameForm.classList.remove('hide');
            } else {
                editBoardNameForm.classList.add('hide');
            }
        });
    }
    
    if(new_list_name != null || undefined) {
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
        });
    }
        
  
    
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

    if(createNewBoard != null || undefined) {
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
        

    // // END NAVBAR SCRIPTS ---------------------------------------------------------------------/
    
    



    // // <%= button_to 'Remove', {:controller => :boards, :action => 'destroy', :id => board.id }, :method => :delete %>
    
    

//     <%= form_with(model: [@list, @card], local: true, method: "POST", :url => "/lists/#{@list.id}/cards") do |f| %>
//     <%= f.text_field :title, placeholder: "Enter a title for this card...", required: true, autofocus: false%>
// <% end %>



});