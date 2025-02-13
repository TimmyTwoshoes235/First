![[OTWNatas.pdf]]
- Inspecting Page Source (Levels 0-2)
    
    - Found passwords hidden in HTML comments.
    - Learned that sensitive information can be exposed due to poor security practices.
- Exploring Directory Structure (Levels 2-4)
    
    - Added "/files" to the URL to discover accessible files.
    - Learned about directory traversal and checking for open directories.
- Understanding HTTP Headers (Level 4-5)
    
    - Learned about the Referrer Header and how websites use it for security.
    - Used Burp Suite to modify the Referer Header and bypass restrictions.
- Manipulating Cookies (Level 5-6)
    
    - Discovered that access was denied due to a cookie value.
    - Changed the cookie value to "1" to gain access.
    - Learned how session management and authentication can be bypassed through cookies.
- Including Hidden Files via URL Tricks (Level 6-7)
    
    - Found a reference to "secret.inc" and appended "/includes/secret.inc" to the URL.
    - Discovered file inclusion vulnerabilities, which can be exploited for Local File Inclusion (LFI).
- Path Traversal & Exploring System Files (Level 7-8)
    
    - Used relative path traversal to attempt accessing system files with "../../../../etc/passwd".
    - Discovered that passwords are stored in "/etc/natas_webpass/" for each level.
    - Learned how directory traversal vulnerabilities can expose sensitive data.
**

Natas level 0-> 1 

Inspect page 

<!--The password for natas1 is 0nzCigAq7t2iALyvU9xcHlYN4MlkIwlq →

  

1 → 2 

      <!--The password for natas2 is TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI →

​​<!--The password for natas2 is TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI →

  

2→3 (Adding /files at end of URL)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNvCVgqNwCSwLfUphiiAR_iIGDQTriPj_NoFiU50VhjykCUXUMRqfLoajRfJ4k9H3_HoIrDM9FSg6QPx6reF0DT3ciqSPFExMHeKN5x38u9NNX2IroEb65VQP06TsMSFXlZ-I6tA?key=gOFGRzPPtWfAYpPEqE04OrK_)

natas3:3gqisGdR0pjm6tpkDKdIWO2hSvchLeYH

  
  
  

3→4 (Adding /files at end of URL)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdnDoDZ9obHT_NpLw1gaKMhI6igmz5dTMwHna-ZuVjiTC-HZpnNGlzM5OPe3IpzHTinkPKGEg95DSmW8pAsGER2GqsGk4pXn_6ZT9_STaVOk0JG2tE8lvKEIsSgZQkwuKF5ijLQ-A?key=gOFGRzPPtWfAYpPEqE04OrK_)

Then open this file! 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoopV0JHXTTpR4_auLUngNCKWk-zYsO8HUxDyO4DakO4HZD8aEPpCeVBWnxfz0sssowtqeg25YhHwoADFJHZ-6TBZOLpfqK0-N7une-9lbZwG8hekGgy4HgIe4WJ4_3xhIb2qJjw?key=gOFGRzPPtWfAYpPEqE04OrK_)

natas4:QryZXc2e0zahULdHrtHxzyYkj59kUxLQ

  
  
  
  

4→5 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMskaDfGUzTTMBN001YxKtT0OjS01ur4mdDy0MJnGasOOXfNZDtgrZopXW5hwTwvTPcmJ_m634z7Y1T_TB-5dbYoJg9mik2Ss_g8FCUSTkdnPUgDHvflT6a4k_DfC27v8I4WRO?key=gOFGRzPPtWfAYpPEqE04OrK_)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc9jNGdQctQ65EDX2gFyO5s0wdXHob2Gjx1-gA5fnhOnN132asb4lgtRmkYNTCGEOJTfiAMWtY1K368Zx_sathAUKJdKOYjltLh71vYOmnBI0O8jaGCj4N_ONIdnf6WdpOagI5Wsg?key=gOFGRzPPtWfAYpPEqE04OrK_)

Learned that a referrer is the place that directs you to the current webpage.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJSPsU_OL9XZBuGcHEMulQ9GZa5LQWTbLrrLKNOdnxEQEAkBvVnFoxX2QTOwvzVFV3RBigPT03uY3CYCIbue2BdmaxpOm51q1QfbnZGJf_VD8yWThUYX3zXYG7jm_5OG5WvORRYA?key=gOFGRzPPtWfAYpPEqE04OrK_)

HTTP: Hypertext transfer protocol 

Spent a long time learning and researching. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9wF_ERIKhY_FHYPT6_JkT1ouGTKRvercvlUyg0QvP7veeRa6UUdwNj95H3Xm_x8Fo1LJOqoMb-cXF9aKfRAAlVM6YZfk2rw3NXUWq84o5hECxAayeatNH2wSOiolC6-1QMk2T?key=gOFGRzPPtWfAYpPEqE04OrK_)

  

### Steps to Solve Natas Level 4 (Referer Header Spoofing)(BANDIT)

1. Intercept the Request in Burp Suite
    

- Open Burp Suite → Go to Proxy > Intercept On
    
- Visit http://natas4.natas.labs.overthewire.org/
    
- Capture the request.
    

2. Manually Add the Referer Header
    

