
const customerDiv = document.querySelector("#customers")
const participantsSelector = document.querySelector("#selector-participants")
const optionsSelector = document.querySelector("#selector-options")
const timesSelector = document.querySelector("#selector-times")
const datesSelector = document.querySelector("#selector-dates")
console.log(datesSelector);



//test1
datesSelector.addEventListener("change", (event) => {
    let date = event.target.value
    console.log(date);
    fetch(`/test/"${date}"`)
    .then(res => res.json())
    .then(data => {
       data.booking_dates_and_times.forEach(element => {
        if (date === element.available_dates){
            console.log(element.available_times);
            const newOp = document.createElement("option");
            newOp.append(element.available_times)
            timesSelector.insertAdjacentElement("afterbegin", newOp)
        }
            
       });
    })         
})

// PARTICIPANTS
//=======================================================================
fetch('/api-fetch-booking_data')
.then(res => res.json())
.then(data => {
    data.participants.forEach(element => {
        // console.log(element);
        const newOp = document.createElement("option");
        newOp.append(element.participants)
        participantsSelector.insertAdjacentElement("afterbegin", newOp)
    });
    data.booking_options.forEach(element => {
        // console.log(element);
        const newOp = document.createElement("option");
        newOp.append(element.options)
        optionsSelector.insertAdjacentElement("afterbegin", newOp)
    })
    data.booking_dates.forEach(element => {
        // console.log(element);
        const newOp = document.createElement("option");
        newOp.append(element.available_dates)
        datesSelector.insertAdjacentElement("afterbegin", newOp)
    })
    // data.booking_date_times.forEach(element => {
    //     // console.log(element);
    //     const newOp = document.createElement("option");
    //     newOp.append(element.available_times)
    //     timesSelector.insertAdjacentElement("afterbegin", newOp)
    // })
})

// CREATE CUSTOMER
//=======================================================================
async function create_customer() {
    const form = event.target
    const connection = await fetch('/api-create-customer-booking', {
        method: "POST",
        body: new FormData(form)
    })
    if (!connection.ok) {
        alert("Could not connect")
        return
    }
    // console.log(form);
}

// UPDATE CUSTOMER
//=======================================================================
async function update_customer() {
    const form = event.target
    const connection = await fetch('/api-update-customer/1', {
        method: "PUT",
        body: new FormData(form)
    })
    if (!connection.ok) {
        alert("Could not connect")
        return
    }
}