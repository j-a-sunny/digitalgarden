---
{"dg-publish":true,"permalink":"/linux/nano-to-micro-on-fish/","created":"2026-09-11T22:34:24.517+06:00","updated":"2026-07-04T02:32:56.000+06:00","dg-note-properties":{}}
---

```
alias nano="micro"
funcsave nano
```

```
function sudo --description 'Wrapper for sudo to use micro'
    if test "$argv[1]" = "nano"
        command sudo micro $argv[2..-1]
    else
        command sudo $argv
    end
end
funcsave sudo
```
