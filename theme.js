var main = document.getElementById('main')
        var btn = document.getElementById('theme')
        const themeChange = () => {
            if (main.style.backgroundColor == "black") {
                main.style.backgroundColor = "white"
                btn.style.backgroundColor = "white"
                btn.style.color = "black"
                btn.style.border = "5px solid black"
                btn.style.borderRadius = "5px"
            }
            else {
                main.style.backgroundColor = "black"
                btn.style.backgroundColor = "black"
                btn.style.color = "white"
                btn.style.border = "5px solid white"
                btn.style.borderRadius = "5px"
            }
        }