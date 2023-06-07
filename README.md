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

## License
This project is licensed under the terms of the MIT license.
