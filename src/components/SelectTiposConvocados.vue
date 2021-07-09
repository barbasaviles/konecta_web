<script>
    import Select2Ajax from "@components/Select2Ajax"

    export default {
        name: "SelectTiposConvocados",
        extends: Select2Ajax,
        props: {
            url: {default: 'fechas/listTiposConvocados'},
            placeholder: {default: 'Seleccione '}
        },
        methods: {
            formatResult(data) {
                return `<i class="${data.icon}"></i> ${data.nom_tipo_convocado}`
            },
            formatSelection(data) {
              return `<i class="${data.icon}"></i> ${data.nom_tipo_convocado}`
            },
        }

    }
</script>
