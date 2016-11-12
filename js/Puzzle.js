//////////////////////////////////////////////////////////////////////////////
//
//  WebGL_example_20.js 
//
//  Animating models with global and local transformations.
//
//  References: www.learningwebgl.com + E. Angel examples
//
//  J. Madeira - October 2015
//
//////////////////////////////////////////////////////////////////////////////


//----------------------------------------------------------------------------
//
// Global Variables
//

var gl = null; // WebGL context

var shaderProgram = null;

var triangleVertexPositionBuffer = null;
	
var triangleVertexColorBuffer = null;

// The GLOBAL transformation parameters

var globalTz = 0.0;

// The local transformation parameters

// The translation vector
var figura1_on = 0;
var figura2_on = 0;

var tx1 = -0.5;

var ty1 = 0.0;

var tz1 = 0.0;

var tx2 = 0.0;

var ty2 = 0.0;

var tz2 = 0.0;

// The rotation angles in degrees

var angleXX1 = 0.0;

var angleYY1 = 0.0;

var angleZZ1 = 0.0;

var angleXX2 = 0.0;

var angleYY2 = 0.0;

var angleZZ2 = 0.0;

// The scaling factors

var sx1 = 0.5;

var sy1 = 0.5;

var sz1 = 0.5;

var sx2 = 0.5;

var sy2 = 0.5;

var sz2 = 0.5;

// NEW - GLOBAL Animation controls

var globalRotationYY_ON = 1;

var globalRotationYY_DIR = 1;

var globalRotationYY_SPEED = 1;
 
// To allow choosing the way of drawing the model triangles

var primitiveType = null;
 
// To allow choosing the projection type

var projectionType = 1;
 
// For storing the vertices defining the triangles

var VBack = [
  -1, -1,
   1, -1,
   1,  1,
  -1,  1,
];

var vTBack = [
    0.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0
    ];

var VBuffer;
var vTBuffer;    

var vertices = [

		// FRONT FACE
		 
		-0.25, -0.25,  0.25,
		 
		 0.25, -0.25,  0.25,
		 
		 0.25,  0.25,  0.25,

		 
		 0.25,  0.25,  0.25,
		 
		-0.25,  0.25,  0.25,
		 
		-0.25, -0.25,  0.25,
		
		// TOP FACE
		
		-0.25,  0.25,  0.25,
		 
		 0.25,  0.25,  0.25,
		 
		 0.25,  0.25, -0.25,

		 
		 0.25,  0.25, -0.25,
		 
		-0.25,  0.25, -0.25,
		 
		-0.25,  0.25,  0.25,
		
		// BOTTOM FACE 
		
		-0.25, -0.25, -0.25,
		 
		 0.25, -0.25, -0.25,
		 
		 0.25, -0.25,  0.25,

		 
		 0.25, -0.25,  0.25,
		 
		-0.25, -0.25,  0.25,
		 
		-0.25, -0.25, -0.25,
		
		// LEFT FACE 
		
		-0.25,  0.25,  0.25,
		 
		-0.25, -0.25, -0.25,

		-0.25, -0.25,  0.25,
		 
		 
		-0.25,  0.25,  0.25,
		 
		-0.25,  0.25, -0.25,
		 
		-0.25, -0.25, -0.25,
		
		// RIGHT FACE 
		
		 0.25,  0.25, -0.25,
		 
		 0.25, -0.25,  0.25,

		 0.25, -0.25, -0.25,
		 
		 
		 0.25,  0.25, -0.25,
		 
		 0.25,  0.25,  0.25,
		 
		 0.25, -0.25,  0.25,
		
		// BACK FACE 
		
		-0.25,  0.25, -0.25,
		 
		 0.25, -0.25, -0.25,

		-0.25, -0.25, -0.25,
		 
		 
		-0.25,  0.25, -0.25,
		 
		 0.25,  0.25, -0.25,
		 
		 0.25, -0.25, -0.25,			 
];

// And their colour

