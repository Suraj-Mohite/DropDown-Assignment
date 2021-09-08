var stateObject = {
    "India": {
        "--select--":[],
        "Delhi": ["new Delhi", "North Delhi"],
        "Kerala": ["Thiruvananthapuram", "Palakkad"],
        "Goa": ["North Goa", "South Goa"],
    },
    "Australia": {
        "--select--":[],
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
        "--select--":[],
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington"]
    },
}
function dropdown() {
    
    var country = document.getElementById("country")
    var state = document.getElementById("state")
    state.innerHTML=""
    if (country.value === "India") {
        var sArray = Object.keys(stateObject["India"])  //Object.keys() returns array of keys
    }
    else if (country.value === "Australia") {
        var sArray = Object.keys(stateObject["Australia"])
    }
    else if (country.value === "Canada") {
        var sArray = Object.keys(stateObject["Canada"])
    }
    
    for (var option in sArray) {
        var newElement = document.createElement("option")
        newElement.value = sArray[option]
        newElement.innerHTML = sArray[option]
        state.options.add(newElement)
    }
}

function cDropdown(){
    var country = document.getElementById("country").value
    var state = document.getElementById("state").value
    var city = document.getElementById("city")
    city.innerHTML=""
    var cArray=stateObject[country][state]
    
    for(i in cArray){
        var newElement=document.createElement("option")
        newElement.value=cArray[i]
        newElement.innerHTML=cArray[i]
        city.options.add(newElement)
    }
}
