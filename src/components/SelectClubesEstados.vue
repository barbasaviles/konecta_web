<script>
    import Select2Ajax from "@components/Select2Ajax"

    export default {
        name: "SelectClubesEstados",
        extends: Select2Ajax,
        props: {
            url: {default: 'torneos/listClubesEstados'},
            placeholder: {default: 'Seleccione estado'}
        },
        methods: {
            formatResult(data) {
                return `<i class="${data.icon}"></i> ${data.nom_estado}`
            },
            formatSelection(data) {
                return `<i class="${data.icon}"></i> ${data.nom_estado}`
            },
        }

    }
</script>
