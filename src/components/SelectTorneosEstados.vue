<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTorneosEstados",
        extends: Select2Ajax,
        props: {
            url: {default: 'planillas/listTorneos'},
            placeholder: {default: 'Seleccione Torneo'}
        },
        methods: {
            formatResult(data) {
                return `${data.nom_torneo} <span class="badge badge-info">${data.nom_abrev}</span>`
            },
            formatSelection(data) {
                return data.nom_torneo
            },
        }

    }
</script>
