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

var shaderProgram_back = null;

var triangleVertexPositionBuffer = null;
	
var triangleVertexColorBuffer = null;

var cubeVertexTextureCoordBuffer;

// The GLOBAL transformation parameters

var globalTz = 0.0;

// The local transformation parameters

// The translation vector
var figura1_on = 0;
var figura2_on = 0;

var background = 0;

//back
var tx_back = 0.0;

var ty_back = 0.0;

var tz_back = 0.0;

var angleXX_back = 0.0;

var angleYY_back = 0.0;

var angleZZ_back = 0.0;

var sx_back = 0.25;

var sy_back = 0.25;

var sz_back = 0.25;


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


var primitiveType = null;
 
// To allow choosing the projection type

var projectionType = 1;
 
// For storing the vertices defining the triangles

var vertices_back = verticesBack();
// Texture coordinates for the quadrangular faces

var textureCoords = textCoord();
       
var cubeVertexIndices = cubeVertexIndex();

var VBuffer;
var vTBuffer; 

var vertices = ver();
// And their colour

var colors = colors();

//----------------------------------------------------------------------------
//
// The WebGL code
//

// Handling the Vertex and the Color Buffers

function handleLoadedTexture(texture) {
	
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.bindTexture(gl.TEXTURE_2D, null);
}

var webGLTexture;

function initTexture() {
	
	webGLTexture = gl.createTexture();
	webGLTexture.image = new Image();
	webGLTexture.image.onload = function () {
		handleLoadedTexture(webGLTexture)
	}

	webGLTexture.image.src = "table.jpg";
}

function initBuffers() {	
	
	if(background == 0){
    // Coordinates
    	//gl.useProgram(shaderProgram);
	 	triangleVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		triangleVertexPositionBuffer.itemSize = 3;
		triangleVertexPositionBuffer.numItems = vertices.length / 3;
  	}

	if(background == 1){
	 	gl.useProgram(shaderProgram_back);	
		cubeVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_back), gl.STATIC_DRAW);
		cubeVertexPositionBuffer.itemSize = 3;
		cubeVertexPositionBuffer.numItems = vertices_back.length / 3;			

		// Textures
			
	    cubeVertexTextureCoordBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
	 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	    cubeVertexTextureCoordBuffer.itemSize = 2;
	    cubeVertexTextureCoordBuffer.numItems = 24;			

		// Vertex indices
		
	    cubeVertexIndexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	    cubeVertexIndexBuffer.itemSize = 1;
	    cubeVertexIndexBuffer.numItems = 36;
	}

  	if(background == 0) {
  		// Associating to the vertex shader
  		gl.useProgram(shaderProgram);
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

	gl.enable(gl.DEPTH_TEST);
}

//----------------------------------------------------------------------------
//  Drawing the model

function drawModel( angleXX, angleYY, angleZZ, 
					sx, sy, sz,
					tx, ty, tz,
					mvMatrix,
					primitiveType, back ) {

    mvMatrix = mult(mvMatrix, translationMatrix(tx, ty, tz));
	mvMatrix = mult(mvMatrix, rotationZZMatrix(angleZZ));
	mvMatrix = mult(mvMatrix, rotationYYMatrix(angleYY));
	mvMatrix = mult(mvMatrix, rotationXXMatrix(angleXX));
	mvMatrix = mult(mvMatrix, scalingMatrix(sx, sy, sz));

  	if(!back){
  		
		gl.useProgram(shaderProgram);
		var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	  	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));

	  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexPositionBuffer);
    	this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute,
                          			this.triangleVertexPositionBuffer.itemSize,
                          			this.gl.FLOAT, false, 0, 0);

    	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexColorBuffer);

    	this.gl.vertexAttribPointer(this.shaderProgram.vertexColorAttribute,
                                this.triangleVertexColorBuffer.itemSize,
                                this.gl.FLOAT, false, 0, 0);
   		this.gl.drawArrays(this.gl.TRIANGLES, 0, this.triangleVertexPositionBuffer.numItems);
  	}
  	else
  	{
  		gl.useProgram(shaderProgram_back);
		var mvUniform = gl.getUniformLocation(shaderProgram_back, "uMVMatrix");

	  	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));

	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);

	    gl.vertexAttribPointer(shaderProgram_back.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
	    gl.vertexAttribPointer(shaderProgram_back.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	    gl.activeTexture(gl.TEXTURE0);
	    gl.bindTexture(gl.TEXTURE_2D, webGLTexture);

	    gl.uniform1i(shaderProgram_back.samplerUniform, 0);

	    // The vertex indices

	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

		gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
  	}		
}

