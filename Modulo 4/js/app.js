const pokeDex = () => {
    const pokename = document.getElementById("pokename");
    let pokeName = pokename.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {

        if (res.status != "200") {
            pokeImage("./images/pokeball.png");
        }else if(!res.status){
            pokeImage("./images/pokeball.png");
        }else {
            return res.json();
        }

    }).then((data) => {

        if (data) {
            let pokeImg = data.sprites.front_default;
            let pokeName = data.name;
            let pokeNumber = data.id;
            let pokeType = data.types[0].type.name;
            pokeImage(pokeImg);
            pokeData(pokeNumber, pokeName);
            pokeTypes(pokeType);
        }

    });
}

// Pokemon Image
const pokeImage = (url) => {
    const pokeSprite = document.getElementById("pokeSprite");
    pokeSprite.src = url;
}

// Pokemon Data
const pokeData = (pnum, pname) => {
    const pokeNumberItem = document.getElementById("pokeNumber");
    const pokeNameText = document.getElementById("pokeName");
    pokeNumberItem.innerHTML = '#'+pnum+' ';
    pokeNameText.innerHTML = pname;
}

// Types
const pokeTypes = (ptype) => {
    const pokeTypeclass = document.getElementById("pokeType");

    switch(ptype){
        case "grass":
            this.className = '';
            pokeTypeclass.classList.add("grass");
            break;
        case "bug":
            this.className = '';
            pokeTypeclass.classList.add("bug");
            break;
        case "dark":
            this.className = '';
            pokeTypeclass.classList.add("dark");
            break;
        case "dragon":
            this.className = '';
            pokeTypeclass.classList.add("dragon");
            break;
        case "electric":
            this.className = '';
            pokeTypeclass.classList.add("electric");
            break;
        case "fairy":
            this.className = '';
            pokeTypeclass.classList.add("fairy");
            break;
        case "fighting":
            this.className = '';
            pokeTypeclass.classList.add("fighting");
            break;
        case "fire":
            this.className = '';
            pokeTypeclass.classList.add("fire");
            break;
        case "flying":
            this.className = '';
            pokeTypeclass.classList.add("flying");
            break;
        case "ghost":
            this.className = '';
            pokeTypeclass.classList.add("ghost");
            break;
        case "ground":
            this.className = '';
            pokeTypeclass.classList.add("ground");
            break;
        case "ice":
            this.className = '';
            pokeTypeclass.classList.add("ice");
            break;
        case "normal":
            this.className = '';
            pokeTypeclass.classList.add("normal");
            break;
        case "poison":
            this.className = '';
            pokeTypeclass.classList.add("poison");
            break;
        case "rock":
            this.className = '';
            pokeTypeclass.classList.add("rock");
            break;
        case "psychic":
            this.className = '';
            pokeTypeclass.classList.add("psychic");
            break;
        case "steel":
            this.className = '';
            pokeTypeclass.classList.add("steel");
            break;
        case "water":
            this.className = '';
            pokeTypeclass.classList.add("water");
            break;
        default:
            console.log("not found");
    }
    pokeTypeclass.innerHTML = ptype;
}

