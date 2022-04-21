document.getElementById('input').addEventListener('change', (e)=>{
    const input = e.currentTarget;
    let value = input.value;
    let scrollTop = document.getElementById('problem-st');
if (value=="6431")
{
    window.location = "https://timkistor.github.io/Diana/Diana7"
}
else
{
    scrollTop.className = "problem-yes"
}
})
