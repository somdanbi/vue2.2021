Vue.component('modal', {
   
    template: `
	<!-- Modal -->
	<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
            <div class="box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dicta, doloremque ea eligendi illum in, laboriosam laudantium magni nihil omnis quia repellat veritatis vitae. Ab consequuntur dolorum et eum sapiente!
            </div>
            
        </div>
    <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
    </div>
	`
});

new Vue({
    el: '#root',

    data: {
        showModal: false

    }
});