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

## To Do Tasks
[1]. implement search functionality
   - Search by prompt
   - Search by tag
   - Search by username

[2]. implement click on tag

[3]. implement view other profiles

## The Benefits of Using NextJS
1. Support both `Server Side Rendering( SSR )` and `Client Side Rendering( CSR )`, which is benenficial to SEO.

2. Routing systems become simple:
```bash
1. ReactJS Routing
ReactJS -> React-Router-DOM -> Create Routes

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

# Rap your app with BrowserRouter
<BrowserRouter>
  <App />  
</BrowserRouter>

# Define you Routes in your app and import it on the top
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/create" element={<Create />} />
  <Route path="/blogs/:id" element={<BlogDetails />} />
  <Route path="*" element={<NotFound />} />
</Routes>

# Now you are all set. You can use this with
<Link to="/create" element={Create}/>

2. NextJS Routing

# Use a directory based routing system
app
|---blog          -> /blog
|---about         -> /about
|---profile       -> /profile
|---services      -> /services

handler: app/blog/page.jsx
```

3. Fullstack Application Support
```bash
API routes -> serverless functions to handle API requests

# dir
app
|---api
|---|
|------profile
|------|
|---------route.js
API handler: app/api/profile/route.js -> localhost:3000/api/profile

# code
# GET request
export const GET = async (req, res) => {
  // ...
};

# POST request
export const POST = async (req, res) => {
  // ...
};
```

4. Automatic code splitting
This feature would load code chunks when needed, reducing the initial load time of a website.

5. It's still just React, we, developers, just need to focus on business logic.

## Improved SEOs
```bash
# static export
export const metadata = {
  title: "",
  description: ""
};

# dynamic export
export async function generateMeta() {
  // ...
  // some code logic
  // ....

  return {
    title: "",
    description: ""
  };
};

NB: static export and dynamic export cannot be coexisted in a single file
```

## Links
1. Google Authentication: https://console.cloud.google.com/

2. MongoDB Atlas: https://www.mongodb.com/atlas

3. NextAuth Documentation: https://next-auth.js.org/getting-started/example

4. NextAuth Provider Config: https://next-auth.js.org/configuration/providers/oauth

5. OpenSSL Terminal Online: https://www.cryptool.org/en/cto/openssl

6. Vercel Deployment: https://vercel.com/

7. Github OAuth 2.0 Authentication: https://github.com/settings/developers


## License
This project is licensed under the terms of the MIT license.
