// export a frente do objeto que deseja ser exportado para exportar no padrão ECMAScript 2015
export const fatorial = (num)=>{
  if(num === 0) {
    return 1
  }

  return num * fatorial (num - 1)
}

// module.exports = fatorial // padrão node
