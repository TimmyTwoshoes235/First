--> Completed Jan 28th
  

1. Setuid Binary Execution (Level 19-20)  
	- You learned how the setuid bit allows a binary to execute with the file owner's privileges.  
	- Used the command:  
		```./bandit20-do cat /etc/bandit_pass/bandit20`

2. Network Connections with Netcat (Level 20-21)  
	- You set up a Netcat listener and used it to establish a connection.  
	- Commands used: [[nc]] 
		`nc -lvnp 4444  
		./suconnect 4444  
- Lesson learned: [[Netcat]] is useful for sending and receiving data over a network.  

3. Understanding and Exploiting Cron Jobs (Levels 21-23)  
	- You explored [[cron]] jobs, which are scheduled tasks that execute automatically.  
	- Used commands like: 
		cat /etc/cron.d/bandit22  
		cat /usr/bin/cronjob_bandit22.sh  
		cat /tmp/your_username/password  
	- Lesson learned: By reading and understanding cron job scripts, you can locate where they store sensitive data.  

4. Using MD5 Hashing to Find Stored Passwords (Level 22-23)  
	- The challenge involved a script that hashed a username and stored a password based on that hash.  
	- You generated your hash using:  [[echo]][[hash]]
		`echo -n 'your_username' | md5sum  
		cat /tmp/your_md5_value/password  
	- Lesson learned: Hashing is often used in security, but it can be reversed if you understand how the process works.  

5. Scripting and Exploiting Cron Jobs (Level 23-24)  
	- You wrote a script, gave it execution permissions, and placed it where cron jobs automatically run.  
	- Used commands:  [[nano]] [[chmod]] [[mv]] 
		mktemp -d  
		cd /tmp/tempdir  
		nano bandit24_pass.sh  
		chmod +x bandit24_pass.sh  
		mv bandit24_pass.sh /var/spool/bandit24/foo/  
	- Lesson learned: You can manipulate automated scripts by placing your own code in expected locations.  

Challenges You Faced  
1. Netcat Listener Issues (Level 20-21)  
	- Problem: You struggled with starting and maintaining a Netcat connection.  
	- Possible reasons:  
	  - The port number may not have matched what suconnect was expecting.  
		  - Listener might not have been properly established before running suconnect.  
	- Solution for next time:  
	  - Double-check the port number.  
  - Run:  
		`nc -lvnp 4444  
	  - Then in another terminal:  
		`./suconnect 4444  

2. Understanding Cron Job Execution (Level 21-23)  
	- Problem: You had to check multiple times to confirm where the password was being written.  
	- Reason: Confusion over how cron jobs execute on a schedule.  
	- Solution: Use this command to monitor new files appearing in /tmp:  `
		watch -n 1 ls -l /tmp  

3. Moving the Script to the Correct Directory (Level 23-24)  
	- Problem: Difficulty placing the script in the correct location for execution.  
	- Possible reasons:  
	  - Script wasn't properly configured before being moved.  
	  - Permissions may have been incorrect.  
	- Solution:  
	  - Before moving the script, test it in /tmp first.  
	  - Run:  `
			ls -l /var/spool/bandit24/foo/  
	  - This ensures the script is placed correctly.  

  
Next Steps & Recommendations  
- Redo Level 20-21 (Netcat) without using the walkthrough to reinforce the concept.  
- Practice Cron Jobs on Your Own System by writing and scheduling small scripts.  
- Rerun Level 23-24 with a focus on scripting and debugging file execution.**