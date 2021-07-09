<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTorneosTipos",
        extends: Select2Ajax,
        props: {
            url: {default: 'torneos/listTorneosTipos'},
            placeholder: {default: 'Seleccione Tipo Torneo'}
        },
        methods: {
            formatResult(data) {
              return `<i class="${data.icon}"></i> ${data.nom_tipo}`
            },
            formatSelection(data) {
              return `<i class="${data.icon}"></i> ${data.nom_tipo}`
            },
        }

    }
</script>
