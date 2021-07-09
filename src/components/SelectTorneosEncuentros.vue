<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectTorneosEncuentros",
        extends: Select2Ajax,
        props: {
            url: {default: 'planillas/listTorneosEncuentros'},
            placeholder: {default: 'Seleccione Encuentro'}
        },
        methods: {
            formatResult(data) {
                return `${data.horai} ${data.encuentro}`
            },
            formatSelection(data) {
              return `${data.horai} ${data.encuentro}`
            },
        }

    }
</script>
