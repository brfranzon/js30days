
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  /*const base = document.querySelector('.hl');
  base.style.color = this.value; */
 
 const suffix = this.dataset.sizing || '';
  
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
}

inputs.forEach( input =>  {
  input.addEventListener("change", handleUpdate);
})