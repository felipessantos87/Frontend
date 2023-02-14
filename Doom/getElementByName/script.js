const spans = document.getElementsByTagName('span');

for (const item of spans) {
    item.style.display = 'block';
}

for (let i = 0; i < spans.length; i++) {
    if (i % 2 === 0) {
        spans[i].style.color = 'green';
    } else {
         spans[i].style.color = 'red';
    }
}

