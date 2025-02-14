![[image-10 1.png|436x271]]
      `1. Recieves input from needle
      `2. `Blocks: ; & |`
      `3. Passes input to grep cmmd`
	       `the dictionary.txt file is being read first.. we need to trick it into reading the passwd file`
	   ![[image-11.png]]

	`If there is a common letter it will print both`

```

```
https://github.com/payloadbox/command-injection-payload-list

	*&& didn't work.* 
			*Tried: ls /etc/natas_webpass/natas11 which didn't break out of grep.* 



`Theory: need to break out of grep so that we can stop searching the dictionary.txt file? No, we need something that searches both that and password files! 
		`grep – executes /bin/grep`
		`-i – Perform case insensitive matching.  
		`$key – Our user controllable parameter  
		`dictionary.txt – the file to search`

`Tips from chatgpt: try $(), backslash(`), or output redirection' --> DIDN'T WORK!`

`Grep searches any given files including the dictionary and passwd files so search for something in both.. 
	https://staff.washington.edu/weller/grep.html
	https://quickref.me/grep.html
	![[image-8 1.png|374x591]]

[a] /etc/natas_webpass/natas11 
![[image-7 1.png|499x338]]

natas11 
UJdqkK1pTu6VLt9UHWAgRZz6sVUZ3lEk






`blue team cyberanalyst ARA 108K with conditon of cert haldway thru bacehlors. Pulling string to get job. in Penn. job in virginina. studying for CISA


contracting engineering or soemthing. San antonio-> ARS epass AIMEE