class MainContent {
    constructor(){
        this.resetForm = document.getElementById("reset-form")
        this.sendForm = document.getElementById("send-form")
        
        this.mainForm = document.getElementById("main-form")
        this.filmName = document.getElementById("f-film")

        this.ResetForm = () => {
            this.mainForm.reset()
        }

        this.SendForm = () => {
            if (this.filmName.value === "") {
                alert("enter film's name")
                return
            }
            this.mainForm.submit()
        }

        this.sendForm.onclick = this.SendForm
        this.resetForm.onclick = this.ResetForm
    }
}

window.addEventListener("load", function(){
  let main = new MainContent()
})

