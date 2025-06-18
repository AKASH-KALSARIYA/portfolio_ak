# Akash Kalsariya - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your skills, projects, and provides a professional way for potential clients or employers to get in touch with you.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Organized display of your technical skills
- **Project Portfolio**: Beautiful project cards with technology tags
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: Fade-in effects and interactive animations

## 📁 File Structure

```
akashkalsariya_portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Title</h2>
<p class="hero-description">
    Your personal description here...
</p>
```

#### About Section
```html
<p>
    Your about me text here...
</p>
<div class="about-stats">
    <div class="stat">
        <h3>Your Number</h3>
        <p>Years Experience</p>
    </div>
    <!-- Add more stats as needed -->
</div>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 2. Skills Section

Update the skills in `index.html`:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
        </div>
        <!-- Add more skills -->
    </div>
</div>
```

**Available Font Awesome Icons for Skills:**
- `fab fa-html5` - HTML5
- `fab fa-css3-alt` - CSS3
- `fab fa-js-square` - JavaScript
- `fab fa-react` - React
- `fab fa-php` - PHP
- `fab fa-node-js` - Node.js
- `fab fa-python` - Python
- `fab fa-git-alt` - Git
- `fab fa-github` - GitHub
- `fab fa-docker` - Docker
- `fas fa-database` - Database
- `fas fa-cloud` - Cloud Services

### 3. Projects Section

Add your projects in `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="live-demo-url" class="btn btn-small">Live Demo</a>
            <a href="github-url" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 4. Social Links

Update your social media links:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram-url" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 5. Colors and Styling

The main colors used in the portfolio are defined in `styles.css`:

```css
/* Primary Colors */
--primary-blue: #2563eb;
--primary-yellow: #fbbf24;
--dark-text: #1f2937;
--light-text: #6b7280;
--background-light: #f8fafc;
```

You can customize these colors by changing the hex values throughout the CSS file.

## 🚀 Getting Started

1. **Download/Clone** the files to your local machine
2. **Customize** the content as described above
3. **Test** the website locally by opening `index.html` in your browser
4. **Deploy** to your preferred hosting service

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch and save

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get your live URL instantly

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

### Option 4: Traditional Web Hosting
1. Upload files via FTP to your web hosting provider
2. Ensure `index.html` is in the root directory

## 📧 Contact Form Setup

The contact form currently shows a success message but doesn't actually send emails. To make it functional, you have several options:

### Option 1: Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and form
3. Replace the form action in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
1. Add `netlify` attribute to your form:
```html
<form class="contact-form" netlify>
```

### Option 3: Custom PHP Backend
Create a `contact.php` file and update the form action:
```html
<form class="contact-form" action="contact.php" method="POST">
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger navigation menu
- Optimized layouts for different screen sizes
- Touch-friendly interactions

## 🎯 Performance Tips

1. **Optimize Images**: Use compressed images for better loading times
2. **Minify CSS/JS**: Use minified versions for production
3. **Enable Compression**: Enable GZIP compression on your server
4. **Use CDN**: Consider using a CDN for faster loading

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing your portfolio or have questions, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form
- Check the documentation above

---

**Happy coding! 🚀**

*Built with ❤️ using HTML, CSS, and JavaScript* 