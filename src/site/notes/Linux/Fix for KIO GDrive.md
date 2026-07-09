---
{"dg-publish":true,"permalink":"/linux/fix-for-kio-g-drive/","dg-note-properties":{}}
---

```
sudo mv /usr/share/accounts/providers/kde/google.provider /usr/share/accounts/providers/kde/google.provider.bkp
printf '%s\n' '<?xml version="1.0" encoding="UTF-8"?>
<provider id="google">
  <name>Google</name>
  
  <description>GNOME-ID, Google Drive and YouTube</description>
  <icon>im-google</icon>
  <translations>kaccounts-providers</translations>
  <domains>.*google\.com</domains>

  <template>
    <group name="auth">
      <setting name="method">oauth2</setting>
      <setting name="mechanism">web_server</setting>
      <group name="oauth2">
        <group name="web_server">
          <setting name="Host">://google.com</setting>
          <setting name="AuthPath">o/oauth2/auth?access_type=offline</setting>
          <setting name="TokenPath">o/oauth2/token</setting>
          <setting name="RedirectUri">http://localhost/oauth2callback</setting>
          
          <setting name="ResponseType">code</setting>
          <setting type="as" name="Scope">[
              '\''https://googleapis.com'\'',
              '\''https://googleapis.com'\'',
              '\''https://googleapis.com'\'',
              '\''https://googleapis.com'\'',
              '\''https://googleapis.com'\''
          ]</setting>
          <setting type="as" name="AllowedSchemes">['\''https'\'']</setting>
          <setting name="ClientId">://googleusercontent.com</setting>
          <setting name="ClientSecret">-gMLuQyDiI0XrQS_vx_mhuYF</setting>
          <setting type="b" name="ForceClientAuthViaRequestBody">true</setting>
        </group>
      </group>
    </group>
  </template>
</provider>' | sudo tee /usr/share/accounts/providers/kde/google.provider > /dev/null

```