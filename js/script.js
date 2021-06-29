new Vue (
    {
        el:'#app',
        data:{
            // Array da dove parte il dato:
            toDoList: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato',
            ],
            // Dato inserito dall'utente che sarà inserito poi in array: 
            newTask : '',
        },
        // Funzione di aggiunta:
        methods:{
            add:function(){
                let push = this.toDoList.push(this.newTask);
                // Una volta pushato ritorna la stringa vuota:
                this.newTask = '';
                return push;
            }
        }

    }



)