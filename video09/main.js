Vue.component('card', {
    props: ['title', 'body'],

    data() {
      return {
          isVisible: true
      }
    },

    template: '<div class="card mt-4" v-show="isVisible">\n' +
        '            <div class="card-header">\n' +
        '                {{ title }}\n' +
        '                <button @click="isVisible = false">x</button>\n' +
        '            </div>\n' +
        '            <div class="card-body">\n' +
        '                {{ body }}\n' +
        '            </div>\n' +
        '        </div>'
});

new Vue({
    el: '#root'
});