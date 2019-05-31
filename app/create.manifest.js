const base = {
  "manifest_version": 2,
  "name": "",
  "version": "0.1",
  "description": "",
}
const pathRegExp = /[^.]+\.(\d+)\.(?:jp(e?)g|gif|png)$/
const setIcons = function(iconsPathArray=[]){
  const icons = []
  iconsPathArray.forEach(p=>{
    const match = p.match(pathRegExp)
    if(match && match[1]) icons.push({[match[1]]:p})
  })
  if(icons.length>0)return {icons}
  return {}
}

const setBackground = function(path = ''){
  if(path){
    return {
      "background": {
        "page": path
      }
    }
  }
  return {}
}

console.log(JSON.stringify(setIcons([])))