import { Component } from "@angular/core";

@Component({
  selector: "app-angular-card",
  template: `
    <div class="container">
      <div class="header">
        <h1 class="made-with-text">Made with Angular</h1>
      </div>

      <div class="content">
        <h2 class="title">Angular</h2>
        <h3 class="subtitle">
          A framework for building dynamic web applications with TypeScript.
        </h3>
        <a
          href="https://angular.io/"
          class="documentation-link"
          target="_blank"
          rel="noopener noreferrer"
          >View the documentation</a
        >
      </div>

      <div class="footer">
        <img src="/angularLogo.png" alt="Angular Logo" class="logo" />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom right, #dd0330, #f87171);
        color: #e2e8f0;
      }

      .header,
      .footer {
        display: flex;
        justify-content: flex-end;
      }

      .content {
        padding: 0rem 1rem;
        max-height: 136px;
      }

      .made-with-text {
        color: #ffffff;
        font-size: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        justify-content: space-between;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        height: min-content;
        margin-top: -1rem;
      }

      .subtitle {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }

      .documentation-link {
        color: #ffffff;
        text-decoration: underline;
        cursor: pointer;
      }

      .logo {
        width: 1.75rem;
        height: 1.75rem;
        margin: 0.25rem;
        padding: 0.125rem;
      }
    `,
  ],
  standalone: true,
})
export class AngularComponent {}
