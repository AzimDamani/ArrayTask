


function moveZeroLeft(arr, n){
	const narr = [];
	let cnt = 0;
	for(let i of arr){
		if(i === 0){
			cnt++;
		}
	}
	while(cnt > 0){
		narr.push(0);
        cnt--;
	}
	for(let i of arr){
		if(i !== 0){
			narr.push(i);
		}
	}

	console.log(narr);
}

function meth2(arr , n){
	console.log(arr.sort());
}

const arr = [3,1,0,3,4,0,0];
meth2(arr, 6);