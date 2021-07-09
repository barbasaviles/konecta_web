<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectArbitros",
        extends: Select2Ajax,
        props: {
            url: {default: 'torneos/listArbitro'},
            placeholder: {default: 'Seleccione arbitro'}
        },
        methods: {
            formatResult(data) {
                return data.arbitro
            },
            formatSelection(data) {
                return data.arbitro
            },
        }

    }
</script>
