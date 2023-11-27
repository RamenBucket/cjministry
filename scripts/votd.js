async function getVOTD() {
    const response = await fetch("https://beta.ourmanna.com/api/v1/get")
    const response_text = await response.text()
    
    document.getElementById("myText").innerHTML = response_text;
}