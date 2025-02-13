### Challenge Name:
- **CTF Platform:** (PicoCTF, TryHackMe, HackTheBox, etc.)
- **Category:** (Web, Crypto, Forensics, Reverse Engineering, etc.)
- **Tools Used:** (Wireshark, Burp Suite, Python, etc.)
- **Key Commands:**
  - `ls -la`
  - `grep "flag" file.txt`
- **Solution Approach:**
  1. First, I checked the webpage source code.
  2. Then, I used `Burp Suite` to analyze requests.
  3. Finally, I found the flag in a hidden parameter.
- **What I Learned:**
  - Always check robots.txt for hidden directories.
  - Burp’s Repeater tool is useful for modifying HTTP requests.
- **Things to Review Later:**
  - Read more about SQL injection payloads.
  - Practice binary exploitation basics.
