Vue.component('modal', {
    template: '<div style="display: block;" class="modal fade show">\n' +
        '            <div class="modal-dialog  modal-dialog-centered" role="document">\n' +
        '                <div class="modal-content">\n' +
        '                    <div class="modal-body">\n' +
        '                        <button type="button" class="close" @click="$emit(\'close\')">\n' +
        '                            <span aria-hidden="true">&times;</span>\n' +
        '                        </button>\n' +
        '                        <slot></slot>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});