var colors = [

		 // FRONT FACE
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 	
		 1.00,  1.00,  0.00,
		 
		 1.00,  1.00,  0.00,
		 
		 1.00,  1.00,  0.00,
		 			 
		 // TOP FACE
		 	
		 0.00,  0.00,  0.00,
		 
		 0.00,  0.00,  0.00,
		 
		 0.00,  0.00,  0.00,

		 	
		 0.50,  0.50,  0.50,
		 
		 0.50,  0.50,  0.50,
		 
		 0.50,  0.50,  0.50,
		 			 
		 // BOTTOM FACE
		 	
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,

		 	
		 0.00,  1.00,  1.00,
		 
		 0.00,  1.00,  1.00,
		 
		 0.00,  1.00,  1.00,
		 			 
		 // LEFT FACE
		 	
		 0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,

		 	
		 1.00,  0.00,  1.00,
		 
		 1.00,  0.00,  1.00,
		 
		 1.00,  0.00,  1.00,
		 			 
		 // RIGHT FACE
		 	
		 0.25,  0.50,  0.50,
		 
		 0.25,  0.50,  0.50,
		 
		 0.25,  0.50,  0.50,

		 	
		 0.50,  0.25,  0.00,
		 
		 0.50,  0.25,  0.00,
		 
		 0.50,  0.25,  0.00,
		 			 
		 			 
		 // BACK FACE
		 	
		 0.25,  0.00,  0.75,
		 
		 0.25,  0.00,  0.75,
		 
		 0.25,  0.00,  0.75,

		 	
		 0.50,  0.35,  0.35,
		 
		 0.50,  0.35,  0.35,
		 
		 0.50,  0.35,  0.35,			 			 
];

//----------------------------------------------------------------------------
//
// The WebGL code
//

//----------------------------------------------------------------------------
//
//  Rendering
//

// Handling the Vertex and the Color Buffers

function initBuffers() {	
	
	// Coordinates
	triangleVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	triangleVertexPositionBuffer.itemSize = 3;
	triangleVertexPositionBuffer.numItems = vertices.length / 3;			

	// Associating to the vertex shader
	
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
			triangleVertexPositionBuffer.itemSize, 
			gl.FLOAT, false, 0, 0);
	
	// Colors
		
	triangleVertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
	triangleVertexColorBuffer.itemSize = 3;
	triangleVertexColorBuffer.numItems = colors.length / 3;			

	// Associating to the vertex shader
	
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
			triangleVertexColorBuffer.itemSize, 
			gl.FLOAT, false, 0, 0);
}

/*
function initBkgnd() {
    backTex = gl.createTexture();
    backTex.Img = new Image();
    backTex.Img.onload = function() {
        handleBkTex(backTex);
    }
    backTex.Img.src = "Bkgnd.jpg";
}

function handleBkTex(tex) {
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.Img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
}

function drawBkgnd() {
    gl.bindBuffer(gl.ARRAY_BUFFER, VBuffer);
    //gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, vTBuffer);
    gl.vertexAttribPointer(texCoordAttribute, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backTex);
    gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}*/

//----------------------------------------------------------------------------

//  Drawing the model

function drawModel( angleXX, angleYY, angleZZ, 
					sx, sy, sz,
					tx, ty, tz,
					mvMatrix,
					primitiveType ) {

    // Pay attention to transformation order !!
    
	mvMatrix = mult( mvMatrix, translationMatrix( tx, ty, tz ) );
						 
	mvMatrix = mult( mvMatrix, rotationZZMatrix( angleZZ ) );
	
	mvMatrix = mult( mvMatrix, rotationYYMatrix( angleYY ) );
	
	mvMatrix = mult( mvMatrix, rotationXXMatrix( angleXX ) );
	
	mvMatrix = mult( mvMatrix, scalingMatrix( sx, sy, sz ) );
						 
	// Passing the Model View Matrix to apply the current transformation
	
	var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	
	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));
	
	// Drawing the contents of the vertex buffer
	
	// primitiveType allows drawing as filled triangles / wireframe / vertices
	
	if( primitiveType == gl.LINE_LOOP ) {
		
		// To simulate wireframe drawing!
		
		// No faces are defined! There are no hidden lines!
		
		// Taking the vertices 3 by 3 and drawing a LINE_LOOP
		
		var i;
		
		for( i = 0; i < triangleVertexPositionBuffer.numItems / 3; i++ ) {
		
			gl.drawArrays( primitiveType, 3 * i, 3 ); 
		}
	}	
	else {
				
		gl.drawArrays(primitiveType, 0, triangleVertexPositionBuffer.numItems); 
		
	}	
}

