---
layout: post
title: "Adding Email server autoconfig and autodiscover"
date: 2013-10-28T14:57:00+02:00
author: ajgon
cover: "../images/covers/adding-email-server-autoconfig-and-autodiscover.jpg"
categories: Administration
path: /blog/adding-email-server-autoconfig-and-autodiscover
---

One of the nicest, yet badly documented features in new MUAs is email servers autodiscovering. When you type your e-mail address in configuration window, modern MUA is trying to determine what IMAP/POP3 servers are, and how to connect to them. To do so, they assume, that your email contains a server domain name. A nice assumption, but often not relevant (google apps is a good example here). Thankfully, there is also another way - asking an original server on a specially configured domain what those parameters are.

<!-- more -->

In a perfect world, there would one standard for that - in our world however, there are two: `autoconfig` (Mozilla favored) and `autodiscover` (Microsoft promoted). So we have to to set them together - thankfully both are based on simple XML files, so it's not a big deal.

## autoconfig (Mozilla Thunderbird)

This one is (im my opinion) is more clean and advanced. To use it, just make your webserver to return below XML file on `autoconfig.` subdomain. So (for example) if you have email `myname@mydomain.com` - `autoconfig.mydomain.com` should return:

`autoconfig.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<clientConfig version="1.1">
    <emailProvider id="mydomain.com">
        <domain>mydomain.com</domain>
        <displayName>Mail</displayName>
        <displayShortName>Mail</displayShortName>
        <incomingServer type="pop3">
            <hostname>mail.mydomain.com</hostname>
            <port>995</port>
            <socketType>SSL</socketType>
            <authentication>password-cleartext</authentication>
            <username>%EMAILADDRESS%</username>
            <pop3>
                <leaveMessagesOnServer>true</leaveMessagesOnServer>
                <downloadOnBiff>true</downloadOnBiff>
                <daysToLeaveMessagesOnServer>10</daysToLeaveMessagesOnServer>
            </pop3>
        </incomingServer>
        <incomingServer type="imap">
            <hostname>mail.mydomain.com</hostname>
            <port>993</port>
            <socketType>SSL</socketType>
            <authentication>password-cleartext</authentication>
            <username>%EMAILADDRESS%</username>
        </incomingServer>
        <outgoingServer type="smtp">
            <hostname>mail.mydomain.com</hostname>
            <port>587</port>
            <socketType>STARTTLS</socketType>
            <authentication>password-cleartext</authentication>
            <username>%EMAILADDRESS%</username>
        </outgoingServer>
    </emailProvider>
</clientConfig>
```

If you have an email server on a different domain than your email account, simply add redirect to your httpd server. For example in nginx:

`/etc/nginx.conf`
```txt
server {
    server_name autoconfig.myotherdomain.com;
    rewrite ^.* https://mydomain.com/config-v1.1.xml permanent;
}
```

And that's it! From now on, your email will be automatically discovered by Thunderbird.

## autodiscover (Microsoft Outlook)

Procedure is very similar here. You just have to set `autodiscover.` domain, and XML file is slightly different. So, for example `autodiscover.mydomain.com` should return:

`autodiscover.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Autodiscover xmlns="http://schemas.microsoft.com/exchange/autodiscover/responseschema/2006">
    <Response xmlns="http://schemas.microsoft.com/exchange/autodiscover/outlook/responseschema/2006a">
        <Account>
            <AccountType>email</AccountType>
            <Action>settings</Action>
            <Protocol>
                <Type>POP3</Type>
                <Server>mail.mydomain.com</Server>
                <Port>995</Port>
                <DomainRequired>on</DomainRequired>
                <SPA>off</SPA>
                <SSL>on</SSL>
                <AuthRequired>on</AuthRequired>
            </Protocol>
            <Protocol>
                <Type>IMAP</Type>
                <Server>mail.mydomain.com</Server>
                <Port>993</Port>
                <DomainRequired>on</DomainRequired>
                <SPA>off</SPA>
                <SSL>on</SSL>
                <AuthRequired>on</AuthRequired>
            </Protocol>
            <Protocol>
                <Type>SMTP</Type>
                <Server>mail.mydomain.com</Server>
                <Port>587</Port>
                <DomainRequired>on</DomainRequired>
                <SPA>off</SPA>
                <SSL>on</SSL>
                <AuthRequired>on</AuthRequired>
                <UsePOPAuth>off</UsePOPAuth>
                <SMTPLast>off</SMTPLast>
            </Protocol>
        </Account>
    </Response>
</Autodiscover>
```

And again, if your email domain differs from server domain, add proper redirect:

`/etc/nginx.conf`
```txt
server {
    server_name autodiscover.myotherdomain.com;
    rewrite ^.* https://mydomain.com/autodiscover.xml permanent;
}
```

And that's it! Enjoy your new, shiny, auto-configuring E-mail!

### Sources

* [bugtracker.ispconfig.org/index.php?do=details&task_id=2152](bugtracker.ispconfig.org/index.php?do=details&task_id=2152)
