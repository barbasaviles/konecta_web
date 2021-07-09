<script>
    import Select2Ajax from "@src/components/Select2Ajax"
    import 'flag-icon-css/css/flag-icon.css'
    export default {
        name: "SelectPaises",
        extends: Select2Ajax,
        props: {
            url: {default: 'perfil/listPaises'},
            placeholder: {default: 'Seleccione Pais'}
        },
        methods: {
            formatResult(data) {
                return `<span class="flag-icon flag-icon-${data.iso.toLowerCase()} flag-icon-squared"></span> - ${data.nom_pais}`
            },
            formatSelection(data) {
                return `<span class="flag-icon flag-icon-${data.iso.toLowerCase()} flag-icon-squared"></span> - ${data.nom_pais}`
            },
        }

    }
</script>
