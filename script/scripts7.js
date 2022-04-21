document.getElementById('input').addEventListener('change', (e)=>{
    const input = e.currentTarget;
    let value = input.value;
    let scrollTop = document.getElementById('problem-st');
if (value=="1298")
{
    window.location = "https://timkistor.github.io/Diana/Diana8"
}
else
{
    scrollTop.className = "problem-yes"
}
})
