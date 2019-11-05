import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state:{
        leadsData:[
            {id:'100', name:'Sanju', age: '20',interest: 'Car', email: 'sanju.r@katzion.com'},
            {id:'101', name:'Alex', age: '21',interest: 'Car', email: 'sanju.r@katzion.com'},
            {id:'102', name:'Umesh', age: '22',interest: 'Car', email: 'sanju.r@katzion.com'},
        ]
    },
    getters:{
        getLeadsdata: state =>{
            return state.leadsData;
        }
    },
    mutations:{
        addLead: (state, payload) =>{
            //state.leadsData
            console.log(payload);
            let newLead={
                id:payload.id, 
                name:payload.name, 
                age: payload.age,
                interest: payload.interest, 
                email: payload.email
            }
            state.leadsData.push(newLead);
        }
    },
    actions:{
        addLead:(context, payload)=>{
            context.commit('addLead', payload);
        },
        getCurrentprice: (context, payload)=> {
            axios
              .get('https://api.coindesk.com/v1/bpi/currentprice.json')
              .then(response => {
                this.info = response.data.bpi
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
              .finally(() => this.loading = false)
          }
    }
})