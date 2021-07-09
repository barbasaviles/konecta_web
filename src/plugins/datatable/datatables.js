import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-responsive-bs4/js/responsive.bootstrap4.min'
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min'
// import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min'

$.extend($.fn.dataTable.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>>",
    columnDefs: [
        {targets: [-1], orderable: false},
    ],
    initComplete() {
        this.on('click', 'a', function (e) {
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                import('@src/router').then(m => m.default.push(e.currentTarget.getAttribute('href')))
            }
        })
    },
    order: [],
    deferRender: true,
    pageLength: 5,
    lengthMenu: [[5,25,50, 100, 500, -1], [5,25, 50, 100, 500, "Todos"]],
    language: {
        search: '<span>Buscar:</span> _INPUT_',
        searchPlaceholder: 'Escribe para filtrar...',
        lengthMenu: '<span>Mostrar:</span> _MENU_ registros',
        emptyTable: 'Sin registros almacenados',
        zeroRecords: 'Sin registros coincidentes',
        // info: "Mostrando pagina _PAGE_ de _PAGES_",
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        infoEmpty: "No hay registros disponibles",
        processing:'<div class="color-success-900"><i class="fad fa-redo fa-spin fs-xxl"></i> Cargando</div>',
        infoFiltered:   "(De _MAX_ registros)",
        paginate: {
            'first': 'Primero',
            'last': 'Último',
            'next': $('html').attr('dir') == 'rtl' ? '<i class="fad fa-arrow-alt-left">' : '<i class="fad fa-arrow-alt-right">',
            'previous': $('html').attr('dir') == 'rtl' ? '<i class="fad fa-arrow-alt-right">' : '<i class="fad fa-arrow-alt-left">'
        }
    }
});