
/* Vertex and Colors required for the game */

function vertices_cubo() {
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
return vertices;

}

function colors_cubo(){
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

	return colors;
}


function verticesPiramideQuadrangular(){
	var vertices = [
		-0.25, -0.25, -0.25,
		 0.25, -0.25, -0.25,
		 0.25, -0.25,  0.25,

		 0.25, -0.25,  0.25,
		-0.25, -0.25,  0.25,
		-0.25, -0.25, -0.25,

 		-0.25, -0.25,  0.25,
		 0.25, -0.25,  0.25,
		 0.0,  0.25,  0.0,
 	
 		 0.25, -0.25,  0.25, 		
 		 0.25, -0.25, -0.25,  	
 		 0.0,   0.25,  0.0,  	

 		 0.25, -0.25, -0.25, 		
 	    -0.25, -0.25, -0.25, 	
 		 0.0,   0.25,  0.0,  	

 	    -0.25, -0.25,  0.25, 	
 		 0.0,   0.25, -0.0,  	
 	    -0.25, -0.25, -0.25,  	
	];
	return vertices;
}

function colorsPiramideQuandrangular(){
	var colors = [ 
		0.941176, 0.501961, 0.501961,
		0.941176, 0.501961, 0.501961,
		0.941176, 0.501961, 0.501961,

		0.941176, 0.501961, 0.501961,
		0.941176, 0.501961, 0.501961,
		0.941176, 0.501961, 0.501961,

		1.00,  0.00,  0.00,
		1.00,  0.00,  0.00,
		1.00,  0.00,  0.00,

		0.698039, 0.133333, 0.133333,
		0.698039, 0.133333, 0.133333,
		0.698039, 0.133333, 0.133333,

		1.0, 1.0, 0.235294,
		1.0, 1.0, 0.235294,
		1.0, 1.0, 0.235294,

		0.862745, 0.0784314, 0.235294,
		0.862745, 0.0784314, 0.235294,
		0.862745, 0.0784314, 0.235294,

	];
	return colors
}

function verticesStar(){
	var vertices = [
		-0.1, -0.1,  0.1,
		 0.1, -0.1,  0.1,
		 0.1,  0.1,  0.1,

		 0.1,  0.1,  0.1,
		-0.1,  0.1,  0.1,
		-0.1, -0.1,  0.1,
		
		// TOP FACE
		
		-0.1,  0.1,  0.1,
		 0.1,  0.1,  0.1,
		 0.1,  0.1, -0.1,

		 
		 0.1,  0.1, -0.1,
		-0.1,  0.1, -0.1,
		-0.1,  0.1,  0.1,
		
		// BOTTOM FACE 
		
		-0.1, -0.1, -0.1,
		 0.1, -0.1, -0.1,
		 0.1, -0.1,  0.1,

		 
		 0.1, -0.1,  0.1,
		-0.1, -0.1,  0.1,
		-0.1, -0.1, -0.1,
		
		// LEFT FACE 
		
		-0.1,  0.1,  0.1,
		-0.1, -0.1, -0.1,
		-0.1, -0.1,  0.1,
		 
		 
		-0.1,  0.1,  0.1,
		-0.1,  0.1, -0.1,
		-0.1, -0.1, -0.1,
		
		// RIGHT FACE 
		
		 0.1,  0.1, -0.1,
		 0.1, -0.1,  0.1,
		 0.1, -0.1, -0.1,
		 
		 
		 0.1,  0.1, -0.1,
		 0.1,  0.1,  0.1,
		 0.1, -0.1,  0.1,
		
		// BACK FACE 
		
		-0.1,  0.1, -0.1,
		 0.1, -0.1, -0.1,
		-0.1, -0.1, -0.1,
		 
		 
		-0.1,  0.1, -0.1,
		 0.1,  0.1, -0.1,
		 0.1, -0.1, -0.1,

		 -0.1,  0.1,  0.1,
		 0.1,  0.1,  0.1,
		 0.0,  0.3,  0.0,

		 0.1,  0.1,  0.1,
		 0.1,  0.1, -0.1,
		 0.0, 0.3, 0.0,

		 -0.1,  0.1, -0.1,
		 -0.1,  0.1,  0.1,
		 0.0, 0.3, 0.0,

		 0.1,  0.1, -0.1,
		 -0.1,  0.1,-0.1,
		 0.0, 0.3, 0.0,

		 0.1,  -0.1, 0.1,
		 -0.1, -0.1, 0.1,
		 0.0,  -0.3, 0.0,

		 0.1, -0.1, -0.1,
		 0.1, -0.1, 0.1,
		 0.0, -0.3, 0.0,

		 -0.1,  -0.1, 0.1,
		 -0.1,  -0.1, -0.1,
		  0.0, -0.3, 0.0,

		 -0.1,  -0.1,-0.1,
		 0.1,  -0.1, -0.1,		 
		 0.0, -0.3, 0.0,

		 0.1, 0.1, 0.1,
		 0.1, -0.1, 0.1,
		 0.3, 0.0, 0.0,

		 0.1, 0.1, -0.1,
		 0.1, 0.1, 0.1,
		 0.3, 0.0, 0.0,

		 0.1, -0.1, -0.1,
		 0.1, 0.1, -0.1,
		 0.3, 0.0, 0.0,

		 0.1, -0.1, 0.1,
		 0.1, -0.1, -0.1,
		 0.3, 0.0, 0.0,

		 -0.1,-0.1,0.1,
		 -0.1,0.1,0.1,
		 -0.3, 0.0, 0.0,

		 -0.1,0.1,0.1,
		 -0.1,0.1,-0.1,
		 -0.3,0.0,0.0,

		 -0.1,0.1,-0.1,
		 -0.1,-0.1,-0.1,
		 -0.3,0.0,0.0,

		 -0.1,-0.1,-0.1,
		 -0.1,-0.1,0.1,
		 -0.3,0.0,0.0,
	];
	return vertices;
}

