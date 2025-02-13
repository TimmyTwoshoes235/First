used to identify which ports are open & listening on local host 

nmap -p <port ranges> localhost


1. nmap -v -A -T4 -p 31000-32000 localhost_

The -A option in the command allows us to detect the OS, version detection or if there are any scripts running and -v increases the verbosity. The output was as following:

