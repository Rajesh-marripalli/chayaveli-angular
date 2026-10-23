# Chayaveli Photography — Angular Website

A working **Angular 21 standalone frontend** adapted from the supplied `romantic_photography_studio.html` design. Original sections and styling retained, with Chayaveli Photography branding.

## Requirements
- Windows PowerShell, VS Code
- Node.js 20.19+ or 22.12+ (Node 22 LTS recommended)
- Internet connection for the **first** `npm install` and existing Unsplash example photos / Google Fonts

## Start on Windows
```powershell
# Extract the ZIP to a folder, then open PowerShell in the chayaveli-angular folder
node -v
npm -v
npm install
npm start
```
Open http://localhost:4200. The portfolio is at http://localhost:4200/#portfolio.

> If Windows PowerShell blocks an `npm` command because of the execution policy, use `npm.cmd install` and `npm.cmd start`, or use Command Prompt.

## Feature map
- `src/app/shared/header/` — responsive navigation, Instagram and YouTube icons
- `src/app/features/home/` — same single-page sections as the original: hero, romantic intro/interlude, services, filterable portfolio, wall-frame arrangements, About, contact
- `src/app/shared/footer/` — business address, social links, Maps link
- `src/app/core/studio.config.ts` — studio name/address and **placeholder** social URLs
- `src/styles.scss` — original visual design CSS, with brand and accessibility enhancements

## IMPORTANT before publication
1. Edit `src/app/core/studio.config.ts`: replace `instagramUrl` and `youtubeUrl` with the **actual Chayaveli Photography profile URLs**. Currently they point to the platform homepages, NOT your accounts.
2. Set `bookingEmail` in the same file. The current **Prepare Inquiry Email** action uses `mailto:` and launches the user's email program; it DOES NOT save customer bookings or send anything to Spring Boot. Without a studio email, customers must manually enter a recipient.
3. Replace Unsplash demo photos with your business-owned/licensed images, and ensure you have customer consent before publishing wedding/baby portraits.
4. The Google Maps URL is an ADDRESS SEARCH, not a verified business pin.
5. Add studio phone, social metadata, favicon, privacy/contact terms and photo compression before deployment.

## Backend later
Spring Boot + PostgreSQL will be added later for persistent booking inquiries, photo upload/admin, and social platform publishing; it is intentionally **not** included in this Angular frontend starter.

## Build
```powershell
npm run build
```

## Structure
```
chayaveli-angular/
  src/
    app/
      core/studio.config.ts
      shared/header/*
      shared/footer/*
      features/home/*
      app.component.ts
      app.config.ts
    main.ts
    index.html
    styles.scss
  public/
  angular.json
  package.json
  tsconfig.json
```
