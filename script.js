function convertir(){
    let montant = document.getElementById('montant')
    let devise = document.getElementById('devise')
    let reponse = document.getElementById('p1')

    if(devise.value=='euro_xaf'){
        let conversion = montant.value * 650
        reponse.textContent="nous avons " +  conversion

    } 
    
    else if(devise.value == 'xaf_euro'){
        let conversion = montant.value / 650
        reponse.textContent="nous avons " + conversion.toFixed(2)
    }
}