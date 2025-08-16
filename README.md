# Advanced Interactive Budget

A simple, powerful, and private desktop application for managing a personal budget. All your data is stored locally on your machine, giving you complete control over your financial information.

## Features ✨

This application is packed with features to give you a comprehensive overview of your finances and help you make smarter decisions.

* **Detailed Paycheck Breakdown:** Track your income paycheck by paycheck and see exactly where every dollar goes.  
* **Customizable Categories:** Create your own categories (e.g., *Pets*, *Hobbies*, *Subscriptions*) and assign budgets to them.  
* **Real-Time Budget Tracking:** Watch your category budgets update instantly as you add expenses or income.  
* **Transaction History:** Drill down into any category to view a detailed, paginated history of your transactions for the month.  
* **Balance Reconciliation:** Compare your projected balance against your actual bank balance to easily catch missing or forgotten transactions.  
* **Smart Insights Engine:** Get automatic, personalized insights into your spending, savings progress, and areas for improvement.  
* **Savings Goals:** Create and track funds (e.g., *Rainy Day Fund*, *New Car*, *Vacation*) and monitor your contributions over time.  
* **Clean, Modern Interface:** Collapsible sections, smooth navigation, and built-in dark mode make the app pleasant and easy to use.  
* **Offline & Private:** Works entirely without internet. Your financial data never leaves your computer.  

---
## How to Use

There are three ways to use the Advanced Interactive Budget app, depending on your needs.

### ### Option 1: Install the Desktop App (Recommended)

This is the best experience. Your data is stored safely with the application and won't be affected by your web browser's settings.

1.  Go to the **[Releases](https://github.com/kira-khaos/advanced-interactive-budget/releases)** page of this repository.
2.  Under the latest release, find the setup file for your operating system (e.g., `Advanced.Interactive.Budget.Setup.1.5.1.exe` for Windows).
3.  Download and run the installer.

### ### Option 2: Run Directly in Your Browser

You can run this app without any installation by simply opening the `index.html` file.

1.  On the main page of this repository, click the green **`< > Code`** button, then select **Download ZIP**.
2.  Unzip the downloaded file to a folder on your computer.
3.  Open the `index.html` file in your favorite web browser (like Chrome, Edge, or Firefox).

> **Warning:** With this method, your budget data is saved using your browser's `localStorage`. If you clear your browser's "Cookies and other site data," **your budget information will be permanently deleted.**

### ### Option 3: Run from Source Code (For Developers)

If you want to run or modify the code yourself, you can do so easily.

**Prerequisites:**
* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)

**Instructions:**
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/kira-khaos/advanced-interactive-budget.git](https://github.com/kira-khaos/advanced-interactive-budget.git)
    ```
2.  **Navigate into the project folder:**
    ```bash
    cd advanced-interactive-budget
    ```
3.  **Install all the necessary dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application in development mode:**
    ```bash
    npm start
    ```

---
## Building the App Yourself

This project uses **[Electron](https://www.electronjs.org/)** and **[Electron Forge](https://www.electronforge.io/)** to package the web code into a distributable desktop application. If you have followed the "Run from Source Code" steps above, you already have everything you need to build the app.

To create the setup file yourself, run the following command in your terminal from the project's root directory:

```bash
npm run make

---
## ☕ Support the Creator

If you find this application helpful and would like to support my work, you can buy me a coffee! Any support is greatly appreciated.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/kirakhaos)
