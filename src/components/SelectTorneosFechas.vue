<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTorneosFechas",
        extends: Select2Ajax,
        props: {
            url: {default: 'planillas/listTorneosFechas'},
            placeholder: {default: 'Seleccione Fecha'}
        },
        methods: {
            formatResult(data) {
                return data.fecha
            },
            formatSelection(data) {
                return data.fecha
            },
        }

    }
</script>
