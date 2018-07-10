var app = new Vue ({
    el: '#app',
    data:{
        state: "default",
        title: "The List APP",
        newItem: "", 
        github: "https://github.com/Moikapy/Shopping-List",
        items: []
    },
    mounted() {
        console.log('3');
        console.log('2');
        console.log('1');
        console.log('Fight!');
        if (localStorage.getItem('items')) this.items = JSON.parse(localStorage.getItem('items'));
    },
    watch: {
        items: {
            handler() {
                localStorage.setItem('items', JSON.stringify(this.items));
            },
            deep: true,
        }
    },
    computed:{
        characterCount(){
            return this.newItem.length;
        }
    },
    methods: {
        saveItem: function(newItem){
            if (this.newItem.length > 0){
                this.items.push({
                    label: this.newItem,
                    purchased: 0
                });
                this.newItem = "";
            }
        },
        changeState: function (newState) {
            this.state = newState;
            
            this.newItem = "";
        },
        togglePurchased: function(item){
            item.purchased = !item.purchased;
        },
        removeItem: function (index) {
            this.$delete(this.items, index);
        },

        resetList: function(index) {
            while (index > 0){
                this.$delete(this.items, index);
            }
            
        }
    }
});