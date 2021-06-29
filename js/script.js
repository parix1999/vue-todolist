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
        mounted(){
            this.focus();
        },
        
        methods:{
            // Funzione di aggiunta:
            add:function(){
                this.focus();

                let push = this.toDoList.push(this.newTask);
                // Una volta pushato ritorna la stringa vuota:
                this.newTask = '';
                return push;
            },
            // Funzione per togliere:
            remove:function(index){
                this.focus();

                // Tolgo dall'indice
                let toRemuve = this.toDoList.splice(index, 1);
                return toRemuve;
            },
            // Funzione per il focus:
            focus:function(){
                let prova = document.getElementById('focalize').focus();
                return prova;
            }
        }

    }



)