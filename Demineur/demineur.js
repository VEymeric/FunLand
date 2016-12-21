function restart(){
	game = true;
	x = xinit;
	y = yinit;
	b = binit;
	caseSansBombe =0;
	myTimer = 0;
	pattern = createPattern(x,y,b);
	affichage = printArray(pattern,x,y);
	document.getElementById("monPlateau").innerHTML = affichage;
	window.clearInterval(timerVariable)
	timerVariable = setInterval(incrMyTimer, 1000);
	majAll();
}

function majBombes(){
	document.getElementById("bombesR").innerHTML = "Bombes restantes : "+b;
}	
function majTimer(){
	document.getElementById("time").innerHTML ="Timer :  "+myTimer;
}
function majCaseRestantes(){
	document.getElementById("casesR").innerHTML = "Cases restantes : "+caseSansBombe;	
}
function majAll(){
	majBombes();
	majTimer();
	majCaseRestantes();
	majEvent(affichage);
}

function bombesVoisins(plateau,x,y){
	var nb = 0;
	if((x-1)>=0 && (y-1)>=0 && plateau[x-1][y-1]==-1)nb++;
	if((y-1)>=0 && plateau[x][y-1]==-1)nb++;
	if((x+1)< plateau.length && (y-1)>=0 && plateau[x+1][y-1]==-1)nb++;
	if((x-1)>=0 && plateau[x-1][y]==-1)nb++;
	if((x+1)<plateau.length && plateau[x+1][y]==-1)nb++;
	if((x-1)>=0 && (y+1)<plateau[0].length && plateau[x-1][y+1]==-1)nb++;
	if((y-1)<plateau[0].length && plateau[x][y+1]==-1)nb++;
	if((x+1)<plateau.length && (y-1)<plateau[0].length && plateau[x+1][y+1]==-1)nb++;
	return nb;
}

function createPattern(x,y,b){
	var plateau = new Array();
	for(var i=0; i<x; i++) plateau[i] = new Array();
	if(b < 1) b=1;
	if(x < 1) x=1;
	if(y < 1) y=1;
	if(b > x*y)b = x*y-1; 
	for(var i=0; i<x; i++){
		for(var j=0; j<y ; j++){
			plateau[i][j] = 0;
		}
	}
	for(var i=0; i<b ; i++){
		v = Math.floor((Math.random() * (x-1)));
		w = Math.floor((Math.random() * (y-1))); 
		if(plateau[v][w] == 0){
			plateau[v][w] = -1;
		}else{
			i--;
		}
	}
	for(var i=0; i<x; i++){
		for(var j=0; j<y ; j++){
			if(plateau[i][j] == 0){
				plateau[i][j] = bombesVoisins(plateau,i,j);
				caseSansBombe++;
			}
		}
	}
	d = document.getElementById("casesR");
	d.innerHTML = "Cases restantes : "+caseSansBombe;
	return plateau;
}
//onclick='cliquay(this.id, this.getAttribute(\"class\"))'
function printArray(plateau, x, y){
	var affichage = "<table>";
	for(var i=0; i<x; i++){
		affichage += "<tr>"
		for(var j=0; j<y ; j++){
			var myid = j+y*i;
			affichage += "<td id ="+ myid  +" class =\"caseUnknow\"> </td>";
		}
		affichage += "</tr>"
	}
	affichage += "<table>";
	return affichage;
}

function incrMyTimer(){
	myTimer++;
	majTimer();
}
timerVariable = setInterval(incrMyTimer, 1000);


