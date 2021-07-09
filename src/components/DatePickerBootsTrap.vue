<template>
    <date-picker :config="options" class="text-center" v-model="date"></date-picker>
</template>

<script>
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: "DatepickerBootstrap",
        props: ['format', 'mxDate', 'miDate', 'value'],
        components: {datePicker},
        data() {
            return {
                date: '',
                options: {
                    format: this.format || 'YYYY-MM-DD HH:mm:ss',
                    useCurrent: false,
                    showClear: true,
                    showClose: true,
                    locale: 'es',
                    sideBySide: true,
                    minDate: false,
                    maxDate: false,
                    viewDate: false,
                    icons: {
                        time: 'fad fa-clock',
                        date: 'fad fa-calendar',
                        up: 'fad fa-arrow-up',
                        down: 'fad fa-arrow-down',
                        previous: 'fad fa-chevron-left',
                        next: 'fad fa-chevron-right',
                        today: 'fad fa-calendar-check',
                        clear: 'fad fa-trash-alt',
                        close: 'fad fa-times-circle'
                    }
                }
            }
        },
        mounted() {
            if (this.value) {
                this.date = this.value;
            }
        },
        watch: {
            value(val) {
                this.date = val;
            },
            date(value) {
                // let date = value ? moment(value).format('X') : '';
                this.options.viewDate = value;
                this.$emit('input', value)
            },
            miDate(date) {
                this.options.minDate = date;
                //     this.options.minDate = moment.unix(unixtime).format('MM/DD/YYYY hh:mm A')
            },
            mxDate(date) {
                this.options.maxDate = date;
                //     this.options.maxDate =  moment.unix(unixtime).format('MM/DD/YYYY hh:mm A')
            }
        }
    }
</script>