//----------------------------------------------------------------------------

//  Drawing the 3D scene

function drawScene() {
	
	var pMatrix;
	
	var mvMatrix = mat4();

	var mvMatrix2 = mat4();
	
	// Clearing the frame-buffer and the depth-buffer
	
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	// Computing the Projection Matrix
	
	if( projectionType == 0 ) {
		
		// For now, the default orthogonal view volume
		
		pMatrix = ortho( -1.0, 1.0, -1.0, 1.0, -1.0, 1.0 );
		
		// Global transformation !!
		
		globalTz = 0;
		
		// TO BE DONE !
		
		// Allow the user to control the size of the view volume
	}
	else {	

		// A standard view volume.
		
		// Viewer is at (0,0,0)
		
		// Ensure that the model is "inside" the view volume
		
		pMatrix = perspective( 45, 1, 0.05, 15 );
		
		// Global transformation !!
		
		globalTz = -2.5;

		// TO BE DONE !
		
		// Allow the user to control the size of the view volume
	}
	
	// Passing the Projection Matrix to apply the current projection
	
	var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	
	gl.uniformMatrix4fv(pUniform, false, new Float32Array(flatten(pMatrix)));
	
	// GLOBAL TRANSFORMATION FOR THE WHOLE SCENE
	
	mvMatrix = translationMatrix( 0, 0, globalTz-1.0 );

	mvMatrix2 = translationMatrix( 0, 0, globalTz );
	
	// Instantianting the current model

	// Instance 2 --- LEFT
	
	drawModel( angleXX1, angleYY1, angleZZ1,  // CW rotations
	           sx1, sy1, sz1,
	           tx1, ty1, tz1,
	           mvMatrix2,
	           primitiveType );
		
	drawModel( angleXX2, angleYY2, angleZZ2, 
	           sx2, sy2, sz2,
	           tx2, ty2, tz2,
	           mvMatrix,
	           primitiveType );
}


//----------------------------------------------------------------------------

// Timer

function tick() {
	
	requestAnimFrame(tick);
	
	drawScene();
}


//----------------------------------------------------------------------------
//
//  User Interaction
//

function outputInfos(){
    
}

//----------------------------------------------------------------------------


