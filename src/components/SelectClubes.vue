<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectClubes",
        extends: Select2Ajax,
        props: {
            url: {default: 'torneos/listClubes'},
            placeholder: {default: 'Seleccione Club'}
        },
        methods: {
            formatResult(data) {
                return data.nom_club
            },
            formatSelection(data) {
                return data.nom_club
            },
        }

    }
</script>
