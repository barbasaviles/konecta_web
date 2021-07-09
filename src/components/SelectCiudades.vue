<script>
    import Select2Ajax from "@components/Select2Ajax"

    export default {
        name: "SelectCiudades",
        extends: Select2Ajax,
        props: {
            url: {default: 'perfil/listCiudades'},
            placeholder: {default: 'Seleccione'}
        },
        methods: {
            formatResult(data) {
                return data.nom_ciudad
            },
            formatSelection(data) {
                return data.nom_ciudad
            },
        }

    }
</script>