function degToRad(degrees) {
        return degrees * Math.PI / 180;
    }
    var mouseDown = false;
    var lastMouseX = null;
    var lastMouseY = null;
    //var moonRotationMatrix = mat4.create();
    //mat4.identity(moonRotationMatrix);
    function handleMouseDown(event) {
        mouseDown = true;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }
    function handleMouseUp(event) {
        mouseDown = false;
    }
    function handleMouseMove(event) {
        if (!mouseDown) {
            return;
        }
        var newX = event.clientX;
        var newY = event.clientY;
        var deltaX = newX - lastMouseX;
        var deltaY = newY - lastMouseY;
        /*
        var newRotationMatrix = mat4.create();
        mat4.identity(newRotationMatrix);
        // Update: mat4.rotate(newRotationMatrix, degToRad(deltaX / 10), [0, 1, 0]); mat4.rotate() API has changed to mat4.rotate(out, a, rad, axis)
        // where out is the receiving matrix and a is the matrix to rotate.
        mat4.rotate(newRotationMatrix, newRotationMatrix, degToRad(deltaX / 10), [0, 1, 0]);
        
        mat4.rotate(newRotationMatrix, newRotationMatrix, degToRad(deltaY / 10), [1, 0, 0]);
        // Update: mat4.multiply(newRotationMatrix, moonRotationMatrix, moonRotationMatrix); API has changed.
        mat4.multiply(moonRotationMatrix, newRotationMatrix, moonRotationMatrix);
        */

        /*
        for(var model in webgl.models){
        webgl.models[model].globalAngleXX += radians( 10 * deltaX);
        webgl.models[model].globalAngleYY += radians( 10 * deltaY);

	      }
	      webgl.back.globalAngleXX += radians( 10 * deltaX);
	      webgl.back.globalAngleYY += radians( 10 * deltaY);

	      webgl.drawScene();
	      */

	    angleXX1 += radians(10 * deltaY);
	    angleYY1 +=  radians(10 * deltaX);
	    angleXX2 += radians(10 * deltaY);
	    angleYY2 +=  radians(10 * deltaX);

	    //Rodar o background
	    //webgl.back.globalAngleXX += radians( 10 * deltaX);
      	//webgl.back.globalAngleYY += radians( 10 * deltaY);
	    drawScene();  


        lastMouseX = newX;
        lastMouseY = newY;
    }


function setEventListeners(){

	document.getElementById("file").onchange = function(){
		var file = this.files[0];
		
		var reader = new FileReader();
		
		reader.onload = function( progressEvent ){
			
			// Entire file read as a string
			
			// The tokens/values in the file
    
			// Separation between values is 1 or more whitespaces
    
			var tokens = this.result.split(/\s\s*/);
    
			// Array of values; each value is a string
			
			var numVertices = parseInt( tokens[0] );
			
			// For every vertex we have 6 floating point values
			
			var i, j;
			
			var aux = 1;
			
			var newVertices = [];
			
			var newColors = []
			
			for( i = 0; i < numVertices ; i++ ) {
			
				for( j = 0; j < 3; j++ ) {
					
					newVertices[ 3 * i + j ] = parseFloat( tokens[ aux++ ] );
				}
				
				for( j = 0; j < 3; j++ ) {
					
					newColors[ 3 * i + j ] = parseFloat( tokens[ aux++ ] );
				}
			}
					
			// Assigning to the current model
			
			vertices = newVertices;
			
			colors = newColors;
			
			// Rendering the model just read
		
			initBuffers();

			
			drawScene();
		
		};
		
		// Entire file read as a string
			
		reader.readAsText( file );		
	};


	// Button events
	document.getElementById("figura1").onclick = function(){
		figura1_on = 1;
		document.getElementById("move-left-button").onclick = function(){			
			// Updating		
			tx1 -= 0.1;		
			// Render the viewport		
			drawScene();  
		};

		document.getElementById("move-right-button").onclick = function(){		
			// Updating		
			tx1 += 0.1;		
			// Render the viewport				
			drawScene();  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			ty1 += 0.1;		
			// Render the viewport			
			drawScene();  
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating		
			ty1 -= 0.1;		
			// Render the viewport	
			drawScene();  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ1 -= 30;			
			// Render the viewport			
			drawScene();  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ1 += 30;				
			// Render the viewport				
			drawScene();  
		};
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX1 -= 30.0;			
			// Render the viewport				
			drawScene();  
		};

		$("rotate-xx2-up").click(function(){
	   		// Updating			
			gl.angleXX1 -= 30.0;			
			// Render the viewport				
			gl.drawScene(); 
	  	});

		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX1 += 30.0;				
			// Render the viewport
			drawScene();  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY1 += 30.0;		
			// Render the viewport	
			drawScene();  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY1 -= 30.0;		
			// Render the viewport
			drawScene();  
		};


		document.getElementById("move-front-button").onclick = function(){
			
			// Updating
			tz1 += 0.25;			
			// Render the viewport
			drawScene();  
		};      

		document.getElementById("move-back-button").onclick = function(){
			
			// Updating
			tz1 -= 0.25;
			// Render the viewport
			drawScene();  
		};      
	};
	document.getElementById("figura2").onclick = function(){
		figura2_on = 1;
		document.getElementById("move-left-button").onclick = function(){			
			// Updating		
			tx2 -= 0.1;		
			// Render the viewport		
			drawScene();  
		};

		document.getElementById("move-right-button").onclick = function(){		
			// Updating		
			tx2 += 0.1;		
			// Render the viewport				
			drawScene();  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			ty2 += 0.1;		
			// Render the viewport			
			drawScene();  
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating		
			ty2 -= 0.1;		
			// Render the viewport	
			drawScene();  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ2 -= 30;			
			// Render the viewport			
			drawScene();  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ2 += 30;				
			// Render the viewport				
			drawScene();  
		};
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX2 -= 30.0;			
			// Render the viewport				
			drawScene();  
		};

		$("rotate-xx2-up").click(function(){
	   		// Updating			
			gl.angleXX2 -= 30.0;			
			// Render the viewport				
			gl.drawScene(); 
	  	});

		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX2 += 30.0;				
			// Render the viewport
			drawScene();  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY2 += 30.0;		
			// Render the viewport	
			drawScene();  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY2 -= 30.0;		
			// Render the viewport
			drawScene();  
		};


		document.getElementById("move-front-button").onclick = function(){
			
			// Updating
			tz2 += 0.25;			
			// Render the viewport
			drawScene();  
		};      

		document.getElementById("move-back-button").onclick = function(){
			
			// Updating
			tz2 -= 0.25;
			// Render the viewport
			drawScene();  
		};   
	};
	
	document.getElementById("reset-button").onclick = function(){		
		// The initial values 
		tx1 = -0.5;
		ty1 = 0.0; 
		tz1 = 0.0;
		angleXX1 = 0.0;
		angleYY1 = 0.0;
		angleZZ1 = 0.0;  
		tx2 = 0.0;
		ty2 = 0.0; 
		tz2 = 0.0;
		angleXX2 = 0.0;
		angleYY2 = 0.0;
		angleZZ2 = 0.0;   	
		// Render the viewport		
		drawScene();  
	};      
 

	document.getElementById("face-culling-button").onclick = function(){
		
		if( gl.isEnabled( gl.CULL_FACE ) )
		{
			gl.disable( gl.CULL_FACE );
		}
		else
		{
			gl.enable( gl.CULL_FACE );
		}
	};      

}

