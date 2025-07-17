function handelchange(e) {
    let form = document.querySelector('.form')
    const formdata = new FormData(form)
    console.log(formdata)
    let enable = true
    let strength = -1
    let regex = /(?:[1-9]|10)/
    let inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="date"]');
    inputs.forEach((ele => {
        if (!ele.value.trim()) {
            enable = false
        }
        if (ele.type === "password" && ele.name === "password" && ele.value.length > 10 && ele.value.includes("@") && regex.test(ele.value) && ele.value.charCodeAt(0) >= 65 && ele.value.charCodeAt(0) <= 90
        ) {
            strength = 2
        }
        if (ele.type === "password" && ele.name === "password" && ele.value.length > 10 && !ele.value.includes("@") && regex.test(ele.value) && ele.value.charCodeAt(0) >= 65 && ele.value.charCodeAt(0) <= 90
        ) {
            strength = 1
        }
        if (ele.type === "password" && ele.name === "password" && ele.value.length <= 10 && !ele.value.includes("@") && !regex.test(ele.value) && !(ele.value.charCodeAt(0) >= 65 && ele.value.charCodeAt(0) <= 90
        )) {
            strength = 0
        }
        if (ele.type === "password" && ele.name === "password" && ele.value === "") {
            strength = -1
        }
    }))
    let showstrength = document.querySelector("#strength")
    if (strength === -1) {
        showstrength.style.color = "white"
        showstrength.innerHTML = ""
    }
    if (strength === 2) {
        showstrength.style.color = "green"
        showstrength.innerHTML = "strong"
    }
    else if (strength === 1) {
        showstrength.style.color = "orange"
        showstrength.innerHTML = "medium"
    }
    else if (strength === 0) {
        showstrength.style.color = "red"
        showstrength.innerHTML = "weak"
    }

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
function checkpassword(e) {
    let val = document.querySelector('input[name="password"]').value
    let newval = e.target.value
    if (val !== newval) {
        alert("passwords does not match")
    }
}
function fdToObject(fd) {
    const obj = {};
    fd.forEach((value, key) => {
        obj[key] = value instanceof File ? value.name : value;
    });
    return obj;
}