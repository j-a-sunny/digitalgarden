---
{"dg-publish":true,"permalink":"/linux/nano-to-micro-on-fish/","dg-note-properties":{}}
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