//----------------------------------------------------------------------------
//
// WebGL Background (A tentar rodar o background!! - TODO)
//



//----------------------------------------------------------------------------
//
// WebGL Initialization
//

function initWebGL( canvas ) {
	try {
		
		// Create the WebGL context
		
		// Some browsers still need "experimental-webgl"
		
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		
		// DEFAULT: The viewport occupies the whole canvas 
		
		// DEFAULT: The viewport background color is WHITE
		
		// NEW - Drawing the triangles defining the model
		
		primitiveType = gl.TRIANGLES;
		
		// DEFAULT: Face culling is DISABLED
		
		// Enable FACE CULLING
		
		gl.enable( gl.CULL_FACE );
		
		// DEFAULT: The BACK FACE is culled!!
		
		// The next instruction is not needed...
		
		gl.cullFace( gl.BACK );
        
	} catch (e) {
	}
	if (!gl) {
		alert("Error");
	}        
}

//----------------------------------------------------------------------------

function runWebGL() {
	
	var canvas = document.getElementById("my-canvas");
	
	initWebGL( canvas );

	//var result = test33("figuras/back.txt");
	shaderProgram = initShaders( gl );
	
	setEventListeners();
	
	initBuffers();
	//initBkgnd();
    //drawBkgnd();

	canvas.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
	
	tick();		// NEW --- A timer controls the rendering / animation    

	outputInfos();
}


