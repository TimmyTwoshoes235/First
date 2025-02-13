#SSL: [[openSSL]] Secure Sockets Layer. 
      Protocol that encrypts data
      Check if it communicates over SSL/TLS using openssl. 


  openssl s_client -connect localhost:PORT -ign_eof
  

listening: map localhost -p 31000-32000 

syntax: 
openssl s_client -connect localhost:port -quiet

Send current password, pipe it, to these ports: 
cat /etc/bandit_pass/bandit15 | openssl s_client -connect localhost:PORT -ign_eof    (-quiet?)

Standard output--> tmp directory

https://docs.google.com/document/d/1lKOzPCGTnh90tp3iQo1uU3bNWt-jx0mbMDxoYiDFhSE/edit?usp=sharing

