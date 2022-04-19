const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttributeNS(null, "width", 700);
  svg.setAttributeNS(null, "height", 700);
  svg.setAttributeNS(null, "id", "clock");
  document.body.append(svg);

  function drawSVGElements() {

    const svg = document.getElementById("clock");

    const w = parseFloat(svg.getAttributeNS(null, "width"));
    const h = parseFloat(svg.getAttributeNS(null, "height"));

    //for(i=1;i<=5;i++){

      let circlemini = document.createElementNS(svgNS,"circle");
      
      circlemini.setAttributeNS(null,"cx", w/2);
      circlemini.setAttributeNS(null,"cy", h/2);
      circlemini.setAttributeNS(null,"r", w > h ? h/2 : w/2);
      circlemini.setAttributeNS(null,"fill","green");
      circlemini.setAttributeNS(null,"stroke","none");
  
      svg.append(circlemini);
  



      //console.log(i)
    //}
    let circle = document.createElementNS(svgNS,"circle");

    circle.setAttributeNS(null,"cx", w/2);
    circle.setAttributeNS(null,"cy", h/2);
    circle.setAttributeNS(null,"r", w > h ? h/2 : w/2);
    circle.setAttributeNS(null,"fill","red");
    circle.setAttributeNS(null,"stroke","none");

    svg.append(circle);




    let line = document.createElementNS(svgNS, "line");

    line.setAttributeNS(null,"x1", 0);
    line.setAttributeNS(null,"y1", 0);
    line.setAttributeNS(null,"x2", w);
    line.setAttributeNS(null,"y2", h);
    line.setAttributeNS(null,"stroke", "cyan");
    line.setAttributeNS(null,"stroke-width", 7.5);

    svg.append(line);
  }

  drawSVGElements();
