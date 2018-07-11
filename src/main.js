var app = new Vue ({
    el: "#app",
    data:{
        state: "default",
        title: "The List APP",
        newItem: "", 
        github: "https://github.com/Moikapy/Shopping-List",
        items: []
    },
    mounted() {
        console.log("3");
        console.log("2");
        console.log("1");
        console.log("Fight!");
        if (localStorage.getItem("items")) this.items = JSON.parse(localStorage.getItem("items"));
    },
    watch: {
        items: {
            handler() {
                localStorage.setItem("items", JSON.stringify(this.items));
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
        saveItem (newItem){
            if (this.newItem.length > 0){
                this.items.push({
                    label: this.newItem,
                    purchased: 0
                });
                this.newItem = "";
            }
        },
        changeState (newState) {
            this.state = newState;
            
            this.newItem = "";
        },
        togglePurchased (item){
            item.purchased = !item.purchased;
        },
        removeItem (index) {
            this.$delete(this.items, index);
        },

        resetList (index) {
            while (index > 0){
                this.$delete(this.items, index);
            }
            
        }
    }
});