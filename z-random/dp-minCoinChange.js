// brute force solution, however, won't work for 135 [1, 4, 60, 75, 130]
function minNumberOfCoinsForChange(n, demons) {
	console.log(minNumberOfCoinsForChange2(24, [1, 2, 4, 9]));
	return (minNumberOfCoinsForChange2(n, demons)); 
}
function minNumberOfCoinsForChange2(n, denoms) {
  // Write your code here.
	if (n === 0) return 0;
	
	let remain = n;
	console.log('outside', remain);
	let totalCoins = 0;
	let sorted = denoms.sort((a, b) => a - b);
	let i = sorted.length - 1;
	let temp = Infinity;
	
	while (remain > 0 && i >= 0) {
		console.log('begin', totalCoins);
		if (n % sorted[i] === 0) {
			temp = Math.min(temp, Math.floor(n / sorted[i]));
		}
		if (remain % sorted[i] === 0) {
			console.log('here', totalCoins);
			totalCoins += Math.floor(remain / sorted[i]);
			remain = remain % sorted[i];
		} else {
			if (remain > sorted[i]) {
				totalCoins += Math.floor(remain / sorted[i]);
				remain = remain % sorted[i];
			}
		}
		i--;
	}
	
	const final = (totalCoins === 0) ? -1 : totalCoins;
	
	const tempAgain = (temp === Infinity) ? -1 : temp;
	
	const result = (remain > 0) ? tempAgain : final;
	return result;
}

