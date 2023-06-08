## Prompt-Workshop
A prompt workshop app made with nextjs.

## Additional Dependencies Aside From NextJS
```bash
npm install bcrypt    # hash passpord
npm install mongodb   # database
npm install mongoose  # manage database
npm install next-auth # 3rd party authentication - google, facebook etc
```

## Directories Explained
```bash
# only display directories and ignore node_modules
tree -d -I node_modules

output:
├── app              # main code logics
├── components       # components
├── models           # models for database
├── public           # public assets
│   └── assets       # assets
│       ├── icons    # icons
│       └── images   # images
├── styles           # styles
└── utils            # utilitity functions
```

## Others
```bash
# NextAuth Secret Environment Variable( generate by openssl )
openssl rand -base64 32

# remove cached .env
git rm .env --cached
```

## Links
1. Google Authentication: https://console.cloud.google.com/

2. MongoDB Atlas: https://www.mongodb.com/atlas

3. NextAuth Documentation: https://next-auth.js.org/getting-started/example

4. OpenSSL Terminal Online: https://www.cryptool.org/en/cto/openssl

## License
This project is licensed under the terms of the MIT license.
