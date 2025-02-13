[[openSSL]]-sending your password to a specific port 


cat /etc/bandit_pass/bandit15 | openssl s_client -connect localhost:PORT -ign_eof   -quiet

