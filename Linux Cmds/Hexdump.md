https://real-world-systems.com/docs/hexdump.1.html
https://www.geeksforgeeks.org/xxd-command-in-linux/

Hex-codes are numerical representations of colors that consist of six digits and are widely used 

#xxd 
Hexdumps- xxd is a command-line tool that is primarily used for ****creating and analyzing hexadecimal dumps**** from files. It can also be used to reverse the process and convert a hexadecimal dump back into binary form.

#xxd [options] [file path]

![[Pasted image 20250127110643.png]]



![[Pasted image 20250127111045.png]]


### Cheat Sheet: `xxd` Command in Linux

The `xxd` command is a versatile tool for creating hexadecimal dumps, reversing them back to binary, and customizing output formats. It’s especially useful in cybersecurity for analyzing files, debugging, and reversing file encodings.

#### **What is a Hex Dump?**

- A **hex dump** is a representation of binary data in hexadecimal format.
    
- Each byte of data is shown as two hexadecimal digits, with an ASCII equivalent (if printable).
    

### **Common Use Cases**

#### **1. Generate a Hex Dump**

Command:

```
xxd file.txt
```

- Displays:
    
    - **Memory Offset**: Position of data in the file.
        
    - **Hexadecimal Bytes**: Binary data in hex.
        
    - **ASCII Equivalent**: Readable characters.
        

#### **2. Reverse a Hex Dump to Binary**

Command:

```
xxd -r hexdump.txt > output.bin
```

- Converts a hex dump back into its original binary format.
    

#### **3. Save Hex Dump to a File**

Command:

```
xxd file.txt > hexdump.txt
```

- Saves the output hex dump to `hexdump.txt`.
    

#### **4. Limit Bytes in the Output**

- **Display the first N bytes**:
    
    ```
    xxd -l N file.txt
    ```
    
- **Skip the first N bytes**:
    
    ```
    xxd -s N file.txt
    ```
    
- **Show the last N bytes**:
    
    ```
    xxd -s -N file.txt
    ```
    

#### **5. Customize the Output**

- **Set Bytes per Group** (e.g., 4 bytes):
    
    ```
    xxd -g 4 file.txt
    ```
    
- **Set Columns per Line** (e.g., 8 columns):
    
    ```
    xxd -c 8 file.txt
    ```
    
- **Binary Dump**:
    
    ```
    xxd -b file.txt
    ```
    
- **Uppercase Hex Output**:
    
    ```
    xxd -u file.txt
    ```
    
- **Plain Hex Dump**:
    
    ```
    xxd -ps file.txt
    ```
    

#### **6. Embed Binary Data in C Code**

Command:

```
xxd -i file.txt > file.c
```

- Produces a C-style array of the binary data.
    

---

### **Quick Reference Table**

|**Option**|**Description**|
|---|---|
|`-r`|Reverse hex dump to binary.|
|`-l N`|Limit output to first N bytes.|
|`-s N`|Skip the first N bytes.|
|`-g N`|Group bytes (e.g., 4 bytes per group).|
|`-c N`|Set columns per line.|
|`-b`|Binary digit dump.|
|`-u`|Uppercase hexadecimal output.|
|`-ps`|Plain hex dump (continuous).|
|`-i`|Create a C-style include file.|

---

### **Practical Applications**

#### **For Cybersecurity**:

- **File Analysis**: Analyze malware or unknown files.
    
- **Forensics**: Inspect raw binary data or damaged files.
    
- **Binary Exploitation**: Modify and verify file structures.
    

#### **Example Workflow**:

1. **Create a Binary File from Hex**:
    
    ```
    xxd -r file.hex > file.bin
    ```
    
2. **Inspect File Type**:
    
    ```
    file file.bin
    ```
    
3. **Decompress or Analyze Further** (if compressed):