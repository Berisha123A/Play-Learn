import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
            classes:[
                {
                  name: '5-6',
                  nxenesit:[
                    {
                      name: 'Filan Fisteku'
                    }
                  ]
                },
                {
                  name: '4-5',
                  nxenesit:[
                    {
                      name: 'Filan Fisteku'
                    }
                  ]
                },
                {
                  name: '3-4',
                  nxenesit:[
                    {
                      name: 'Filan Fisteku'
                    }
                  ]
                },
                {
                  name: '1-2',
                  nxenesit:[
                    {
                      name: 'Filan Fisteku'
                    }
                  ]
                },
              ]     
        }
    },
    getters: {
        classes(state){
          // Api Call for Classes
            return state.classes;
        }
    },
});

export default store;