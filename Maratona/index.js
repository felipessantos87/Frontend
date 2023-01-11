let participantes = ['Rafael','Manoel','Daniel'];

function positions(array){
    
  let substituicao= array.splice();

  if(array[0] != 'Daniel'){
  for(let i = 0; i < array.length;i++){
  if(array[i] == 'Daniel'){
  substituicao = array.splice(i-1,0,array.splice(i,1)[0]);
                
    }
  }
}
  return array
}
console.log(`Este é o pódio: ${positions(participantes)}`)
