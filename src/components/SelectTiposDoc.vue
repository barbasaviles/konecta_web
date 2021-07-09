<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTiposDoc",
        extends: Select2Ajax,
        props: {
            url: {default: 'perfil/listTiposDoc'},
            placeholder: {default: 'Seleccione Tipo de Documento'}
        },
        methods: {
            formatResult(data) {
                return data.nom_tipo
            },
            formatSelection(data) {
                return data.nom_tipo
            },
        }

    }
</script>
