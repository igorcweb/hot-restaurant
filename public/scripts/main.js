var form = $('form');

$.get('/api/tables', function(data) {
  if (data.length >= 5) {
    form.attr('action', '/api/wait');
  } else {
    form.attr('action', '/api/tables');
  }
  data.forEach(function(table, index) {
    var tableNum = index + 1;
    var newTable = `
          <div class="container">
            <div class="card mb-3">
              <div class="card-body">
                <h3 class="table pb-3">Table #${tableNum}</h3>
                <h4 class="id">ID: ${table.id} </h4>
                <h4 class="name">Name: ${table.name}</h4>
                <h4 class="email">Email: ${table.email}</h4>
                <h4 class="phone">Phone: ${table.phone}</h4>
              </div>
            </div>
          </div>
        `;
    $('.tables').append(newTable);
  });
});
$.get('/api/wait', function(data) {
  data.forEach(function(table, index) {
    var tableNum = index + 1;
    var newTable = `
          <div class="container">
            <div class="card mb-3">
              <div class="card-body">
                <h3 class="table pb-3">Table #${tableNum}</h3>
                <h4 class="id">ID: ${table.id}: </h4>
                <h4 class="name">Name: ${table.name}</h4>
                <h4 class="email">Email: ${table.email}</h4>
                <h4 class="phone">Phone: ${table.phone}</h4>
              </div>
            </div>
          </div>
        `;
    $('.wait').append(newTable);
  });
});
