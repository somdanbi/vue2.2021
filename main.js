Vue.component('tabs',{
    template: `
    <div>
    <div class="tabs">
        <ul>
            <li class="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li>
        </ul>
    </div>
    
    <div class="tab-details">
        <slot></slot>
    </div>
    </div>
    `,


    data(){
        return{ tabs:[]};
    },

    created(){
        this.tab = this.children;
    }
});

Vue.component('tab',{
    template: `
        <div><slot></slot></div>
    `,

    props: {
        name: {required:true}
    }
});

new Vue({
    el: '#root',
});