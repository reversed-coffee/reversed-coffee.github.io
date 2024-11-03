---
date: 2024-08-29
title: "Typosquatting: Danger Hidden in Plain Sight"
desc: "Dive into the world of cybercrime and learn how to protect yourself from typosquatting attacks."
tags: [ "cybersecurity", "typosquatting", "phishing", "hacking" ]
monetized: true
---

This article was inspired by a project that I presented to my peers and the public at my technical school. The project,
known as "Hack House" is an annual event where students are given a few weeks to create a presentation on public
cybersecurity awareness. The goal of the project is to teach you how to protect yourself from typosquatting attacks.

The main reason I wanted to write this article is to show how much of a threat typosquatting is. Many people are unaware
of the risks of typosquatting and how easy it is to fall victim to these attacks. By educating the public on the risks
of typosquatting and how to protect themselves from these internet scams, we can prevent people from falling victim to
these attacks.

The following points are covered in this article. Feel free to skip around and look for the information you're most
interested in.

- Overview
    - [What is Typosquatting?](#what-is-typosquatting)
    - [A Live Demonstration](#a-live-demonstration)
    - [Common Misconceptions About Typosquatting](#common-misconceptions-about-typosquatting)
- Protection
    - [How to Protect Yourself](#how-to-protect-yourself)
    - [What Can Organizations Do?](#what-can-organizations-do)
    - [Conclusion](#conclusion)

## What is Typosquatting?

Consider going to a website that you visit frequently. In this case, let's say you're going to Google. You type in
"google.com" into the address bar and hit enter. Would you be surprised to find that you're not on Google's website at
all? This is a common tactic used by cyber criminals known as typosquatting. Typosquatting is the act of registering
domain names that look, sound, or are spelled similarly to popular websites in order to trick users into visiting them.
These fake websites can be used to steal personal information, redirect you to malicious sites, pull credentials, infect
your system, and much more.

Consider a second example, but this time you're in your email client. You allegedly receive an email from your bank
asking you to verify your account information. The email looks legitimate: it has the bank's logo, the email address
looks familiar, and the message is professional. You click on the link in the email and it takes you to a website that
looks exactly like your bank's website. You didn't bother to inspect the URL other than taking a quick glance at the
domain name. You enter your bank credentials and hit submit. You've just fallen victim to a phishing attack that used
typosquatting to trick you.

## A Live Demonstration

Many people are arrogant or unaware of the risks of typosquatting. To demonstrate the risks, I decided to create a
parody of "Chase Bank" called "Dash Bank." I registered the domain `dashbank.us` and created a website that had its own
little neat user interface. It featured a login page that asked for a username, password, and answers to some absurd
security questions. The website was designed to look like a professional banking website to make demonstration
effective.

Legally, I cannot typosquat a real bank's domain name, nor is it ethical to do so. I created a parody of a bank that I
could typosquat myself so I could demonstrate the risks of typosquatting without breaking any laws or ethical standards.
A notable law that I would have broken is the Anti-Cybersquatting Consumer Protection Act (ACPA), which prohibits
registering domain names that are similar to trademarks with bad-faith intent to profit from them. In my case, there is
no bad-faith intent, but one could still argue that since I'm still receiving credentials (even though they're fake),
I could collect them and use them in bad faith. This is why I had to go with creating a parody, because it's an ethical
and legal way to demonstrate an attack like typosquatting.

Let's consider you're in the world of parodies now. What's considered a parody in this world is actually a real thing,
not a parody at all. The website `dashbank.us` is owned by an official bank called "Dash Financial." This is a banking
firm that offers financial services in the United States. The website serves as our "real" bank for the demonstration.
Of course, since this is a parody, the bank is not real and "Dash Financial" does not exist in the real world.

[![Page Comparison](/images/3539a2fc-c01f-4cb3-ae5a-a8145169be08.webp)](https://dashbank.us)

Now, let's say you're typing in the URL for Dash Financial's website. You accidentally type in `dashbajk.us` instead of
`dashbank.us`, but you don't notice the typo. You hit enter and you're taken to a website that looks exactly like Dash
Financial's website. Let's say you took a quick glance at the address bar, and you saw a green padlock and the domain
looked similar enough to the real domain that you didn't notice the typo. You enter your credentials and hit submit.
As you continue interacting with the website, you enter in security questions. Now it's too late, and you've just fallen
victim to a typosquatting attack.

The demo websites `dashbank.us` (real) and `dashbajk.us` (typosquatted) will be active and live until the domain
registration expires. If you'd like to try them out yourself, you can view [dashbank.us](https://dashbank.us) and
[dashbajk.us](https://dashbajk.us). Please note that the websites are not malicious and are only used for demonstration
purposes. Do not enter any real credentials into these websites. The typosquatted website will only collect information
if I'm monitoring the website, which I'm not. Even if I was monitoring it, once I refresh the log page, the information
is completely gone. No information is stored on the server.

## Common Misconceptions About Typosquatting

There are many misconceptions about typosquatting that can lead to people falling victim to these attacks. Some of them
are broad, but there are some speccific misconceptions that I'd like to address as well. Hopefully, by clarifying how a
typosquatting attack works, you can get a better understanding of what can and cannot protect you from these attacks.

### "My Browser Will Warn Me"

You might be thinking, "My browser will protect me from these types of attacks." While it's true that modern browsers
have built-in security features to protect users from malicious websites, they're not foolproof. Google's Safe Browsing
feature, for example, will warn you if you're about to visit a known phishing site. However the keyword here is "known."

This applies especially in spear-phishing attacks, where the attacker targets a specific individual or organization. If
an attacker registered a brand new domain that looks similar to your organization's domain, it's unlikely that Google's
Safe Browsing feature will catch it until it's too late. This is why I always say that browser security features are
just one layer of protection.

If you tried out the demo website, you can already tell that Google's Safe Browsing feature didn't catch the website.
Well, now that it's much more public, someone is probably going to report it to Google, and then it will be caught. But
what if it wasn't public? Well, you're out of luck there! Anyways, if you do come across websites that you think are
phishing pages, don't feel put off by [reporting them](https://safebrowsing.google.com/safebrowsing/report_phish/).
Taking action can stop the few unlucky people who fall victim to these attacks, which hopefully won't include you after
reading this article.

### "I'll Notice the Typos"

How many times do you actually check a URL before you visit it? Most people don't bother to check the URL because they
assume they typed it in correctly. This aside, most typosquatting schemes are designed to look as close to the real
website as possible, so even a quick glance might not be enough to catch the typo. This is why it's always important to
be vigilant and take literally just three to five seconds to verify the URL.

Just to give you an idea of how easy it is to overlook a typo, I've created a few examples of typosquatting domains that
are pretty hard to catch if you're just taking a glance:
- `gooogle.com` for `google.com`
- `amazon.co` for `amazon.com`
- `facehook.com` for `facebook.com`
- `twifch.tv` for `twitch.tv`
- `chasebank.com` for `chase.com`
- `microsoft.online` for `microsoft.com`
- `apple.com-securelogin.com` for `apple.com`

As you can tell, many of these companies actually registered these common domains to prevent typosquatting. However,
there are a ton of other domains that are still available for typosquatting. Just because companies are taking steps to
prevent typosquatting doesn't mean that they're immune to it.

### "The Green Padlock Means It's Safe"

The green padlock indicates that the website is secure, right? Sort of. The green padlock means that the website fell
under these two criteria:

1. The protocol being used to access the website is HTTPS, which is a secure version of HTTP.
1. The website is using an SSL/TLS certificate that is trusted by your browser.

Wait, did I just say the website is secure? Yes, the website is secure in the scope of confidentiality. In this case,
though, typosquatting is an attack on integrity, not confidentiality. Hold on, what's the difference between integrity
and confidentiality? Integrity asssures that the website you are visiting is the website you intended to visit. In this
case, it's not even close.

So, yes, the typosquatted website is indeed secure. The website is secure in the scope of confidentiality. HTTPS ensures
that anyone between the requesting device and the server cannot see the data being transmitted. However, since the
attacker owns the typosquatted domain, they can see the data being transmitted. They'd have to, or else no website would
be able to tell what the client is sending!

The reason that the certificate is valid is because the typosquatted form of `dashbank.us` (which is `dashbajk.us`) has
its own SSL/TLS certificate. This works because the attacker owns the `dashbajk.us` domain and can generate a
certificate for it using a free service such as [Let's Encrypt](https://letsencrypt.org/). SSL/TLS certificates validate
integrity in the sense that the website you're visiting is hosted by the website owner, and in this case, the owner of
the typosquatted website is indeed the attacker, and not the organization/individual that owns the real website.

### "A VPN Will Protect Me"

In the modern age of the internet, many people use VPNs to protect their privacy and security. I know, your favorite
YouTuber probably promoted a VPN in their last video. While VPNs are actually not a bad idea, they won't protect you
from this attack. I believe attacking VPNs is a bit out of the scope of this article, but I'll give you a brief rundown
of why VPNs won't realistically protect you from typosquatting.

These companies (especially NordVPN and ExpressVPN) make extremely vague claims about how their VPNs protect you from
cyber attacks. let's take NordVPN for example. This is straight from their front page:

<div class="md-center md-separate">
    <img src="/images/74df918a-075c-4cb7-93d5-59c4508660ed.webp" alt="NordVPN Front Page" width="70%">
    <p><b>"With NordVPN, you can browse like no one's watching — because no one is."</b></p>
</div>

Okay, so what does this mean? It means that the data between your browser and the VPN server is encrypted. This is
great for protecting your data from your ISP or an evil twin access point. However, the data between the VPN server and
the website you're visiting is not strictly encrypted. However, most websites support SSL/TLS by default and it has
become a cybersecurity standard to use it. Most websites will redirect you to the HTTPS version of the website if you
try to access the HTTP version, and most browsers flag HTTP websites as insecure and will typically notify you.

Additionally, websites have to know what data was sent to them, or else they cannot function. In this case, the attacker
is the one who owns and hosts the typosquatted website, so they have to see the data being transmitted or else the
website wouldn't be able to function. The following diagram demonstrates how a VPN works when connecting to a website
(both HTTP and HTTPS), to clarify how a VPN works in this context:

<img class="md-center md-round-half" src="/images/25d7c33c-b55b-403e-9029-be5e564c8652.drawio.svg" alt="VPN Diagram">

On each section, the diagram shows two scenarios: one where the website is HTTP and one where the website is HTTPS.
These scenarios have two sub-scenarios: one where the client accesses the website directly and one where the client
accesses the website through a VPN. As you can see, the VPN encrypts the data between your device and the VPN server.
However, the data between the VPN server and the website is not encrypted. This is where SSL/TLS comes in. SSL/TLS
encrypts the data between the website and the client, ensuring that the data is secure. This means that you don't need
a VPN to encrypt your data from the website you're visiting, as long as the website is using HTTPS.

The only data that the VPN is really protecting is the data between your device and the VPN server. That means it's
great for hiding data from your ISP (like DNS requests which can give away the websites you're visiting) and from
malicious actors on the same network as you. However, it won't protect you from typosquatting attacks because VPNs are
not desgined to protect you from these types of attacks.

You may think that having a masked IP address will help prevent tracking, and it slightly does. However, the attacker
can still track you through other means, such as browser fingerprinting. Browser fingerprinting is a method of tracking
browser activity based on the browser's configuration and settings. These cannot be masked by a VPN, and only using a
secure browser with a generic configuration or fingerprint spoofing can prevent browser fingerprinting.

## How to Protect Yourself

As we continue reading this article, we have went over some of the most common misconceptions about typosquatting. Now,
with those claims debunked, let's go over some ways to truly protect yourself from typosquatting attacks.

### Don't Click on Links You Don't Trust

This is a no-brainer. If you receive an email from your bank asking you to verify your account information, don't click
it. Instead, go to your bank's website directly by typing in the URL yourself, or even call your bank (don't use the
number provided in the email) to verify the email's legitimacy. This applies to any email that asks you to disclose
sensitive information, even if it looks legitimate.

Always verify the sender's email address and the URL of the website. If the email address looks suspicious or the URLs
shown in the email don't match the official website, it's likely a phishing email and you should report it as spam. Some
red flags for phishing include urgent requests, poor grammar, suspicious links, and unsolicited inquiries.

### Verify the URL

Ironically, one of the most effective ways to protect yourself from typosquatting is to verify the URL. It only takes a
few seconds to check the URL before you hit enter. Do you trust the URL 100%? We don't want to be 90% sure, we want to
be completely sure. If you're not sure, take a few extra seconds to verify the URL. It's better to be safe than sorry.

### Report Phishing Websites

If you come across a phishing website, report it. This can help prevent others from falling victim to the same attack.
Additionally, report the website to the organization that the website is impersonating. They can choose to take legal
action against the attacker, or at the very least, they can warn their customers about the attack.

### Use Multi-Factor Authentication

If you fell victim to a typosquatting attack, multi-factor authentication (MFA) can save you. MFA requires you to enter
a code sent to your phone or email in addition to your password. This means that even if the attacker has your password,
they won't be able to access your account without the code. MFA is a great way to protect your accounts from
unauthorized access.

I highly discourage using text message-based MFA, as it is vulnerable to SIM swapping attacks. Instead, use a TOTP
authenticator like Aegis or Authy. These apps generate a code that changes every 30 seconds, and they work offline which
means they don't rely on an internet or celluar connection to generate codes. One of the most solid methods of MFA is
using a hardware security key like a YubiKey. They are pricier and more difficult to use, but the only way to get hacked
with a hardware security key is if someone physically steals it from you.

### Use Unique Passwords

If you use the same password for every account, you're putting yourself at risk. If one account is compromised, all of
your accounts are compromised. Use a password manager like KeePassXC (most secure, offline), Bitwarden (most
user-friendly, cheap), or Proton Pass (recommended for Proton subscribers) to generate and store unique passwords for
each account.

### Utilize Bookmarks

If you visit a website frequently, consider bookmarking it. This way, you can avoid typosquatting attacks by clicking on
the bookmark instead of typing in the URL. This is especially useful for websites that you visit often, like your bank's
website or your email client. You can completely avoid entering in a URL by clicking on a bookmark.

### Harden Your Browser

Consider using a privacy-focused browser like Firefox or Brave. These browsers have built-in security features that can
protect you from malicious websites. Additionally, consider using browser extensions like uBlock Origin and HTTPS
Everywhere, and CanvasBlocker to protect yourself from tracking, fingerprinting, and the use of insecure HTTP websites.

Consider using the built-in features to block trackers and fingerprinting. Firefox and Brave both have built-in features
to block trackers. I would not recommend sending the "Do Not Track" or "DNT" header, as it's not enforced by law and
most websites ironically use it to enhance their tracking.

## What Can Organizations Do?

Organizations can also take steps to protect their customers and employees from typosquatting attacks. We hit a few
points, but let's go over some more ways that organizations can protect themselves and their customers from these
attacks.

### Register Targeted Domains

One of the most effective ways to prevent typosquatting is to register domains that are similar to your organization's
domain. This can prevent attackers from registering similar domains and tricking your customers into visiting them. For
example, if your organization's domain is `example.com`, consider registering `examp1e.com`, `exampie.com`, and
`example.co`. This can prevent attackers from registering these domains and using them to trick your customers.

### Monitor Domain Registrations

Being less proactive, organizations can monitor domain registrations for domains that are similar to their own. This can
help organizations identify typosquatting domains before they're used in attacks. While this is a more reactive
approach, it can still be effective when combined with other strategies.

### Educate Employees

The two biggest threat vectors for targeted typosquatting attacks are employees and their devices. Educating employees
can prevent them from falling victim to these attacks. Consider providing training on how to identify phishing emails,
how to verify URLs, and how to report suspicious activity. Additionally, consider providing training on how to use MFA
and how to use unique passwords.

### Mandate MFA

Mandating MFA can protect your organization from unauthorized access. Consider requiring employees to use MFA for all
accounts that have access to sensitive information. This can prevent attackers from accessing your organization's
systems even if they have an employee's password. This is already a common practice in many organizations, and it's
becoming more common as the threat of cyber attacks increases.

### Use the ACPA

The Anti-Cybersquatting Consumer Protection Act (ACPA) can protect your organization from typosquatting attacks.
Consider taking legal action against attackers who register domains that are similar to your organization's domain.
Since the ACPA prohibits registering domains with bad-faith intent, you can take legal action against attackers who
register domains with the intent to profit or cause harm.

## Conclusion

Typosquatting is a serious threat that can lead to identity theft, financial loss, and unauthorized access. By educating
yourself and taking steps to protect yourself, you can prevent falling victim to these attacks. Additionally,
organizations can start taking steps to protect their customers and employees from these attacks. By registering
targeted domains, monitoring domain registrations, educating employees, mandating MFA, and using the ACPA, organizations
can prevent typosquatting attacks and protect their customers and employees from harm.

For more information, or to see the source code for the demo websites, you can visit the
[GitHub repository](https://github.com/reversed-coffee/hackhouse2024) for the project. The repository contains the
supplementary materials for the project, including the source code for the demo websites and extra resources.

I hope this article has been informative and has helped you understand the risks of typosquatting. As a student
learning about cybersecurity, I welcome any questions or feedback. Feel free to reach out to me via email or social
media.
