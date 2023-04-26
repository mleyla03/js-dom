let span=document.createElement("span");
span.innerText="960 x 360px";

let col=document.createElement("div");
col.setAttribute("class","col-12");
col.append(span);

let rows=document.createElement("div");
rows.setAttribute("class","row");
rows.append(col);
for(let i=0; i<3; i++)
{
  let boxes=document.createElement("span");
  boxes.innerText=" 290 x 180px";
  let content=document.createElement("div");
  content.setAttribute("class","box");
  content.append(boxes);
  let main=document.createElement("h2");
  main.textContent="Indonectetus faciltis";
  let p=document.createElement("p");
  p.textContent="Nulamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna";
  let a=document.createElement("a");
  a.textContent="Read More >>";
  a.style.color="orange";
  a.style.cursor="pointer";
  let col4=document.createElement("div")
  col4.setAttribute("class","col-4 col-lg-4 col-md-6 col-sm-12 col-xs-12");
  col4.append(content, main, p, a)
  rows.append(col4)

}

let divContainer=document.createElement("div");
divContainer.setAttribute("class","container");
divContainer.append(rows)
let body=document.body;
body.append(divContainer)