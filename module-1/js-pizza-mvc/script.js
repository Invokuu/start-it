const app = document.getElementById('app');

// Model
let doughThick, doughThin,
    fillTaco, fillChicken, fillPepperoni, fillBeef,
    sizeBig, sizeMedium, sizeSmall,
    shapeRound, shapeSquare,
    listView;

// View
function render() {
    app.innerHTML = `
    <h3 class="span-2">Pizza order</h3>
    <div>
        <h5>Dough</h5>
        <label for="dough-thick"><input id="dough-thick" type="radio" name="dough" onchange="resetDough(), doughThick = this.checked, update();" ${checked(doughThick)}/> Thick</label>
        <label for="dough-thin"><input id="dough-thin" type="radio" name="dough" onchange="resetDough(), doughThin = this.checked, update();" ${checked(doughThin)}/> Thin</label>
    </div>
    <div>
        <h5>Filling</h5>
        <label for="fill-taco"><input id="fill-taco" type="radio" name="fill" onchange="resetFill(), fillTaco = this.checked, update();" ${checked(fillTaco)}/> Taco</label>
        <label for="fill-chicken"><input id="fill-chicken" type="radio" name="fill" onchange="resetFill(), fillChicken = this.checked, update();" ${checked(fillChicken)}/> Chicken</label>
        <label for="fill-pepperoni"><input id="fill-pepperoni" type="radio" name="fill" onchange="resetFill(), fillPepperoni = this.checked, update();" ${checked(fillPepperoni)}/> Pepperoni</label>
        <label for="fill-beef"><input id="fill-beef" type="radio" name="fill" onchange="resetFill(), fillBeef = this.checked, update();" ${checked(fillBeef)}/> Beef</label>
    </div>
    <div>
        <h5>Size</h5>
        <label for="size-big"><input id="size-big" type="radio" name="size" onchange="resetSize(), sizeBig = this.checked, update();" ${checked(sizeBig)}/> Big</label>
        <label for="size-medium"><input id="size-medium" type="radio" name="size" onchange="resetSize(), sizeMedium = this.checked, update();" ${checked(sizeMedium)}/> Medium</label>
        <label for="size-small"><input id="size-small" type="radio" name="size" onchange="resetSize(), sizeSmall = this.checked, update();" ${checked(sizeSmall)}/> Small</label>
    </div>
    <div>
        <h5>Shape</h5>
        <label for="shape-round"><input id="shape-round" type="radio" name="shape" onchange="resetShape(), shapeRound = this.checked, update();" ${checked(shapeRound)}/> Round</label>
        <label for="shape-square"><input id="shape-square" type="radio" name="shape" onchange="resetShape(), shapeSquare = this.checked, update();" ${checked(shapeSquare)}/> Square</label>
    </div>
    <button class="span-2" onclick="buyPizza();">Buy</button>
    ${listView}`;
}

function renderList() {
    let list = '<ul class="span-2">';
    if ((doughThick || doughThin)
    && (fillTaco || fillChicken || fillPepperoni || fillBeef)
    && (sizeBig || sizeMedium || sizeSmall)
    && (shapeRound || shapeSquare)) {
        list += `<li>You have selected everything</li>`
    } else {
        list += '<li>You\'re missing:</li>';
        if (!doughThick && !doughThin) {
            list += '<li>Dough</li>';
        }
        if (!fillTaco && !fillChicken && !fillPepperoni && !fillBeef) {
            list += '<li>Filling</li>';
        }
        if (!sizeBig && !sizeMedium && !sizeSmall) {
            list += '<li>Size</li>';
        }
        if (!shapeRound && !shapeSquare) {
            list += '<li>Shape</li>';
        }
    }
    list += '</ul>';
    return list;
}

update();

// Controller
function update() {
    listView = createList();
    render();
}

function resetDough() {
    doughThick = doughThin = false;
}

function resetFill() {
    fillTaco = fillChicken = fillPepperoni = fillBeef = false;
}

function resetSize() {
    sizeBig = sizeMedium = sizeSmall = false;
}

function resetShape() {
    shapeRound = shapeSquare = false;
}

function createList() {
    let list = '<ul class="span-2">';
    if ((doughThick || doughThin)
    && (fillTaco || fillChicken || fillPepperoni || fillBeef)
    && (sizeBig || sizeMedium || sizeSmall)
    && (shapeRound || shapeSquare)) {
        list += `<li>You have selected everything</li>`
    } else {
        list += '<li>You\'re missing:</li>';
        if (!doughThick && !doughThin) {
            list += '<li>Dough</li>';
        }
        if (!fillTaco && !fillChicken && !fillPepperoni && !fillBeef) {
            list += '<li>Filling</li>';
        }
        if (!sizeBig && !sizeMedium && !sizeSmall) {
            list += '<li>Size</li>';
        }
        if (!shapeRound && !shapeSquare) {
            list += '<li>Shape</li>';
        }
    }
    list += '</ul>';
    return list;
}

function buyPizza() {
    if ((doughThick || doughThin)
    && (fillTaco || fillChicken || fillPepperoni || fillBeef)
    && (sizeBig || sizeMedium || sizeSmall)
    && (shapeRound || shapeSquare)) {
        listView = '<ul class="span-2"><li class="green">Thanks for your purchase!</li></ul>';
        render();
    }
}

function checked(value) {
    return value ? 'checked' : '';
}