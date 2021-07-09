<template>
    <select class="form-control" style="width: 100%">
        <option></option>
    </select>
</template>

<script>
    import api from '@src/api'
    import $ from 'jquery'
    import 'select2'
    import 'select2/dist/js/i18n/es'
    import 'select2/dist/css/select2.min.css'
    import 'select2-bootstrap-theme/dist/select2-bootstrap.min.css'

    export default {
        name: 'Select2Ajax',
        props: {
            value: [String, Number],
            numElements: {type: Number, default: 10},
            allowClear: {type: Boolean, default: true},
            placeholder: {type: String, default: 'Seleccione...'},
            url: {type: String, required: true},
            id_name: {type: String, default: 'id'},
            extras: {type:Object,default:()=>{ return {}}}
        },
        mounted() {
            const $select2 = $(this.$el);
            const self = this;
            $select2.select2({
                escapeMarkup: e => e,
                templateResult: this.selfFormatSelectResult,
                templateSelection: this.selfFormatSelectSelection,
                placeholder: this.placeholder,
                language: 'es',
                theme: 'bootstrap',
                allowClear: this.allowClear,
                ajax: {
                    data: params => ({
                        query: (params.term || '').toUpperCase(),
                        page: params.page || 1,
                        elements: this.numElements,
                        extras: this.extras
                    }),
                    processResults: function (data, params) {
                      params.page = params.page || 1;
                      return {
                        results: data.results,
                        pagination: {
                          more: (params.page * self.numElements) < (data.results[0] || {}).total
                        }
                      };
                    },
                    transport: async (params, success) => {
                        const elements = (await api.post(this.url, params.data)).data;
                        success({
                            results: elements,
                            pagination: {more: elements.length ? (params.data.page * this.numElements) < elements[0].size : false}
                        });
                    },
                },
            }).on('change', function () {
                self.$emit('input', this.value);
            });

            if (this.value) {
                this.setValue(this.value);
            }
        },
        methods: {
            selfFormatSelectResult(data) {
                if (data.loading) {
                    return data.text;
                }

                return this.formatResult(data)
            },
            formatResult(data) {
                return data.text;
            },
            selfFormatSelectSelection(data) {
                if (data.text) {
                    return data.text
                }
                return this.formatSelection(data)
            },
            formatSelection(data) {
                return data.text;
            },
            async setValue(id) {
                if (this.value != this.$el.value) {
                    const params = {};
                    params[this.id_name] = id;
                    api.post(this.url, params).then(resp => {
                        $(this.$el).append(new Option(this.selfFormatSelectSelection(resp.data), resp.data.id, true, true));
                    })
                }
            }
        },
        watch: {
            value(id) {
              if(id)
                this.setValue(id);
              else
                $(this.$el).val('').trigger('change');
            }
        },
        destroyed() {
            $(this.$el).select2('destroy')
        }
    }
</script>