function majEvent(plateau){
	var classname = document.getElementsByClassName("caseUnknow");
	for (var i = 0; i < classname.length; i++) {
		classname[i].addEventListener('contextmenu', cdu, false);
		classname[i].addEventListener('click', cgu, false);
	}
	var classname2 = document.getElementsByClassName("caseKnow");
	for (var i = 0; i < classname2.length; i++) {
		classname2[i].addEventListener('dblclick', dcgk, false);
	}
		d = document.getElementById("casesR");
	d.innerHTML = "Cases restantes : "+caseSansBombe;

}
function cdu(ev){
	ev.preventDefault();
	if(game == false) return;
	d = document.getElementById(this.id);
	if(d.className == "caseUnknow"){
		d.className = "caseDesactived";
		b--;
	}
	else if(d.className == "caseDesactived"){
		d.className = "caseUnknow";
		b++;
	}
	d = document.getElementById("bombesR");
	d.innerHTML = "Bombes restantes : "+b;
}
function cgu(ev){
	if(game == false) return;
	d = document.getElementById(this.id);
	if(d.className != "caseUnknow") return;
	var x = parseInt(this.id / pattern[0].length);
	var y = this.id % pattern[0].length;
	discover(d,x,y);
	majEvent();
}
function dcgk(ev){
	if(game == false) return;
	caseClikay = document.getElementById(this.id);
	var x = parseInt(this.id / pattern[0].length);
	var y = this.id % pattern[0].length;
	if(d.className != "caseKnow") return;
	var test1 = document.getElementById(parseInt(caseClikay.id) - 1);
	if(test1 != null && test1.className == "caseUnknow") {discover(test1,x,y-1);}
	var test2 = document.getElementById(parseInt(caseClikay.id) - parseInt(pattern[0].length));
	if(test2 != null && test2.className == "caseUnknow"){discover(test2,x-1,y);}
	var test3 = document.getElementById(parseInt(caseClikay.id) + 1);
	if(test3 != null && test3.className == "caseUnknow"){discover(test3,x,y+1);}
	var test4 = document.getElementById(parseInt(caseClikay.id) + parseInt(pattern[0].length));
	if(test4 != null && test4.className == "caseUnknow"){discover(test4,x+1,y);}

	var test5 = document.getElementById(parseInt(caseClikay.id) - 1 - parseInt(pattern[0].length));
	if(test5 != null && test5.className == "caseUnknow"){discover(test5,x-1,y-1);}
	var test6 = document.getElementById(parseInt(caseClikay.id) + 1 - parseInt(pattern[0].length));
	if(test6 != null && test6.className == "caseUnknow"){discover(test6,x-1,y+1);}
	var test7 = document.getElementById(parseInt(caseClikay.id) + 1 + parseInt(pattern[0].length));
	if(test7 != null && test7.className == "caseUnknow"){discover(test7,x+1,y+1);}
	var test8 = document.getElementById(parseInt(caseClikay.id) - 1 + parseInt(pattern[0].length));
	if(test8 != null && test8.className == "caseUnknow"){discover(test8,x+1,y-1);}

}

function discover(caseClikay,x,y){
	if(game != true || x<0 || x>=pattern.length || y<0 || y>=pattern[0].length || caseClikay == null || caseClikay.className == 'caseKnow'){
		return;
	}

	caseClikay.className = "caseKnow";
	caseSansBombe--;
	var value = pattern[x][y];
	if(value === undefined)    {alert(caseClikay.id); alert(x);alert(y);}

	if(value == -1){
		//caseClikay.innerHTML = "B";
		caseClikay.className = "caseExplosion";
		b--;
		d = document.getElementById("bombesR");
		d.innerHTML = "Bombes restantes : "+b;
		gameover();
	}else if(value == 0){
		caseClikay.innerHTML = " ";
		var test1 = document.getElementById(parseInt(caseClikay.id) - 1);
		discover(test1,x,y-1);
		var test2 = document.getElementById(parseInt(caseClikay.id) - parseInt(pattern[0].length));
		discover(test2,x-1,y);
		var test3 = document.getElementById(parseInt(caseClikay.id) + 1);
		discover(test3,x,y+1);
		var test4 = document.getElementById(parseInt(caseClikay.id) + parseInt(pattern[0].length));
		discover(test4,x+1,y);

		var test5 = document.getElementById(parseInt(caseClikay.id) - 1 - parseInt(pattern[0].length));
		discover(test5,x-1,y-1);
		var test6 = document.getElementById(parseInt(caseClikay.id) + 1 - parseInt(pattern[0].length));
		discover(test6,x-1,y+1);
		var test7 = document.getElementById(parseInt(caseClikay.id) + 1 + parseInt(pattern[0].length));
		discover(test7,x+1,y+1);
		var test8 = document.getElementById(parseInt(caseClikay.id) - 1 + parseInt(pattern[0].length));
		discover(test8,x+1,y-1);


	}else{
	   caseClikay.innerHTML = value; 
	}
	if(caseSansBombe==0 && game == true)gameout();
		majEvent();

}

function gameover(){
	window.clearInterval(timerVariable)
	alert("BOOM");
	game = false;
	for(var i=0; i<x; i++){
		for(var j=0; j<y ; j++){
			if(pattern[i][j] == -1){
				if(document.getElementById(j+y*i).className == "caseUnknow")document.getElementById(j+y*i).className = "cat";
				if(document.getElementById(j+y*i).className == "caseDesactived")document.getElementById(j+y*i).className = "unCat";
			}
		}
	}
}

function gameout(){
	window.clearInterval(timerVariable)
	alert("Une réussite totale");
	for(var i=0; i<x; i++){
		for(var j=0; j<y ; j++){
			if(pattern[i][j] == -1)document.getElementById(j+y*i).innerHTML='B';
		}
	}
	game = false;
}