function tdSessionStore(){
    function get(key){
      // console.log("inside session get -----");
      //   console.log({status: !window});
      if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key);
      }
      return null;
    }
  
    function set(key, val){
      // console.log("inside session set -----");
      // console.log({status: !window, type: typeof window});
      if (typeof window !== 'undefined') {
        return window.localStorage.setItem(key, val);
      }
      return null;
  
    }

    async function setMany(obj){
      
      if (typeof window !== 'undefined') {

        for (const key in obj) {
          if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];

            //console.log({element, key});
            await window.localStorage.setItem(key, element);
            
          }
        }
        //return window.localStorage.setItem(key, val);
      }
      return null;
  
    }
  
    return Object.assign({}, {
      get,
      set,
      setMany
    })
}

const tdSessionStoreInstance = tdSessionStore();
export default tdSessionStoreInstance;
