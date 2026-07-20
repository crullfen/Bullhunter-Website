# BullHunter Onepager — Premium V1

A static, mobile-first onepager for **bullhunter.xyz**. No build process is required.

## Files to upload to GitHub
Upload everything in this folder to the root of your repository:

- `index.html`
- `styles.css`
- `script.js`
- `assets/` (the entire folder)
- `README.md`

Do not upload only the ZIP file.

## Publish free with Vercel
1. Create a new GitHub repository, for example `bullhunter-website`.
2. Upload all files above and commit them.
3. Sign in to Vercel with GitHub.
4. Click **Add New → Project** and import the repository.
5. Framework preset: **Other**. No build command is needed.
6. Click **Deploy**.

## Connect bullhunter.xyz
In Vercel, open the project and go to **Settings → Domains**. Add:

- `bullhunter.xyz`
- `www.bullhunter.xyz`

Vercel will display the DNS records to add at your domain registrar. Copy those exact records into the registrar's DNS settings.

## Update links or text
Open `index.html` in a text editor. Search for the current Telegram, X, DexScreener, Pump.fun links or contract address and replace them.

## Images
Images are optimized as WebP in the `assets` folder. Keep those filenames unless you also update the references in `styles.css`.
