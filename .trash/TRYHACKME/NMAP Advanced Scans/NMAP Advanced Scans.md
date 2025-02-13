This room explains advanced types of scans and scan options. Some of these scan types can be useful against specific systems, while others are useful in particular network setups. We will cover the following types of port scans:

- Null Scan
- FIN Scan
- Xmas Scan
- Maimon Scan
- ACK Scan
- Window Scan
- Custom Scan

Moreover, we will cover the following:

- Spoofing IP
- Spoofing MAC
- Decoy Scan
- Fragmented Packets
- Idle/Zombie Scan



![[Pasted image 20250124090033.png]]
![[Pasted image 20250124090349.png]]

![[Pasted image 20250124090205.png]]
![[Pasted image 20250124091355.png]]


![[Pasted image 20250124092323.png]]


![[Pasted image 20250124094914.png]]


![[Pasted image 20250124100112.png]]

![[Pasted image 20250124100204.png]]

![[Pasted image 20250124100246.png]]
[firewall] [IDS] [IDS] [fragmented packs]
![[Pasted image 20250124101308.png]]

![[Pasted image 20250124101325.png]]
- **Fragmentation with `-f`**: TCP header (24 bytes) is split into **3 fragments** (8 bytes each) because 24 is divisible by 8. Each fragment includes 20 bytes of IP header and 8 bytes of TCP header.
    
- **Double Fragmentation (`-ff`)**: Splits the TCP header into **2 fragments** (16 bytes + 8 bytes) because it uses multiples of 16.
    
- **Add Data (`--data-length NUM`)**: Appends extra bytes to packets to make them appear less suspicious.
    [double fragmentation][fragmentation] [fragmentation] [bytes]

**Question Answer**:

- If the TCP segment size is **64** and the `-ff` option is used (multiples of 16), you would get **4 IP fragments** (16 bytes each).
 - **Command Comparison**:
    
    - `sudo nmap -sS -p80 10.20.30.144`: Standard **stealth TCP SYN scan** on port 80.
    - `sudo nmap -sS -p80 -f 10.20.30.144`: Same scan, but with **fragmented IP packets**.
		-- Use `--data-length NUM` to add extra bytes to packets, making them look less suspicious.
- **Why Fragmentation?**: [firewall] 
    - Makes it harder for firewalls or intrusion detection systems to detect the scan.
![[Pasted image 20250124102910.png]]
Zombie/Idle Scan [zombie scan] [idle scan]
      == sudo nmap ZOMBIE IP 10.10.5.5==
- **Idle/Zombie Scan**: A stealthy scanning method using a spoofed IP address, requiring:
    - An **idle system** (zombie) on the network & ability to monitor traffic.
- **How It Works**:
    1. Record the **initial IP ID** from the idle host.
    2. Send a spoofed **SYN packet** to the target with the zombie’s IP as the source.
    3. Trigger the idle host again to compare its **new IP ID**.
- **Scenarios**:
    1. **Port Closed**: Target replies with **RST**, idle host’s IP ID doesn’t increment.
    2. **Port Open**: Target replies with **SYN/ACK**, idle host sends an **RST**, incrementing its IP ID.
    3. **Filtered Port**: No response, idle host’s IP ID remains unchanged.
- **Key Step**: Compare the difference in the idle host’s IP ID:
    
    - **1** = Port closed/filtered.
    - **2** = Port open.
- **Important**: The idle host must truly be idle; otherwise, IP ID changes will be unreliable.

[--reason]

![[Pasted image 20250124103200.png]]
![[Pasted image 20250124103227.png]]



![[Pasted image 20250124105249.png]]![[Pasted image 20250124105338.png]]