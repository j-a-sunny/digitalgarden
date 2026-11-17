---
{"dg-publish":true,"permalink":"/linux/tailscale/","created":"2026-09-11T22:34:24.516+06:00","updated":"2026-07-04T02:32:44.000+06:00","dg-note-properties":{}}
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
