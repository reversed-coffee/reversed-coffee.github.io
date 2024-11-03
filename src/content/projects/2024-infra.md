---
title: "infra.reversed.coffee"
date: 2024-08-01
tags: [ "MikroTik", "Juniper", "Proxmox", "Windows", "Linux", "NGINX" ]
---

This domain covers my personal server infrastructure. I host various services on my own hardware. The network is
segmented into multiple VLANs, and I use multiple enterprise-grade networking technologies such as
[MikroTik RouterOS](https://help.mikrotik.com/docs/spaces/ROS/pages/328059/RouterOS)
and [Juniper Junos OS](https://www.juniper.net/documentation/product/us/en/junos-os/) to
manage the network. These are solid technologies that you typically only see in enterprise environments, but I decided
to take a shot at them to learn more.

I use [Proxmox Virtual Environment](https://www.proxmox.com/) as my hypervisor to host
various virtual machines (VMs), including a Windows Server VM that acts as an Active Directory domain controller. I use
this domain controller to centralize logins and to manage most of the Windows VMs on my network.

This infrastructure is sometimes used for hosting websites, but this website is offloaded to
[GitHub Pages](https://pages.github.com/) for
for simplicity. This project is an ongoing project that I tinker with in my free time.
