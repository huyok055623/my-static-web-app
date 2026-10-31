import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: ` 
  <div class="student-profile">
  <h1>WELCOME TO <span>NGUYỄN HÀ GIA HUY</span></h1>
  <p><strong>Profile:</strong> Thông tin cá nhân + ảnh</p>
  <p>MSSV: 2474802010142</p>
</div>
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Product Wish List</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The shopping theme is used throughout the app.
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
              Code in GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AboutComponent {}
