
$('#fecha_para').combodate();
$('#fecha_de').combodate();

$('[data-toggle="tooltip"]').tooltip()


$('#date-filter').click(function(e) {
  e.preventDefault()
  $('#date-search').removeClass('hidden').css('display','inline-block')
})

const solicitudesTipo = document.querySelectorAll('.scrollmenu a');

solicitudesTipo.forEach(tipo => tipo.addEventListener('click', function(){
  solicitudesTipo.forEach(tipo => {
    if(tipo.classList.contains('active')) tipo.classList.remove('active')
  });
  this.classList.add('active')
  var title = this.dataset.type
  if(title == 'dictaminada') title = 'Solicitudes dictaminadas'
  if(title == 'por-dictaminar') title = 'Solicitudes por dictaminar'
  if(title == 'complemento') title = 'Complemento solicitado'
  $('.panel-heading h4').text(title)
}))

const checkboxes = $('.check-solicitud');

var checkCount = 0
checkboxes.each(function() {
    let checkbox = $(this)
    checkbox.change(function(){
      if(!this.checked && $('#solicitudes').find(':checkbox:checked').length === 0) {
        $('#solicitudes-actions').addClass('hidden')
      }else{
        $('#solicitudes-actions').removeClass('hidden')
      }
    })
});

const checkAll = $('#check-all');
checkAll.change(function () {
  if(this.checked){
    checkboxes.prop('checked', true);
  }else{
    checkboxes.prop('checked', false);
  }
})

$('#solicitudes').DataTable({
  "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    }
});