- If the Referer header is missing, click inside the request and add a new line under: accept encoding
    

Add:  
Referer: http://natas5.natas.labs.overthewire.org/

3. Forward the Modified Request
    

- Click Forward to send the request.
    

1. Check the Response
    

- The response should now reveal the password for Natas Level 5.![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdW2ugEcUqJ-w51diNeYoUdWxe48_WNJSlC6GkzL_mkb6hi8JTuLSJ_1WFMsqJVcpMthO20eQkOLwUMFVDjHzsfTX-zCNf60c0KrQeUBSHGSp0Cso608r4M_ilCYewvzJQ5VgeCDw?key=gOFGRzPPtWfAYpPEqE04OrK_)
    
- 0n35PkggAPm2zbEpOU802c0x0Msn1ToK
    

4→5 (cookies change)

Access denied but no reason. Went to cookies. Changed value to 1. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeIy2y9lF5ZHsoDGSNeXXNsY46lp2nff7zfSBtQ2V8qzlz8qe9BQNj4cKXaannJ0k-9KUU-mPr1FV503tUcf9lEaTSWbcDHAjdurAEgxrZOA8BhvVcRbhZ1g_Oz0F1IAvv7313_9g?key=gOFGRzPPtWfAYpPEqE04OrK_)

0RoJwHdSKWFTYR5WuiAewauSuNaBXned

  
  

5→6 (Tricky addition to the end of the URL) (includes X2)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdNE_39wo7DqYXH13OZshrUR7AB_b8uZe4QvvFSqg0gzu-qZAL2beHG-5JXkQZ-SKqZ5RlbLOPJv1uFni3QGD781OOgAWUwjk-d9xrwSJVL_wNXB7aJTpIgCunZa76knX3fd1ij?key=gOFGRzPPtWfAYpPEqE04OrK_) 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcS5AZWjHR-VW155yEWWyARBue_zeShfPI0EuPYrwCihiG04EkCSTpkD-xODAY2xX9c3CZ79BEljyxVxaENSDLNmTk6OThumqkB2U3htYD8XW9_D7JaNVat1rYTraj0ZzfApq3GNQ?key=gOFGRzPPtWfAYpPEqE04OrK_)

Inspecting the source code attached, I see that it wants us to include secret.inc

At the end of the URL I added /includes/secret.inc

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPD1Ypg8Mh7g4sA89aKVcnaFpDTVHHzwsCXNB0mzecBUNx_RRJ7FDhdzMW_3QP2MVlp7OPyMvFhQwVlSeIUNhXwxe4yrDGTPdjv9d8h6H5H7EXfHCk8FrpCd9rejS-eBW1WOymqA?key=gOFGRzPPtWfAYpPEqE04OrK_)

FOEIUWGHFEEUHOFUOIU (NOT ANSWER)

Natas6

bmg8SvU1LizuWjx3y7xkNERkHxGre0GS

  

6 → 7

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXec_x9pWzji6gw4FgP35c9ADPS5GorhPsL-xHceGlEJ7uYFohMUPBb_iyziCk2hSbLRnwAf1fSenRim2Aew3lQEewIMFx0oln9j3aYw30gMxQbLO8EVGIg_atk5atvgGBujfoYbaw?key=gOFGRzPPtWfAYpPEqE04OrK_)

Clicking adds about or home to end of url

Hint:  in   /etc/natas_webpass/natas8

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdUcQlvZv-9jFWJWuonBlz5xcIK5Emwx5LuWq2DdmbsHZ64TQGVqcePjye0B5kDRShQd4B4Uhn0sA75ZQ8b5Lojr2a5LxfRQEGTIxv-Y7eOotzXN6hezm70f6QaF7owL4NYNExO?key=gOFGRzPPtWfAYpPEqE04OrK_)

I typed in =../../../../etc/passwd

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBVXZkKtBXV1P7CZUyjEkZCCC0XlYjNQuGbAS1ajQwM_GokCxeNxwVxWwDHLECBemlPl5ui4lfBc4B_2h18XqUHC__uQuyBH0OSJonY3Z4Kza3J9ybrmsC7CJTGItPSoQ5THGShg?key=gOFGRzPPtWfAYpPEqE04OrK_)FOEIUWGHFEEUHOFUOIU

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfzqjET-QZpaDcCovZdNUZeHKFW8S_6XqnEzV6duoHWRPVGrdtw4E5rF0X4Z8k0f7g1INn_LUbq7YLtA9_Z3zLqR9r1KKeHO_-oqYDq8JghjOLcSUitddW8X6xyD2j97FagAzu5?key=gOFGRzPPtWfAYpPEqE04OrK_)

So then I edited to: etc/natas_webpassnatas8

(learn more about this webpass thing) 

→ All pages have this apparently

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe-VIv_IVHSFdEcjeKV9_j29Az3odOYqTaWJcqxzc_ySvTwDsR15RFjrnjaj2e5IEioqEP_3V2Gd3zZ5yzhQdgZUVU-9xJk_1aLkjvRYuo_NRimRMb0Ik5pl7u-wR-dI_-jUtOLrw?key=gOFGRzPPtWfAYpPEqE04OrK_)

natas 7

xcoXLmzMkoIP9D7hlgPlh9XD7OgLAe5Q

**