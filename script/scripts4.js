document.getElementById('input').addEventListener('change', (e)=>{
    const input = e.currentTarget;
    let value = input.value;
    let scrollTop = document.getElementById('problem-st');
if (value=="6782")
{
    window.location = "https://timkistor.github.io/Diana/Diana5"
}
else
{
    scrollTop.className = "problem-yes"
}
})
