# MSukasha.com

**Pakistan's B2B Wholesale & C2C Marketplace**

A complete, production-ready static website for MSukasha — Pakistan's leading platform for B2B wholesale sourcing and C2C local classifieds.

## Live Site

Deployed at: **https://msukasha.com**

## Features

- B2B Wholesale marketplace with supplier listings
- C2C local classifieds for used items
- Trade Assurance buyer protection program
- Verified Supplier directory
- Full shopping cart and checkout flow
- Seller dashboard and ad management
- Built-in messaging system
- Order tracking
- Responsive design — mobile, tablet, desktop

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Font Awesome 6 icons
- No build tools required — pure static files

## Project Structure

```
msukasha/
├── index.html              # Homepage
├── shop.html               # Product listing with B2B/C2C toggle
├── cart.html               # Shopping cart
├── checkout.html           # Checkout with payment methods
├── c2c.html                # C2C local marketplace
├── wholesale.html          # B2B wholesale page
├── trade-assurance.html    # Trade Assurance info
├── about-us.html           # About page
├── contact.html            # Contact form
├── blog.html               # Blog listing
├── login.html              # Sign in
├── register.html           # Create account
├── my-account.html         # User dashboard
├── seller-dashboard.html   # Seller management
├── messages.html           # Messaging system
├── wishlist.html           # Saved items
├── track-order.html        # Order tracking
├── categories.html         # All categories
├── post-free-ad.html       # C2C ad posting
├── help-center.html        # FAQ / Support
├── safety-tips.html        # C2C safety guide
├── careers.html            # Job listings
├── style.css               # Main stylesheet
├── main.js                 # Shared JS (header/footer/cart)
├── Logo/                   # Brand logo
└── Favicon/                # Site favicon
```

## GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://yourusername.github.io/msukasha`

Or with a custom domain (msukasha.com):
- Add a `CNAME` file with your domain name
- Point your DNS A records to GitHub's IPs

## Local Development

No build step needed. Just open `index.html` in a browser, or run:

```bash
npx http-server . -p 8080
```

## Color Scheme

```css
--orange: #ff6600
--dark:   #1a2332
--body-bg: #f2f4f7
```

## License

© 2026 MSukasha.com. All rights reserved.
