---
{"dg-publish":true,"permalink":"/linux/pm/","dg-note-properties":{}}
---

```
Package manager wrapper (supports: paru yay pacman apt dnf zypper apk brew scoop)

Usage: pm <command>

Commands:
  i,  install          Interactively select packages to install.
  i,  install <pkg>... Install one or more packages.
  r,  remove           Interactively select packages to remove.
  r,  remove <pkg>...  Remove one or more packages.
  u,  upgrade          Upgrade all installed packages.
  f,  fetch            Update local package database.
  n,  info <pkg>       Print package information.
  la, list all         List all packages.
  li, list installed   List installed packages.
  sa  search all       Interactively search between all packages.
  si  search installed Interactively search between installed packages.
  w,  which            Print which package manager is being used.
  h,  help             Print this help.
```

## Installation

Asuming `~/.local/bin` directory exists and is configured in the `$PATH`:

```sh
curl -o ~/.local/bin/pm https://raw.githubusercontent.com/jpikl/pm/refs/heads/master/pm
chmod +x ~/.local/bin/pm
```

Install in `/usr/local/bin` directory exists and is configured in the `$PATH`:

```sh
sudo curl -o /usr/local/bin/pm https://raw.githubusercontent.com/jpikl/pm/refs/heads/master/pm
sudo chmod +x /usr/local/bin/pm
```

For [Termux][termux] users:

```sh
curl -o /data/data/com.termux/files/usr/bin/pm https://raw.githubusercontent.com/jpikl/pm/refs/heads/master/pm
chmod +x /data/data/com.termux/files/usr/bin/pm
```
