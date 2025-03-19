      //starts rgb as 0 for white background
      rcol = 0;
      gcol = 0;
      bcol = 0;
      //gathers buttons and text
      const changers = document.getElementsByClassName("changer");
      const texts = document.getElementsByClassName("text");
      //determines screen brightness thresh
      luminance = 150; 
      //determines appropriate text color
      function useBlackText(r, g, b) 
        {
            r = r * 0.299;
            g = g * 0.587;
            b = b * 0.114;
            if (r+g+b > luminance) {
                return true;
            } else {return false;}
        }
      //assigns screen color
      function colorChanger(red = false, green = false, blue = false) {
        //hides Copied! text if not already
        reveal();
        !red ? rcol = Math.random() * 255: rcol = rcol;
        !green ? gcol = Math.random() * 255: gcol = gcol;
        !blue ? bcol = Math.random() * 255: bcol = bcol;
        document.body.style.backgroundColor =
          "rgb(" + rcol + "," + gcol + "," + bcol + ")";

        //Assigns color to buttons
        for (i = 0; i < changers.length; i++) {
        changers[i].style.backgroundColor = 
          "rgb(" + (255 - rcol) + "," + (255 - gcol) + "," + (255 - bcol) + ")";
        useBlackText(255 - rcol,255 - gcol,255 - bcol) ? (changers[i].style.color = "black") : (changers[i].style.color = "white");
        }

        //Assigns color to text
        if (useBlackText(rcol,gcol,bcol)) {
            for (i = 0; i < texts.length; i++) {
                texts[i].style.color = "black";
            }
        } else {
            for (i = 0; i < texts.length; i++) {
                texts[i].style.color = "white";
            }
        }
        //Prints RGB values
        document.getElementById("red").innerText = "| R: " + Math.floor(rcol);
        document.getElementById("green").innerText = "| G: " + Math.floor(gcol);
        document.getElementById("blue").innerText = "| B: " + Math.floor(bcol);
        
        + " | G: " + Math.floor(gcol) + " | B: " + Math.floor(bcol);   
      }
      function hexCalc(c) {
        var hexVal = c.toString(16);
        return hexVal.length == 1 ? "0" + hexVal: hexVal;
      }
      function copyColorHex(r,g,b) {
        rHex = hexCalc(r);
        gHex = hexCalc(g);
        bHex = hexCalc(b);
        hex = "#" + rHex + gHex + bHex;
        navigator.clipboard.writeText(hex);
      }
      function reveal(show = false) {
        show ? document.getElementById("copyConfirm").style.visibility = "visible": document.getElementById("copyConfirm").style.visibility = "hidden"; 
      }