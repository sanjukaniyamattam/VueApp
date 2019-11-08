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
        ],
        galleryImages:[],

    },
    getters:{
        getLeadsdata: state =>{
            return state.leadsData;
        },
        getImages:(state)=>{
            return state.galleryImages;
        }
    },
    mutations:{
        addLead: (state, payload) =>{
            //state.leadsData
            //console.log(payload);
            let newLead={
                id:payload.id, 
                name:payload.name, 
                age: payload.age,
                interest: payload.interest, 
                email: payload.email
            }
            state.leadsData.push(newLead);
        },
        updateLead: (state, payload) =>{
            //console.log(payload.id);
            let idToUpdate = payload.id;

            state.leadsData.find((item, index) =>{
                if(item.id == idToUpdate){
            
                state.leadsData[index].name=payload.name;
                state.leadsData[index].age=payload.age;
                state.leadsData[index].interest=payload.interest;
                state.leadsData[index].email=payload.email;
            }
            });
        },
        listImages:(state, payload)=>{
            //console.log(payload);
            state.galleryImages = payload;
        }
    },
    actions:{
        addLead:(context, payload)=>{
            context.commit('addLead', payload);
        },
        updateLead:(context, payload)=>{
            context.commit('updateLead', payload);
        },
        getImages:(context,payload) => {
            fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response =>{
                return response.json(); //return promise
            })
            .then((data)=>{
                //console.log(data);
                context.commit('listImages',data);
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
})
