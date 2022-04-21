document.getElementById('input').addEventListener('change', (e)=>{
    const input = e.currentTarget;
    let value = input.value;
    let scrollTop = document.getElementById('problem-st');
if (value=="5890")
{
    window.location = "https://developer.mozilla.org/ru/docs/Web/API/Location"
}
else
{
    scrollTop.className = "problem-yes"
}
})
