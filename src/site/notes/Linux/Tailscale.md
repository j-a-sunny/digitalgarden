---
{"dg-publish":true,"permalink":"/linux/tailscale/","dg-note-properties":{}}
---

```
sudo nano /etc/sysctl.d/99-tailscale.conf
```
Add
```
net.ipv4.ip_forward = 1
net.ipv6.conf.all.forwarding = 1
```
Apply
```
sudo sysctl --system
```
Run
```
sudo tailscale up \
  --advertise-routes=192.168.1.0/24 \
  --accept-routes
```
