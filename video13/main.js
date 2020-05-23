window.Event = new Vue();

window.Event2 = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
            Event2.fire('applied');
        }
    }

});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('Handling it!'))
        Event2.listen('applied', () => alert('Handling it form Event2!'))
    }
});