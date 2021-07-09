<script>
    import Select2Ajax from "@src/components/Select2Ajax"

    export default {
        name: "SelectProductos",
        extends: Select2Ajax,
        props: {
            url: {default: 'productos/inventario'},
            placeholder: {default: 'Seleccione producto'}
        },
        methods: {
            formatResult(data) {
                return data.nom_producto
            },
            formatSelection(data) {
                return data.nom_producto
            },
        }

    }
</script>