function colorsStar(){
	var colors = [
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,

		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
		1.00, 1.00, 0.00,
	];

	return colors;
}

function verticesParalelipipedo(){
var vertices = [	
		// FRONT FACE
		-0.35, -0.2,  0.2,
		 0.25, -0.2,  0.2,
		 0.25,  0.2,  0.2,
		 
		 0.25,  0.2,  0.2,
		-0.35,  0.2,  0.2,
		-0.35, -0.2,  0.2,
		
		// TOP FACE
		-0.35,  0.2,  0.2,
		 0.25,  0.2,  0.2,
		 0.25,  0.2, -0.2,

		 0.25,  0.2, -0.2,
		-0.35,  0.2, -0.2,
		-0.35,  0.2,  0.2,
		
		// BOTTOM FACE 		
		-0.35, -0.2, -0.2,
		 0.25, -0.2, -0.2,
		 0.25, -0.2,  0.2,

		 
		 0.25, -0.2,  0.2,
		-0.35, -0.2,  0.2,
		-0.35, -0.2, -0.2,
		// LEFT FACE 
		
		-0.35,  0.2,  0.2,
		-0.35, -0.2, -0.2,
		-0.35, -0.2,  0.2,
		 
		-0.35,  0.2,  0.2,
		-0.35,  0.2, -0.2,
		-0.35, -0.2, -0.2,
		
		// RIGHT FACE 
		 0.25,  0.2, -0.2,
		 0.25, -0.2,  0.2,
		 0.25, -0.2, -0.2,
		 
		 0.25,  0.2, -0.2,
		 0.25,  0.2,  0.2,
		 0.25, -0.2,  0.2,
		
		// BACK FACE 
		-0.35,  0.2, -0.2,
		 0.25, -0.2, -0.2,
		-0.35, -0.2, -0.2,
		 
		-0.35,  0.2, -0.2,
		 0.25,  0.2, -0.2,
		 0.25, -0.2, -0.2,			 
];
return vertices;

}

function colorsParalelipipedo(){
	var colors = [
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,

		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
		0.698039, 0.333333, 0.033333,
	];

	return colors;
}

function verticesPiramideVerde(){
	var vertices = [
		-0.45, -0.45, -0.45,
		 0.45, -0.45, -0.45,
		 0.45, -0.45,  0.45,
		 
		 0.45, -0.45,  0.45,
		-0.45, -0.45,  0.45,
		-0.45, -0.45, -0.45,

 		-0.45, -0.45,  0.45,
		 0.45, -0.45,  0.45,
		 0.0,  0.55,  0.0,
 	
 		 0.45, -0.45,  0.45, 		
 		 0.45, -0.45, -0.45,  	
 		 0.0,   0.55,  0.0,  	

 		 0.45, -0.45, -0.45, 		
 	    -0.45, -0.45, -0.45, 	
 		 0.0,   0.55,  0.0,  	

 	    -0.45, -0.45,  0.45, 	
 		 0.0,   0.55, 0.0,  	
 	    -0.45, -0.45, -0.45,  	
	];
	return vertices;
}

function colorsPiramideQuandrangularVerde(){
	var colors = [
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,

		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,

		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,

		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,

		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,

		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
		0.00, 1.00, 0.00,
	];
	return colors
}


function verticesBack() {
	var vertices_back = [
	    -9.0, -9.0,  -4.0,
	     9.0, -9.0,  -4.0,
	     9.0,  9.0,  -4.0,
	    -9.0,  9.0,  -4.0,
	];
	return vertices_back;
}

function textCoord(){
	var textureCoords = [
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
	];
	return textureCoords;
}

function cubeVertexIndex(){
	var cubeVertexIndices = [
    	0, 1, 2,      0, 2, 3	// 2D
	];
	return cubeVertexIndices;
}	