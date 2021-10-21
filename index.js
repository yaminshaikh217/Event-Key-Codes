const container = document.querySelector(".container")


window.addEventListener("keydown", (events) => {

    console.log(events);

    container.innerHTML = `
    <div class="key">
     ${events.key === " " ? "Space" : events.key}
    <p>Key</p>
</div>
<div class="key">
    ${events.keyCode}
    <p>Key Code</p>
</div>
<div class="key">
    ${events.code}
    <p>Code</p>
</div>`






})