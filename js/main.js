const amount = document.querySelector("#amount")
const persons = document.querySelector("#persons")
const tipPercentage = document.querySelector("#tip-percentage")
const btn = document.querySelector(".btn")
const finalResult = document.querySelector(".result")

btn.addEventListener("click", function(){
    if(amount.value === ""  || persons.value === ""  || tipPercentage.value === "" ){
        finalResult.innerHTML = `<p class="bg-danger text-light fs-4">Please fill in all fields</p>`

        setTimeout(function(){
            finalResult.innerHTML = ""
        },5000)

    }else{
        const billAmount = Number(amount.value)
        const people = Number(persons.value)
        const tip = Number(tipPercentage.value)

        const initialAmount = billAmount / people
        const tipAmount = tip / 100 * billAmount / people
        const totalAmount = initialAmount + tipAmount
        finalResult.innerHTML = `<p class="bg-success text-light fs-4">${totalAmount}</p>`

        setTimeout(function(){
            finalResult.innerHTML = ""
        },5000)
    }
    
})

