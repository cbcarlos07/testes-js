const removerDuplicado = array =>{
    const filteredArr = array.reduce((thing, current) => {
        const x = thing.find(item => item.id === current.id);
        if (!x) {
          return thing.concat([current]);
        } else {
          return thing;
        }
      }, []);
      return filteredArr
}

const arrays = [{id: 1, name: 'one', option: 1}, {id: 2, name: 'two'}, {id: 1, name: 'one', option: 2}, {id: 3, name: 'three'}]

console.log(removerDuplicado(arrays));