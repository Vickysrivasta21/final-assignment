function handelchange(e) {
    let form = document.querySelector('.form')
    const formdata = new FormData(form)
    console.log(formdata)
    let enable = true
    let inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="date"]');
    inputs.forEach((ele => {
        if (!ele.value.trim()) {
            enable = false
        }
    }))
    let select = document.querySelector('select[name="gender"]')
    let check = document.querySelector('.check')

    if (!select.value || !check.checked) {
        enable = false
    }
    let btn = document.querySelector('.button')
    btn.disabled = !enable

    for (let [key, value] of formdata.entries()) {
        console.log(key, value);
    }
}
function show(e) {
    e.preventDefault()
    let form = document.querySelector('.form')
    const formdata = new FormData(form)
    const obj = fdToObject(formdata);
    console.log(obj)
    localStorage.setItem("userdata", JSON.stringify(obj))
    // res.textContent = JSON.stringify(obj, null, 2);
}

function fdToObject(fd) {
    const obj = {};
    fd.forEach((value, key) => {
        obj[key] = value instanceof File ? value.name : value;
    });
    return obj;
}