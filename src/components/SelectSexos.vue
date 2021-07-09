<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectSexos",
        extends: Select2Ajax,
        props: {
            url: {default: 'perfil/listSexos'},
            placeholder: {default: 'Seleccione Sexo'}
        },
        methods: {
            formatResult(data) {
                return data.nom_sexo
            },
            formatSelection(data) {
                return data.nom_sexo
            },
        }

    }
</script>
