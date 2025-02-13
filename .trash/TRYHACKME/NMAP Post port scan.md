![[Pasted image 20250124110120.png]]

- https://tryhackme.com/r/room/nmap03 
- **Purpose of Investigating Open Ports**:
  - Detects the **running service** on the port.
  - Helps identify **known vulnerabilities** of the service.
**Using [-sV] in Nmap**:
  - Adds **service and version detection** for open ports.
  - **--version-intensity LEVEL**:
    - Controls detection intensity (range: 0 = lightest, 9 = most complete).
    - **-sV --version-light**: Intensity level 2.
    - **-sV --version-all**: Intensity level 9.

- **Connection Requirements**:
  - **-sV** requires a **full TCP 3-way handshake** to communicate with the service.
  - **Stealth SYN scan [-sS] cannot be used with **-sV**.

- **Output with -sV**:
  - Adds a **version column** for detected services.
  - Example:
    - Without `-sV`: `22/tcp open ssh`
    - With `-sV`: `22/tcp open ssh OpenSSH 6.7p1 Debian 5+deb8u8 (protocol 2.0)`

- **How It Works**:
  - The **service column** guesses the service based on the port (e.g., port 22 → SSH).
  - The **version column** confirms the service by connecting to the port and reading the **service banner** (e.g., nginx 1.6.2).

- **Difference Between Service and Version Columns**:
  - **Service column**: A guess based on the port.
  - **Version column**: Accurate, as it involves actual communication with the service.

- [OS] Detection Overview**:
    - Nmap detects the Operating System (OS) based on system behavior and response patterns.
    - Use [-O] (uppercase O) to enable OS detection.
- **Example Command**:
    - **Command**: `sudo nmap -sS -O 10.10.238.161`
    - **Result**: Detected OS as **Linux 3.X** and guessed kernel version as **3.13**.
		- **OS Detection Output**: [Nmap OS]
		    - **Device Type**: General-purpose.
		    - **OS Details**: Linux 3.13.
		    - **OS CPE**: `cpe:/o:linux:linux_kernel:3.13`.
		    - Nmap output shows open ports, latency, and MAC address.
		- **Factors Affecting Accuracy**:
		    - Nmap requires at least **one open port** and **one closed port** for reliablility
		    - Virtualization or similar technologies can distort OS fingerprints.
		    - OS version detection should be taken **with a grain of salt**.
		- **Key Takeaway**:
		    - While OS detection is convenient, always verify results manually when accuracy is critical.
- - [Mnap Traceroute] Overview:
    - Use **--traceroute** with Nmap to identify routers/hops between you and the target.
    - Traceroute results are appended to the scan output.
- **How Nmap's Traceroute Differs**:
    
    - **Standard Traceroute**:
        - Starts with a packet of **low TTL** and increases it until the target is reached.
    - **Nmap's Traceroute**:
        - Starts with a packet of **high TTL** and decreases it.
- **Example Command**:
    
    - **Command**: sudo`nmap -sS --traceroute 10.10.238.161`
    - **Result**: No routers or hops detected, as the target is directly connected.
- **Key Takeaway**:
    - [Nmap traceroute] provides insights into the network path but works differently from traditional traceroute commands on various operating systems.
- [NSE] Nmap scripting engine 
	- -Script{[-sC]} 
		- /usr/share/nmap/scripts
		- [--script=default]
		- [--script "SCRIPT-NAME"] specific script
		- [--script "ftp*"] pattern in script;
			- [ftp-brute]: Performs brute force password auditing against FTP servers.
	- **Script** - a chunk of code that does not require compilation. In other words, **information is not translated to machine language and stays in its original human-readable form**.
|Script Category|Description|
|`auth`|Authentication related scripts|
|`broadcast`|Discover hosts by sending broadcast messages|
|`brute`|Performs brute-force password auditing against logins|
|`default`|Default scripts, same as `-sC`|
|`discovery`|Retrieve accessible information, such as database tables and DNSnames|
|`dos`|Detects servers vulnerable to Denial of Service (DoS)|
|`exploit`|Attempts to exploit various vulnerable services|
|`external`|Checks using a third-party service, such as Geoplugin and Virustotal|
|`fuzzer`|Launch fuzzing attacks|
|`intrusive`|Intrusive scripts such as brute-force attacks and exploitation|
|`malware`|Scans for backdoors|
|`safe`|Safe scripts that won’t crash the target|
|`version`|Retrieve service versions|
|`vuln`|Checks for vulnerabilities or exploit vulnerable services|

**sudo nmap -sS -n --script "http-date" <target>**
	The command is **sudo nmap -sS -sC <target>**, where **-sC ensures that Nmap executes the default scripts after the SYN scan**.


https://tryhackme.com/r/room/nmap03 

![[Pasted image 20250124132645.png]]
![[Pasted image 20250124132710.png]]

