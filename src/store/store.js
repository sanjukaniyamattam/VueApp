import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        leadsData:[
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
            {name:'Sanju', Age: '20',interest: 'Car', model: 'GolfR'},
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
            let newLead={
                name:'Manju', Age: '25',interest: 'Car', model: 'GolfR'
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
