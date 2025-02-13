[[wget]] Download file 
To download something onto Linux, you primarily ==use the command "wget" in your terminal, followed by the URL of the file you want to download==; for example, to download a file from "example.com/file.zip", you would type "wget https://example.com/file.zip" in your terminal. 

Key points about using wget:

- **Basic syntax:** `wget`
- **Saving to a specific location:** `wget -O "filename" [URL] 
	- (where "filename" is the desired name for the downloaded file)
- **Downloading multiple files from a list:** `wget -i "filename.txt" ` (where "filename.txt" is a file containing URLs, one per line)




wget https://mercury.picoctf.net/static/beec4f433e5ee5bfcd71bba8d5863faf/warm

