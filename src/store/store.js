import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        leadsData:[
            {name:'Sanju', Age: '20',interest: 'Car', email: 'sanju.r@katzion.com'},
            {name:'Sanju', Age: '20',interest: 'Car', email: 'sanju.r@katzion.com'},
            {name:'Sanju', Age: '20',interest: 'Car', email: 'sanju.r@katzion.com'},
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
                name:payload.name, 
                Age: payload.age,
                interest: payload.interest, 
                email: payload.email
            }
            state.leadsData.push(newLead);
        }
    },
    actions:{
        addLead:(context, payload)=>{
            context.commit('addLead', payload);
        }
    }
})