//----------------------------------------------------------------------------

//  Drawing the 3D scene

function drawScene() {
	
	var pMatrix;
	
	var mvMatrix = mat4();

	var mvMatrix2 = mat4();

	var mvMatrix_back = mat4();
	
	// Clearing the frame-buffer and the depth-buffer
		
	// Computing the Projection Matrix
	// Não está a ser usada
	if( projectionType == 0 ) {
		
		// For now, the default orthogonal view volume
		
		pMatrix = ortho( -1.0, 1.0, -1.0, 1.0, -1.0, 1.0 );
		
		// Global transformation !!
		
		globalTz = 0;

	}
	else {	

		pMatrix = perspective( 45, 1, 0.05, 15 );
		
		// Global transformation !!
		
		globalTz = -2.5;

	}
		gl.useProgram(shaderProgram);
		var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	
		gl.uniformMatrix4fv(pUniform, false, new Float32Array(flatten(pMatrix)));
	
		mvMatrix = translationMatrix( 0, 0, globalTz);

		mvMatrix2 = translationMatrix( 0, 0, globalTz );

		drawModel( angleXX1, angleYY1, angleZZ1,  // CW rotations
		           sx1, sy1, sz1,
		           tx1, ty1, tz1,
		           mvMatrix2,
		           primitiveType, false  );
			
		drawModel( angleXX2, angleYY2, angleZZ2, 
		           sx2, sy2, sz2,
		           tx2, ty2, tz2,
		           mvMatrix,
		           primitiveType, false );
		//background = 1;

		gl.useProgram(shaderProgram_back);
		var pUniform1 = gl.getUniformLocation(shaderProgram_back, "uPMatrix");
	
		gl.uniformMatrix4fv(pUniform1, false, new Float32Array(flatten(pMatrix)));

		mvMatrix_back = translationMatrix(0,0,globalTz);

		drawModel( angleXX_back, angleYY_back, angleZZ_back, 
		           sx_back, sy_back, sz_back,
		           tx_back, ty_back, tz_back,
		           mvMatrix_back,
		           primitiveType, true );
		//background = 0;
	
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

    angleXX1 += radians(10 * deltaY);
    angleYY1 +=  radians(10 * deltaX);
    angleXX2 += radians(10 * deltaY);
    angleYY2 +=  radians(10 * deltaX);
    angleXX_back += radians(10 * deltaY);
    angleYY_back += radians(10 * deltaX);

    drawScene();  

    lastMouseX = newX;
    lastMouseY = newY;
}


function setEventListeners(){

	document.getElementById("file").onchange = function(){

		var fullPath = document.getElementById('file').value;

		if (fullPath) {
		    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
		    var filename = fullPath.substring(startIndex);
		    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		        filename = filename.substring(1);
		    }
		}

		var file = this.files[0];
		
		var reader = new FileReader();
		
		reader.onload = function( progressEvent ){
			
			// Entire file read as a string
			
			// The tokens/values in the file
    
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
		
			initBuffers();
			drawScene();
		
		};
		
		// Entire file read as a string
			
		reader.readAsText( file );		
	};


	// Button events
	document.getElementById("figura1").onclick = function(){
		figura1_on = 1;
		figura2_on = 0;
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
		figura1_on = 0;
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
// WebGL Initialization
//

function initWebGL( canvas ) {
	try {
		
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		
		primitiveType = gl.TRIANGLES;
		
		gl.enable( gl.CULL_FACE );
		
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

		shaderProgram = initShaders( gl, 0 );
		
		
		initBuffers();

		background = 1;
		shaderProgram_back = initShaders( gl, 1 );

		initBuffers();

		initTexture();	

	setEventListeners();

	canvas.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
	tick();

	outputInfos();
}