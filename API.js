/* Construction de l'api https://valorant-api.com/v1/weapons/skins  */
document.querySelector('#fetch-weapon').addEventListener('click', async () => {
    refreshWeapon()    
});

async function refreshWeapon() {
    var fetchResult = await fetch('https://valorant-api.com/v1/weapons/skins')
    var data = await fetchResult.json()

    if (data.url.includes('.mp4')) {
        refreshWeapon()
        return
    }

    document.querySelector('#weapon-name').src = data.url
}