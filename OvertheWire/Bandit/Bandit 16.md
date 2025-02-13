1.Run the following SSH command to log into **Bandit 16**:
		`ssh -p 2220 bandit16@bandit.labs.overthewire.org`
1.
Find Open Ports**

	Use `nmap` to scan for open ports **between 31000-32000**:
		`nmap -p 31000-32000 localhost`
1 For each open port found in **Step 2**, check if it supports **SSL/TLS**:

openssl s_client -connect localhost:PORT

control c

4. Once you find the correct **SSL-enabled port**, send the **Level 16 password**:


cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:<PORT> -quiet

5. Copy the **RSA Private Key** and save it in a file:

nano /tmp/mar/bandit17.key
mkdir /tmp/mar/

chmod 600 the above

==ssh -i /tmp/mar/bandit17.key -p 2220 bandit17@localhost==



