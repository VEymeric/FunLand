var memory;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    memory = ev.path[1];
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    cible = ev.target;
    exchangeElements(memory.children[0], cible);
}


// Note: Cloned copy of element1 will be returned to get a new reference back
function exchangeElements(element1, element2)
{
    if (element1 == element2) return;
    if (gamemode == 1 && element1.className != element2.className) return;
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element2.parentNode.replaceChild(clonedElement1, element2);
    element1.parentNode.replaceChild(clonedElement2, element1);

    return clonedElement1;
}

function swapNodes(n1, n2) {
    var p1 = n1.parentNode.children[0];
    var p2 = n2.parentNode.children[0];
    var i1, i2;

    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;
    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }
    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
