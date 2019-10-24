'use strict';

$(function () {

  // Add items to the list by clicking 'Add Item' or pressing enter --- probably with the onSubmit() method
  $('#js-shopping-list-form').submit(e =>{
    e.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val(null);
    const newLi = 
      `<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;
   
    $('.shopping-list').append(newLi);
  });
  
  // Check and uncheck items on the list by clicking the 'Check; button
  $('.shopping-list').on('click', '.shopping-item-toggle', e => {
    $(e.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  //premenantly delete items from the list
  $('.shopping-list').on('click', '.shopping-item-delete', e => {
    console.log($(e.currentTarget).closest('li'));
    $(e.currentTarget).closest('li').remove();
  });

});