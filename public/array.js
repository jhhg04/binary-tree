// Covertir Arreglo en Arbol

const arrayToTree = (array, indx = 0) => {

	// Si indice esta fuera de rango
	if(indx > array.length) return;

	// Indices para los nodos hijos
	const left  = (indx * 2) + 1,
		  right = left + 1;
		   
	// Retorna Objeto con valores del Arbol
	return {
		value: array[indx],

		left: arrayToTree(array, left),

		right: arrayToTree(array, right)
	}	  

}

