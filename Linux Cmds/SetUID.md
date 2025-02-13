**SetUID Cheat Sheet (1-Page Guide)**

### **What is SetUID?**
- SetUID (Set User ID) allows a file to be executed with the permissions of its owner, not the user running it.
- Used for privileged commands (e.g., `passwd`).

### **Identifying SetUID Files**
```bash
ls -l /path/to/file  # Check if 's' appears in owner permissions
find / -perm -4000 -type f 2>/dev/null  # Find all SetUID binaries
```
Example output:
```
-rwsr-xr-x 1 root root 1234 Jan 01 12:34 example
```

### **Running a SetUID Binary**
```bash
./setuid_binary  # Execute the binary
./setuid_binary --help  # Check usage
```

### **Setting & Removing SetUID**
```bash
chmod u+s /path/to/file  # Enable SetUID
chmod u-s /path/to/file  # Disable SetUID
```

### **Security Risks & Mitigation**
- Attackers can exploit SetUID binaries for privilege escalation.
- Regularly check SetUID files:
  ```bash
  find / -perm -4000 -type f 2>/dev/null
  ```
- Remove SetUID from unnecessary files:
  ```bash
  chmod u-s /path/to/script
  ```

### **Example (Bandit 19 → 20)**
```bash
ls -l  # Identify SetUID binary
./setuid_binary  # Run it
./setuid_binary cat /etc/bandit_pass/bandit20  # Retrieve password
```

### **Quick Reference Table**
| Command | Description |
|---------|------------|
| `ls -l` | Check file permissions for SetUID. |
| `find / -perm -4000 -type f` | Find all SetUID binaries. |
| `chmod u+s file` | Enable SetUID. |
| `chmod u-s file` | Disable SetUID. |
| `./setuid_binary` | Execute SetUID binary. |

🚀 Use this guide to navigate SetUID challenges efficiently!

