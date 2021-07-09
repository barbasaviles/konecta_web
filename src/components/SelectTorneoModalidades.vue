<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTorneoModalidades",
        extends: Select2Ajax,
        props: {
            url: {default: 'torneos/listModalidades'},
            placeholder: {default: 'Seleccione Modalidad'}
        },
        methods: {
            formatResult(data) {
              return `<i class="${data.icon}"></i> ${data.nom_modalidad}`
            },
            formatSelection(data) {
              return `<i class="${data.icon}"></i> ${data.nom_modalidad}`
            },
        }

    }
</script>
