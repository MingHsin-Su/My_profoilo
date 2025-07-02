const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');

const pages = {
  about: `
    <section id="about" class="page-section">
      <h1>關於我</h1>
      <p>這裡是藝術家的自我介紹，可以簡單描述你的創作理念與經歷。</p>
    </section>
  `,
  portfolio: `
    <section id="portfolio" class="page-section">
      <h1>作品集</h1>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <img src="image/池上1.jpg" alt="池上風景1">
          <h3>池上風景 1</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/池上2.jpg" alt="池上風景2">
          <h3>池上風景 2</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/池上3.jpg" alt="池上風景3">
          <h3>池上風景 3</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/室內.jpg" alt="室內空間">
          <h3>室內空間</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/微風.jpg" alt="微風">
          <h3>微風</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/搖曳.jpg" alt="搖曳">
          <h3>搖曳</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/花影.jpg" alt="花影">
          <h3>花影</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/植.JPG" alt="植物">
          <h3>植物</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/白色羊蹄甲.JPG" alt="白色羊蹄甲">
          <h3>白色羊蹄甲</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_0263.jpg" alt="作品 1">
          <h3>作品 1</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_0264.jpg" alt="作品 2">
          <h3>作品 2</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_0266.jpg" alt="作品 3">
          <h3>作品 3</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_0268.jpg" alt="作品 4">
          <h3>作品 4</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_3603.jpg" alt="作品 5">
          <h3>作品 5</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_3825.jpg" alt="作品 6">
          <h3>作品 6</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_8047.JPG" alt="作品 7">
          <h3>作品 7</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_8155.JPG" alt="作品 8">
          <h3>作品 8</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_8365.jpg" alt="作品 9">
          <h3>作品 9</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_8689.jpg" alt="作品 10">
          <h3>作品 10</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9076.jpg" alt="作品 11">
          <h3>作品 11</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9077.jpg" alt="作品 12">
          <h3>作品 12</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9079.jpg" alt="作品 13">
          <h3>作品 13</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9459.jpg" alt="作品 14">
          <h3>作品 14</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9519.jpg" alt="作品 15">
          <h3>作品 15</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_9631.jpg" alt="作品 16">
          <h3>作品 16</h3>
        </div>
        <div class="portfolio-item">
          <img src="image/IMG_7634.jpg" alt="作品 17">
          <h3>作品 17</h3>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section id="contact" class="page-section">
      <h1>聯絡我</h1>
      <p>你可以在這裡放聯絡表單或 Email。</p>
    </section>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    link.classList.remove('active');
    
    // Handle index page specifically
    if ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html') {
      link.classList.add('active');
    } 
    // Handle other pages
    else if (currentPath === linkPath && currentPath !== 'index.html') {
      link.classList.add('active');
    }
  });
});