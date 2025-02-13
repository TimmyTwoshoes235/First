Jan 23 
![[Pasted image 20250123132030.png]]
![[Pasted image 20250123101719.png]]
ARP: Address resolution protocol 
	Would get the MAC address (hardware address) 
ICMP: internet control message protocol 
TCP/UDP: 
![[Pasted image 20250123101831.png]]
Network segment: group of computer connectd (ie by wifi or ethernet)

Subnetwork: computers connected to router 
	Or subnet. own ip address. 
![[Pasted image 20250123103950.png]]


"ARP packet are bound to their subnet"
![[Pasted image 20250123104702.png]]

![[Pasted image 20250123105120.png]]

![[Pasted image 20250123105300.png]]TCP: transmission control protocol 
SMTP: simple mail transfer protocol 
TTL: Time to Live 
ICMP: Internet control message protocol 
UDP: user datagram protocol 


![[Pasted image 20250123105526.png]]


![[Pasted image 20250123111957.png]]

![[Pasted image 20250123112219.png]]





Talking about ARP scans, we should mention a scanner built around ARP queries: `arp-scan`; it provides many options to customize your scan. Visit the [arp-scan wiki](http://www.royhills.co.uk/wiki/index.php/Main_Page) for detailed information. One popular choice is `arp-scan --localnet` or simply `arp-scan -l`. This command will send ARPqueries to all valid IP addresses on your local networks. Moreover, if your system has more than one interface and you are interested in discovering the live hosts on one of them, you can specify the interface using `-I`. For instance, `sudo arp-scan -I eth0 -l` will send ARP queries for all valid IP addresses on the `eth0` interface.

Note that `arp-scan` is not installed on the AttackBox; however, it can be installed using `apt install arp-scan`.  

In the example below, we scanned the subnet of the AttackBox using `arp-scan ATTACKBOX_IP/24`. Since we ran this scan at a time frame close to the previous one `nmap -PR -sn ATTACKBOX_IP/24`, we obtained the same three live targets.



`nmap -PE -sn MACHINE_IP/24



![[Pasted image 20250123114301.png]]




nmap -PM -sn MACHINE_IP/24

-PS  Tells NMAP ICMP address mask 
-PE uses echo to find LIVE hosts 
-TCP SYN ping, you can do so via the option 
`-PM  Nmap uses address mask queries (ICMP Type 17) and checks whether it gets an address mask reply (ICMP Type 18). This scan can be enabled with the option `-PM`. As shown in the figure below, live hosts are expected to reply to ICMP address mask requests.

![](https://tryhackme-images.s3.amazonaws.com/user-uploads/5f04259cf9bf5b57aed2c476/room-content/14c31c66e002e2f50b0f8525c8d8e456.png)

In an attempt to discover live hosts using ICMP address mask queries, we run the command `nmap -PM -sn MACHINE_IP/24`.
-`nmap -PS -sn MACHINE_IP/24` 


TCP ACK Ping privledfge access

![[Pasted image 20250123115953.png]]




![[Pasted image 20250123120530.png]]



|Scan Type|Example Command|
|---|---|
|ARP Scan|`sudo nmap -PR -sn MACHINE_IP/24`|
|ICMP Echo Scan|`sudo nmap -PE -sn MACHINE_IP/24`|
|ICMP Timestamp Scan|`sudo nmap -PP -sn MACHINE_IP/24`|
|ICMP Address Mask Scan|`sudo nmap -PM -sn MACHINE_IP/24`|
|TCP SYN Ping Scan|`sudo nmap -PS22,80,443 -sn MACHINE_IP/30`|
|TCP ACK Ping Scan|`sudo nmap -PA22,80,443 -sn MACHINE_IP/30`|
|UDP Ping Scan|`sudo nmap -PU53,161,162 -sn MACHINE_IP/30`|

Remember to add `-sn` if you are only interested in host discovery without port-scanning. Omitting `-sn` will let Nmap default to port-scanning the live hosts.

|Option|Purpose|
|---|---|
|`-n`|no DNS lookup|
|`-R`|reverse-DNS lookup for all hosts|
|`-sn`|host discovery only|

|Scan Type|Example Command|
|---|---|
|ARP Scan|`sudo nmap -PR -sn MACHINE_IP/24`|
|ICMP Echo Scan|`sudo nmap -PE -sn MACHINE_IP/24`|
|ICMP Timestamp Scan|`sudo nmap -PP -sn MACHINE_IP/24`|
|ICMP Address Mask Scan|`sudo nmap -PM -sn MACHINE_IP/24`|
|TCP SYN Ping Scan|`sudo nmap -PS22,80,443 -sn MACHINE_IP/30`|
|TCP ACK Ping Scan|`sudo nmap -PA22,80,443 -sn MACHINE_IP/30`|
|UDP Ping Scan|`sudo nmap -PU53,161,162 -sn MACHINE_IP/30`|

Remember to add `-sn` if you are only interested in host discovery without port-scanning. Omitting `-sn` will let Nmap default to port-scanning the live hosts.

|Option|Purpose|
|---|---|
|`-n`|no DNS lookup|
|`-R`|reverse-DNS lookup for all hosts|
|`-sn`|host discovery only|



At the risk of oversimplification, we can classify ports in two states:

1. Open port indicates that there is some service listening on that port.
2. Closed port indicates that there is no service listening on that port.

However, in practical situations, we need to consider the impact of firewalls. For instance, a port might be open, but a firewall might be blocking the packets. Therefore, Nmap considers the following six states:

1. **Open**: indicates that a service is listening on the specified port.
2. **Closed**: indicates that no service is listening on the specified port, although the port is accessible. By accessible, we mean that it is reachable and is not blocked by a firewall or other security appliances/programs.
3. **Filtered**: means that Nmap cannot determine if the port is open or closed because the port is not accessible. This state is usually due to a firewall preventing Nmap from reaching that port. Nmap’s packets may be blocked from reaching the port; alternatively, the responses are blocked from reaching Nmap’s host.
4. **Unfiltered**: means that Nmap cannot determine if the port is open or closed, although the port is accessible. This state is encountered when using an ACK scan `-sA`.
5. **Open|Filtered**: This means that Nmap cannot determine whether the port is open or filtered.
6. **Closed|Filtered**: This means that Nmap cannot decide whether a port is closed or filtered.






TCP flags: Setting a flag bit means setting its value to 1. 

1. **URG**: Urgent flag indicates that the urgent pointer filed is significant. The urgent pointer indicates that the incoming data is urgent, and that a TCP segment with the URG flag set is processed immediately without consideration of having to wait on previously sent TCPsegments.
2. **ACK**: Acknowledgement flag indicates that the acknowledgement number is significant. It is used to acknowledge the receipt of a TCP segment.
3. **PSH**: Push flag asking TCP to pass the data to the application promptly.
4. **RST**: Reset flag is used to reset the connection. Another device, such as a firewall, might send it to tear a TCP connection. This flag is also used when data is sent to a host and there is no service on the receiving end to answer.
5. **SYN**: Synchronize flag is used to initiate a TCP 3-way handshake and synchronize sequence numbers with the other host. The sequence number should be set randomly during TCPconnection establishment.
6. **FIN**: The sender has no more data to send.





### **Port Scanning with Nmap**

1. **Specify Ports to Scan:**
    - **List Specific Ports**: `-p22,80,443` (scans ports 22, 80, and 443).
    - **Range of Ports**: `-p1-1023` (scans ports 1 to 1023).
    - **All Ports**: `-p-` (scans all 65,535 ports).
    - **Common Ports**:
        - `-F` (top 100 ports).
        - `--top-ports <number>` (e.g., `--top-ports 10` for the 10 most common).
2. **Control Scan Speed (Timing Templates):**
    - **Templates** (`-T0` to `-T5`):
        - `T0`: Slowest (stealthy, avoids IDS).
        - `T3`: Default (normal speed).
        - `T5`: Fastest (aggressive, less accurate).
    - **Common Use Cases**:
        - `-T0/-T1`: Use for stealth and real-world scenarios.
        - `-T4`: Best for CTFs or practice.
3. **Packet Rate:**
    - **Set Minimum/Maximum Packets Per Second**:
        - Example: `--max-rate 10` (limits to 10 packets per second).
4. **Parallelization (Probing Efficiency):**
    - **Control Number of Parallel Probes**:
        - Example: `--min-parallelism=512` ensures 512 probes run in parallel.

### **Quick Tips**:

- **For Stealth Scans**: Use `-T0` or `-T1`.
- **For Quick Scans**: Use `-T4` or `-F` (common ports).
- **For All Ports**: Use `-p-`.






![[Pasted image 20250123131749.png]]
