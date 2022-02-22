 var modal = document.getElementsByClassName('modal')[0];
        var btn = document.getElementsByClassName('close')[0];
        setTimeout(() => {
            modal.style.display = "block"
        }, 1000)
        const closeModal = () => {
            modal.style.display = "none"
            btn.style.display = "none"
        }