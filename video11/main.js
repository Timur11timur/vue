Vue.component('tabs', {
    template: `
        <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" v-for="tab in tabs">
                    <a :href="tab.href" @click="selectTab(tab)" class="nav-link" :class="{ 'active':tab.isActive}" data-toggle="tab" role="tab" aria-selected="false">
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
            
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" role="tabpanel"><slot></slot></div>
            </div>
        </div>
    `,

    data() {
        return {
            tabs: []
        };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: '<div class="m-2" v-show="isActive"><slot></slot></div>',
    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return "#" + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root'
});