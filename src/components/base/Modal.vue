<template>
    <div class="modal fade" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" :style="{'min-width': width,'margin-top':mtop}">
            <div class="modal-content">
                <div class="modal-header text-white" :class="color">
                    <slot name="header">
                        <h3 class="modal-title"><i :class="icon"></i> {{title}}</h3>
                    </slot>
                    <button v-if="showClose" type="button" class="close" @click="goToParent">&times;</button>
                </div>

                <div class="modal-body">
                    <slot>

                    </slot>
                </div>

                <div class="modal-footer" style="border-top-width: 1px; padding-top: 15px; padding-bottom: 15px">
                    <button v-if="showClose" type="button" class="btn btn-sm btn-danger btn-icon-split" @click="goToParent">
                      <span class="icon"><i class="fal fa-do-not-enter"></i></span>
                      <span class="text">Cerrar</span>
                    </button>
                    <slot name="buttons">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import pathToRegexp from 'path-to-regexp';

    export default {
        name: "Modal",
        props: {
            showModal: {type: Boolean, default: true},
            color: {type: String, default: 'bg-primary'},
            width: {type: String, default: '50%'},
            mtop: {type: String, default: '2%'},
            title: String,
            icon: {String, default: 'icon-stack2 icon-2x'},
            showClose: {type: Boolean, default: true}
        },
        mounted() {
            $(this.$el).on({
                'show.bs.modal': function () {
                    const zIndex = 1040 + (10 * $('.modal:visible').length);
                    $(this).css('z-index', zIndex);

                    setTimeout(function () {
                        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                    }, 0);
                },
                'hidden.bs.modal': function () {
                    if ($('.modal:visible').length > 0) {
                        setTimeout(function () {
                            $(document.body).addClass('modal-open');
                        }, 0);
                    }
                }
            }).modal('show');
        },
        watch: {
            showModal(show) {
                if (!show) {
                    this.close();
                }
            }
        },
        methods: {
            close() {
                this.goToParent()
            },
            forceClose() {
                $(this.$el).modal('hide');
            },
            goToParent() {
                const route = this.$route.matched[this.$route.matched.length - 1];
                const url = pathToRegexp.compile(route.parent.path)(this.$route.params);
                this.$router.replace(url);
            }
        },
        destroyed() {
            $(this.$el).modal('hide');
        }
    }
</script>