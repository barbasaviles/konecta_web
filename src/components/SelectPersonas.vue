<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectPersonas",
        extends: Select2Ajax,
        props: {
            url: {default: 'perfil/listPersonas'},
            placeholder: {default: 'Seleccione ...'}
        },
        methods: {
            formatResult(data) {
                return `<span class="badge badge-info">${data.nom_abrev} ${data.nro_documento}</span> ${data.persona}`
            },
            formatSelection(data) {
                return data.persona
            },
        }

    }
</script>
