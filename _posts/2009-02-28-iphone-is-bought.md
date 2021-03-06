---
layout: post
title: iPhone is bought
date: 2009-02-28 00:17:06.000000000 -08:00
tags:
  - phone
---
We bought iPhones. We did it only and surprising the process was easy. I selected that we wanted to upgrade both of our phones and chose 8gig Refurbished Black iPhones for both Caitlin and I and it helped us through it. We kept our family plan exactly the same but added the $30/month data plan for each of us. The phones were only $100 each though and came without any scratches. We were very please and probably lucky in this regard.

Now I have the issue of how to sync up everything. So far I've only talked Mail, Contacts and Calendar. My main mail accounts (I'm thinking of reworking this) are GMail (which ALL of my personal accounts forward to) and my Berklee account. Luckily both allow IMAP access. Unfortunately this means no pushing so I only get mail every 15 minutes on the phone if I'm not running the mail app. I have a feeling I'm going to be backgrounding the mail app a lot (more on this in a minute).

For Contacts and Calendar I'm using Google. We were using Google Calendar anyway as our main calendar so this just makes sense. Google's sync for iphone uses an exchange server so contacts / calendar data IS pushed to the phone and the syncs are pretty instant. Google <a title="Google iPhone Sync" href="http://www.google.com/mobile/apple/sync.html">lays out the instructions</a> very clearly which is nice cause this process DOES CLEAR OUT your contacts on the phone.

My process:
<ol>
	<li>Put iPhone sim card in old phone.</li>
	<li>Save contacts onto sim card in old phone.</li>
	<li>Put sim card back in iPhone.</li>
	<li>Use contacts settings menu to load contacts from sim card.</li>
	<li>While doing this clean up Google Contacts so everyone I care about is in the "My Contacts" group.</li>
	<li>Export (for backup) Google Contacts.</li>
	<li>Using iTunes sync contacts with Windows Address Book just for a backup.</li>
	<li>Sync.</li>
	<li>Switch contact sync to Google Contacts.</li>
	<li>Sync.</li>
	<li>Turn off contact syncing in iTunes.</li>
	<li>Clean up "My Contacts" list again. I had lots of contacts with only emails (from Gmail) and a duplicate named contact with phone numbers (from phone).</li>
	<li>Export (for backup) Google Contacts.</li>
	<li>Follow Google instructions on enabling their exchange server in iPhone.</li>
	<li>Go to http://m.google.com/sync on you iPhone to choose which calendars to sync.</li>
</ol>
The syncing to Google Contacts from iTunes is very important cause ALL of your phone contacts get removed when you add the exchange server to your iPhone. Please read the Google sync site a lot before doing any of this. Their docs are very clear on the limitations and the process to help you not lose data. It's worth your time especially if you have a lot of contacts.

My plan with email is probably to run my own imap server so all my mail ends up somewhere that I own. I'm sick of Dreamhost webmail going down and my mail being stored on Google's servers. Though I feel it's safe, I just want one place that I own to be my main mail server. We should see if I do this soon.

My plan is to also run my own LDAP server for contacts. If I do this I'm probably going to have to role my own syncing app between my LDAP server and the Google Calendar API. I'm lazy but I do hope I get to this at some point.

There is a Thunderbird extension that syncs your Google Contacts into your Thunderbird database. I'm going to be using that. I also need to figure out how to get Mutt to use Google Contacts. I think the best way will be to use the LDAP GCalDaemon tool but I will have to do more research about this later. Since I largely use GMail and iPhone for personal mail this won't matter that much. Berklee has a LDAP server I have Mutt using for work contacts.

On a side note, the phone is already jailbroken using the windows version of QuickPwn. It was really easy and works great. I can ssh in, and have installed a number of 3rd party apps to help complete my app collection. The best so far is the backgrounder app. This allows me to keep different apps open in the background and definitely one of the best features of jailbreaking so far!
