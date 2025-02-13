https://tryhackme.com/r/room/linuxfundamentalspart3

Terminal text editors: [Nano] & [VIM]

[Nano]-==Create file==: `nano filename` -- replacing "filename" with the name of the file you wish to edit.

- Searching for text
- Copying and Pasting  
- Jumping to a line number
- Finding out what line number you are on

		You can use these features of nano by pressing the "**Ctrl**" key (which is represented as an `^` on Linux)  and a corresponding letter. 
		To exit, we would want to press "**Ctrl**" and "**X**" to exit Nano.

[VIM]
- Customisable - you can ==modify the keyboard shortcuts ==
- Syntax Highlighting - this is useful if you are writing or maintaining code, making it a popular choice for software developers
- VIM works on all terminals where nano may not be installed
- There are a lot of resources such as [cheatsheets](https://vim.rtorr.com/), tutorials, and the sorts 

==Downloading files {wget}==
[[wget]]
`wget` .  This command allows us to download files from the web via HTTP -- as if you were accessing the file in your browser.

For example, if I wanted to download a file named "myfile.txt" onto my machine, assuming I knew the web address it -- it would look something like this:

`wget https://assets.tryhackme.com/additional/linux-fundamentals/part3/myfile.txt`

==Transferring Files From Your Host ==[SCP] SSH
Secure copy, or [SCP], a means of securely copying files. allows you to transfer files between two computers using the SSH protocol to provide both authentication and encryption.

	Working on a model of SOURCE and DESTINATION, SCP allows you to:
		- Copy files & directories from your current system to a remote system
		- Copy files & directories from a remote system to your current system
- 
	Example: scp important.txt ubuntu@192.168.1.30:/home/ubuntu/transferred.txt 
	 let's reverse this and layout the syntax for using `scp` to copy a file from a remote computer that we're not logged into:
		 scp ubuntu@192.168.1.30:/home/ubuntu/documents.txt notes.txt
		 ![[Pasted image 20250124133326.png]]
		 ![[Pasted image 20250124133514.png]]
		 


[WEB]--==**Serving Files From Your Host ==

[Ubuntu] machines come pre-packaged with [python3]. Python helpfully provides a lightweight and easy-to-use module called "HTTPServer". This module turns your computer into a quick and easy web server that you can use to serve your own files, where they can then be downloaded by another computing using commands such as `[curl]` and `[wget]`. 

Python3's "HTTPServer" will serve the files in the directory where you run the command, but this can be changed by providing options that can be found within the manual pages. 

In the snippet below, we are serving from a directory called "webserver", which has a single named "file".
		you will need to open a new terminal to use `wget` and leave the one that you have started the Python3 web server in. This is because, once you start the Python3 web server, it will run in that terminal until you cancel it.
		
		One flaw with this module is that you have no way of indexing, so you must know the exact name and location of the file that you wish to use. This is why I prefer to use Updog. [What's Updog](https://github.com/sc0tfree/updog)? A more advanced yet lightweight webserver. But for now, let's stick to using Python's "HTTP Server"

[ps] process status, reports a snapshot of current processes.

[ps aux] System processes
	To see the processes run by other users and those that don't run from a session (i.e. system processes), we need to provide **aux** to the `ps` command like so: `ps aux`
	
[top](interactive): (Table Of Processes) - is a task manager program displays information about CPU and memory utilization. interactive unlike ps. 

[kill] kills cmd
	![[Pasted image 20250124145854.png]]
[namespace] A namespace _provides a container to hold things like functions, classes and constants. Section of cake. 

[PID]-PID stands for Proportional-Integral-Derivative, and it's a control algorithm that's used to keep a system at a desired value
 
[Systemct1]-- this command allows us to interact with the **systemd**process/daemon.
		systemctl [option] [service]
				Start, stop, enable, disable 
[ctrl + Z]-ctrl+z **stops the process and returns you to the current shell**



Background & Foreground 
	echo only in foreground 
		[&] run process in background 
	[fg] brings proces back to focus 

![[Pasted image 20250124160752.png]]

[cron]- automatically run cmds  on scheudle 
[crontabs] interact with cron

A crontab is simply a special file with formatting that is recognised by the `cron` process to execute each line step-by-step. Crontabs require 6 specific values:
[crontab -e] edit chrontabs 

|       |                                           |
| ----- | ----------------------------------------- |
| Value | Description                               |
| MIN   | What minute to execute at                 |
| HOUR  | What hour to execute at                   |
| DOM   | What day of the month to execute at       |
| MON   | What month of the year to execute at      |
| DOW   | What day of the week to execute at        |
| CMD   | The actual command that will be executed. |
Let's use the example of backing up files. You may wish to backup "cmnatic"'s  "Documents" every 12 hours. We would use the following formatting: 

`0 */12 * * * cp -R /home/cmnatic/Documents /var/backups/`

An interesting feature of crontabs is that these also support the wildcard or asterisk (`*`). If we do not wish to provide a value for that specific field, i.e. we don't care what month, day, or year it is executed -- only that it is executed every 12 hours, we simply just place an asterisk.

This can be confusing to begin with, which is why there are some great resources such as the online "[Crontab Generator](https://crontab-generator.org/)" that allows you to use a friendly application to generate your formatting for you! As well as the site "[Cron Guru](https://crontab.guru/)"!