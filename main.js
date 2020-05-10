Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {
        return {
            tasks: [
                { task: 'Task 11', complete: true },
                { task: 'Task 12', complete: false },
                { task: 'Task 13', complete: true },
                { task: 'Task 14', complete: false },
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});