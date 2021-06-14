$(document).on('click', '.btn-save-task', () => {
    let taskInputVal = $('input.task-input').val(),
        dateInputVal = $('input.date-input').val(),
        categorieSelectVal = $('select.categorie-select').val();
        
    if (taskInputVal === '' || dateInputVal === '' || categorieSelectVal === '') {
        return;
    }
    
    $('table.task-table tr:last').after('<tr><td>' + taskInputVal + '</td><td>' + dateInputVal + '</td><td>' + categorieSelectVal + '</td></tr>');
    $('input.task-input').val('');
    $('input.date-input').val('');
});
