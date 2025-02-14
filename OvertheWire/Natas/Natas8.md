
1. View source Code 
	 ![[image-7 1.png|449x441]]

Analyze What is happening with the code:  
	--> Text was converted to base64, reversed, then converted into hex. 
	base64_encode. (Encoded IN base64)
	strrev is the reversal of the string 
	bin2hex converts it to hex 
		>			Steps:  decode from base64, reverse and then concert hex to binary. 
     <echo " " | basde -d | rev | (hex --> binary?)
     ![[image-3 1.png|497x255]]
 <echo " " | base64 -d | rev | xxd -r 
![[image-4 1.png|533x73]]
3.Use compiler to help solve: 
	
	https://www.w3schools.com/php/phptryit.asp?filename=tryphp_compiler
		##compiler 
![[image-5 1.png|700x161]]![[image-6 1.png]]
Now If you followed the correct **reversal process**:
1. **hex2bin()** - Convert the hex string back to binary.
2. **strrev()** - Reverse the string.
3. **base64_decode()** - Decode the Base64-encoded string.

[[bin2hex]]
[[hex2bin]]
[[echo]]
[[base64]]
ZE1ck82lmdGIoErlhQgWND6j2Wzz6b6t




walkthrough if needed later: https://greenorangge1.medium.com/overthewire-natas-level-8-c65b3b5af7e6