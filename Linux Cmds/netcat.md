[nc] -- Used to send and receive data over TCP/UDP connections.
![[Pasted image 20250127135007.png]]


server that listens to incoming packets: [nc] -l PORT

to connect to sercver as a client [nc] host port 

Start listener on a port: 
[nc]-lvp -port

Connect to a listener with: 
nc <host> <port>

Write executable script: 
#!/bin/bash echo "This is my response" | nc -lvp 12345

Make script executable
chmod +x myscript.sh