new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            clickAlert: function(){
                alert("I\'m clicked!")
            },
            //this function displays e.target.value until a following keydown...
            // by default wait on key down for 1000 then will show; can circumvent it, but also can do it by keyup
            keyDownBasic: function(e) {
                // e.force()
                this.value = e.target.value
                // console.log(e.target.value)
            },
            keyDownInt: function(e){
                this.value = e.target.value
            }
        }
    });