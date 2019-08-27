
console.log("Ancestro Comun Mas Cercano");

const node = arrayToTree([67,39,76,28,44,74,85,29,83,87]);

/*


                                                      //                  67
	                                                 //            /             \
	                                                //       39                          76
                                                   //     /      \                   /       \
                                                  //   28         44               74         85
                                                 //  /                                      /   \
                                                //  29                                    83     87 		                            
*/

console.log(node);


let LCA = (root, n1, n2) => {
	if (!root) return null;

	if (root.value === n1 || root.value === n2) return root.value;

	let left  = LCA(root.left, n1, n2);
	let right = LCA(root.right,n1, n2);

	if(left && right) return root.value;

	return left ? left : right;
}

console.log(LCA(node, 29, 44));  // 39

console.log(LCA(node, 44, 85));  // 67

console.log(LCA(node, 83, 87));  // 85



