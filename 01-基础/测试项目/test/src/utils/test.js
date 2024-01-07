function fn(a) {
	console.log(a);
	var a = 123;
	console.log(a);
	function a() { }
	console.log(a);
	var b = function () { }
	console.log(b);
	function d() { }
}
fn(1)