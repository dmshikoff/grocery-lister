var groceryList = []


$('#inputForm').submit(function(e){
  e.preventDefault()
  var inputGroup = {}
  inputGroup.item = $('#Item').val()
  inputGroup.quantity = $('#Qty').val()
  inputGroup.unitType = $('#Unit').val()
  inputGroup.customUnitType = $('#CustomUnit').val()
  if (inputGroup.item) {
    groceryList.push(inputGroup)
    showGroceryList()
    $("#inputForm")[0].reset()
  }
  })

function showGroceryList() {
  var list = $('#displayList');
  list.empty()
    for (var i in groceryList) {
      var button = $('<button>').text('Clear Line')
      button.attr('id', 'clearLine')
      button.attr('data', i)
      button.click(function(e) {
        var index = $(this).attr('data')
        console.log('hello', index)
        groceryList.splice(index,1)
        showGroceryList()
      })
      var li = $('<li>')
      var span = $('<span>')
      li.append(span)
      span.text(groceryList[i].item + ' ' + groceryList[i].quantity +  ' ' + groceryList[i].unitType + ' ' + groceryList[i].customUnitType)
      li.append(button)
      list.append(li)
      span.click(function() {
        $(this).toggleClass('complete')
      })
}
}

var clearAll = $('#clearAll')
clearAll.click(function() {
  var list = $('#displayList');
  list.empty();
  groceryList = []
});


console.log()
